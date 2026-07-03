# 🎙️ Gardienne — Script de pitch (5 min) + préparation Q&A (10 min)

> À répéter **à voix haute et chronométré**. Objectif : 5 min pile, puis tenir les questions.
> Ton : posé, sincère, fier. Regarde le jury, pas les slides.

---

## ⏱️ Plan de temps (5 min)

| Moment | Durée | Cumul |
|---|---|---|
| Accroche + titre | 15 s | 0:15 |
| 01 Problème | 45 s | 1:00 |
| 02 Solution | 40 s | 1:40 |
| 03 **Démo live** | 90 s | 3:10 |
| 04 Cybersécurité (20 pts) | 50 s | 4:00 |
| 05 Marché & impact | 25 s | 4:25 |
| 06 Modèle & différenciation | 20 s | 4:45 |
| 07 + 08 Équipe & demande | 15 s | 5:00 |

---

## 🗣️ Script (à dire)

### Accroche (avant la slide 1)
> « Imaginez une étudiante de 19 ans, à Yaoundé. Un matin, elle reçoit un message :
> *"si tu me quittes, je poste tes photos nues, everybody go see."* Elle a peur, elle a
> honte, et elle ne sait pas quoi faire. Cette fille, elles sont des milliers. Nous avons
> construit **Gardienne**. »

### 01 · Le problème
> « Au Cameroun, les filles sont harcelées en ligne : insultes, menaces, chantage sexuel,
> photos truquées. Trois problèmes reviennent toujours : *un*, elles ne savent pas si c'est
> grave ; *deux*, elles n'ont **aucune preuve** pour porter plainte ; *trois*, elles ne
> savent pas vers qui se tourner. Et les outils existants ne comprennent même pas notre
> façon de parler — le camfranglais, le pidgin. **58 % des adolescentes connectées ont déjà
> subi du harcèlement en ligne.** »

### 02 · La solution
> « Gardienne est une application — installable sur n'importe quel téléphone — qui fait trois
> choses : elle **comprend**, elle **prouve**, elle **guide**. À partir d'un **texte ou d'une
> capture d'écran**, elle détecte le harcèlement même en camfranglais, transforme la preuve en
> **dossier prêt pour la police**, et répond aux questions de droit via un **assistant juridique**.
> Gratuit, privé, et ça marche même hors connexion. Je vous montre. »

