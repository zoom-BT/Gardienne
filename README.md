# 🛡️ Gardienne — *Comprends. Prouve. Agis.*

Application de protection contre le **cyberharcèlement** au Cameroun, conçue pour le
**2ᵉ Hackathon Cameroonian Girls in STEAM — « Girls in Cyber Defense »**.

Gardienne aide une fille victime de harcèlement en ligne à **comprendre** ce qu'elle
subit (même en camfranglais/pidgin), à en **garder une preuve recevable**, et à
**savoir quoi faire** (dossier de plainte + assistant juridique + contacts).

> Détails produit : [`docs/GARDIENNE-cahier-des-charges.md`](docs/GARDIENNE-cahier-des-charges.md) ·
> Pitch : [`docs/PITCH-SCRIPT.md`](docs/PITCH-SCRIPT.md) · Droit : [`docs/Cadre Juridique Cyberharcèlement Cameroun.md`](docs/)

---

## ✨ Fonctionnalités

- **Détection de harcèlement** sur un **texte** ou une **capture d'écran**, avec
  classification par gravité (insulte / harcèlement / menace / chantage-sextorsion).
- **Compréhension du camfranglais & du pidgin** — le vrai différenciateur.
- **Preuve scellée** : empreinte **SHA-256** + **horodatage certifié serveur** (non antidatable).
- **Dossier de plainte** pré-rempli (Procureur + articles de loi + annexe), imprimable en PDF.
- **Assistant juridique (RAG)** ancré sur la loi camerounaise réelle, avec sources.
- **Bot Telegram** de vérification de **photo truquée** (signature C2PA + classifieurs IA).
- **PWA** installable et **fonctionnement hors-ligne** (détection texte + scellement local).

---

## 🧰 Stack & modèles

| Domaine | Technologie / Modèle | Rôle |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) + **TypeScript** | Web app full-stack + routes API |
| UI | **Tailwind CSS v4**, `next/font` (Fraunces, Inter, IBM Plex Mono) | Design system, responsive mobile + desktop |
| PWA | `manifest.ts`, **service worker** (cache app-shell) | Installable, hors-ligne |
| Détection texte — couche A | **Lexique camfranglais/pidgin** fait main + règles (regex, normalisation NFD) | Fiable, hors-ligne, déterministe |
| Détection texte — couche B | **transformers.js** — `Xenova/toxic-bert` (ONNX, quantifié q8) | Généralisation IA, exécutée côté navigateur |
| Intégrité preuve | **Web Crypto SHA-256** (client) + **HMAC-SHA256** (serveur) | Empreinte + horodatage certifié |
| Assistant juridique | **RAG** : base vérifiée + récupération lexicale + **Groq `openai/gpt-oss-20b`** | Réponses ancrées, sans hallucination |
| Analyse de capture | **Groq `meta-llama/llama-4-scout` (vision)** | Extraction plateforme/auteur/heure/message |
| Bot image | **Node** (long polling) + `dima806/deepfake_vs_real` & `dima806/ai_vs_real` (Hugging Face) | Double classifieur truquage |
| Provenance image | **C2PA Content Credentials** (scan JUMBF) · **SynthID** (feuille de route) | Origine IA (OpenAI, Google…) |
| Déploiement | **Vercel** + **GitHub** | CI/CD auto au push |

---

## 🏗️ Techniques clés

- **Détection hybride** : un lexique local (déterministe, hors-ligne) fusionné avec un
  modèle de toxicité ; règle composite pour la sextorsion (verbe de diffusion + contenu visuel).
- **RAG (Retrieval-Augmented Generation)** : on récupère d'abord des passages juridiques
  vérifiés, puis le LLM répond **uniquement** à partir de ce contexte (consigne stricte) →
  pas d'invention de loi ; repli local si l'API est indisponible.
- **Preuve infalsifiable** : SHA-256 (toute altération change l'empreinte) + horodatage
  signé côté serveur (non antidatable). Conforme à la pratique probatoire camerounaise
  (huissier + hachage), là où une simple capture a une valeur faible.
- **Vision → structuré** : le modèle multimodal renvoie un JSON (`response_format json_object`).
- **Privacy by design** : l'analyse de texte reste sur l'appareil ; on n'envoie que
  l'empreinte pour l'horodatage, jamais le message.

---

## 🚀 Lancer le projet

```bash
npm install
npm run dev        # http://localhost:3000
```

Variables d'environnement (voir [`.env.example`](.env.example)) — créer `.env.local` :

```
GROQ_API_KEY=...      # assistant juridique (RAG) + analyse de capture (vision)
SCEAU_SECRET=...      # horodatage de preuve certifié (valeur aléatoire longue)
```

Build de production :

```bash
npm run build && npm start
```

### Bot Telegram

```bash
cd bot
cp .env.example .env  # renseigner TELEGRAM_BOT_TOKEN et HF_TOKEN
node --env-file=.env index.mjs
```

Voir [`bot/README.md`](bot/README.md).

---

## 📁 Structure

```
src/app/            pages (accueil, analyser, preuve, aide) + routes API
  api/juridique     RAG juridique (Groq)
  api/sceller       horodatage certifié (HMAC)
  api/extraire-image extraction vision d'une capture (Groq)
src/lib/detection   lexique + analyse + modèle de toxicité
src/lib/preuve      scellement SHA-256 + références juridiques
src/lib/rag         base de connaissances + récupération
bot/                bot Telegram (détection de photo truquée)
docs/               cahier des charges, pitch, livrables, cadre juridique
```

---

*Usage : information et prévention. Ne remplace pas un conseil juridique ni les services
d'urgence. En cas de danger immédiat : Police 117 · Gendarmerie 113 · ANTIC 8202 / 8206.*
