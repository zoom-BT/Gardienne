// Types partagés du moteur de détection Gardienne.

/** Catégories de harcèlement, de la moins grave à la plus grave. */
export type Categorie =
  | "non_preoccupant"
  | "insulte"
  | "harcelement_repete"
  | "menace"
  | "chantage_sextorsion";

/** Une entrée du lexique : un motif à repérer dans un message. */
export interface EntreeLexique {
  /** Expression régulière testée sur le texte NORMALISÉ (minuscules, sans accents). */
  motif: RegExp;
  categorie: Categorie;
  /** Contribution à la gravité (0-100). */
  poids: number;
  /** Ce que ce motif représente, affiché à l'utilisatrice. */
  libelle: string;
}

/** Un terme effectivement détecté dans le message analysé. */
export interface TermeDetecte {
  extrait: string;
  categorie: Categorie;
  libelle: string;
}

/** Niveau de gravité global, pour l'affichage (couleur du badge). */
export type Niveau = "aucun" | "faible" | "moyen" | "eleve" | "critique";

/** Résultat complet d'une analyse de message. */
export interface ResultatAnalyse {
  categorie: Categorie;
  gravite: number; // 0-100
  niveau: Niveau;
  termesDetectes: TermeDetecte[];
  explication: string;
  conseil: string;
  /** Source de la détection : lexique local, modèle IA, ou les deux. */
  source: "lexique" | "modele" | "lexique+modele";
}
