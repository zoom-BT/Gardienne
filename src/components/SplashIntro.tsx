"use client";

import { useEffect, useState } from "react";

// Écran d'accueil animé, bref (~1,6 s) et non bloquant. S'affiche au chargement
// de l'app (et au rafraîchissement), pas lors de la navigation interne.
// On peut le passer en touchant l'écran.
export default function SplashIntro() {
  const [phase, setPhase] = useState<"visible" | "sortie" | "fini">("visible");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("sortie"), 1600);
    const t2 = setTimeout(() => setPhase("fini"), 2150);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "fini") return null;

  return (
    <div
      onClick={() => setPhase("fini")}
      data-noprint
      className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${
        phase === "sortie" ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(60% 50% at 50% 32%, #efe6ff 0%, #fbf8f4 70%)" }}
    >
      <div className="splash-logo grid h-24 w-24 place-items-center rounded-[28px] bg-brand text-white shadow-xl shadow-brand/30">
        <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path className="splash-shield" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path className="splash-check" d="m9 12 2 2 4-4" />
        </svg>
      </div>

      <div className="splash-texte text-center">
        <h1 className="font-display text-3xl tracking-tight text-ink">Gardienne</h1>
        <p className="mt-1.5 text-[13px] font-medium text-ink-soft">Comprends. Prouve. Agis.</p>
      </div>

      <div className="h-1 w-24 overflow-hidden rounded-full bg-black/10">
        <div className="splash-progress h-full w-full origin-left bg-brand" />
      </div>
    </div>
  );
}
