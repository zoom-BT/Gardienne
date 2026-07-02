// Scellement de preuve : empreinte SHA-256 horodatée via l'API Web Crypto.
// Argument cyber : l'INTÉGRITÉ. Toute modification du contenu change l'empreinte
// → la preuve devient vérifiable et infalsifiable.

import type { ResultatAnalyse } from "@/lib/detection/types";

export interface DossierPreuve {
  texte: string;
  categorie: string;
  gravite: number;
  horodatage: string; // ISO
  empreinte: string; // SHA-256 hex
  outil: string;
}

/** Empreinte SHA-256 (hexadécimale) d'une chaîne. */
export async function empreinteSha256(contenu: string): Promise<string> {
  const data = new TextEncoder().encode(contenu);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Construit un dossier de preuve scellé à partir d'un message analysé. */
export async function scellerPreuve(
  texte: string,
  resultat: ResultatAnalyse,
  horodatage: string,
): Promise<DossierPreuve> {
  // On scelle un contenu canonique : c'est LUI qui est protégé par l'empreinte.
  const contenuCanonique = JSON.stringify({
    texte,
    categorie: resultat.categorie,
    gravite: resultat.gravite,
    horodatage,
  });
  const empreinte = await empreinteSha256(contenuCanonique);
  return {
    texte,
    categorie: resultat.categorie,
    gravite: resultat.gravite,
    horodatage,
    empreinte,
    outil: "Gardienne",
  };
}
