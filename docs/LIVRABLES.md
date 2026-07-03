# 🎤 Gardienne — Livrables du pitch (contenu prêt à déposer)

> À déposer **avant 10h00, vendredi 03 juillet** : présentation (8 slides),
> code source, vidéo de démo, Business Model Canvas.
> Ce document contient le **texte prêt à coller** dans le template de slides fourni.

---

## 📊 Statistiques-chocs (pour la slide 01 — choisis-en UNE)

- **58 % des adolescentes ayant accès à Internet ont déjà subi du harcèlement ou des abus en ligne.** *(recommandée — centrée « filles »)*
- **28 % des femmes** interrogées dans 5 pays africains (Éthiopie, Kenya, Ouganda, Sénégal, Afrique du Sud) déclarent avoir subi des violences en ligne.
- **85 % des femmes** dans le monde ont subi ou été témoins de violences numériques (Economist Intelligence Unit, 2020).
- Cameroun : **55 % des femmes** (15-50 ans) ont subi une forme de violence depuis l'âge de 15 ans.

> ⚠️ Vérifie/attribue la source exacte avant le pitch (UN Women / Plan International
> pour le 58 %). Cite la source sur la slide, ça renforce la crédibilité.

---

## 🖼️ LES 8 SLIDES (texte prêt à coller)

