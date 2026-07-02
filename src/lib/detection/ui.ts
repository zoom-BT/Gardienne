// Correspondance niveau de gravité → couleur + libellé, pour l'affichage.
import type { Niveau } from "./types";

export const STYLE_NIVEAU: Record<Niveau, { couleur: string; texte: string }> = {
  critique: { couleur: "var(--color-grav-critique)", texte: "Critique" },
  eleve: { couleur: "var(--color-grav-eleve)", texte: "Élevé" },
  moyen: { couleur: "var(--color-grav-moyen)", texte: "Moyen" },
  faible: { couleur: "var(--color-grav-faible)", texte: "Faible" },
  aucun: { couleur: "var(--color-grav-sur)", texte: "Rien de préoccupant" },
};
