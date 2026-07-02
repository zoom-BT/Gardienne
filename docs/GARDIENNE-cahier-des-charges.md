# 🛡️ GARDIENNE — Cahier des charges & plan d'action

> **2ᵉ Hackathon Cameroonian Girls in STEAM · « Girls in Cyber Defense »**
> Défi n°1 · Cyberharcèlement · Dépôt des livrables : **Vendredi 03 juillet 2026, avant 10h00 (strict)**
> Document rédigé le 2026-07-02.

---

## 0. COMMENT UTILISER CE DOCUMENT (lire en premier — surtout si tu es une IA qui reprend le projet)

Ce document est la **source de vérité** du projet. Il a été construit lors d'une session de brainstorming et contient **toutes les décisions déjà verrouillées** — ne les remets pas en question, continue l'exécution.

- **Contexte équipe :** 2 personnes. Le porteur du projet est un homme ; le hackathon est « Girls in STEAM ». Choix stratégique assumé : orienter le projet vers la **protection des filles/femmes** pour un impact fort sur le jury, dans un contexte camerounais.
- **Ton rôle si tu reprends :** exécuter le plan d'action (§10), en respectant les décisions verrouillées (§3) et le principe directeur (§4.3).
- **État d'avancement :** voir §16 (section vivante — mets-la à jour à chaque avancée).
- **Ne re-brainstorme pas** le concept, le défi, la stack ou le modèle économique : c'est décidé. Concentre-toi sur construire le MVP (§8-9), la démo (§13) et les livrables (§15).
- **Langue du projet :** français (interface et pitch). Le camfranglais/pidgin n'apparaît que dans les **exemples de messages à détecter**.

---

## 1. CONTEXTE DU HACKATHON

- **Thème :** Girls in Cyber Defense — « Former une génération de protectrices du numérique ».
- **Défi choisi :** **N°1 — Cyberharcèlement.** Enjeu officiel : protéger les jeunes, surtout les filles, du harcèlement en ligne. Pistes : détection, signalement, modération, espaces d'écoute.
- **Format pitch :** 5 min de présentation + 10 min de questions. Chronomètre strict.
- **Critère le plus différenciant :** la slide **« Cybersécurité » = 20 points**. C'est LE critère à gagner.
- **4 livrables à déposer avant 10h00 le Jour 2 :**
  1. La **présentation** (pitch deck, 8 slides).
  2. Le **code source**.
  3. Une **vidéo de démo**.
  4. Le **Business Model Canvas**.

---

## 2. LE PROBLÈME

Au Cameroun, les filles et jeunes femmes subissent massivement le harcèlement en ligne (WhatsApp, Facebook, Messenger) : insultes, menaces, **chantage à caractère sexuel (sextorsion)**, diffusion ou menace de diffusion d'images intimes (réelles ou **truquées**). Les victimes :
- ne savent pas **qualifier** ce qu'elles vivent (« est-ce grave ? est-ce du harcèlement ? ») ;
- n'ont **aucune preuve exploitable** pour porter plainte ;
- ne savent **pas quoi faire** ni vers qui se tourner ;
- souffrent en **silence**.

> **Chiffre-choc à trouver/valider avant le pitch** (slide 01) : statistique sur le cyberharcèlement des femmes/filles en Afrique ou au Cameroun. `[À COMPLÉTER]`

---

## 3. DÉCISIONS VERROUILLÉES (ne pas re-débattre)

| Sujet | Décision |
|---|---|
| Défi officiel | N°1 Cyberharcèlement |
| Nom du projet | **Gardienne** (à confirmer, mais utilisé partout ici) |
| Public bénéficiaire | Filles/jeunes femmes camerounaises (≈13-30 ans), **usage 100% gratuit** |
| Récit produit | **Prévenir → Détecter → Prouver → Agir → Soutenir** |
| Cœur cyber (les 20 pts) | 1) Détection IA hybride adaptée au camfranglais/pidgin · 2) Preuve scellée par hachage (intégrité des données) |
| Différenciateur | **Comprend le harcèlement local (camfranglais/pidgin)** — les modèles génériques en sont incapables |
| Stack | **Next.js full-stack**, tout en JavaScript/TypeScript, **détection hors-ligne** (aucune dépendance internet le jour J) |
| Brique deepfake | **Bonus P1** — présentée comme « photo truquée pour harceler », PAS comme un 2ᵉ défi (voir §4.3) |
| Modèle éco | Gratuit pour victimes ; financé par écoles/universités, télécoms (RSE), ONG, MINPROFF |

