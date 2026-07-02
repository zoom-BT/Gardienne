// Métadonnées d'affichage pour chaque catégorie de harcèlement.
// Utilisées par le moteur d'analyse ET par l'interface (verdict, conseils).

import type { Categorie, Niveau } from "./types";

/** Ordre de gravité croissant : sert à choisir la catégorie dominante. */
export const ORDRE_GRAVITE: Categorie[] = [
  "non_preoccupant",
  "insulte",
  "harcelement_repete",
  "menace",
  "chantage_sextorsion",
];

export interface MetaCategorie {
  /** Libellé lisible affiché dans le verdict. */
  libelle: string;
  /** Explication courte de ce qui a été détecté. */
  explication: string;
  /** Conseil d'action adapté, orienté vers la protection de la victime. */
  conseil: string;
}

export const META_CATEGORIES: Record<Categorie, MetaCategorie> = {
  chantage_sextorsion: {
    libelle: "Chantage / sextorsion",
    explication:
      "Ce message contient une menace de diffuser des images intimes (réelles ou truquées) pour t'humilier ou te contraindre. C'est un délit grave — et ce n'est jamais ta faute.",
    conseil:
      "Ne cède jamais au chantage et ne paie rien. Scelle ce message comme preuve, ne supprime rien, et signale-le. Tu peux porter plainte : la loi camerounaise punit la cybercriminalité et la sextorsion.",
  },
  menace: {
    libelle: "Menace",
    explication:
      "Ce message contient une menace pour ta sécurité (violence, représailles, atteinte à ta réputation).",
    conseil:
      "Prends la menace au sérieux. Scelle-la comme preuve, bloque la personne, et parle-en à quelqu'un de confiance. En cas de danger immédiat, contacte les autorités.",
  },
  harcelement_repete: {
    libelle: "Harcèlement / insistance",
    explication:
      "Ce message traduit une insistance non désirée ou un harcèlement répété. Tu as le droit de ne pas répondre.",
    conseil:
      "Ne te sens pas obligée de répondre. Garde une trace (scelle la preuve), bloque si besoin, et n'hésite pas à en parler.",
  },
  insulte: {
    libelle: "Insulte / propos dégradants",
    explication:
      "Ce message contient des insultes ou des propos dégradants. Personne n'a le droit de te parler ainsi.",
    conseil:
      "Ne réponds pas à la provocation. Tu peux sceller le message comme preuve, bloquer et signaler l'auteur.",
  },
  non_preoccupant: {
    libelle: "Rien de préoccupant détecté",
    explication:
      "Nous n'avons pas repéré de signe évident de harcèlement dans ce message. Mais si tu te sens mal à l'aise, ton ressenti compte.",
    conseil:
      "Si quelque chose te dérange malgré tout, tu peux quand même sceller le message et en parler. Fais confiance à ton ressenti.",
  },
};

/** Convertit un score de gravité 0-100 en niveau (pour la couleur du badge). */
export function niveauDepuisGravite(gravite: number): Niveau {
  if (gravite >= 85) return "critique";
  if (gravite >= 65) return "eleve";
  if (gravite >= 40) return "moyen";
  if (gravite >= 20) return "faible";
  return "aucun";
}
