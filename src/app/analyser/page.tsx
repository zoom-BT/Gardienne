"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { analyserTexte } from "@/lib/detection/analyserTexte";
import { analyserAvecModele, type ResultatModele } from "@/lib/detection/modele";
import { META_CATEGORIES } from "@/lib/detection/categories";
import { STYLE_NIVEAU } from "@/lib/detection/ui";
import type { ResultatAnalyse } from "@/lib/detection/types";

const EXEMPLE = "si tu me quittes je vais poster tes photos nues, everybody go see";

export default function Analyser() {
  const router = useRouter();
  const [texte, setTexte] = useState("");
  const [resultat, setResultat] = useState<ResultatAnalyse | null>(null);
  const [modele, setModele] = useState<ResultatModele | null>(null);
  const [chargeModele, setChargeModele] = useState(false);

  function reinit() {
    setResultat(null);
    setModele(null);
    setChargeModele(false);
  }

  async function lancerAnalyse() {
    if (!texte.trim()) return;
    setResultat(analyserTexte(texte));
    // Couche B : l'IA vient corroborer en arrière-plan (chargement paresseux).
    setModele(null);
    setChargeModele(true);
    const r = await analyserAvecModele(texte);
    setModele(r);
    setChargeModele(false);
  }

  function scellerPreuve() {
    if (!resultat) return;
    const dossier = { texte, resultat, horodatage: new Date().toISOString() };
    sessionStorage.setItem("gardienne:preuve", JSON.stringify(dossier));
    router.push("/preuve");
  }

  return (
    <div className="reveal flex flex-col gap-6">
      <header>
        <h1 className="font-display text-2xl text-ink">Analyser un message</h1>
        <p className="mt-1 text-[14px] leading-snug text-ink-soft">
          Colle le message que tu as reçu. On regarde ensemble s&apos;il s&apos;agit de harcèlement.
        </p>
      </header>

      <div className="flex flex-col gap-3">
        <textarea
          value={texte}
          onChange={(e) => {
            setTexte(e.target.value);
            reinit();
          }}
          rows={4}
          placeholder="Colle ici le message…"
          className="w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-[15px] leading-relaxed text-ink outline-none placeholder:text-ink-soft/60 focus:border-brand focus:ring-4 focus:ring-brand/10"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={lancerAnalyse}
            disabled={!texte.trim()}
            className="flex-1 rounded-2xl bg-brand px-5 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-transform active:scale-[0.98] disabled:opacity-40 disabled:shadow-none"
          >
            Analyser
          </button>
          <button
            onClick={() => {
              setTexte(EXEMPLE);
              reinit();
            }}
            className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Exemple
          </button>
        </div>
      </div>

      {resultat && <Verdict resultat={resultat} onSceller={scellerPreuve} />}
      {resultat && <ModelePanel modele={modele} chargement={chargeModele} lexique={resultat} />}
    </div>
  );
}

function ModelePanel({
  modele,
  chargement,
  lexique,
}: {
  modele: ResultatModele | null;
  chargement: boolean;
  lexique: ResultatAnalyse;
}) {
  if (chargement) {
    return (
      <div className="reveal flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-[13px] text-ink-soft">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand border-t-transparent" />
        Analyse IA complémentaire en cours…
      </div>
    );
  }
  if (!modele) return null;

  // Modèle indisponible (hors-ligne / échec) : on assume la couche A.
  if (!modele.disponible) {
    return (
      <div className="reveal rounded-2xl border border-black/5 bg-white/70 px-4 py-3 text-[12px] leading-snug text-ink-soft">
        Analyse locale (camfranglais) utilisée seule — le modèle IA n&apos;a pas pu se charger.
        Le verdict ci-dessus reste valable.
      </div>
    );
  }

  const lexiqueRien = lexique.categorie === "non_preoccupant";
  const apport = lexiqueRien && modele.toxique;

  return (
    <div className="reveal flex flex-col gap-2 rounded-2xl border border-brand/15 bg-lilas/40 px-4 py-3.5">
      <div className="flex items-center gap-2">
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand text-white">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
          </svg>
        </span>
        <span className="text-[13px] font-semibold text-brand-dark">Analyse IA complémentaire</span>
      </div>
      {modele.toxique ? (
        <p className="text-[13px] leading-snug text-ink">
          {apport
            ? "L'IA a repéré un contenu toxique que le lexique n'avait pas signalé. Fais confiance à ton ressenti."
            : "L'IA confirme un contenu toxique."}{" "}
          <span className="text-ink-soft">
            ({modele.label} · {(modele.score * 100).toFixed(0)}%)
          </span>
        </p>
      ) : (
        <p className="text-[13px] leading-snug text-ink-soft">
          L&apos;IA n&apos;a pas ajouté de signal supplémentaire. Le verdict ci-dessus fait foi.
        </p>
      )}
    </div>
  );
}

function Verdict({
  resultat,
  onSceller,
}: {
  resultat: ResultatAnalyse;
  onSceller: () => void;
}) {
  const style = STYLE_NIVEAU[resultat.niveau];
  const meta = META_CATEGORIES[resultat.categorie];
  const rien = resultat.categorie === "non_preoccupant";

  return (
    <section className="reveal flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-xl shadow-ink/5">
      {/* En-tête verdict */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">Verdict</p>
          <h2 className="mt-1 font-display text-xl leading-tight text-ink">{meta.libelle}</h2>
        </div>
        <span
          className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: style.couleur }}
        >
          {style.texte}
        </span>
      </div>

      {/* Jauge de gravité */}
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs text-ink-soft">
          <span>Gravité</span>
          <span className="font-mono font-medium" style={{ color: style.couleur }}>
            {resultat.gravite}/100
          </span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-black/[0.06]">
          <div
            className="h-full rounded-full transition-[width] duration-700"
            style={{ width: `${resultat.gravite}%`, backgroundColor: style.couleur }}
          />
        </div>
      </div>

      {/* Éléments détectés */}
      {!rien && resultat.termesDetectes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {resultat.termesDetectes.map((t, i) => (
            <span
              key={i}
              className="rounded-full bg-lilas px-2.5 py-1 text-[11px] font-medium text-brand-dark"
            >
              {t.libelle}
            </span>
          ))}
        </div>
      )}

      {/* Explication + conseil */}
      <p className="text-[14px] leading-relaxed text-ink">{resultat.explication}</p>
      <div className="rounded-2xl bg-cream-deep/60 p-3.5 text-[13px] leading-relaxed text-ink">
        <span className="font-semibold text-brand-dark">Ce que tu peux faire : </span>
        {resultat.conseil}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2.5 pt-1">
        <button
          onClick={onSceller}
          className="flex items-center justify-center gap-2 rounded-2xl bg-seal px-5 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-seal/25 transition-transform active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Sceller comme preuve
        </button>
        <Link
          href="/aide"
          className="rounded-2xl border border-black/10 bg-white px-5 py-3.5 text-center text-[15px] font-medium text-ink transition-colors hover:bg-black/[0.02]"
        >
          Voir l&apos;aide
        </Link>
      </div>
    </section>
  );
}
