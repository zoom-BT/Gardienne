// Récupération (le « R » du RAG) : recherche lexicale sur la base juridique.
// Instantané, hors-ligne, déterministe. Sur une base curatée de cette taille,
// une recherche par mots-clés pondérés est fiable et suffisante.

import { BASE_JURIDIQUE, type Passage } from "./knowledge";

const STOPWORDS = new Set([
  "le", "la", "les", "un", "une", "des", "de", "du", "et", "ou", "a", "au", "aux",
  "je", "tu", "il", "elle", "on", "mon", "ma", "mes", "ton", "ta", "tes", "se",
  "que", "qui", "quoi", "est", "ce", "cette", "pour", "par", "sur", "dans", "en",
  "quel", "quelle", "quels", "quelles", "comment", "pourquoi", "combien", "si",
]);

function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

function jetons(texte: string): string[] {
  return normaliser(texte)
    .split(/\s+/)
    .filter((m) => m.length > 2 && !STOPWORDS.has(m));
}

export interface Resultat {
  passage: Passage;
  score: number;
}

/** Renvoie les passages les plus pertinents pour la question (score décroissant). */
export function rechercher(question: string, k = 2): Resultat[] {
  const q = jetons(question);
  if (q.length === 0) return [];

  const resultats: Resultat[] = BASE_JURIDIQUE.map((passage) => {
    const texteComplet = normaliser(passage.titre + " " + passage.reponse);
    let score = 0;
    for (const mot of q) {
      if (passage.motsCles.includes(mot)) score += 3; // mot-clé fort
      else if (texteComplet.includes(mot)) score += 1; // présent dans le texte
    }
    return { passage, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return resultats.slice(0, k);
}
