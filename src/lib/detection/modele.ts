// ─────────────────────────────────────────────────────────────────────────────
// COUCHE B — modèle d'IA de toxicité (transformers.js), en complément du lexique.
//
// Rôle : GÉNÉRALISER au-delà du lexique local. Le lexique (couche A) reste la
// référence fiable et hors-ligne ; le modèle ajoute une lecture « IA » qui
// rattrape des formulations non listées.
//
// Chargé PARESSEUSEMENT côté navigateur (le poids n'est téléchargé qu'au premier
// usage). Si le chargement échoue, l'app continue avec la couche A seule.
// ─────────────────────────────────────────────────────────────────────────────

import type { Categorie } from "./types";

export interface ResultatModele {
  disponible: boolean;
  toxique: boolean;
  label: string; // ex. "toxic", "threat", "insult"
  score: number; // 0-1
  categorieSuggeree: Categorie | null;
}

// Modèle multi-label : toxic, severe_toxic, obscene, threat, insult, identity_hate.
const MODELE = "Xenova/toxic-bert";
const SEUIL = 0.5;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let pipelinePromise: Promise<any> | null = null;

async function chargerPipeline() {
  if (!pipelinePromise) {
    pipelinePromise = (async () => {
      const { pipeline, env } = await import("@huggingface/transformers");
      // On ne charge que depuis le hub distant (pas de modèles locaux).
      env.allowLocalModels = false;
      return pipeline("text-classification", MODELE, { dtype: "q8" });
    })();
  }
  return pipelinePromise;
}

/** Fait correspondre un label du modèle à une de nos catégories. */
function labelVersCategorie(label: string): Categorie | null {
  const l = label.toLowerCase();
  if (l.includes("threat")) return "menace";
  if (l.includes("insult") || l.includes("obscene") || l.includes("hate")) return "insulte";
  if (l.includes("toxic")) return "insulte";
  return null;
}

/**
 * Analyse un texte avec le modèle IA. Ne jette jamais : en cas d'échec,
 * renvoie `disponible: false` pour que l'app retombe sur la couche A.
 */
export async function analyserAvecModele(texte: string): Promise<ResultatModele> {
  try {
    const pipe = await chargerPipeline();
    const sorties = (await pipe(texte, { top_k: 6 })) as Array<{
      label: string;
      score: number;
    }>;
    const meilleur = sorties.reduce((a, b) => (b.score > a.score ? b : a), sorties[0]);
    const toxique = meilleur.score >= SEUIL && meilleur.label.toLowerCase() !== "neutral";
    return {
      disponible: true,
      toxique,
      label: meilleur.label,
      score: meilleur.score,
      categorieSuggeree: toxique ? labelVersCategorie(meilleur.label) : null,
    };
  } catch {
    return {
      disponible: false,
      toxique: false,
      label: "",
      score: 0,
      categorieSuggeree: null,
    };
  }
}
