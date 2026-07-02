const ETAPES = [
  {
    titre: "Ne réponds pas, ne cède pas",
    desc: "Face au chantage, ne paie rien et n'envoie rien de plus. Ça ne fait qu'encourager l'agresseur.",
  },
  {
    titre: "Garde les preuves",
    desc: "Ne supprime rien. Scelle chaque message dans Gardienne : tu obtiens une empreinte prête pour une plainte.",
  },
  {
    titre: "Bloque et signale",
    desc: "Bloque le compte, puis signale-le à la plateforme (Facebook, WhatsApp, TikTok…). Chaque appli a un bouton « Signaler ».",
  },
  {
    titre: "Porte plainte",
    desc: "La loi camerounaise punit la cybercriminalité et la sextorsion. Rends-toi à la police, à la gendarmerie, ou signale à l'ANTIC.",
  },
];

export default function Aide() {
  return (
    <div className="reveal flex flex-col gap-6">
      <header>
        <h1 className="font-display text-2xl text-ink">Tu vas t&apos;en sortir</h1>
        <p className="mt-1 text-[14px] leading-snug text-ink-soft">
          Voici les étapes pour te protéger, et des personnes à qui parler.
        </p>
      </header>

      {/* Plan d'action */}
      <section className="flex flex-col gap-3">
        {ETAPES.map((e, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 rounded-2xl border border-black/5 bg-white p-4"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-lilas font-display text-sm font-semibold text-brand-dark">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-[15px] font-medium text-ink">{e.titre}</h3>
              <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{e.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Espace d'écoute */}
      <section className="rounded-3xl border border-coral/20 bg-coral-soft p-5">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-coral text-white">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20s-7-4.5-9.2-8.3C1.2 8.9 2.5 5.5 5.7 5.5c2 0 3.2 1.4 3.8 2.4l.1.2.1-.2c.6-1 1.8-2.4 3.8-2.4 3.2 0 4.5 3.4 2.9 6.2C19 15.5 12 20 12 20Z" />
            </svg>
          </span>
          <h2 className="font-display text-lg text-ink">Espace d&apos;écoute</h2>
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-ink">
          Ce qui t&apos;arrive n&apos;est pas ta faute, et tu n&apos;as pas à le vivre seule. Parler à
          quelqu&apos;un de confiance change tout.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <Contact nom="Écoute & soutien psychologique" numero="[À COMPLÉTER]" />
          <Contact nom="Assistance aux victimes (ANTIC)" numero="[À COMPLÉTER]" />
          <Contact nom="Police / gendarmerie" numero="117 / 113" />
        </div>
      </section>

      <p className="px-1 text-center text-xs text-ink-soft">
        En cas de danger immédiat, contacte tout de suite la police.
      </p>
    </div>
  );
}

function Contact({ nom, numero }: { nom: string; numero: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
      <span className="text-[13px] font-medium text-ink">{nom}</span>
      <span className="font-mono text-[13px] font-medium text-coral">{numero}</span>
    </div>
  );
}
