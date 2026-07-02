"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { href: "/", label: "Accueil", icon: IconHome },
  { href: "/analyser", label: "Analyser", icon: IconScan },
  { href: "/aide", label: "Aide", icon: IconHeart },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-10 border-t border-black/5 bg-cream/85 px-3 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur">
      <ul className="flex items-stretch justify-around">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] font-medium transition-colors ${
                  active ? "text-brand" : "text-ink-soft hover:text-ink"
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-2xl transition-colors ${
                    active ? "bg-lilas" : "bg-transparent"
                  }`}
                >
                  <Icon />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}

function IconScan() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <path d="M4 12h16" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.5-9.2-8.3C1.2 8.9 2.5 5.5 5.7 5.5c2 0 3.2 1.4 3.8 2.4l.1.2.1-.2c.6-1 1.8-2.4 3.8-2.4 3.2 0 4.5 3.4 2.9 6.2C19 15.5 12 20 12 20Z" />
    </svg>
  );
}