### Slide de titre
- **Nom du projet :** Gardienne
- **Slogan :** « Comprends, prouve, agis. Tu n'es pas seule. »
- **Équipe :** [nom d'équipe] · **Défi n°1 : Cyberharcèlement** · Membres : [prénoms]

### 01 · Le problème (~45 s)
> Au Cameroun, les filles et jeunes femmes sont harcelées en ligne : insultes,
> menaces, **chantage sexuel (sextorsion)**, et diffusion d'images intimes,
> parfois **truquées**. Elles ne savent pas si c'est « grave », n'ont **aucune
> preuve** pour porter plainte, ne savent pas **quoi faire**, et souffrent en silence.
> Pire : les outils existants, pensés pour l'anglais ou le français standard, ne
> comprennent **pas** le harcèlement tel qu'il se dit ici (pidgin, camfranglais).

- **Chiffre qui frappe :** 58 % des adolescentes connectées ont déjà subi du harcèlement en ligne.

### 02 · La solution (~45 s)
> **Gardienne** : une application web (installable sur téléphone) qui aide une
> fille victime de cyberharcèlement à **comprendre** ce qu'elle subit, à en
> **garder la preuve**, et à savoir **quoi faire**.

- **Bénéfice 1 :** Détecte le harcèlement (texte **ou capture d'écran**) — **même en camfranglais / pidgin**.
- **Bénéfice 2 :** Scelle une **preuve** (SHA-256 + horodatage certifié) et génère un **dossier de plainte** prêt pour la police.
- **Bénéfice 3 :** **Assistant juridique** (loi camerounaise) + espace d'écoute. Gratuit, privé, hors-ligne.

### 03 · Démonstration (~90 s)
Suivre le **parcours de démo** (voir plus bas) : capture d'écran → verdict → preuve
scellée → dossier police → assistant juridique → bot image. Montrer, ne pas raconter.

### 04 · Composante cybersécurité (⭐ 20 POINTS — ne pas passer vite) (~45 s)
> Gardienne intègre **plusieurs** briques de cybersécurité :
> 1. **Détection par IA** — moteur hybride (lexique camfranglais + modèle) + **vision**
>    pour lire une capture d'écran.
> 2. **Intégrité de la preuve** — hachage **SHA-256** + **horodatage certifié serveur**
>    (infalsifiable, non antidatable). Reconnu par le droit : une simple capture a une
>    valeur faible, c'est le **hachage** qui prouve au juge la non-altération.
> 3. **Confidentialité par conception** — la détection de texte reste sur l'appareil ;
>    on n'envoie jamais le message, seulement son empreinte.
> 4. **Provenance des images** — signature **C2PA** (OpenAI, Google) + double classifieur
>    (visages truqués + images générées par IA) ; **SynthID** en feuille de route.

- **En quoi ça protège les utilisatrices :** on qualifie la menace sans exposer
  leurs données, et on leur donne une **preuve solide + un dossier** pour se défendre.

### 05 · Marché & impact (~30 s)
- **Pour qui ?** Filles et jeunes femmes camerounaises (élèves, étudiantes, jeunes
  actives, ~13-30 ans). Des millions d'utilisatrices de smartphone potentielles.
- **Impact :** social (briser le silence, protéger la santé mentale) + sécurité
  numérique (preuve exploitable, culture du risque).

### 06 · Modèle & différenciation (~30 s)
- **Adoption / financement :** gratuit pour les victimes ; financé par les
  **écoles/universités** (licences), les **télécoms** (RSE + accès gratuit sans
  data), les **ONG/bailleurs**, et les institutions (**MINPROFF, ANTIC**).
- **Ce qui nous rend uniques :** nous **comprenons le harcèlement local
  (camfranglais/pidgin)** — là où les outils génériques échouent — et nous
  transformons un message en **preuve juridique scellée**.

### 07 · L'équipe (~20 s)
- [Prénom] — [rôle] · [Prénom] — [rôle]

### 08 · Notre demande (Merci !)
> Nous cherchons **accompagnement / incubation**, des **partenariats** (écoles,
> télécoms, ONG) et un **soutien au déploiement** pour protéger concrètement les
> filles du Cameroun.
- **Contact :** [e-mail] · [téléphone] · [réseaux]

---

## 🎬 PARCOURS DE DÉMO (script, ~90 s)

1. **(5 s)** « Voici Aïcha, 19 ans, étudiante. Elle reçoit ces messages. » *(écran d'accueil animé)*
2. **Détecter** — sur **/analyser** : « Exemple » (ou **importer une capture d'écran** →
   l'IA extrait auteur/plateforme/heure) → « Analyser ». Verdict : **Chantage / sextorsion —
   gravité 95, Critique**. 👉 *« Un outil normal ne comprend pas ce mélange français-pidgin. Le nôtre, si. »*
3. **Prouver** — « Sceller comme preuve » → **Sceau** + **empreinte SHA-256** + **horodatage
   certifié serveur**. 👉 *« Infalsifiable et non antidatable. »*
4. **Dossier** — « Générer le dossier pour la police » → **plainte pré-remplie** (articles de
   loi + annexe de preuve), imprimable. 👉 *« On transforme un ressenti en dossier actionnable. »*
5. **Assistant juridique** — bouton flottant → *« Quelle peine risque mon harceleur ? »* →
   réponse **sourcée sur la loi camerounaise**.
6. **Bonus image** — Telegram **@Gardienne_bot** : envoyer une image (**en Fichier**) → « signature
   d'IA C2PA détectée (Google) » + analyse visuelle. 👉 *« Le harcèlement passe aussi par l'image truquée. »*

**Filet de sécurité :** garde une **vidéo/capture** de ce parcours (= aussi le
livrable vidéo) au cas où la démo live échoue.

---

## 📋 BUSINESS MODEL CANVAS (9 blocs)

1. **Segments de clientèle**
   - *Bénéficiaires (gratuit) :* filles/jeunes femmes victimes de cyberharcèlement.
   - *Clients payeurs :* écoles/universités, télécoms, ONG, institutions (MINPROFF/ANTIC).
2. **Proposition de valeur**
   - Pour les filles : comprendre + preuve infalsifiable + savoir quoi faire, gratuitement et en privé, dans leur langue.
   - Pour les institutions : protéger leurs élèves/communautés et afficher un engagement RSE concret.
3. **Canaux** : web mobile (PWA, sans installation), bouche-à-oreille, écoles, campagnes ONG, télécoms.
4. **Relations clients** : gratuit et anonyme pour les victimes ; contrats/partenariats et tableaux de bord pour les institutions ; ateliers de sensibilisation.
5. **Sources de revenus** : licences B2B (écoles/universités), parrainage télécoms (RSE + zero-rating), subventions ONG/bailleurs, ateliers payants. *(Freemium : gratuit individuel, payant institution.)*
6. **Ressources clés** : le lexique camfranglais (savoir-faire différenciant), l'appli, l'équipe, les partenariats.
7. **Activités clés** : enrichir la détection, sécuriser la preuve, nouer des partenariats, sensibiliser.
8. **Partenaires clés** : MINPROFF, ANTIC, MTN/Orange/Camtel, UN Women/UNICEF, écoles/universités, associations.
9. **Structure de coûts** : hébergement (faible), développement, sensibilisation/déploiement, support. *(Coûts volontairement bas : détection locale, pas de gros serveur d'IA.)*

---

## ✅ CHECKLIST DE DÉPÔT (avant 10h00)

- [ ] **Présentation** — 8 slides remplies (PDF + source).
- [ ] **Code source** — dépôt GitHub à jour : https://github.com/zoom-BT/Gardienne
- [ ] **Vidéo de démo** — enregistrement du parcours ci-dessus (2-3 min).
- [ ] **Business Model Canvas** — les 9 blocs ci-dessus (mis en forme).
- [ ] Compléter : nom d'équipe, prénoms/rôles, contact, chiffre-choc sourcé, numéros d'écoute.

---

## 🔗 Sources (statistiques)
- UN Women / Africa Renewal — Online abuse and Africa's women and girls.
- Economist Intelligence Unit (2020) — digital violence against women.
- INS Cameroun — Violences basées sur le genre au Cameroun.
