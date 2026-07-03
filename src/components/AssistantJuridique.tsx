"use client";

import { useState, useRef, useEffect } from "react";
import { rechercher } from "@/lib/rag/retrieve";
import { DISCLAIMER } from "@/lib/rag/knowledge";

interface Message {
  role: "user" | "bot";
  texte: string;
  sources?: string[];
}

const SUGGESTIONS = [
  "Le cyberharcèlement est-il puni ?",
  "Quelle peine risque mon harceleur ?",
  "Comment porter plainte ?",
  "Une photo truquée de moi circule",
];

const ACCUEIL: Message = {
  role: "bot",
  texte:
    "Bonjour 👋 Je réponds à tes questions sur le cyberharcèlement au Cameroun : loi, " +
    "peines, droits, comment porter plainte. Pose ta question ou choisis ci-dessous.",
};

// Génération ancrée : on répond à partir des passages récupérés (RAG).
function repondre(question: string): Message {
  const res = rechercher(question, 2);
  if (res.length === 0) {
    return {
      role: "bot",
      texte:
        "Je n'ai pas d'information sûre là-dessus. Reformule, ou choisis une des questions " +
        "suggérées. Pour un cas précis, contacte un avocat, la police ou l'ANTIC.",
    };
  }
  let texte = res[0].passage.reponse;
  const sources = [res[0].passage.source];
  if (res[1] && res[1].score >= res[0].score * 0.6) {
    texte += "\n\n" + res[1].passage.reponse;
    if (!sources.includes(res[1].passage.source)) sources.push(res[1].passage.source);
  }
  return { role: "bot", texte, sources };
}

export default function AssistantJuridique() {
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState<Message[]>([ACCUEIL]);
  const [saisie, setSaisie] = useState("");
  const [enCours, setEnCours] = useState(false);
  const finRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, ouvert, enCours]);

  async function envoyer(question: string) {
    const q = question.trim();
    if (!q || enCours) return;
    setMessages((m) => [...m, { role: "user", texte: q }]);
    setSaisie("");
    setEnCours(true);
    // RAG complet : la route serveur récupère + génère (Groq). Repli local sinon.
    try {
      const r = await fetch("/api/juridique", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await r.json();
      if (data.ok) {
        setMessages((m) => [...m, { role: "bot", texte: data.texte, sources: data.sources }]);
      } else {
        setMessages((m) => [...m, repondre(q)]);
      }
    } catch {
      setMessages((m) => [...m, repondre(q)]);
    } finally {
      setEnCours(false);
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      {!ouvert && (
        <button
          onClick={() => setOuvert(true)}
          aria-label="Ouvrir l'assistant juridique"
          data-noprint
          className="absolute bottom-24 right-4 z-20 flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-white shadow-xl shadow-brand/30 transition-transform active:scale-95 lg:bottom-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v18M7 7h10M6 7l-3 6h6L6 7Zm12 0-3 6h6l-3-6ZM3 13a3 3 0 0 0 6 0M15 13a3 3 0 0 0 6 0M8 21h8" />
          </svg>
          <span className="text-[13px] font-semibold">Aide juridique</span>
        </button>
      )}

      {/* Panneau de chat */}
      {ouvert && (
        <div className="absolute inset-0 z-30 flex flex-col bg-cream">
          {/* En-tête */}
          <header className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18M7 7h10M6 7l-3 6h6L6 7Zm12 0-3 6h6l-3-6ZM3 13a3 3 0 0 0 6 0M15 13a3 3 0 0 0 6 0M8 21h8" />
                </svg>
              </span>
              <div>
                <p className="font-display text-[15px] font-medium leading-none text-ink">
                  Assistant juridique
                </p>
                <p className="mt-1 text-[11px] text-ink-soft">Cyberharcèlement · Cameroun</p>
              </div>
            </div>
            <button
              onClick={() => setOuvert(false)}
              aria-label="Fermer"
              className="grid h-8 w-8 place-items-center rounded-full text-ink-soft hover:bg-black/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[14px] text-white"
                      : "max-w-[88%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[14px] leading-relaxed text-ink shadow-sm"
                  }
                >
                  <p className="whitespace-pre-wrap">{m.texte}</p>
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.sources.map((s, j) => (
                        <span
                          key={j}
                          className="rounded-full bg-lilas px-2 py-0.5 text-[10px] font-medium text-brand-dark"
                        >
                          📖 {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Indicateur de saisie */}
            {enCours && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft/50 [animation-delay:-0.2s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft/50 [animation-delay:-0.1s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink-soft/50" />
                </div>
              </div>
            )}

            {/* Suggestions (seulement au début) */}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => envoyer(s)}
                    className="rounded-full border border-brand/20 bg-white px-3 py-1.5 text-[12px] text-brand-dark transition-colors hover:bg-lilas"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <p className="pt-1 text-center text-[10px] leading-snug text-ink-soft">{DISCLAIMER}</p>
            <div ref={finRef} />
          </div>

          {/* Saisie */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              envoyer(saisie);
            }}
            className="flex items-center gap-2 border-t border-black/5 bg-white px-3 py-2.5"
          >
            <input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              disabled={enCours}
              placeholder="Pose ta question…"
              className="flex-1 rounded-full border border-black/10 bg-cream px-4 py-2.5 text-[14px] text-ink outline-none focus:border-brand disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!saisie.trim() || enCours}
              aria-label="Envoyer"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-white disabled:opacity-40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
