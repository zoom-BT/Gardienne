import { NextResponse } from "next/server";

// Extraction d'informations depuis une CAPTURE D'ÉCRAN de conversation, via un
// modèle vision (Groq / Llama 4 Scout). Renvoie un JSON structuré : plateforme,
// auteur, heure, message. Sert à alimenter la détection et le dossier de preuve.

const SYSTEME =
  "Tu analyses une capture d'écran d'une conversation (WhatsApp, Messenger, SMS, " +
  "Instagram…). Extrais UNIQUEMENT les messages REÇUS par la victime (pas ceux " +
  "qu'elle a envoyés). Réponds STRICTEMENT en JSON, sans texte autour, avec les clés : " +
  '"plateforme" (ex. WhatsApp, Facebook, SMS… ou null), "auteur" (nom ou numéro de ' +
  'l\'expéditeur, ou null), "heure" (horodatage visible, ou null), "message" (le texte ' +
  "des messages reçus, concaténés). Si une information est absente, mets null. Ne devine " +
  "jamais une information non visible.";

export async function POST(req: Request) {
  let image = "";
  try {
    ({ image } = await req.json());
  } catch {
    return NextResponse.json({ ok: false, raison: "requete-invalide" });
  }
  if (!image || typeof image !== "string" || !image.startsWith("data:image")) {
    return NextResponse.json({ ok: false, raison: "image-invalide" });
  }

  const cle = process.env.GROQ_API_KEY;
  if (!cle) return NextResponse.json({ ok: false, raison: "pas-de-cle" });

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.GROQ_VISION_MODEL || "meta-llama/llama-4-scout-17b-16e-instruct",
        temperature: 0,
        max_tokens: 600,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEME },
          {
            role: "user",
            content: [
              { type: "text", text: "Extrais les informations de cette capture d'écran." },
              { type: "image_url", image_url: { url: image } },
            ],
          },
        ],
      }),
    });
    if (!res.ok) throw new Error(`groq ${res.status}`);
    const data = await res.json();
    const brut: string = data?.choices?.[0]?.message?.content ?? "";
    // Parse robuste (au cas où le modèle enrobe le JSON).
    const json = JSON.parse(brut.slice(brut.indexOf("{"), brut.lastIndexOf("}") + 1));
    return NextResponse.json({
      ok: true,
      plateforme: json.plateforme ?? null,
      auteur: json.auteur ?? null,
      heure: json.heure ?? null,
      message: typeof json.message === "string" ? json.message : "",
    });
  } catch (e) {
    console.error("extraction image:", (e as Error).message);
    return NextResponse.json({ ok: false, raison: "erreur-extraction" });
  }
}
