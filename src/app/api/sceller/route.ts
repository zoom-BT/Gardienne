import { NextResponse } from "next/server";
import crypto from "node:crypto";

// Scellement CÔTÉ SERVEUR : un tiers (le serveur Gardienne) atteste qu'une
// empreinte lui a été soumise à une heure RÉELLE (non l'horloge du téléphone),
// et la signe (HMAC). Cela empêche l'antidatage et rend la preuve non
// falsifiable de façon indépendante de la victime.
//
// Ne prouve PAS l'origine du message (rôle de l'ANTIC / traçage IP) — mais
// garantit l'intégrité + un horodatage de confiance.

export async function POST(req: Request) {
  let empreinte = "";
  try {
    ({ empreinte } = await req.json());
  } catch {
    return NextResponse.json({ ok: false });
  }
  if (!empreinte || typeof empreinte !== "string") {
    return NextResponse.json({ ok: false });
  }

  const secret = process.env.SCEAU_SECRET || "gardienne-dev-secret-a-changer";
  const horodatage = new Date().toISOString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`${empreinte}|${horodatage}`)
    .digest("hex");

  return NextResponse.json({
    ok: true,
    horodatage,
    signature,
    autorite: "Serveur Gardienne",
  });
}
