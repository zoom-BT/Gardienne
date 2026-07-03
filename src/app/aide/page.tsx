import { TELEGRAM_BOT_URL } from "@/lib/config";

const ETAPES = [
  {
    titre: "Ne réponds pas, ne cède pas",
    desc: "Face au chantage, ne paie rien et n'envoie rien de plus. Ça ne fait qu'encourager l'agresseur.",
  },
  {
    titre: "Garde les preuves",
    desc: "Ne supprime rien. Une simple capture d'écran a une valeur faible : scelle chaque message dans Gardienne pour obtenir une empreinte (SHA-256) qui prouve qu'il n'a pas été modifié.",
  },
  {
    titre: "Bloque et signale",
    desc: "Bloque le compte, signale-le à la plateforme (Facebook, WhatsApp, TikTok…), et signale à l'ANTIC via ses numéros verts gratuits : 8202 ou 8206.",
  },
  {
    titre: "Porte plainte",
    desc: "La loi camerounaise punit ces faits (Loi 2010/012, Code Pénal). Dépose plainte au commissariat, à la gendarmerie, ou par écrit au Procureur. Un avocat gratuit est possible (assistance judiciaire).",
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

      {/* Vérifier une image truquée — passerelle vers le bot Telegram */}
      <a
        href={TELEGRAM_BOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3.5 rounded-3xl border border-brand/15 bg-lilas/50 p-4 transition-transform active:scale-[0.99]"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 5 2.5 12.3l5.6 1.9M21 5l-3 14-6.9-5.1M21 5 8.1 14.2m0 0 .3 4.8 3-3.6" />
          </svg>
        </span>
        <div className="flex-1">
          <h3 className="font-display text-[15px] font-medium text-ink">
            Une photo truquée de toi circule ?
          </h3>
          <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">
            Vérifie-la sur notre bot Telegram — il détecte les images générées par IA.
          </p>
        </div>
        <svg className="shrink-0 text-brand" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

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
          <Contact nom="ALVF — violences faites aux femmes (Yaoundé)" numero="686 967 677" />
          <Contact nom="Signalement ANTIC (numéros verts)" numero="8202 / 8206" />
          <Contact nom="MINPROFF (promotion de la femme)" numero="222 23 25 50" />
          <Contact nom="Ligne Enfance en détresse (mineures)" numero="116" />
          <Contact nom="Police Secours / Gendarmerie" numero="117 / 113" />
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
