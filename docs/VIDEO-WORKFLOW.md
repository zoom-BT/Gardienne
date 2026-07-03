# 🎬 Workflow — Vidéo de démo Gardienne

Objectif : **2 à 2 min 30**, verticale (mobile-first) ou 16:9, en français, voix-off **ou**
sous-titres. Montrer, ne pas raconter. Sert aussi de **secours** si la démo live échoue.

## 1. Outils (gratuits, sous Windows)
- **Capture écran PC** : Xbox Game Bar (`Win + G`) — rapide ; ou **OBS Studio** (meilleur).
- **Capture téléphone** (recommandé, l'app est mobile) : l'enregistreur d'écran intégré
  d'Android/iOS, en ouvrant l'URL **Vercel** dans Chrome (installe la PWA pour le plein écran).
- **Bot Telegram** : filme le téléphone, ou capture **Telegram Desktop**.
- **Montage** : **Clipchamp** (inclus dans Windows 11) ou **CapCut** — trim, titres, sous-titres.

## 2. Avant d'enregistrer (checklist)
- [ ] App accessible (Vercel ou `npm run dev`) — teste tout le parcours une fois.
- [ ] **Bot lancé** et testé (envoie une image « en Fichier »).
- [ ] Prépare **2 fichiers** : une **capture d'écran** de conversation de harcèlement (même fictive),
      et une **image générée par IA** (Gemini/ChatGPT) à envoyer au bot **en Fichier**.
- [ ] Active **Ne pas déranger** (pas de notifications à l'écran).
- [ ] Zoom/luminosité OK, batterie chargée.

## 3. Storyboard (timecodes)
| Temps | À l'écran | À dire (voix-off / sous-titre) |
|---|---|---|
| 0:00–0:12 | Écran d'accueil animé (splash) | « Au Cameroun, 68 % des femmes connectées ont subi une violence numérique — et moins de 5 % portent plainte. Voici Gardienne. » |
| 0:12–0:45 | /analyser → **importer la capture** → verdict | « On importe une capture. L'IA en extrait l'auteur et le message — même en camfranglais — et le classe : Chantage/sextorsion, gravité 95, critique. » |
| 0:45–1:05 | « Sceller » → page Preuve | « En un clic : preuve scellée par empreinte SHA-256 et horodatage certifié. Infalsifiable, non antidatable. » |
| 1:05–1:25 | « Dossier pour la police » → aperçu | « Et un dossier de plainte pré-rempli, avec les articles de loi — prêt à imprimer. » |
| 1:25–1:45 | Assistant juridique → question | « Une question de droit ? Réponse fondée sur la loi camerounaise, source citée. » |
| 1:45–2:05 | Telegram @Gardienne_bot → image en Fichier | « Une photo truquée ? Le bot lit sa signature d'IA — ici, Google — et l'analyse. » |
| 2:05–2:20 | Retour logo + slogan | « Gardienne : comprends, prouve, agis. Aucune fille ne devrait affronter ça seule. » |

## 4. Conseils de tournage
- Enregistre **par segments** (une scène = une prise) ; c'est plus facile à monter et à refaire.
- Utilise le bouton **« Exemple »** ou tes fichiers préparés → parcours **fiable** et reproductible.
- Laisse **1–2 s** de pause sur chaque écran clé (verdict, empreinte) pour la lisibilité.
- Ajoute des **titres courts** à l'écran (« Détecter », « Prouver », « Dossier », « Aide »).
- Si pas de voix-off : mets des **sous-titres** (Clipchamp les génère).

## 5. Export & dépôt
- Format **MP4 (H.264)**, 1080p, < 100 Mo si possible.
- Nom : `Gardienne-demo.mp4`.
- Dépose-la avec les 3 autres livrables **avant l'heure limite**.

> Astuce : cette vidéo est aussi ton **filet de sécurité** — si le Wi-Fi lâche pendant le pitch,
> tu la lances à la place de la démo live.
