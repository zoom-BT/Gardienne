"use client";

import { useEffect } from "react";

/**
 * Enregistre le service worker pour la PWA (installation + hors-ligne).
 * Uniquement en production : en développement, le SW gênerait le rechargement
 * à chaud (HMR).
 */
export default function RegisterSW() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  return null;
}
