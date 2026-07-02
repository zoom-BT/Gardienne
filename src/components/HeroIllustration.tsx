// Illustration héro sur-mesure (SVG). Thème : une jeune femme protégée par un
// bouclier. Figure volontairement abstraite (pas de visage réel). Palette de marque.
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 360 260"
      className="h-auto w-full"
      role="img"
      aria-label="Une jeune femme protégée par un bouclier"
    >
      <defs>
        <linearGradient id="g-shield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="g-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EFE9FE" />
          <stop offset="1" stopColor="#FDEEF0" />
        </linearGradient>
      </defs>

      {/* Fond arrondi doux */}
      <rect x="8" y="14" width="344" height="232" rx="28" fill="url(#g-bg)" />

      {/* Arcs de protection */}
      <g fill="none" stroke="#0E9F8E" strokeLinecap="round" opacity="0.5">
        <path d="M120 214a90 90 0 0 1 150 0" strokeWidth="3" opacity="0.35" />
        <path d="M140 214a68 68 0 0 1 110 0" strokeWidth="3" opacity="0.55" />
      </g>

      {/* Figure féminine abstraite (chignon + épaules) */}
      <g>
        <circle cx="150" cy="120" r="24" fill="#F3C9B0" />
        <path d="M126 116a24 24 0 0 1 48 0c0-4-4-26-24-26s-24 22-24 26Z" fill="#3B2A46" />
        <circle cx="150" cy="96" r="8" fill="#3B2A46" />
        <path d="M120 214v-24a30 30 0 0 1 60 0v24Z" fill="#F26B7A" />
      </g>

      {/* Bouclier */}
      <g transform="translate(214 92)">
        <path
          d="M46 0 88 17v27c0 25-17 42-42 52C21 86 4 69 4 44V17Z"
          fill="url(#g-shield)"
        />
        <path
          d="M30 46l11 11 20-24"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Petites bulles flottantes */}
      <g>
        <rect x="60" y="52" width="52" height="30" rx="12" fill="#fff" />
        <path d="M74 82l-6 10 14-6Z" fill="#fff" />
        <circle cx="78" cy="67" r="3" fill="#C4B5FD" />
        <circle cx="88" cy="67" r="3" fill="#C4B5FD" />
        <circle cx="98" cy="67" r="3" fill="#C4B5FD" />
      </g>
      <g opacity="0.9">
        <circle cx="300" cy="60" r="16" fill="#0E9F8E" />
        <path d="M293 60l5 5 9-10" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Étincelles */}
      <g fill="#FB7185">
        <circle cx="196" cy="46" r="3" />
        <circle cx="326" cy="150" r="3" />
        <circle cx="52" cy="150" r="3" />
      </g>
    </svg>
  );
}
