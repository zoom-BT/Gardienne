// ─────────────────────────────────────────────────────────────────────────────
// BASE DE CONNAISSANCES JURIDIQUE (RAG) — cyberharcèlement au Cameroun.
//
// Contenu VÉRIFIÉ à partir de textes officiels (Loi n° 2010/012 sur la
// cybersécurité/cybercriminalité ; Code Pénal, loi 2016/007). Le RAG récupère
// ces passages : les réponses sont donc ANCRÉES, jamais inventées.
//
// ⚠️ À FAIRE VALIDER par un juriste avant le pitch. Information générale, pas un
//    conseil juridique.
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
  "rapproche-toi d'un avocat, de la police ou de l'ANTIC.";

export const BASE_JURIDIQUE: Passage[] = [
  {
    id: "est-ce-illegal",
    titre: "Le cyberharcèlement est-il puni au Cameroun ?",
    motsCles: ["illegal", "puni", "interdit", "loi", "droit", "crime", "delit", "punissable", "legal"],
    reponse:
      "Oui. Le cyberharcèlement est réprimé au Cameroun, principalement par la Loi n° 2010/012 " +
      "relative à la cybersécurité et à la cybercriminalité (notamment ses articles 74 et 75), " +
      "ainsi que par le Code Pénal. Insultes, menaces, atteinte à la vie privée et harcèlement " +
      "par voie électronique sont des infractions.",
    source: "Loi n° 2010/012 (art. 74-75)",
  },
  {
    id: "peine-harcelement-sexuel",
    titre: "Quelle peine risque un harceleur sexuel ?",
    motsCles: ["peine", "prison", "risque", "harceleur", "sanction", "harcelement", "sexuel", "combien", "annees", "amende"],
    reponse:
      "Le harcèlement sexuel (art. 302-1 du Code Pénal) est puni de 6 mois à 1 an de prison et " +
      "de 100 000 à 1 000 000 FCFA d'amende. La peine monte à 1-3 ans si la victime est mineure, " +
      "et à 3-5 ans si l'auteur a autorité sur la victime (ex. enseignant).",
    source: "Code Pénal, art. 302-1",
  },
  {
    id: "vie-privee-photos",
    titre: "Diffusion de mes photos / atteinte à la vie privée",
    motsCles: ["photo", "photos", "image", "images", "vie", "privee", "privacy", "intime", "nudes", "diffusion", "publier", "divulguer"],
    reponse:
      "Porter atteinte à la vie privée d'autrui (capter, enregistrer ou diffuser des images/données " +
      "sans consentement) est puni par la Loi n° 2010/012 : environ 1 à 2 ans de prison et 1 à 5 " +
      "millions FCFA d'amende. Conserve les preuves (ne supprime rien).",
    source: "Loi n° 2010/012 (art. 74)",
  },
  {
    id: "chantage-sextorsion",
    titre: "Chantage / sextorsion (menace de diffuser des images)",
    motsCles: ["chantage", "sextorsion", "menace", "menacer", "faire", "chanter", "argent", "obtenir"],
    reponse:
      "Menacer de diffuser des images intimes pour obtenir de l'argent, des faveurs ou un silence " +
      "est du chantage, un délit puni par la loi camerounaise. Ne cède jamais et ne paie rien : " +
      "scelle les preuves et signale. Important : il n'existe pas encore de texte spécifique sur " +
      "les images truquées (deepfakes) — on s'appuie donc sur le chantage et l'atteinte à la vie privée.",
    source: "Code Pénal (chantage) + Loi n° 2010/012",
  },
  {
    id: "fausses-nouvelles",
    titre: "Fausses nouvelles / diffamation en ligne",
    motsCles: ["fausse", "fausses", "nouvelle", "rumeur", "diffamation", "mensonge", "calomnie", "reputation"],
    reponse:
      "Diffuser de fausses nouvelles par voie électronique est puni de 6 mois à 2 ans de prison et " +
      "de 5 à 10 millions FCFA d'amende (Loi n° 2010/012). La diffamation et l'injure sont aussi " +
      "réprimées par le Code Pénal.",
    source: "Loi n° 2010/012",
  },
  {
    id: "porter-plainte",
    titre: "Comment porter plainte ?",
    motsCles: ["plainte", "porter", "denoncer", "signaler", "police", "gendarmerie", "tribunal", "procedure", "comment"],
    reponse:
      "1) Rassemble les preuves (Gardienne te génère une preuve scellée). 2) Rends-toi au " +
      "commissariat (police judiciaire) ou à la gendarmerie pour déposer plainte. 3) Tu peux aussi " +
      "signaler à l'ANTIC (Agence Nationale des TIC). 4) L'affaire peut être portée devant le " +
      "tribunal. Tu peux être accompagnée par un avocat.",
    source: "Procédure — police judiciaire / ANTIC",
  },
  {
    id: "preuves",
    titre: "Que faire des preuves ?",
    motsCles: ["preuve", "preuves", "capture", "conserver", "garder", "supprimer", "sauvegarder"],
    reponse:
      "Ne supprime rien. Garde les messages, captures d'écran, numéros et dates. Avec Gardienne, " +
      "tu peux « sceller » un message : tu obtiens une empreinte cryptographique horodatée qui " +
      "prouve que la preuve n'a pas été modifiée — un atout pour ta plainte.",
    source: "Bonnes pratiques + preuve scellée Gardienne",
  },
  {
    id: "deepfake-recours",
    titre: "Une photo truquée de moi circule, quels recours ?",
    motsCles: ["deepfake", "truquee", "truque", "fake", "montage", "trucage", "recours", "fausse"],
    reponse:
      "Le Cameroun n'a pas encore de texte spécifique sur les images truquées par IA (vide " +
      "juridique, contrairement au Togo). Mais tu n'es pas sans recours : ces faits se rattachent " +
      "à l'atteinte à la vie privée, à la dignité et au harcèlement. Scelle la preuve, signale, et " +
      "porte plainte. Notre bot Telegram peut vérifier si l'image est truquée.",
    source: "Analyse — vide juridique sur les deepfakes",
  },
  {
    id: "aide-soutien",
    titre: "Où trouver de l'aide et du soutien ?",
    motsCles: ["aide", "soutien", "ecoute", "peur", "seule", "psychologique", "association", "parler"],
    reponse:
      "Tu n'es pas seule. Parle à une personne de confiance, contacte une association de défense " +
      "des femmes, ou les services d'écoute. En cas de danger immédiat, appelle la police (117) ou " +
      "la gendarmerie (113). La rubrique « Aide » de Gardienne regroupe des contacts.",
    source: "Ressources d'aide",
  },
];
