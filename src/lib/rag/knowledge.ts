// ─────────────────────────────────────────────────────────────────────────────
// BASE DE CONNAISSANCES JURIDIQUE (RAG) — cyberharcèlement au Cameroun.
//
// Contenu VÉRIFIÉ (rapport de recherche sourcé, juillet 2026) à partir de :
//   • Code Pénal — Loi n° 2016/007 du 12 juillet 2016
//   • Loi n° 2010/012 du 21 décembre 2010 (cybersécurité & cybercriminalité)
//   • Loi n° 2024/017 du 23 décembre 2024 (protection des données personnelles)
// Sources détaillées : docs/Cadre Juridique Cyberharcèlement Cameroun.md
//
// Le RAG récupère ces passages : les réponses sont ANCRÉES, jamais inventées.
// ⚠️ Information générale, pas un conseil juridique personnalisé.
// ─────────────────────────────────────────────────────────────────────────────

export interface Passage {
  id: string;
  titre: string;
  motsCles: string[];
  reponse: string;
  source: string;
}

export const DISCLAIMER =
  "ℹ️ Information juridique générale, pas un conseil personnalisé. Pour ta situation, " +
  "rapproche-toi d'un avocat, de la police, ou de l'ANTIC (8202 / 8206).";

export const BASE_JURIDIQUE: Passage[] = [
  {
    id: "est-ce-illegal",
    titre: "Le cyberharcèlement est-il puni au Cameroun ?",
    motsCles: ["illegal", "puni", "interdit", "loi", "droit", "crime", "delit", "punissable", "legal", "cyberharcelement"],
    reponse:
      "Oui. Même s'il n'existe pas d'infraction unique nommée « cyberharcèlement », les faits sont " +
      "réprimés en combinant la Loi n° 2010/012 (cybersécurité/cybercriminalité) et le Code Pénal " +
      "(Loi 2016/007) : atteinte à la vie privée, harcèlement sexuel, menaces, diffamation, " +
      "diffusion d'images, etc. Les juges requalifient selon les faits.",
    source: "Loi n° 2010/012 + Code Pénal 2016/007",
  },
  {
    id: "peine-harcelement-sexuel",
    titre: "Quelle peine risque un harceleur sexuel ?",
    motsCles: ["peine", "prison", "risque", "harceleur", "sanction", "harcelement", "sexuel", "combien", "annees", "amende"],
    reponse:
      "Le harcèlement sexuel (art. 302-1 du Code Pénal) est puni de 6 mois à 1 an de prison et " +
      "d'une amende (aggravé si la victime est mineure). Attention : cet article ne vise que le " +
      "harcèlement par abus d'autorité (patron, enseignant…). Pour un harceleur en ligne, anonyme " +
      "ou de même niveau, on s'appuie plutôt sur la Loi n° 2010/012 (atteinte à la vie privée, " +
      "art. 74 : 1 à 2 ans + 1 à 5 millions FCFA).",
    source: "Code Pénal, art. 302-1 ; Loi n° 2010/012, art. 74",
  },
  {
    id: "vie-privee-photos",
    titre: "Diffusion de mes photos / atteinte à la vie privée",
    motsCles: ["photo", "photos", "image", "images", "vie", "privee", "intime", "nudes", "diffusion", "publier", "divulguer", "capter"],
    reponse:
      "Capter, enregistrer ou diffuser sans consentement des images ou données privées est puni " +
      "par la Loi n° 2010/012 (art. 74) : 1 à 2 ans de prison et 1 à 5 millions FCFA d'amende. Si " +
      "c'est fait dans un but lucratif, l'art. 75 aggrave la peine à 2 à 5 ans. Conserve les preuves.",
    source: "Loi n° 2010/012, art. 74 et 75",
  },
  {
    id: "revenge-porn",
    titre: "Diffusion d'images intimes sans mon accord (revenge porn)",
    motsCles: ["revenge", "porn", "intime", "nudes", "vengeance", "expartenaire", "ex", "diffuser", "photos"],
    reponse:
      "Il n'existe pas encore d'infraction autonome de « revenge porn » au Cameroun. Les faits sont " +
      "poursuivis via l'atteinte à la vie privée (Loi n° 2010/012, art. 74 : 1 à 2 ans + 1 à 5 M " +
      "FCFA) ou l'outrage public aux mœurs (Code Pénal, art. 263-264). Ce n'est jamais la faute de " +
      "la victime.",
    source: "Loi n° 2010/012, art. 74 ; Code Pénal, art. 263-264",
  },
  {
    id: "chantage-sextorsion",
    titre: "Chantage / sextorsion (menace de diffuser des images)",
    motsCles: ["chantage", "sextorsion", "menace", "menacer", "chanter", "argent", "obtenir", "extorsion"],
    reponse:
      "Menacer de diffuser des images intimes pour obtenir de l'argent, des faveurs ou un silence " +
      "relève du chantage/extorsion et de l'atteinte à la vie privée (Loi n° 2010/012, art. 74). " +
      "Ne cède jamais et ne paie rien : scelle les preuves et signale. Le quantum exact du chantage " +
      "dépend de la qualification retenue par le juge.",
    source: "Code Pénal (chantage) ; Loi n° 2010/012, art. 74",
  },
  {
    id: "deepfake",
    titre: "Une photo/vidéo truquée par IA (deepfake) de moi circule",
    motsCles: ["deepfake", "truquee", "truque", "fake", "montage", "trucage", "ia", "faux", "recours"],
    reponse:
      "Il y a un vide juridique : aucune loi camerounaise ne vise spécifiquement les deepfakes. On " +
      "se rabat sur l'atteinte à la vie privée (Loi n° 2010/012, art. 74 : 1-2 ans + 1-5 M FCFA), " +
      "les fausses nouvelles (art. 78-1 : 6 mois-2 ans + 5-10 M FCFA) ou l'escroquerie (Code Pénal " +
      "art. 318). Scelle la preuve et signale ; notre bot Telegram peut vérifier si l'image est truquée.",
    source: "Loi n° 2010/012, art. 74 & 78-1 ; Code Pénal, art. 318",
  },
  {
    id: "fausses-nouvelles",
    titre: "Fausses nouvelles / diffamation en ligne",
    motsCles: ["fausse", "fausses", "nouvelle", "rumeur", "diffamation", "mensonge", "calomnie", "reputation", "injure"],
    reponse:
      "Diffuser de fausses nouvelles par voie électronique est puni par la Loi n° 2010/012 " +
      "(art. 78-1) : 6 mois à 2 ans de prison et 5 à 10 millions FCFA d'amende. La diffamation " +
      "(art. 305) et l'injure (art. 307) sont aussi réprimées par le Code Pénal.",
    source: "Loi n° 2010/012, art. 78-1 ; Code Pénal, art. 305 et 307",
  },
  {
    id: "donnees-personnelles",
    titre: "Mes données personnelles sont-elles protégées ?",
    motsCles: ["donnees", "personnelles", "protection", "rgpd", "effacement", "supprimer", "consentement", "profilage"],
    reponse:
      "Oui, depuis la Loi n° 2024/017 du 23 décembre 2024 (pleinement applicable depuis le 23 juin " +
      "2026). Tu peux exiger l'effacement de tes données et t'opposer à leur exploitation " +
      "(profilage, marketing). Les sanctions pour les entreprises fautives peuvent atteindre 1 " +
      "milliard de FCFA.",
    source: "Loi n° 2024/017 du 23 décembre 2024",
  },
  {
    id: "porter-plainte",
    titre: "Comment porter plainte ?",
    motsCles: ["plainte", "porter", "denoncer", "signaler", "police", "gendarmerie", "tribunal", "procedure", "procureur", "comment"],
    reponse:
      "Deux voies : 1) te présenter dans un commissariat (police judiciaire) ou une brigade de " +
      "gendarmerie pour déposer plainte ; 2) adresser une plainte écrite au Procureur de la " +
      "République près le Tribunal de Première Instance. Rassemble d'abord tes preuves. Tu peux " +
      "aussi signaler à l'ANTIC (numéros verts 8202 / 8206).",
    source: "Code de procédure pénale ; ANTIC",
  },
  {
    id: "preuves",
    titre: "Que faire des preuves ? (capture, message…)",
    motsCles: ["preuve", "preuves", "capture", "conserver", "garder", "supprimer", "huissier", "hachage", "sceller"],
    reponse:
      "Ne supprime rien. Attention : une simple capture d'écran a une valeur probante FAIBLE (elle " +
      "peut être contestée). Deux choses la renforcent : un constat d'huissier, et une empreinte " +
      "cryptographique (hachage SHA-256) qui prouve que le fichier n'a pas été modifié. C'est " +
      "exactement ce que fait Gardienne quand tu « scelles » un message.",
    source: "Preuve numérique (art. 308 CPP) — huissier & hachage",
  },
  {
    id: "antic-signalement",
    titre: "Signaler à l'ANTIC / aide technique",
    motsCles: ["antic", "signaler", "numero", "vert", "cirt", "usurpation", "traçage", "technique"],
    reponse:
      "L'ANTIC (Agence Nationale des TIC) reçoit les signalements de cyberharcèlement, discours de " +
      "haine ou usurpation de profil via ses numéros verts gratuits 8202 et 8206 (www.antic.cm). " +
      "Son centre technique (CIRT) peut, sur demande de la justice, tracer les adresses IP et " +
      "produire des expertises pour les magistrats.",
    source: "ANTIC — 8202 / 8206",
  },
  {
    id: "avocat-gratuit",
    titre: "Puis-je avoir un avocat gratuit ?",
    motsCles: ["avocat", "gratuit", "aide", "juridictionnelle", "assistance", "judiciaire", "argent", "payer", "indigence"],
    reponse:
      "Oui, via l'assistance judiciaire (Loi n° 2006/015). Adresse une requête au Bureau " +
      "d'Assistance Judiciaire du tribunal, avec un certificat d'indigence délivré par l'autorité " +
      "administrative. Si c'est accordé, un avocat commis d'office te défend gratuitement et tu es " +
      "dispensée des frais de justice.",
    source: "Loi n° 2006/015 (organisation judiciaire)",
  },
  {
    id: "aide-soutien",
    titre: "Où trouver de l'aide et du soutien ?",
    motsCles: ["aide", "soutien", "ecoute", "peur", "seule", "psychologique", "association", "parler", "contact", "urgence"],
    reponse:
      "Tu n'es pas seule. Contacts au Cameroun : ALVF (Association de Lutte contre les Violences " +
      "faites aux Femmes), Yaoundé — 686 967 677 ; MINPROFF — 222 23 25 50 ; Ligne Enfance en " +
      "détresse (mineures) — 116. Urgences : Police 117, Gendarmerie 113. La rubrique « Aide » de " +
      "Gardienne regroupe ces contacts.",
    source: "ALVF, MINPROFF, ANTIC, DGSN",
  },
];
