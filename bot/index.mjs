// ─────────────────────────────────────────────────────────────────────────────
// Bot Telegram « Gardienne » — détection de PHOTO TRUQUÉE utilisée pour harceler.
//
// Cadre (principe directeur du projet) : ce n'est PAS de la « fake news ». Une
// image truquée d'une fille sert à l'humilier ou la faire chanter → c'est du
// cyberharcèlement. Le bot aide la victime à savoir si une image est truquée.
//
// Zéro dépendance : long polling Telegram + inférence Hugging Face via fetch.
// Node 24+. Lancer :  node --env-file=.env bot/index.mjs
//
// Variables d'environnement (voir .env.example) :
//   TELEGRAM_BOT_TOKEN  — jeton donné par @BotFather
//   HF_TOKEN            — jeton Hugging Face (Read) pour l'inférence
//   DEEPFAKE_MODEL      — (optionnel) id du modèle HF de détection
// ─────────────────────────────────────────────────────────────────────────────

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const HF_TOKEN = process.env.HF_TOKEN;
// Deux classifieurs complémentaires : visages truqués (face-swap) + images
// entièrement générées par IA (Gemini, DALL·E, SDXL…).
const MODELE_DEEPFAKE = process.env.DEEPFAKE_MODEL || "dima806/deepfake_vs_real_image_detection";
const MODELE_IA = process.env.AI_MODEL || "dima806/ai_vs_real_image_detection";

if (!TELEGRAM_TOKEN) {
  console.error("✗ TELEGRAM_BOT_TOKEN manquant. Voir bot/.env.example.");
  process.exit(1);
}
if (!HF_TOKEN) {
  console.error("✗ HF_TOKEN manquant. Voir bot/.env.example.");
  process.exit(1);
}

const API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const FILE_API = `https://api.telegram.org/file/bot${TELEGRAM_TOKEN}`;

