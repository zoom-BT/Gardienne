// Génère les icônes PNG de la PWA à partir de public/icon.svg.
// Lancer : node scripts/gen-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/icon.svg"));

// Version « maskable » : le même bouclier mais avec une marge de sécurité
// (fond violet plein, contenu réduit à ~78 % centré).
const maskableSvg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
     <rect width="512" height="512" fill="#6D28D9"/>
     <g transform="translate(56,56) scale(0.78)" fill="none" stroke="#ffffff" stroke-width="26" stroke-linecap="round" stroke-linejoin="round">
       <path d="M256 96 L392 152 V248 C392 336 336 392 256 424 C176 392 120 336 120 248 V152 Z"/>
       <path d="M210 254 l34 34 64 -74"/>
     </g>
   </svg>`,
);

const cibles = [
  { src: svg, taille: 192, sortie: "public/icon-192.png" },
  { src: svg, taille: 512, sortie: "public/icon-512.png" },
  { src: maskableSvg, taille: 512, sortie: "public/icon-maskable-512.png" },
  { src: svg, taille: 180, sortie: "src/app/apple-icon.png" },
];

for (const { src, taille, sortie } of cibles) {
  await sharp(src, { density: 300 }).resize(taille, taille).png().toFile(join(root, sortie));
  console.log(`✓ ${sortie} (${taille}×${taille})`);
}
