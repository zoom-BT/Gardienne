// Test rapide du moteur de détection (couche A). Lancer : npx tsx scripts/test-detection.mts
import { analyserTexte } from "../src/lib/detection/analyserTexte";

const cas: string[] = [
  "si tu me quittes je vais poster tes photos nues, everybody go see",
  "je vais te retrouver et tu vas voir",
  "envoie tes nudes sinon je publie ta vidéo",
  "you be mbut, you no get sense",
  "reponds moi maintenant, pourquoi tu ne reponds pas",
  "salut, on se voit demain a la fac ?",
  "i go beat you wait make i catch you",
  "je connais ta maison, fais attention a toi",
];

for (const c of cas) {
  const r = analyserTexte(c);
  console.log(`\n« ${c} »`);
  console.log(`  → ${r.categorie}  | gravité ${r.gravite} (${r.niveau})`);
  console.log(`  → détecté: ${r.termesDetectes.map((t) => t.libelle).join(", ") || "rien"}`);
}
