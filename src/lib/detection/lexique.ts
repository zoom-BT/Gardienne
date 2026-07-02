// ─────────────────────────────────────────────────────────────────────────────
// LEXIQUE LOCAL — le cœur différenciant de Gardienne.
//
// Les modèles génériques (entraînés sur de l'anglais/français standard) ratent
// le harcèlement tel qu'il se dit VRAIMENT au Cameroun : pidgin, camfranglais,
// menaces voilées. Ce lexique comble ce trou.
//
// ⚠️ Tous les motifs sont testés sur le texte NORMALISÉ : minuscules, accents
//    retirés. N'écrivez donc pas d'accents dans les expressions régulières.
//
// À ENRICHIR : c'est le travail à plus forte valeur du projet. Ajoutez des
// termes réels au fil des tests.
// ─────────────────────────────────────────────────────────────────────────────

import type { EntreeLexique } from "./types";

export const LEXIQUE: EntreeLexique[] = [
  // ── Chantage / sextorsion ────────────────────────────────────────────────
  {
    motif: /\bnudes?\b/,
    categorie: "chantage_sextorsion",
    poids: 90,
    libelle: "référence à des images intimes (« nudes »)",
  },
  {
    motif: /\bphotos?\s+(nues?|intimes?)\b|\bvideos?\s+intimes?\b/,
    categorie: "chantage_sextorsion",
    poids: 90,
    libelle: "référence à des photos/vidéos intimes",
  },
  {
    // français : verbe de diffusion + menace de sortie de contenu
    motif: /\b(publie|publier|poste|poster|partage|partager|balance|balancer|envoie|diffuse|diffuser|sortir|circuler)\b/,
    categorie: "chantage_sextorsion",
    poids: 55, // seul, c'est modéré ; combiné à « photo/nudes » ça devient critique
    libelle: "menace de diffusion d'un contenu",
  },
  {
    // pidgin : « i go share/post/show your nudes/video »
    motif: /\bgo\s+(share|post|sho?w|send|publish)\b/,
    categorie: "chantage_sextorsion",
    poids: 80,
    libelle: "menace de diffusion (pidgin « go share/post »)",
  },
  {
    motif: /\bsi\s+tu\s+(parles|dis|racontes|me\s+quittes|refuses)\b/,
    categorie: "chantage_sextorsion",
    poids: 70,
    libelle: "condition de chantage (« si tu… »)",
  },
  {
    motif: /\bchantage\b|\bfaire\s+chanter\b|\bsextorsion\b/,
    categorie: "chantage_sextorsion",
    poids: 85,
    libelle: "chantage explicite",
  },
  {
    motif: /\btout\s+le\s+monde\s+va\s+voir\b|\bevery(bo?di|body)\s+go\s+see\b/,
    categorie: "chantage_sextorsion",
    poids: 80,
    libelle: "menace d'exposition publique",
  },

  // ── Menace ────────────────────────────────────────────────────────────────
  {
    motif: /\bje\s+vais\s+te\s+(tuer|frapper|taper|casser|detruire|gater|gatter|retrouver|chercher)\b/,
    categorie: "menace",
    poids: 82,
    libelle: "menace de violence ou de représailles",
  },
  {
    motif: /\btu\s+vas\s+(voir|payer|souffrir|le\s+regretter|regretter)\b/,
    categorie: "menace",
    poids: 72,
    libelle: "menace voilée (« tu vas voir »)",
  },
  {
    motif: /\bje\s+sais\s+ou\s+tu\s+(habites|vis|dors)\b|\bje\s+connais\s+ta\s+(maison|famille)\b/,
    categorie: "menace",
    poids: 85,
    libelle: "menace de localisation (intimidation)",
  },
  {
    // pidgin : « i go beat/kill/find you », « you go see », « wait make i catch you »
    motif: /\bi\s+go\s+(beat|kill|find|show|deal\s+with|slap)\s+you\b|\byou\s+go\s+(see|suffer)\b|\bwait\s+make\s+i\b/,
    categorie: "menace",
    poids: 75,
    libelle: "menace en pidgin",
  },
  {
    motif: /\bje\s+vais\s+(gater|gatter|salir|detruire)\s+ton\s+(nom|image|reputation)\b/,
    categorie: "menace",
    poids: 70,
    libelle: "menace contre la réputation",
  },
  {
    motif: /\bfais\s+attention\s+a\s+toi\b|\btu\s+ne\s+m'?echapperas\s+pas\b/,
    categorie: "menace",
    poids: 68,
    libelle: "intimidation",
  },

  // ── Harcèlement répété / insistance ──────────────────────────────────────
  {
    motif: /\breponds?(\s+moi)?\s+(maintenant|tout\s+de\s+suite|now)\b|\bpourquoi\s+tu\s+ne\s+reponds\b/,
    categorie: "harcelement_repete",
    poids: 55,
    libelle: "insistance à obtenir une réponse",
  },
  {
    motif: /\barrete\s+de\s+m'?ignorer\b|\btu\s+m'?ignores\b|\bpourquoi\s+tu\s+me\s+bloques\b/,
    categorie: "harcelement_repete",
    poids: 55,
    libelle: "reproche d'être ignoré (contrôle)",
  },
  {
    motif: /\bcombien\s+de\s+fois\b|\bje\s+t'?ai\s+dit\s+de\b|\bje\s+vais\s+continuer\b/,
    categorie: "harcelement_repete",
    poids: 58,
    libelle: "harcèlement répété / persistance",
  },
  {
    // pidgin : « why you no di answer », « answer me now now »
    motif: /\bwhy\s+you\s+no\s+di?\s+answer\b|\banswer\s+me\s+now\s+now\b/,
    categorie: "harcelement_repete",
    poids: 55,
    libelle: "insistance (pidgin)",
  },

  // ── Insulte / propos dégradants ──────────────────────────────────────────
  {
    motif: /\b(salope|pute|putain|connasse|conne|garce|trainee)\b/,
    categorie: "insulte",
    poids: 58,
    libelle: "insulte sexiste",
  },
  {
    motif: /\bashawo\b|\bkalaba\b/,
    categorie: "insulte",
    poids: 58,
    libelle: "insulte camfranglais (« ashawo »)",
  },
  {
    motif: /\byou\s+be\s+(mbut|fool|idiot|dog|stupid)\b|\bmbut\b|\byou\s+no\s+get\s+sense\b/,
    categorie: "insulte",
    poids: 48,
    libelle: "insulte pidgin (« mbut », « no get sense »)",
  },
  {
    motif: /\b(idiote?|stupide|imbecile|debile|nulle?|moche|grosse)\b/,
    categorie: "insulte",
    poids: 42,
    libelle: "propos dégradant",
  },
];
