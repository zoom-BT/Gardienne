"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Accueil", icon: IconHome },
  { href: "/analyser", label: "Analyser", icon: IconScan },
  { href: "/aide", label: "Aide", icon: IconHeart },
] as const;

// Navigation latérale — affichée uniquement sur grand écran (desktop).
export default function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-black/5 bg-white/50 px-4 py-7 lg:flex">
      <Link href="/" className="mb-8 flex items-center gap-2.5 px-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white shadow-md shadow-brand/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </span>
        <span className="font-display text-lg font-semibold tracking-tight text-ink">Gardienne</span>
      </Link>

      <nav className="flex flex-col gap-1">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[14px] font-medium transition-colors ${
                active ? "bg-lilas text-brand-dark" : "text-ink-soft hover:bg-black/[0.03] hover:text-ink"
              }`}
            >
              <Icon />
              {label}
            </Link>
          );
        })}
      </nav>

      <p className="mt-auto px-3 text-[11px] leading-snug text-ink-soft">
        Rien n&apos;est envoyé sur Internet. Tout reste sur ton appareil.
      </p>
    </aside>
  );
}

function IconHome() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}
function IconScan() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M4 12h16" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.5-9.2-8.3C1.2 8.9 2.5 5.5 5.7 5.5c2 0 3.2 1.4 3.8 2.4l.1.2.1-.2c.6-1 1.8-2.4 3.8-2.4 3.2 0 4.5 3.4 2.9 6.2C19 15.5 12 20 12 20Z" />
    </svg>
  );
}
