# Bot Telegram Gardienne — vérification de photo truquée

Bonus du projet Gardienne. La fille envoie une photo au bot ; il répond si elle
semble **truquée** (deepfake). Cadre : une image truquée sert à **harceler** →
c'est du cyberharcèlement, pas de la « fake news ».

Détection à **2 couches** (+ 1 en feuille de route) :

1. **Provenance C2PA** — lit les *Content Credentials* signés par les grands
   générateurs (OpenAI/DALL·E, Google Gemini/Imagen, Adobe Firefly…). Preuve
   forte quand présente. ⚠️ souvent effacée après un partage réseau (WhatsApp/FB).
2. **Classifieur de deepfake** — modèle Hugging Face existant ; marche même sans
   métadonnées (analyse des artefacts visuels).
3. **SynthID (filigrane pixel)** — *feuille de route* : survit au partage, mais
   le détecteur public n'est pas encore ouvert (liste d'attente Google).

- **Zéro dépendance** (Node 24+, `fetch` intégré).

## Prérequis

1. **Créer le bot** : sur Telegram, parle à [@BotFather](https://t.me/BotFather),
   commande `/newbot`, récupère le **jeton**.
2. **Jeton Hugging Face** : crée un token « Read » sur
   https://huggingface.co/settings/tokens

## Configuration

```bash
cd bot
cp .env.example .env
# puis renseigne TELEGRAM_BOT_TOKEN et HF_TOKEN dans .env
```

## Lancer

```bash
node --env-file=.env index.mjs
```

Le bot démarre en *long polling* (pas besoin de serveur public). Envoie-lui
`/start`, puis une photo.

## Notes pour la démo

- Le premier appel au modèle peut être lent (démarrage à froid côté HF) : l'en-tête
  `x-wait-for-model` attend qu'il soit prêt. **Teste avant le pitch.**
- Modèle par défaut : `dima806/deepfake_vs_real_image_detection`. Modifiable via
  `DEEPFAKE_MODEL` (voir `.env.example`).
- Aucune image n'est stockée par le bot.
