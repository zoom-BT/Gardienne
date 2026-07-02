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
const MODEL = process.env.DEEPFAKE_MODEL || "dima806/deepfake_vs_real_image_detection";

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

// Interroge le modèle HF de détection de deepfake sur les octets de l'image.
async function detecterDeepfake(imageBytes) {
  const res = await fetch(`https://router.huggingface.co/hf-inference/models/${MODEL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/octet-stream",
      "x-wait-for-model": "true",
    },
    body: imageBytes,
  });
  if (!res.ok) {
    throw new Error(`Inférence HF ${res.status}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Réponse inattendue du modèle");
  // Cherche le score du label « fake / deepfake ».
  const fake = data.find((d) => /fake|deepfake|synth/i.test(d.label));
  const real = data.find((d) => /real|authentic|vrai/i.test(d.label));
  const scoreFake = fake ? fake.score : real ? 1 - real.score : 0.5;
  return { scoreFake, brut: data };
}

function messageVerdict(scoreFake) {
  const pct = Math.round(scoreFake * 100);
  if (scoreFake >= 0.6) {
    return (
      `🚨 <b>Image probablement TRUQUÉE</b> (${pct}%).\n\n` +
      `Si cette image est utilisée contre toi, ce n'est <b>pas ta faute</b> et c'est un délit. ` +
      `Ne la partage pas, garde-la comme preuve, et signale la personne. ` +
      `Tu peux porter plainte (ANTIC / police).`
    );
  }
  if (scoreFake <= 0.4) {
    return (
      `✅ <b>Image probablement authentique</b> (truquage estimé ${pct}%).\n\n` +
      `Attention : un score bas ne garantit rien à 100%. Fais confiance à ton ressenti ` +
      `et garde toute preuve utile.`
    );
  }
  return (
    `⚠️ <b>Résultat incertain</b> (truquage estimé ${pct}%).\n\n` +
    `L'analyse n'est pas concluante. Par prudence, garde l'image comme preuve et ` +
    `n'hésite pas à demander de l'aide.`
  );
}

const ACCUEIL =
  "🛡️ <b>Gardienne — vérification d'image</b>\n\n" +
  "Envoie-moi une photo dont tu doutes (par ex. une image truquée de toi utilisée pour " +
  "te harceler). Je te dis si elle a l'air <b>truquée</b>.\n\n" +
  "Tes images ne sont pas conservées.";

async function traiterUpdate(update) {
  const msg = update.message;
  if (!msg) return;
  const chatId = msg.chat.id;

  if (msg.text && (msg.text === "/start" || msg.text === "/aide")) {
    await envoyer(chatId, ACCUEIL);
    return;
  }

  if (msg.photo && msg.photo.length > 0) {
    await envoyer(chatId, "🔎 Analyse de l'image en cours…");
    try {
      const plusGrande = msg.photo[msg.photo.length - 1];
      const bytes = await telechargerPhoto(plusGrande.file_id);
      const { scoreFake } = await detecterDeepfake(bytes);
      await envoyer(chatId, messageVerdict(scoreFake));
    } catch (e) {
      console.error(e);
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
  console.log(`✓ Bot Gardienne démarré. Modèle : ${MODEL}`);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      const res = await fetch(`${API}/getUpdates?timeout=30&offset=${offset}`);
      const data = await res.json();
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
