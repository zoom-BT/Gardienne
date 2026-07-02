# 🔎 Prompt de deep-research — données juridiques & contacts (Gardienne)

> À coller dans un outil de **recherche approfondie** (ChatGPT Deep Research,
> Gemini Deep Research, Perplexity…). Objectif : obtenir des informations
> **exactes et sourcées** pour remplir la base de connaissances juridique et les
> contacts d'aide de Gardienne.
> Une fois les résultats obtenus, colle-les-moi : je mets à jour `knowledge.ts` et
> la page « Aide ».

---

```
Tu es juriste-chercheur spécialisé en droit camerounais et en cybersécurité.
Fais une recherche approfondie, RIGOUREUSE et SOURCÉE sur le cyberharcèlement et
les violences numériques faites aux femmes et aux filles AU CAMEROUN. Je vais
utiliser ces informations dans une application d'aide aux victimes : l'exactitude
est vitale.

EXIGENCES DE FIABILITÉ (impératives) :
- Cite CHAQUE information avec sa source (URL) et la date de la source.
- Privilégie les sources PRIMAIRES et officielles : Journal Officiel, textes de
  loi intégraux, sites gouvernementaux camerounais (MINJUSTICE, MINPROFF, ANTIC,
  ART), textes sur droit-afrique.com / wipolex. En second, cabinets d'avocats
  camerounais et rapports d'ONG/ONU.
- Donne les NUMÉROS D'ARTICLES EXACTS et les PEINES EXACTES (durées de prison ET
  montants d'amende en FCFA). Cite le libellé exact de l'article quand possible.
- Si une information n'existe pas ou est incertaine, DIS-LE explicitement
  (ex. « vide juridique », « non trouvé »). N'invente jamais.
- Distingue le droit EN VIGUEUR des projets de loi.

PARTIE 1 — CADRE JURIDIQUE (fais un tableau : Infraction | Texte & n° de loi |
Article | Peine de prison | Amende (FCFA) | Source URL).
Couvre au minimum :
1. Harcèlement sexuel (Code Pénal, loi 2016/007) — art. 302-1 et connexes.
2. Cyberharcèlement / harcèlement par voie électronique — Loi n° 2010/012 du
   21/12/2010 (cybersécurité & cybercriminalité), articles pertinents (74, 75…).
3. Atteinte à la vie privée / captation & diffusion d'images ou de propos privés.
4. Diffusion d'images intimes SANS consentement (« revenge porn ») — existe-t-il
   un texte spécifique au Cameroun ? Sinon, sur quels fondements poursuit-on ?
5. Images/vidéos TRUQUÉES par IA (deepfakes) — statut juridique, vide éventuel,
   fondements mobilisables (dignité, vie privée, harcèlement, faux).
6. Sextorsion / chantage — article(s) du Code Pénal sur le chantage et l'extorsion.
7. Diffamation et injure (y compris en ligne).
8. Diffusion de fausses nouvelles par voie électronique — Loi 2010/012.
9. Usurpation d'identité numérique.
10. Menaces (Code Pénal).
11. Protection des mineurs en ligne / pédopornographie.
12. Protection des données personnelles — existe-t-il une loi camerounaise dédiée
    (adoptée récemment ?) ? Donne la référence et les droits qu'elle ouvre.

PARTIE 2 — PROCÉDURE POUR LA VICTIME :
- Où et comment porter plainte (police judiciaire, gendarmerie, procureur,
  tribunaux compétents) ? Étapes concrètes.
- Rôle et coordonnées de l'ANTIC pour signaler un incident/cybercriminalité.
- La preuve numérique (captures, messages, empreinte/hachage horodaté) est-elle
  recevable ? Quelles précautions pour qu'elle soit exploitable ?
- Existe-t-il une aide juridictionnelle gratuite / des avocats commis d'office ?

PARTIE 3 — CONTACTS D'AIDE RÉELS AU CAMEROUN (donne des coordonnées VÉRIFIABLES :
nom, téléphone, e-mail, site web, ville) :
- Numéros d'urgence (police, gendarmerie) — CONFIRME les numéros exacts.
- Ligne(s) d'écoute / assistance aux victimes de violences basées sur le genre.
- MINPROFF (Ministère de la Promotion de la Femme et de la Famille) : services,
  centres de promotion de la femme, contacts.
- ONG / associations d'aide aux femmes et filles victimes (ex. présence à
  Yaoundé, Douala) : noms, téléphones, e-mails, sites.
- Soutien psychologique / cellules d'écoute.
- Toute plateforme officielle de signalement du cyberharcèlement au Cameroun.

PARTIE 4 — STATISTIQUES (avec année et source) :
- Chiffres récents sur le cyberharcèlement / violences numériques faites aux
  femmes et aux filles au Cameroun (et en Afrique si pas de données nationales).

FORMAT DE SORTIE :
- Des tableaux clairs (Partie 1 et Partie 3).
- Pour chaque peine, l'article exact et l'URL de la source.
- Une section « Incertitudes / vides juridiques » listant ce qui n'a pas pu être
  confirmé.
- Termine par la liste de toutes les sources (URL + date de consultation).
```

---

## Ce que je ferai avec les résultats
1. Corriger/compléter `src/lib/rag/knowledge.ts` (articles, peines exacts, sources).
2. Remplir les **contacts réels** dans la page « Aide » (`src/app/aide/page.tsx`) —
   actuellement en `[À COMPLÉTER]`.
3. Mettre à jour le chiffre-choc et les sources du pitch.
