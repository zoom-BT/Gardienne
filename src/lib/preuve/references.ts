// Articles de loi applicables selon la catégorie détectée.
// Sert à pré-remplir le dossier de plainte. Sourcé (voir docs/Cadre Juridique…).

import type { Categorie } from "@/lib/detection/types";

export const REFERENCES_JURIDIQUES: Record<Categorie, string[]> = {
  chantage_sextorsion: [
    "Loi n° 2010/012, art. 74 — atteinte à la vie privée (1 à 2 ans + 1 à 5 M FCFA) ; art. 75 si but lucratif (2 à 5 ans)",
    "Code Pénal — chantage / extorsion",
    "Loi n° 2010/012, art. 78-1 — si l'image est truquée/diffusée (6 mois à 2 ans + 5 à 10 M FCFA)",
  ],
  menace: [
    "Code Pénal, art. 301 et 302 — menaces",
    "Loi n° 2010/012, art. 74 — atteinte à la vie privée (si données/images en jeu)",
  ],
  insulte: [
    "Code Pénal, art. 307 — injure",
    "Code Pénal, art. 305 — diffamation",
  ],
  harcelement_repete: [
    "Loi n° 2010/012, art. 74 — atteinte à la vie privée / harcèlement électronique",
    "Code Pénal, art. 302-1 — harcèlement sexuel (si abus d'autorité)",
  ],
  non_preoccupant: [],
};
