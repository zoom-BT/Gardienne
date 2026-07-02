import Link from "next/link";

export default function Accueil() {
  return (
    <div className="reveal flex flex-col gap-8">
      {/* En-tête marque */}
      <header className="flex items-center gap-2.5">
        <Shield />
        <span className="font-display text-lg font-semibold tracking-tight text-ink">
          Gardienne
        </span>
      </header>

      {/* Hero — la thèse */}
      <section className="pt-2">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-lilas px-3 py-1 text-xs font-medium text-brand-dark">
          Girls in Cyber Defense
        </p>
        <h1 className="font-display text-[2.7rem] leading-[1.05] tracking-tight text-ink">
          Tu n&apos;es
          <br />
          pas seule.
        </h1>
        <p className="mt-4 max-w-[22rem] text-[15px] leading-relaxed text-ink-soft">
          Face au harcèlement en ligne, Gardienne t&apos;aide à{" "}
          <strong className="font-semibold text-ink">comprendre</strong> ce que tu subis, à en{" "}
          <strong className="font-semibold text-ink">garder la preuve</strong>, et à savoir{" "}
          <strong className="font-semibold text-ink">quoi faire</strong>.
        </p>

        <Link
          href="/analyser"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-5 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand/25 transition-transform active:scale-[0.98]"
        >
          Analyser un message
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      {/* Les 3 temps du parcours */}
      <section className="grid gap-3">
        <Etape
          titre="Détecter"
          desc="On reconnaît le harcèlement, même en camfranglais ou en pidgin."
          teinte="lilas"
        />
        <Etape
          titre="Prouver"
          desc="On scelle ton message par une empreinte infalsifiable, prête pour une plainte."
          teinte="seal"
        />
        <Etape
          titre="Être aidée"
          desc="Un plan clair pour agir, et un espace d'écoute rien que pour toi."
          teinte="coral"
        />
      </section>

      <p className="px-1 text-center text-xs text-ink-soft">
        Rien n&apos;est envoyé sur Internet. Tout reste sur ton téléphone.
      </p>
    </div>
  );
}

function Etape({
  titre,
  desc,
  teinte,
}: {
  titre: string;
  desc: string;
  teinte: "lilas" | "seal" | "coral";
}) {
  const pastille =
    teinte === "lilas"
      ? "bg-lilas text-brand-dark"
      : teinte === "seal"
        ? "bg-[color-mix(in_srgb,var(--color-seal)_15%,white)] text-seal-dark"
        : "bg-coral-soft text-coral";
  return (
    <div className="flex items-start gap-3.5 rounded-2xl border border-black/5 bg-white/70 p-4">
      <span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl ${pastille}`}>
        <Dot />
      </span>
      <div>
        <h3 className="font-display text-base font-medium text-ink">{titre}</h3>
        <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{desc}</p>
      </div>
    </div>
  );
}

function Shield() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/30">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    </span>
  );
}

function Dot() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