---

## 4. LE PROJET « GARDIENNE »

### 4.1 En une phrase
Gardienne est une application web qui aide une fille victime de cyberharcèlement à **comprendre** ce qu'elle subit, à **constituer une preuve** exploitable, et à **savoir quoi faire** — avec une détection qui comprend enfin la façon dont on harcèle au Cameroun.

### 4.2 Le récit en 5 temps
1. **Prévenir** — sensibiliser (mini-simulateur de scénarios) *(P1)*.
2. **Détecter** — analyser un message et qualifier sa gravité *(P0, cœur)*.
3. **Prouver** — sceller la preuve par hachage horodaté *(P0, cœur)*.
4. **Agir** — plan d'action guidé (bloquer, signaler, plainte ANTIC) *(P0)*.
5. **Soutenir** — espace d'écoute, ressources, contacts *(P0)*.

### 4.3 ⚠️ PRINCIPE DIRECTEUR (règle anti « deux défis »)
Il existe un autre défi « Fake news & deepfakes ». **Notre brique de détection d'image truquée n'est PAS de la fake news** : c'est une **arme de harcèlement** (une fille reçoit une photo intime truquée d'elle-même pour l'humilier / la faire chanter → sextorsion → cyberharcèlement pur).

**Règle :** tout ajout doit répondre à *« comment ça protège une fille harcelée ? »*. Le mot « deepfake » n'est jamais mis en avant : on dit **« photo truquée pour harceler »**. Ainsi personne ne peut dire qu'on traite deux défis.

---

## 5. UTILISATRICES & PERSONA

- **Persona principal :** *Aïcha, 19 ans, étudiante à Yaoundé.* Reçoit sur WhatsApp des messages d'un inconnu mêlant français et camfranglais, d'abord des « compliments » insistants, puis des menaces de diffuser une photo truquée d'elle. Elle a honte, ne sait pas si c'est « assez grave » pour en parler, n'a gardé aucune trace.
- **Ce dont elle a besoin :** être rassurée que c'est grave et pas de sa faute · garder une preuve · savoir quoi faire concrètement · un endroit sûr.

---

## 6. MODÈLE ÉCONOMIQUE (pour slide 06 + BMC)

**Principe :** on ne monétise jamais les victimes. On distingue *utilisatrices* (gratuit) et *clients/financeurs* (payent).

- **B2B (principal)** — écoles, universités, campus : **licence/abonnement annuel** pour protéger leurs élèves (tableau de bord anonymisé, ateliers). Recoupe le Défi 5.
- **Télécoms (RSE + zero-rating)** — MTN, Orange, Camtel : parrainage + accès gratuit à l'app sans consommer de data.
- **ONG & bailleurs** — UN Women, UNICEF, GIZ, associations : subventions de déploiement.
- **Public** — MINPROFF (Ministère de la Promotion de la Femme et de la Famille), ANTIC : intégration nationale.
- **Freemium** — gratuit pour l'individu, payant pour l'institution (dashboard, multi-utilisateurs, stats).
- **Ateliers de sensibilisation** payants (revenu + mission).

**Pitch en une phrase :** « Gardienne est gratuit pour chaque fille victime ; il est financé par les écoles, les télécoms et les ONG dont c'est la responsabilité de les protéger. Entreprise à mission : l'impact social finance la viabilité. »

---

## 7. DIFFÉRENCIATION (pour slide 06 — « qu'est-ce qui vous rend uniques »)

> **« Nous comprenons le harcèlement tel qu'il se dit vraiment au Cameroun. »**