async function tg(methode, params) {
  const res = await fetch(`${API}/${methode}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  return res.json();
}

async function envoyer(chatId, texte) {
  await tg("sendMessage", { chat_id: chatId, text: texte, parse_mode: "HTML" });
}

// Télécharge la plus grande version d'une photo Telegram.
async function telechargerPhoto(fileId) {
  const info = await tg("getFile", { file_id: fileId });
  const chemin = info?.result?.file_path;
  if (!chemin) throw new Error("Fichier introuvable");
  const res = await fetch(`${FILE_API}/${chemin}`);
  return Buffer.from(await res.arrayBuffer());
}

// ── Couche 1 : provenance C2PA (Content Credentials) ────────────────────────
// Les grands générateurs (OpenAI/DALL·E, Google Gemini/Imagen, Adobe Firefly…)
// signent leurs images avec un manifeste C2PA. On détecte sa présence et, si
// possible, l'outil d'origine. Standard ouvert → lisible sans clé.
// NB : les réseaux sociaux (WhatsApp/Facebook) effacent souvent ces métadonnées.
function analyseProvenanceC2PA(imageBytes) {
  const s = imageBytes.toString("latin1");
  const present = s.includes("c2pa") || s.includes("urn:c2pa") || s.includes("jumbf");
  if (!present) return { present: false, generateur: null };

  const marques = [
    ["ChatGPT", "OpenAI (ChatGPT)"],
    ["DALL", "OpenAI (DALL·E)"],
    ["OpenAI", "OpenAI"],
    ["Gemini", "Google (Gemini)"],
    ["Imagen", "Google (Imagen)"],
    ["Nano Banana", "Google"],
    ["Google", "Google"],
    ["Firefly", "Adobe Firefly"],
    ["Adobe", "Adobe"],
    ["Midjourney", "Midjourney"],
    ["Microsoft", "Microsoft"],
  ];
  let generateur = null;
  for (const [aiguille, label] of marques) {
    if (s.includes(aiguille)) {
      generateur = label;
      break;
    }
  }
  return { present: true, generateur };
}

// ── Couche 2 : classifieurs d'image (modèles HF) ────────────────────────────
// Deux modèles complémentaires : visages truqués + images générées par IA.
const LABELS_FAKE = new Set(["fake", "artificial", "ai", "synthetic", "deepfake", "generated"]);
const LABELS_REAL = new Set(["real", "human", "authentic", "vrai"]);

// Interroge un classifieur HF et renvoie un score de truquage 0-1.
async function classifierImage(imageBytes, modele) {
  const res = await fetch(`https://router.huggingface.co/hf-inference/models/${modele}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/octet-stream",
      "x-wait-for-model": "true",
    },
    body: imageBytes,
  });
  if (!res.ok) throw new Error(`Inférence HF ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Réponse inattendue du modèle");
  const norm = (l) => String(l).toLowerCase().trim();
  const fake = data.find((d) => LABELS_FAKE.has(norm(d.label)));
  const real = data.find((d) => LABELS_REAL.has(norm(d.label)));
  return fake ? fake.score : real ? 1 - real.score : 0.5;
}

// Combine les deux classifieurs : on retient le score le plus suspect.
async function detecterTruquage(imageBytes) {
  const scores = await Promise.all(
    [MODELE_DEEPFAKE, MODELE_IA].map((m) =>
      classifierImage(imageBytes, m).catch((e) => {
        console.error(`classifieur ${m}:`, e.message);
        return null;
      }),
    ),
  );
  const valides = scores.filter((s) => s !== null);
  return valides.length ? Math.max(...valides) : null;
}

// Phrase courte du classifieur visuel.
function phraseClassifieur(scoreFake) {
  if (scoreFake === null) return "le classifieur n'a pas pu analyser l'image cette fois.";
  const pct = Math.round(scoreFake * 100);
  if (scoreFake >= 0.6) return `image <b>probablement truquée</b> (${pct}%).`;
  if (scoreFake <= 0.4) return `image plutôt <b>authentique</b> (truquage estimé ${pct}%).`;
  return `résultat <b>incertain</b> (truquage estimé ${pct}%).`;
}

// Assemble le verdict à partir des 2 couches : provenance C2PA + classifieur.
function composerVerdict(prov, scoreFake) {
  const l = ["🛡️ <b>Résultat de l'analyse</b>", ""];

  // Couche 1 — provenance C2PA
  if (prov.present) {
    l.push(
      "🔴 <b>Signature d'IA détectée</b> (Content Credentials C2PA)" +
        (prov.generateur ? ` — origine : <b>${prov.generateur}</b>.` : "."),
    );
    l.push("→ Cette image a été <b>créée ou modifiée par une IA</b>. C'est une preuve forte.");
  } else {
    l.push(
      "⚪ Aucune signature C2PA trouvée — soit ce n'est pas de l'IA, soit la signature a été " +
        "retirée (fréquent après un partage WhatsApp/Facebook, ou un envoi en <b>Photo</b> sur " +
        "Telegram : réessaie en <b>Fichier</b>).",
    );
  }
  l.push("");

  // Couche 2 — classifieur visuel
  l.push(`🧠 <b>Analyse visuelle</b> : ${phraseClassifieur(scoreFake)}`);
  l.push("");

  // Conseil protecteur
  const suspecte = prov.present || (scoreFake !== null && scoreFake >= 0.6);
  if (suspecte) {
    l.push(
      "Si cette image sert à harceler ou humilier quelqu'un : ce n'est <b>pas la faute de la " +
        "victime</b>. Ne la partagez pas, conservez-la comme preuve, signalez-la — une plainte est " +
        "possible (ANTIC 8202 / 8206, police).",
    );
  } else {
    l.push("En cas de doute, conservez l'image comme preuve et demandez de l'aide.");
  }
  return l.join("\n");
}

const ACCUEIL =
  "🛡️ <b>Gardienne — vérification de photo</b>\n\n" +
  "Envoie-moi une photo dont tu doutes — <b>pour toi ou pour une amie</b>. Je vérifie si elle a " +
  "été <b>truquée ou générée par une IA</b> :\n" +
  "• sa <b>signature d'IA</b> (Content Credentials C2PA — OpenAI, Google…)\n" +
  "• ses <b>indices visuels</b> de truquage\n\n" +
  "💡 Astuce : envoie l'image en <b>Fichier</b> (pas en Photo) — Telegram efface sinon la " +
  "signature d'IA.\n\nAucune image n'est conservée.";

async function traiterUpdate(update) {
  const msg = update.message;
  if (!msg) return;
  const chatId = msg.chat.id;

  if (msg.text && (msg.text === "/start" || msg.text === "/aide")) {
    await envoyer(chatId, ACCUEIL);
    return;
  }

  // Photo compressée OU image envoyée en fichier (document image/*).
  const fileId =
    msg.photo && msg.photo.length > 0
      ? msg.photo[msg.photo.length - 1].file_id
      : msg.document && /^image\//.test(msg.document.mime_type || "")
        ? msg.document.file_id
        : null;

  if (fileId) {
    console.log(`→ Image reçue du chat ${chatId}`);
    await envoyer(chatId, "🔎 Analyse de l'image en cours…");
    try {
      const bytes = await telechargerPhoto(fileId);
      const provenance = analyseProvenanceC2PA(bytes);
      const scoreFake = await detecterTruquage(bytes);
      await envoyer(chatId, composerVerdict(provenance, scoreFake));
      console.log(`✓ Verdict envoyé au chat ${chatId}`);
    } catch (e) {
      console.error("traitement image:", e);
      await envoyer(
        chatId,
        "😔 Je n'ai pas réussi à analyser cette image. Réessaie dans un instant.",
      );
    }
    return;
  }

  if (msg.text) {
    await envoyer(chatId, "Envoie-moi une <b>photo</b> à vérifier 📷");
  }
}

// Boucle de long polling.
async function boucle() {
  let offset = 0;
  console.log(`✓ Bot Gardienne démarré. Modèles : ${MODELE_DEEPFAKE} + ${MODELE_IA}`);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const res = await fetch(`${API}/getUpdates?timeout=30&offset=${offset}`);
      const data = await res.json();
      if (!data.ok) {
        // 409 = une autre instance du bot tourne déjà avec le même jeton.
        console.error("getUpdates:", data.description);
        await new Promise((r) => setTimeout(r, 3000));
        continue;
      }
      for (const update of data.result || []) {
        offset = update.update_id + 1;
        traiterUpdate(update).catch((e) => console.error(e));
      }
    } catch (e) {
      console.error("Erreur polling :", e.message);
      await new Promise((r) => setTimeout(r, 3000));
    }
  }
}

boucle();