### 03 · Démonstration (montrer, ne pas raconter)
> *(L'app s'ouvre sur l'écran d'accueil animé.)*
> **Détecter —** *(coller l'exemple ou importer une capture d'écran, cliquer Analyser)*
> « Aïcha colle le message reçu — ou **importe simplement une capture d'écran**, et notre IA en
> extrait l'auteur, la plateforme et le texte. Immédiatement : **Chantage/sextorsion, gravité 95,
> critique.** Ce message mélange français et pidgin — *"everybody go see"* — un outil classique
> passe à côté ; le nôtre, non. »
> **Prouver —** *(cliquer « Sceller comme preuve »)* « En un clic, Gardienne **scelle la preuve** :
> empreinte SHA-256 + **horodatage certifié par notre serveur** (non antidatable). »
> **Dossier —** *(cliquer « Générer le dossier pour la police »)* « Et surtout : un **modèle de
> plainte au Procureur pré-rempli**, avec les articles de loi et l'annexe de preuve — prêt à
> imprimer. »
> **Être aidée —** *(ouvrir l'Assistant juridique)* « Une question ? *"Quelle peine risque mon
> harceleur ?"* → réponse **fondée sur la vraie loi camerounaise**, avec la source citée. »
> **Bonus image —** *(bot Telegram)* « Et pour une photo truquée : notre bot lit sa **signature
> d'IA (C2PA — ici : Google)** + l'analyse visuelle. »

### 04 · Notre composante cybersécurité ⭐ (20 points — ralentir ici)
> « C'est le cœur. Gardienne, ce sont **plusieurs briques de cybersécurité** :
> *Un* — la **détection par IA** : un moteur hybride (lexique local + modèle) qui comprend la
> menace, même en camfranglais ; et un **modèle vision** qui lit une capture d'écran.
> *Deux* — l'**intégrité de la preuve** : un hachage **SHA-256** + un **horodatage certifié par
> notre serveur**, donc infalsifiable et non antidatable. Et ce n'est pas un gadget : le droit
> camerounais reconnaît qu'une simple capture a une valeur faible, et que c'est justement le
> **hachage** qui prouve au juge qu'un fichier n'a pas été modifié.
> *Trois* — la **confidentialité par conception** : l'analyse de texte reste sur l'appareil.
> *Quatre* — pour les images : la **signature C2PA** (OpenAI, Google) + un **double classifieur**
> (visages truqués + images générées par IA). Demain, **SynthID** dès l'ouverture de son détecteur. »

### 05 · Marché & impact
> « Pour qui ? Les millions de jeunes Camerounaises qui ont un smartphone. L'impact est
> double : **social** — on brise le silence et on protège leur santé mentale ; et
> **numérique** — on leur donne enfin une preuve pour se défendre. »

### 06 · Modèle & différenciation
> « C'est **gratuit pour les victimes**, toujours. On est financés par ceux dont c'est le
> devoir de les protéger : les écoles, les télécoms, les ONG, l'État. Et ce qui nous rend
> uniques : **on comprend le harcèlement tel qu'il se dit vraiment ici** — et on le
> transforme en preuve. »

### 07 + 08 · Équipe & demande
> « Nous sommes [prénoms]. Nous cherchons un accompagnement et des partenaires pour
> déployer Gardienne dans les écoles du Cameroun. Parce qu'aucune fille ne devrait affronter
> ça seule. Merci. »

---

## 🛡️ Préparation Q&A (les 10 minutes qui font gagner)

> Réponds court, avec assurance. Si tu ne sais pas : « Excellente question, c'est notre
> prochaine étape » — jamais d'invention.

**Q : En quoi est-ce vraiment de la cybersécurité, et pas juste une app sociale ?**
> Trois mécanismes cyber concrets : détection par IA, intégrité des données par hachage
> SHA-256, et confidentialité par conception (aucune donnée exfiltrée). On protège des
> personnes ET leurs données.

**Q : Comment gérez-vous techniquement le camfranglais / pidgin ?**
> Un moteur **hybride** : une couche « lexique + règles » construite à la main avec des
> expressions locales réelles (fiable, hors-ligne), plus un modèle d'IA qui généralise. Le
> lexique est notre actif différenciant, et il s'enrichit en continu.

**Q : Pourquoi ne pas juste utiliser un modèle existant / ChatGPT ?**
> Les modèles génériques sont entraînés sur de l'anglais/français standard : ils ratent le
> pidgin et les menaces voilées locales. Et ils exigent une connexion. Nous, on fonctionne
> **hors-ligne** et on comprend le contexte camerounais.

**Q : La « preuve scellée », est-elle vraiment recevable en justice ?**
> Le hachage SHA-256 garantit l'**intégrité** : on prouve que le message n'a pas été
> modifié. C'est un standard reconnu. La recevabilité finale dépend du juge, mais on fournit
> un élément horodaté et vérifiable — bien plus qu'une simple capture d'écran.

**Q : Comment détectez-vous réellement les deepfakes / avec SynthID ?** *(question piège)*
> Soyons précis : SynthID et C2PA sont des **filigranes de provenance** — ils ne repèrent
> que le contenu marqué à la source. On lit donc la **signature C2PA** quand elle est
> présente (OpenAI, Google), et on complète par un **classifieur** qui détecte les artefacts
> sur n'importe quelle image. SynthID viendra en renfort dès l'ouverture de son détecteur.
> On ne prétend pas détecter 100 % des truquages — personne ne le fait honnêtement.

**Q : Que se passe-t-il en cas de faux positif / faux négatif ?**
> Gardienne **assiste**, elle ne juge pas à la place de la victime. Le verdict s'accompagne
> toujours de « fais confiance à ton ressenti », et l'utilisatrice garde le contrôle
> (sceller ou non, agir ou non).

**Q : Vie privée — où vont les messages et les images ?**
> La détection de texte (lexique) tourne **sur l'appareil**. Pour l'horodatage certifié, on
> n'envoie que **l'empreinte** (le hash), jamais le message. L'assistant juridique et la lecture
> d'une capture passent par une IA en ligne, mais **rien n'est conservé**. Privacy by design.

**Q : Comment marche l'analyse d'une capture d'écran ?**
> Un modèle vision extrait la plateforme, l'auteur, l'heure et le texte, puis on lance la
> détection dessus. Important : l'auteur affiché est une **piste**, pas une preuve d'identité —
> la vérification (traçage IP) reste le rôle de l'ANTIC.

**Q : Votre assistant juridique invente-t-il des lois ?**
> Non — c'est un **RAG** : il récupère d'abord des passages d'une base juridique **vérifiée**
> (Loi 2010/012, Code Pénal, Loi 2024/017) et répond **uniquement** à partir de ça, en citant la
> source. S'il ne sait pas, il le dit et renvoie vers un avocat/l'ANTIC.

**Q : Le dossier de plainte, est-il vraiment utilisable ?**
> C'est un **modèle** pré-rempli (plainte au Procureur + qualification juridique + annexe de
> preuve scellée), pensé pour faire gagner du temps à la victime. Il ne remplace pas un avocat —
> et une aide juridictionnelle gratuite existe.

**Q : Modèle économique — si les filles ne paient pas, comment survivez-vous ?**
> On ne monétise jamais les victimes. On vend aux **institutions** (licences écoles/
> universités), on s'appuie sur la **RSE des télécoms** (accès gratuit sans data) et sur des
> **subventions ONG**. L'impact social finance la viabilité.

**Q : Qu'apportez-vous de plus que le bouton "Signaler" de Facebook ?**
> Facebook agit sur SA plateforme, lentement, sans preuve pour la victime. Gardienne
> fonctionne partout, **comprend la langue locale**, **donne une preuve** exploitable
> ailleurs (plainte), et **accompagne** humainement.

**Q : Passage à l'échelle et autres langues ?**
> L'architecture est la même pour d'autres langues : il suffit d'étendre le lexique.
> On peut viser d'autres pays d'Afrique francophone avec la même méthode.

**Q : Vous êtes un homme dans un hackathon "Girls in STEAM" — pourquoi ?**
> Protéger les filles est l'affaire de tous. Notre équipe a conçu Gardienne **avec et pour**
> les jeunes femmes ; l'objectif est qu'elles s'en emparent et la portent.

**Q : Comment mesurez-vous l'impact ?**
> Nombre de messages analysés, de preuves scellées, d'écoles équipées, et surtout de
> victimes orientées vers de l'aide. Des indicateurs simples et concrets.

---

## ✅ Réflexes le jour J
- **Répète 3 fois** à voix haute, chronomètre. Coupe si tu dépasses.
- **Démo : garde une vidéo de secours** (si le Wi-Fi lâche, tu montres la vidéo).
- Lance le bot Telegram et l'app **avant** de passer.
- Parle **lentement** sur la slide cyber (20 points).
- Termine par la phrase forte : *« Aucune fille ne devrait affronter ça seule. »*
