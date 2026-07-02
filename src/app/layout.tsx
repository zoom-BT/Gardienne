import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Gardienne — comprends, prouve, agis",
  description:
    "Gardienne aide les filles victimes de cyberharcèlement au Cameroun à comprendre ce qu'elles subissent, constituer une preuve et savoir quoi faire.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full app-backdrop">
        {/* Cadre « téléphone » centré sur grand écran, plein écran sur mobile */}
        <div className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col bg-cream shadow-[0_0_80px_-20px_rgba(45,20,80,0.25)] sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:rounded-[32px] sm:border sm:border-white/60">
          <main className="flex-1 overflow-y-auto px-5 pb-28 pt-6">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
