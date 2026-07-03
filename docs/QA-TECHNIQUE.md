# 🧠 Q&A technique — Gardienne (10 min de questions)

> Réponses courtes et sûres. Si tu ne sais pas : « bonne question, c'est notre prochaine
> étape » — jamais d'invention. Objectif : montrer que les choix techniques sont **réfléchis**.

## Architecture

**Q : C'est quoi la stack, en une phrase ?**
> Next.js 16 + TypeScript, tout en un seul projet (front + routes API), déployé sur Vercel.
> La détection de texte tourne côté navigateur ; l'IA plus lourde (RAG, vision) passe par des
> routes serveur.

**Q : Pourquoi Next.js et pas une app mobile native ?**
> Une PWA touche **tous** les téléphones sans passer par un store, s'installe sur l'écran
> d'accueil, et marche hors-ligne. C'est le plus inclusif au Cameroun, et un seul socle à maintenir.

**Q : Comment ça marche hors-ligne ?**
> Un service worker met l'app en cache, et la détection par lexique + le scellement SHA-256
> s'exécutent en local (Web Crypto). Seules les briques IA en ligne (RAG, vision) nécessitent le réseau.

## Détection

**Q : Comment détectez-vous le harcèlement en camfranglais ?**
> Moteur **hybride** : une couche « lexique + règles » construite à la main (termes réels
> pidgin/camfranglais, normalisation des accents, pondération par gravité, règle composite pour
> la sextorsion) + un modèle de toxicité (`Xenova/toxic-bert` via transformers.js) qui généralise.

**Q : Pourquoi ne pas tout confier à un grand LLM ?**
> Coût, dépendance réseau, et surtout : les LLM génériques ratent le pidgin et peuvent halluciner.
> Le lexique est déterministe, gratuit, hors-ligne et explicable — crucial quand on parle à une victime.

**Q : Faux positifs / négatifs ?**
> Gardienne **assiste**, ne juge pas : le verdict rappelle toujours « fais confiance à ton
> ressenti », et l'utilisatrice garde le contrôle. Le lexique s'enrichit en continu.

## Preuve

**Q : Le hachage prouve-t-il vraiment quelque chose ? On peut fabriquer une preuve.**
> Le SHA-256 prouve l'**intégrité** (non-altération), et l'horodatage **signé côté serveur**
> (HMAC) prouve qu'un contenu existait à une heure réelle, **non antidatable**. Ça ne prouve pas
> *qui* a envoyé — ça, c'est le rôle de l'ANTIC (traçage IP). On fournit le chaînon manquant :
> une preuve préservée, datée et mise en forme.

**Q : Pourquoi un HMAC et pas un vrai horodatage certifié (RFC 3161) ?**
> Le HMAC serveur suffit pour la démo et empêche déjà l'antidatage côté victime. En production,
> on brancherait une autorité d'horodatage (TSA RFC 3161) ou une ancre publique — c'est prévu.

## RAG juridique

**Q : Votre assistant invente-t-il des lois ?**
> Non — c'est un **RAG** : récupération de passages d'une base **vérifiée** (Loi 2010/012,
> Code Pénal, Loi 2024/017), puis génération **strictement ancrée** sur ce contexte (le prompt
> interdit d'inventer un article ou une peine). S'il ne sait pas, il le dit.

**Q : Quel modèle, et pourquoi Groq ?**
> `openai/gpt-oss-20b` via **Groq** — inférence très rapide, généreux en gratuit. Le modèle est
> configurable ; la clé est côté serveur (variable d'env), jamais exposée au navigateur.

**Q : Et si l'API tombe pendant la démo ?**
> Repli automatique : l'assistant répond alors directement avec le passage vérifié récupéré
> (version « ancrée » sans génération). Ça marche toujours.

## Image / deepfake

**Q : Comment détectez-vous une image truquée ?**
> Deux signaux : la **signature C2PA** (Content Credentials laissés par OpenAI/Google) lue dans
> les métadonnées, **et** un double classifieur Hugging Face (visages truqués + images générées
> par IA). On retient le plus suspect.

**Q : Et SynthID ?**
> SynthID est un filigrane de provenance ; son détecteur public n'est pas encore ouvert (liste
> d'attente Google). On le branchera dès sa disponibilité. Aujourd'hui, C2PA + classifieur.

**Q : Pourquoi l'image doit être envoyée « en Fichier » sur Telegram ?**
> Telegram (comme WhatsApp/Facebook) recompresse les « photos » et **efface les métadonnées** —
> donc la signature C2PA. En « Fichier », le fichier reste intact et la signature est lisible.

**Q : L'extraction depuis une capture d'écran, c'est fiable ?**
> Un modèle vision (Llama 4 Scout) extrait plateforme/auteur/heure/message. L'auteur affiché est
> une **piste**, pas une preuve d'identité — la vérification reste du ressort de l'ANTIC.

## Sécurité, données, passage à l'échelle

**Q : Où sont stockées les données des victimes ?**
> Par défaut, rien n'est stocké côté serveur : pas de compte, analyse locale, images non
> conservées. Pour l'horodatage on n'envoie que l'empreinte, pas le message.

**Q : Comment passez-vous à l'échelle / à d'autres langues ?**
> L'architecture est la même : étendre le lexique pour une nouvelle langue, et le déploiement
> serverless (Vercel) scale automatiquement. Cible : autres pays d'Afrique francophone.

**Q : Combien ça coûte à faire tourner ?**
> Très peu : détection locale (0 coût), hébergement serverless, et un LLM rapide/économique
> (Groq). Les coûts sont volontairement bas — pas de gros serveur d'inférence.