Les outils existants (entraînés sur de l'anglais/français standard) ratent le harcèlement en **pidgin / camfranglais / avec menaces voilées**. Ex. : *« je go share tes nudes hein »* passe sous les radars d'un modèle générique. Gardienne comble ce trou avec une **couche de détection locale faite main**.

---

## 8. ARCHITECTURE TECHNIQUE

**Contraintes directrices :** fiabilité en démo (aucune dépendance internet le jour J), rapidité de dev (une seule stack), composante cyber démontrable.

- **Framework :** Next.js (App Router) + TypeScript. Front + API routes dans le même projet.
- **Style :** Tailwind CSS (rapide, propre pour la démo).
- **Détection = 2 couches (100% JS, hors-ligne) :**
  - **Couche A — Lexique + règles camfranglais (LE différenciateur, garanti en démo).** Un dictionnaire fait main de termes/patterns (insultes, menaces, chantage/sextorsion) en français + pidgin + camfranglais, avec pondération de gravité. Toujours fonctionnel, déterministe, parfait pour une démo qui ne plante pas.
  - **Couche B — Modèle de toxicité (généralisation).** Petit modèle via **transformers.js (ONNX)** exécuté côté client/API, ex. `Xenova/toxic-bert` (multilingue/EN). **À VÉRIFIER que le modèle se charge et tourne** ; sinon, la Couche A porte seule la démo (fallback acceptable). Ne bloque pas le projet là-dessus.
  - **Fusion :** score final = max/combinaison des deux couches → **classification par gravité**.
- **Classification par gravité (au lieu d'un simple binaire) :** `Insulte` · `Menace` · `Chantage / sextorsion` · `Harcèlement répété` · `Non préoccupant`. Chaque catégorie déclenche un conseil adapté.
- **Preuve scellée :** hash **SHA-256** du contenu (message + métadonnées + horodatage), via l'API Web Crypto (`crypto.subtle`). Génère un « dossier de preuve » exportable (JSON + éventuellement PDF/impression) contenant : texte, date/heure, catégorie détectée, empreinte SHA-256. Argument : **intégrité** — on peut prouver que la preuve n'a pas été altérée.
- **Stockage :** local (localStorage / fichier téléchargé) pour le MVP — **pas de compte, pas de serveur de données** (protège la vie privée + simplifie). Argument cyber : *privacy by design*.
- **Brique deepfake (P1) :** petit **bot Telegram** (lib `node-telegram-bot-api` ou `telegraf`) qui reçoit une image et renvoie un verdict via un modèle HF de détection d'image truquée déjà existant (ex. `prithivMLmods/Deepfake-Detect-Siglip2`, `Wvolf/ViT_Deepfake_Detection`). Telegram choisi car API gratuite, sans validation Meta, fiable en démo. **Seulement si le P0 est terminé.**

---

## 9. PÉRIMÈTRE MVP

### P0 — À CODER IMPÉRATIVEMENT (la démo et les 20 pts reposent là-dessus)
1. **Page d'analyse :** l'utilisatrice colle un message → clic « Analyser » → **verdict de gravité** clair + explication (« ceci est une menace / du chantage sexuel »).
2. **Sceller comme preuve :** bouton qui génère un dossier de preuve (hash SHA-256 + horodatage + catégorie) et permet de le télécharger/imprimer.
3. **Plan d'action + écoute :** écran guidé statique : bloquer, signaler (Facebook/WhatsApp), modèle de plainte ANTIC, contacts d'aide, messages de soutien.

### P1 — BONUS (seulement si P0 terminé et testé)
4. **Bot Telegram « photo truquée »** (réutilise un modèle HF existant).
5. **Mini-simulateur de prévention** (1-2 scénarios interactifs « Et si c'était toi ? »).

### NON FAIT (à *raconter* comme vision dans le pitch, pas à coder)
- Comptes utilisatrices, tableau de bord établissement, app mobile, programme « ambassadrices », intégration WhatsApp officielle.

**Règle YAGNI :** en cas de doute, on coupe. Un P0 impeccable > un P1 bâclé.

---

## 10. PLAN D'ACTION (étapes ordonnées — exécutables par une IA ou l'équipe)

> Coche au fur et à mesure dans §16.

**Étape 0 — Amorçage projet**
- [ ] `npx create-next-app@latest gardienne` (TypeScript, Tailwind, App Router).
- [ ] Nettoyer la page d'accueil, poser la charte visuelle (voir §11), le layout.

**Étape 1 — Couche A détection (le différenciateur)**
- [ ] Créer `lib/detection/lexique.ts` : dictionnaire de termes/patterns camfranglais/pidgin/français, chacun avec `{ catégorie, gravité }`. (Voir exemples §12.1.)
- [ ] Créer `lib/detection/analyserTexte.ts` : normalise le texte, cherche les patterns, retourne `{ categorie, gravite (0-100), termesDetectes[] }`.
- [ ] Tester sur 8-10 messages types (français + camfranglais).

**Étape 2 — Page d'analyse (P0.1)**
- [ ] Composant zone de texte + bouton « Analyser ».
- [ ] Affichage du verdict : badge de gravité coloré + phrase d'explication + conseil adapté à la catégorie.

**Étape 3 — Preuve scellée (P0.2)**
- [ ] `lib/preuve/scellerPreuve.ts` : SHA-256 via `crypto.subtle` sur `{ texte, date, categorie }`.
- [ ] Bouton « Sceller comme preuve » → génère et télécharge un dossier (JSON + vue imprimable).
- [ ] Afficher clairement l'empreinte et l'horodatage (argument intégrité).

**Étape 4 — Plan d'action & écoute (P0.3)**
- [ ] Page/section statique : étapes bloquer/signaler + modèle de plainte ANTIC + contacts + messages de soutien.

**Étape 5 — Couche B modèle (généralisation)**
- [ ] Intégrer transformers.js, charger `Xenova/toxic-bert` (ou équivalent), vérifier qu'il tourne.
- [ ] Fusionner avec la Couche A. **Si trop lourd/instable → garder Couche A seule (fallback).**

**Étape 6 — Polissage démo (P0)**
- [ ] Préparer les messages de démo (§13), tester le parcours de bout en bout.
- [ ] Soigner l'UI (c'est noté par le jury, mentor UI/UX prévu).
- [ ] **Capture d'écran de secours** au cas où la démo plante.

**Étape 7 — Livrables (obligatoires avant 10h Jour 2)**
- [ ] Pitch deck 8 slides (§14).
- [ ] Vidéo de démo (§15).
- [ ] Business Model Canvas (§6 + §15).
- [ ] Nettoyer le code source pour dépôt.

**Étape 8 — P1 (si et seulement si le temps le permet)**
- [ ] Bot Telegram deepfake.
- [ ] Mini-simulateur de prévention.

---

## 11. STRUCTURE DE FICHIERS & VISUEL

```
gardienne/
├─ app/
│  ├─ page.tsx                 # Accueil + entrée « Analyser un message »
│  ├─ analyser/page.tsx        # P0.1 analyse + verdict
│  ├─ preuve/page.tsx          # P0.2 dossier de preuve (ou intégré à /analyser)
│  ├─ aide/page.tsx            # P0.3 plan d'action + écoute
│  └─ layout.tsx
├─ lib/
│  ├─ detection/
│  │  ├─ lexique.ts            # dictionnaire camfranglais (le cœur différenciant)
│  │  ├─ analyserTexte.ts      # Couche A
│  │  └─ modele.ts             # Couche B (transformers.js)
│  └─ preuve/scellerPreuve.ts  # SHA-256 + horodatage
├─ components/                  # UI réutilisable (BadgeGravite, etc.)
└─ docs/GARDIENNE-cahier-des-charges.md  # ce document
```

**Charte visuelle (identité « protection, confiance, féminin sans cliché ») :** teintes violet/indigo + touches douces, typographie lisible, ton rassurant. Éviter le rose stéréotypé. Un logo bouclier simple.

---

## 12. DÉTAILS D'IMPLÉMENTATION CLÉS

### 12.1 Exemples pour le lexique (Couche A) — à enrichir
> Format indicatif : chaque entrée = pattern + catégorie + gravité (0-100).

| Exemple de message | Catégorie | Gravité |
|---|---|---|
| « je go share/partager tes nudes » | Chantage / sextorsion | 95 |
| « si tu parles je publie les photos » | Chantage / sextorsion | 95 |
| « je vais te retrouver » / « tu vas voir » | Menace | 80 |
| insultes crues (fr + camfranglais) | Insulte | 55 |
| messages répétés non désirés | Harcèlement répété | 60 |

> ⚠️ Construire ce lexique avec des termes réels camfranglais/pidgin est **le travail à plus forte valeur** du projet. C'est ce qui rend la démo unique. Y consacrer du soin.

### 12.2 Format du dossier de preuve
```json
{
  "texte": "...",
  "horodatage": "2026-07-03T09:12:00Z",
  "categorie": "Chantage / sextorsion",
  "gravite": 95,
  "empreinte_sha256": "…",
  "note": "Preuve scellée par Gardienne — toute altération modifie l'empreinte."
}
```

### 12.3 Argumentaire cyber (pour défendre les 20 pts)
- **Détection par IA** = « on protège en comprenant la menace, y compris en langue locale ».
- **Intégrité par hachage (SHA-256)** = « la preuve est infalsifiable ; toute modification change l'empreinte ».
- **Privacy by design** = « aucune donnée personnelle stockée sur un serveur ; tout reste chez la victime ».

---

## 13. PARCOURS DE DÉMO (à répéter et chronométrer — ~90 s)

1. **Contexte (5 s) :** « Voici Aïcha, elle reçoit ce message. »
2. **Détecter :** coller un message **en camfranglais** → « Analyser » → l'app affiche **Chantage / sextorsion — gravité 95** + explication. *Insister : « un outil normal ne comprendrait pas ce message ; le nôtre si. »*
3. **Prouver :** clic **« Sceller comme preuve »** → montrer le dossier avec **empreinte SHA-256 + horodatage**. *« Voici une preuve infalsifiable pour la plainte. »*
4. **Agir :** montrer l'écran plan d'action + écoute.
5. (Si P1) **Bonus :** envoyer une image au bot Telegram → « photo probablement truquée ». *« Le harcèlement passe aussi par l'image ; Gardienne protège là aussi. »*

**Filet de sécurité :** capture d'écran/vidéo de secours prête si la démo live échoue.

---

## 14. CONTENU DU PITCH DECK (8 slides — 5 min)

| # | Slide | Contenu Gardienne | ⏱ |
|---|---|---|---|
| 01 | Problème | Filles harcelées en ligne au Cameroun + **chiffre-choc** `[À COMPLÉTER]` | 45 s |
| 02 | Solution | Gardienne : Détecter → Prouver → Agir → Soutenir. 3 bénéfices : comprendre / preuve / agir | 45 s |
| 03 | Démo | Parcours §13 (montrer, ne pas raconter) | 90 s |
| **04** | **Cybersécurité (20 pts)** | **Détection IA locale (camfranglais) + preuve scellée SHA-256 + privacy by design** (§12.3). Ne pas passer vite. | 45 s |
| 05 | Marché & impact | Élèves/étudiantes camerounaises ; impact social + sécurité numérique | 30 s |
| 06 | Modèle & unicité | §6 (financement) + §7 (unique = comprend le camfranglais) | 30 s |
| 07 | Équipe | Les 2 membres + rôles | 20 s |
| 08 | Demande | Accompagnement / incubation / partenariat + contact | — |

> Ne pas supprimer la slide Cybersécurité (elle vaut 20 pts).

---

## 15. LIVRABLES & CHECKLIST DE DÉPÔT (avant 10h00, Jour 2 — strict)

- [ ] **Présentation** (deck 8 slides, §14) — PDF + source.
- [ ] **Code source** — repo propre (README court : comment lancer `npm run dev`).
- [ ] **Vidéo de démo** — enregistrement écran du parcours §13 (2-3 min), avec voix ou sous-titres. *Filet de sécurité qui sert aussi de secours au pitch.*
- [ ] **Business Model Canvas** — remplir les 9 cases à partir de §5, §6, §7 (segments = filles + écoles/télécoms/ONG ; proposition de valeur ; revenus ; etc.).

---

## 16. ÉTAT D'AVANCEMENT (section vivante — mettre à jour à chaque avancée)

**Statut global :** 🟡 Design verrouillé, développement pas encore commencé.

- [x] Défi choisi, concept verrouillé, modèle éco défini, stack choisie.
- [x] Cahier des charges rédigé.
- [ ] Étape 0 — Amorçage Next.js.
- [ ] Étape 1 — Couche A (lexique camfranglais).
- [ ] Étape 2 — Page d'analyse.
- [ ] Étape 3 — Preuve scellée.
- [ ] Étape 4 — Plan d'action & écoute.
- [ ] Étape 5 — Couche B (modèle).
- [ ] Étape 6 — Polissage démo.
- [ ] Étape 7 — Livrables.
- [ ] Étape 8 — P1 (bonus).

**Décisions ouvertes / à confirmer :**
- Nom définitif du projet (« Gardienne » par défaut).
- Chiffre-choc slide 01.
- Confirmer que `Xenova/toxic-bert` (ou équivalent) tourne en transformers.js, sinon Couche A seule.

---

## 17. RISQUES & PLANS DE SECOURS

| Risque | Parade |
|---|---|
| La démo live plante | Capture d'écran + vidéo de secours prêtes (Étape 6). |
| Modèle transformers.js trop lourd/instable | Couche A (lexique) porte seule la démo — c'est le vrai différenciateur de toute façon. |
| Temps de dev réel court | P0 d'abord ; P1 seulement si terminé. Couper sans hésiter. |
| On paraît traiter 2 défis (deepfake) | Appliquer le principe directeur §4.3 : « photo truquée pour harceler », jamais « fake news ». |
| Connexion internet incertaine le jour J | Tout tourne hors-ligne (détection locale, hash local). |
