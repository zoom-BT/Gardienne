import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gardienne — comprends, prouve, agis",
    short_name: "Gardienne",
    description:
      "Gardienne aide les filles victimes de cyberharcèlement à comprendre, garder la preuve et savoir quoi faire.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "fr",
    background_color: "#fbf8f4",
    theme_color: "#6d28d9",
    categories: ["social", "utilities", "education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
