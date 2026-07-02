"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { scellerPreuve, type DossierPreuve } from "@/lib/preuve/scellerPreuve";
import { META_CATEGORIES } from "@/lib/detection/categories";
import type { Categorie, ResultatAnalyse } from "@/lib/detection/types";

export default function Preuve() {
  const [dossier, setDossier] = useState<DossierPreuve | null>(null);
  const [absent, setAbsent] = useState(false);

  useEffect(() => {
    const brut = sessionStorage.getItem("gardienne:preuve");
    if (!brut) {
      setAbsent(true);
      return;
    }
    const { texte, resultat, horodatage } = JSON.parse(brut) as {
      texte: string;
      resultat: ResultatAnalyse;
      horodatage: string;
    };
    scellerPreuve(texte, resultat, horodatage).then(setDossier);
  }, []);

  if (absent) {
    return (
      <div className="reveal flex flex-col items-center gap-4 pt-16 text-center">
        <h1 className="font-display text-xl text-ink">Aucune preuve à sceller</h1>
        <p className="max-w-[18rem] text-[14px] text-ink-soft">
          Analyse d&apos;abord un message, puis touche « Sceller comme preuve ».
        </p>
        <Link
          href="/analyser"
          className="rounded-2xl bg-brand px-5 py-3 text-[15px] font-semibold text-white"
        >
          Analyser un message
        </Link>
      </div>
    );
  }

  if (!dossier) {
    return (
      <div className="flex flex-col items-center gap-3 pt-20 text-center text-ink-soft">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-seal border-t-transparent" />
        <p className="text-sm">Scellement en cours…</p>
      </div>
    );
  }

  return (
    <div className="reveal flex flex-col gap-6">
      <header>
        <h1 className="font-display text-2xl text-ink">Preuve scellée</h1>
        <p className="mt-1 text-[14px] leading-snug text-ink-soft">
          Ce dossier est protégé par une empreinte cryptographique. Il est prêt pour une plainte.
        </p>
      </header>

      {/* Le Sceau — signature visuelle */}
      <Sceau />

      {/* Contenu du dossier */}
      <dl className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white p-5 shadow-lg shadow-ink/5">
        <Ligne label="Message" valeur={dossier.texte} bloc />
        <Ligne label="Catégorie" valeur={META_CATEGORIES[dossier.categorie as Categorie].libelle} />
        <Ligne
          label="Date et heure"
          valeur={new Date(dossier.horodatage).toLocaleString("fr-FR")}
        />
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">
            Empreinte SHA-256
          </dt>
          <dd className="mt-1 break-all rounded-xl bg-[color-mix(in_srgb,var(--color-seal)_8%,white)] p-3 font-mono text-[12px] leading-relaxed text-seal-dark">
            {dossier.empreinte}
          </dd>
        </div>
      </dl>

      <p className="flex items-start gap-2 px-1 text-[12px] leading-snug text-ink-soft">
        <svg className="mt-0.5 shrink-0 text-seal" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        Toute modification du message changerait cette empreinte : c&apos;est ce qui rend la preuve
        infalsifiable.
      </p>

      <button
        onClick={() => telecharger(dossier)}
        className="flex items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-3.5 text-[15px] font-semibold text-white transition-transform active:scale-[0.98]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
        </svg>
        Télécharger le dossier
      </button>
    </div>
  );
}

function Sceau() {
  return (
    <div className="flex justify-center py-2">
      <div className="relative grid h-36 w-36 place-items-center">
        <svg className="absolute inset-0 h-full w-full text-seal" viewBox="0 0 160 160">
          <defs>
            <path id="cercle" d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0" />
          </defs>
          <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <circle cx="80" cy="80" r="62" fill="color-mix(in srgb, var(--color-seal) 8%, white)" stroke="currentColor" strokeWidth="1.5" />
          <text fontSize="11" letterSpacing="3" fill="currentColor" fontWeight="600">
            <textPath href="#cercle" startOffset="0%">
              • PREUVE SCELLÉE • GARDIENNE • INTÉGRITÉ VÉRIFIÉE
            </textPath>
          </text>
        </svg>
        <span className="grid h-16 w-16 place-items-center rounded-full bg-seal text-white shadow-lg shadow-seal/30">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function Ligne({ label, valeur, bloc }: { label: string; valeur: string; bloc?: boolean }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-ink-soft">{label}</dt>
      <dd className={`mt-0.5 text-[14px] text-ink ${bloc ? "rounded-xl bg-black/[0.03] p-3" : ""}`}>
        {valeur}
      </dd>
    </div>
  );
}

function telecharger(dossier: DossierPreuve) {
  const blob = new Blob([JSON.stringify(dossier, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `preuve-gardienne-${dossier.empreinte.slice(0, 8)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
