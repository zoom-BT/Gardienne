// Scellement de preuve : empreinte SHA-256 + horodatage.
// Intégrité (le contenu n'a pas changé) + horodatage de CONFIANCE quand le
// serveur est joignable (non antidatable). Repli local hors-ligne.
//
// ⚠️ Ne prouve pas l'ORIGINE du message (qui l'a envoyé) — c'est le rôle de
//    l'ANTIC (traçage d'IP). Gardienne préserve, horodate et met en forme.

import type { ResultatAnalyse } from "@/lib/detection/types";

export interface MetaCapture {
  plateforme?: string | null;
  auteur?: string | null;
  heure?: string | null;
}

export interface DossierPreuve {
  texte: string;
  categorie: string;
  gravite: number;
  horodatage: string; // ISO (capture, horloge locale)
  empreinte: string; // SHA-256 hex
  outil: string;
  // Métadonnées extraites d'une capture d'écran (facultatif).
  plateforme?: string | null;
  auteur?: string | null;
  heureMessage?: string | null;
  // Certificat serveur (horodatage de confiance) — présent si en ligne.
  certifie: boolean;
  horodatageCertifie?: string;
  signature?: string;
  autorite?: string;
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
  meta?: MetaCapture,
): Promise<DossierPreuve> {
  // Contenu canonique protégé par l'empreinte (métadonnées incluses).
  const contenuCanonique = JSON.stringify({
    texte,
    categorie: resultat.categorie,
    gravite: resultat.gravite,
    horodatage,
    meta: meta ?? null,
  });
  const empreinte = await empreinteSha256(contenuCanonique);

  const dossier: DossierPreuve = {
    texte,
    categorie: resultat.categorie,
    gravite: resultat.gravite,
    horodatage,
    empreinte,
    outil: "Gardienne",
    plateforme: meta?.plateforme ?? null,
    auteur: meta?.auteur ?? null,
    heureMessage: meta?.heure ?? null,
    certifie: false,
  };

  // Horodatage de confiance côté serveur (si joignable).
  try {
    const r = await fetch("/api/sceller", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empreinte }),
    });
    const data = await r.json();
    if (data.ok) {
      dossier.certifie = true;
      dossier.horodatageCertifie = data.horodatage;
      dossier.signature = data.signature;
      dossier.autorite = data.autorite;
    }
  } catch {
    // Hors-ligne : on garde le scellement local (non certifié).
  }

  return dossier;
}
