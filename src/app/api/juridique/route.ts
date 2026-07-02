import { NextResponse } from "next/server";
import { rechercher } from "@/lib/rag/retrieve";

// Route RAG : récupère les passages juridiques vérifiés, puis demande à un LLM
// (Groq) de rédiger une réponse ANCRÉE uniquement sur ce contexte.
// Si la clé manque ou l'API échoue, on renvoie ok:false → le client retombe
// sur la réponse ancrée locale (déterministe).

const SYSTEME =
  "Tu es l'assistant juridique de Gardienne, spécialisé dans le cyberharcèlement au Cameroun. " +
  "Réponds en français, avec clarté, bienveillance et concision (5 phrases maximum). " +
  "Utilise UNIQUEMENT le contexte juridique fourni ci-dessous. " +
  "N'invente JAMAIS d'article de loi, de peine ou de chiffre qui ne figure pas dans le contexte. " +
  "Si l'information n'est pas dans le contexte, dis-le honnêtement et invite à contacter un avocat, " +
  "la police ou l'ANTIC. Tutoie la personne. Ne donne pas de faux espoir ni de fausse certitude.";

export async function POST(req: Request) {
  let question = "";
  try {
    ({ question } = await req.json());
  } catch {
    return NextResponse.json({ ok: false, raison: "requete-invalide" });
  }

  const passages = rechercher(question, 3);
  if (passages.length === 0) {
    return NextResponse.json({ ok: false, raison: "hors-sujet" });
  }
  const sources = [...new Set(passages.map((p) => p.passage.source))];
  const contexte = passages
    .map((p) => `[Source : ${p.passage.source}]\n${p.passage.reponse}`)
    .join("\n\n");

  const cle = process.env.GROQ_API_KEY;
  if (!cle) {
    return NextResponse.json({ ok: false, raison: "pas-de-cle" });
  }

  const modele = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
  const corps: Record<string, unknown> = {
    model: modele,
    temperature: 0.2,
    max_tokens: 500,
    messages: [
      { role: "system", content: SYSTEME },
      {
        role: "user",
        content: `Contexte juridique vérifié :\n\n${contexte}\n\nQuestion : ${question}`,
      },
    ],
  };
  // Les modèles « gpt-oss » raisonnent : effort faible = réponse directe et propre.
  if (modele.includes("gpt-oss")) corps.reasoning_effort = "low";

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
      body: JSON.stringify(corps),
    });
    if (!res.ok) throw new Error(`groq ${res.status}`);
    const data = await res.json();
    const texte: string | undefined = data?.choices?.[0]?.message?.content?.trim();
    if (!texte) throw new Error("réponse vide");
    return NextResponse.json({ ok: true, texte, sources });
  } catch (e) {
    console.error("RAG Groq:", (e as Error).message);
    return NextResponse.json({ ok: false, raison: "erreur-llm" });
  }
}
