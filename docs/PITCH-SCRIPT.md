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
> choses : elle **comprend**, elle **prouve**, elle **guide**. Elle détecte le harcèlement
> même en camfranglais, elle transforme un message en **preuve infalsifiable**, et elle
> donne un plan d'action clair avec un espace d'écoute. Gratuit, privé, et ça marche même
> hors connexion. Je vous montre. »

### 03 · Démonstration (montrer, ne pas raconter)
> *(Ouvrir l'app.)* « Aïcha colle le message qu'elle a reçu… » *(coller l'exemple, cliquer
> Analyser)* « … et immédiatement : **Chantage et sextorsion, gravité 95, critique.** Notez
> bien : ce message mélange français et pidgin — *"everybody go see"* — un outil classique
> passe à côté. Le nôtre, non. »
> *(Cliquer Sceller.)* « En un clic, Gardienne **scelle la preuve** : une empreinte
> cryptographique et l'heure exacte. Si quelqu'un modifie le message, l'empreinte change.
> C'est une preuve recevable. »
> *(Ouvrir Aide.)* « Et enfin, elle est guidée : bloquer, signaler, porter plainte — et un
> espace d'écoute, parce qu'elle n'est pas seule. »
> *(Si le temps / bonus Telegram :)* « On a aussi un bot Telegram qui vérifie si une **photo
> est truquée** — je vous en reparle. »

### 04 · Notre composante cybersécurité ⭐ (20 points — ralentir ici)
> « C'est le cœur. Gardienne, ce sont **trois briques de cybersécurité** :
> *Un* — la **détection par IA**, un moteur hybride qui comprend la menace dans la langue
> locale.
> *Deux* — l'**intégrité de la preuve** : un hachage SHA-256 rend la preuve infalsifiable.
> *Trois* — la **confidentialité dès la conception** : rien ne part sur un serveur, tout
> reste sur le téléphone de la victime.
> Et pour les images truquées, on combine deux signaux : la **signature C2PA** — les
> Content Credentials que laissent OpenAI ou Google — et un **classifieur** pour le reste.
> Demain, on branchera **SynthID** dès que Google ouvrira son détecteur. »

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
> L'analyse de texte et le scellement se font **sur l'appareil**, rien n'est envoyé. Pour le
> bot image, l'image est analysée puis **non conservée**. Privacy by design.

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
