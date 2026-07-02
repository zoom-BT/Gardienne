// Couche A du moteur de détection : analyse locale par lexique + règles.
// 100 % hors-ligne, déterministe → fiable en démonstration.

import { LEXIQUE } from "./lexique";
import { ORDRE_GRAVITE, META_CATEGORIES, niveauDepuisGravite } from "./categories";
import type { Categorie, ResultatAnalyse, TermeDetecte } from "./types";

/** Minuscules + suppression des accents + espaces normalisés. */
export function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // retire les diacritiques
    .replace(/\s+/g, " ")
    .trim();
}

/** Catégorie la plus grave parmi celles détectées (selon ORDRE_GRAVITE). */
function categorieDominante(categories: Categorie[]): Categorie {
  let dominante: Categorie = "non_preoccupant";
  let rangMax = -1;
  for (const c of categories) {
    const rang = ORDRE_GRAVITE.indexOf(c);
    if (rang > rangMax) {
      rangMax = rang;
      dominante = c;
    }
  }
  return dominante;
}

/**
 * Analyse un message et renvoie un verdict de gravité.
 * Couche A uniquement (lexique local). La couche B (modèle) est fusionnée ailleurs.
 */
export function analyserTexte(texteBrut: string): ResultatAnalyse {
  const texte = normaliser(texteBrut);
  const termes: TermeDetecte[] = [];
  let graviteMax = 0;

  // 1) Passage du lexique
  for (const entree of LEXIQUE) {
    const found = texte.match(entree.motif);
    if (found) {
      termes.push({
        extrait: found[0],
        categorie: entree.categorie,
        libelle: entree.libelle,
      });
      if (entree.poids > graviteMax) graviteMax = entree.poids;
    }
  }

  // 2) Règle composite : « diffuser » + « contenu visuel » = sextorsion critique.
  //    Rattrape « je vais publier tes photos » là où aucun mot seul n'est critique.
  const aVerbeDiffusion =
    /\b(publie|publier|poste|poster|partage|partager|balance|balancer|diffuse|diffuser|sortir|circuler|envoyer)\b/.test(
      texte,
    ) || /\bgo\s+(share|post|sho?w|send|publish)\b/.test(texte);
  const aContenuVisuel = /\b(photo|photos|image|images|video|videos|nude|nudes)\b/.test(texte);
  if (aVerbeDiffusion && aContenuVisuel) {
    const dejaSignale = termes.some((t) => t.categorie === "chantage_sextorsion");
    if (!dejaSignale) {
      termes.push({
        extrait: "diffusion d'un contenu visuel",
        categorie: "chantage_sextorsion",
        libelle: "menace de diffuser une photo/vidéo",
      });
    }
    graviteMax = Math.max(graviteMax, 92);
  }

  // 3) Agrégation du score de gravité.
  const categories = termes.map((t) => t.categorie);
  const categoriesDistinctes = new Set(categories).size;
  const gravite =
    termes.length === 0
      ? 0
      : Math.min(100, graviteMax + 5 * Math.max(0, categoriesDistinctes - 1));

  // 4) Catégorie dominante et métadonnées.
  const categorie = termes.length === 0 ? "non_preoccupant" : categorieDominante(categories);
  const meta = META_CATEGORIES[categorie];

  return {
    categorie,
    gravite,
    niveau: niveauDepuisGravite(gravite),
    termesDetectes: termes,
    explication: meta.explication,
    conseil: meta.conseil,
    source: "lexique",
  };
}
