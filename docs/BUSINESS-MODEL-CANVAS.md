# 📊 Business Model Canvas — Gardienne

## 🎯 Vue d'ensemble
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ PARTENAIRES CLÉS              │  ACTIVITÉS CLÉS  │  PROPOSITION     │ CLIENTS │
│                                │                  │  DE VALEUR       │         │
│ • Écoles & universités         │                  │                  │ • Filles│
│ • ONG (protection, santé)      │ • Détection IA   │ • Comprendre     │  15-25 │
│ • Télécoms (RSE)               │   du harcèlement │   le harcèlement │  ans   │
│ • Ministère Justice / Police   │   (texte + image)│ • Preuve certifiée│ • Écoles│
│ • Gouvernement camerounais     │ • Scellement     │   (SHA-256 +     │ • ONG  │
│ • Orgs open-source             │   de preuve      │   horodatage)    │ • Télé-│
│                                │ • Génération de  │ • Dossier prêt   │  coms  │
│                                │   dossier légal  │   à la plainte   │        │
│                                │ • Assistance     │ • Assistant      │        │
│                                │   juridique      │   juridique      │        │
│                                │ • Support user   │ • Confidentialité│        │
│                                │   & santé mentale│   (hors-ligne)   │        │
├─────────────────────────────────────────────────────────────────────────────┤
│ RESSOURCES CLÉS                │                  │ CANAUX DE        │ RELATIONS│
│                                │                  │ DISTRIBUTION     │ CLIENTS  │
│ • Modèle IA hybride            │                  │                  │          │
│   (lexique camfranglais/pidgin  │                  │ • App mobile     │ • Support│
│   + réseau de neurones)         │                  │ • Web app        │   direct │
│ • Infrastructure serveur        │                  │ • Intégration    │ • Formation│
│   (horodatage certifié)         │                  │   écoles (LMS)   │   dans  │
│ • Base de connaissances         │                  │ • Bot Telegram   │   écoles│
│   juridique camerounaise        │                  │ • Partenaires    │ • Assis- │
│ • Équipe tech (IA + backend)    │                  │   ONG (diffusion)│   tant  │
│ • Équipe juridique              │                  │ • Bouche à oreille│   juridi│
│ • Dataset local d'exemples      │                  │   (réseaux filles)│   que  │
│ • Certificat horodatage         │                  │                  │ • Forum │
│ • Modèle de vision (C2PA, IA)   │                  │                  │   priv. │
├─────────────────────────────────────────────────────────────────────────────┤
│ STRUCTURE DE COÛTS            │  SOURCES DE REVENU                           │
│                                │                                              │
│ • Infrastructure :             │ • Licences écoles (abonnement/élève)         │
│   - Serveur horodatage         │   • 500 xcfa/élève/an ou formule forfait     │
│   - Hébergement & CDN          │                                              │
│ • R&D :                        │ • Partenariats télécoms (RSE)                │
│   - Data labeling (exemples)   │   • Accès gratuit via MNO (Orangé, MTN, etc)│
│   - Améliorations IA (lexique) │   • En retour : co-branding                 │
│ • Support :                    │                                              │
│   - Hotline juridique          │ • Subventions & grants (ONG, fondations)     │
│   - Community managers         │   • Fonds genre                              │
│ • Opérations :                 │   • Cybersécurité                            │
│   - Traduction juridique       │                                              │
│ • Marketing & partenariats     │ • Services premium (opt-in) :               │
│                                │   • Consultation juridique avancée           │
│                                │   • Intégration institutionnelle             │
│                                │                                              │
│ **Coût estimé an 1** : ~50k USD│ **Revenu an 1** : 20-80k USD (selon déploie)│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📍 Détail par bloc

### 🤝 Partenaires clés
| Partenaire | Rôle | Bénéfice mutuel |
|---|---|---|
| **Écoles camerounaises** | Distribution B2B2C, sensibilisation | Protéger leurs élèves, répondre aux obligations légales |
| **ONG (protection filles)** | Diffusion, sensibilisation, support utilisateur | Élargir l'impact, atteindre plus de victimes |
| **Télécoms (Orange, MTN)** | Accès gratuit via partenariat RSE, visibilité | Responsabilité sociale, marque employeur |
| **Police / Ministère Justice** | Reconnaissance légale, formation, intégration | Améliorer le dépôt de plaintes, données sur le harcèlement |
| **Gouvernement Cameroun** | Support politique, subventions, intégration numérique | Politique jeunesse, cybersécurité nationale |
| **Orgs open-source** | Légal, open data sur lexique (optionnel) | Contribution à la cause, données |

---

### ⚙️ Activités clés
1. **Détection IA du harcèlement**
   - Lexique hybrid camfranglais/français/pidgin
   - Modèle texte (classification des menaces)
   - Modèle vision (images truquées, contexte capture d'écran)
   - Labeling continu (amélioration)

2. **Scellement de preuve**
   - Hachage SHA-256
   - Horodatage certifié serveur
   - Génération de certificat infalsifiable

3. **Génération de dossier juridique**
   - Modèle de plainte au Procureur
   - Injection articles droit camerounais applicables
   - Annexe preuve + capture scellée

4. **Assistant juridique**
   - RAG (Retrieval-Augmented Generation) sur code camerounais
   - Réponses en français/pidgin
   - Sourçage loi

5. **Support utilisateur & santé mentale**
   - FAQ
   - Ressources d'écoute
   - Orientation vers ONG locale (Banque de ressources)

---

### 💡 Proposition de valeur

**Pour les **victimes de harcèlement** :**
- ✅ Comprendre si c'est grave (classification IA + gravité)
- ✅ Garder une preuve infalsifiable (hachage + horodatage)
- ✅ Savoir quoi faire (dossier légal + assistant juridique)
- ✅ Rester confidentielle (hors-ligne, pas de données exfiltrées)
- ✅ Gratuit, sans inscription obligatoire
- ✅ App comprend ma langue (camfranglais, pidgin)

**Pour les **écoles** :**
- ✅ Outil de prévention & signalement
- ✅ Réduction de incidents signalés mais non traités
- ✅ Conformité avec obligations légales de protection
- ✅ Renforcer réputation / politique genre

**Pour les **partenaires télécoms** :**
- ✅ Responsabilité sociale (RSE) tangible & mesurable
- ✅ Co-branding (« Orange protège les filles »)
- ✅ Données d'impact (# femmes aidées)

**Pour les **ONG & gouvernement** :**
- ✅ Scalabilité : atteindre 100 000 filles sans augmenter budget
- ✅ Données : # harcèlement, tendances, géolocalisation anonyme
- ✅ Efficacité : plaintes mieux ficelées = traitement + rapide

---

### 👥 Segments clients

| Segment | Besoins | Canaux |
|---|---|---|
| **Filles 15-25 ans** | Protection, preuve, guide | App (mobile 1er), web |
| **Écoles publiques** | Outil pour CPD (conseil de discipline) | Vente directe, ministère |
| **Écoles privées** | Responsabilité, marketing | Direct, bouche à oreille |
| **ONG locales** | Scalabilité, partenariat | Partenariat stratégique |
| **Télécoms** | RSE visible, impact chiffré | B2B, gouvernance |
| **Gouvernement** | Politique genre, cybersécurité | Appels à projet, ministères |

---

### 📡 Canaux de distribution

1. **App mobile** (iOS/Android)
   - Play Store, Apple Store
   - Accès direct fille

2. **Web app**
   - Accès sur ordi / tablette
   - Lien école, ONG

3. **Partenariats écoles**
   - Intégration CPD (discipline)
   - Formation prof
   - Affiche + QR code

4. **Partenaires ONG**
   - Diffusion lors sensibilisation
   - WhatsApp / Telegram (bot)
   - Hotline accompagnement

5. **Télécoms**
   - Accès gratuit sans data (mode "zéro rating")
   - SMS/USSD optionnel (futur)
   - Co-branding

6. **Bouche à oreille**
   - Réseaux de filles
   - TikTok / WhatsApp
   - Influenceurs locaux

---

### 💰 Structure de coûts

| Catégorie | Détail | Coût an 1 |
|---|---|---|
| **Infrastructure** | Serveur horodatage, hébergement, CDN | ~15k USD |
| **R&D** | Data labeling, amélioration lexique IA | ~12k USD |
| **Support** | 1-2 community manager, hotline juridique | ~15k USD |
| **Opérations** | Trad juridique, compliance, audit | ~5k USD |
| **Marketing** | Partenariats, print, événements | ~3k USD |
| **Imprévus** | Buffer 10% | ~5k USD |
| **TOTAL an 1** | | ~**55k USD** |

**Après an 1 (scaling) :**
- Infrastructure : augmente modérément (pas linéaire)
- Support : augmente avec usage
- R&D : continu mais peut baisser

---

### 💵 Sources de revenu

**1. Licences écoles** (B2B)
- Forfait école : 50-200 élèves = 5-10k xcfa/an
- Ou par élève : 500 xcfa/an
- Prise en charge ministère (budget), ONG, école
- Revenu estimé an 1 : **10-20k USD** (10-20 écoles pilotes)

**2. Partenariats télécoms** (RSE, B2B)
- Subvention accès gratuit (Orange, MTN)
- En retour : co-branding
- Engagement : 5-20k USD/an par telco
- Revenu estimé an 1 : **10-30k USD** (2-3 partenaires)

**3. Subventions & grants**
- Fonds genre (ministère, banque mondiale)
- Cybersécurité (diaspora, fondations)
- ONG partenaires (support opérationnel)
- Revenu estimé an 1 : **20-40k USD**

**4. Services premium** (opt-in, optionnel)
- Consultation juridique avancée (50-100 xcfa)
- Intégration institutionnelle custom
- Revenu estimé an 1 : **0-5k USD** (test)

---

## 🎬 Scénario de lancement (an 1)

### Trimestre 1-2
- Finir MVP (détection + preuve OK)
- 5-10 écoles pilotes
- 2-3 partenaires ONG
- Objectif : 5k utilisatrices
- **Revenu** : 5-10k USD

### Trimestre 3-4
- Scaling écoles (20+ établissements)
- Accord telco (1-2 partenaires)
- Hotline + support
- Objectif : 15k utilisatrices
- **Revenu** : 15-30k USD

### Budget breakeven (an 2)
- Hypothèse : 50 écoles + 2 telcos = 50-60k USD revenu
- Coût stabilisé : 50-60k USD
- → Breakeven atteint

---

## 🚀 KPIs de succès

| KPI | an 1 | an 2 |
|---|---|---|
| **Écoles partenaires** | 10-20 | 50-100 |
| **Utilisatrices actives** | 5k-10k | 30k-50k |
| **Messages analysés** | 50k | 500k+ |
| **Preuves scellées** | 10k | 100k+ |
| **Plaintes déposées** (avec preuve) | 50-100 | 500+ |
| **Revenu** | 20-60k USD | 60-150k USD |
| **NPS** (Net Promoter Score) | 70+ | 75+ |

---

## ⚠️ Risques & mitigations

| Risque | Probabilité | Impact | Mitigation |
|---|---|---|---|
| Faible adoption initiale | Haute | Moyen | Pilotes écoles, influenceurs, ONG |
| Partenaire telco change d'avis | Moyen | Moyen | Diversifier sources (2+ telcos) |
| IA détecte mal (faux positifs) | Moyen | Élevé | Utilisatrice gardecontrôle, warning |
| Preuve rejetée par juge | Bas | Élevé | Bien documenter, collaborer ministère |
| Demande data utilisatrices | Bas | Élevé | Zéro stockage, local-first, RGPD |
| Burnout équipe | Moyen | Élevé | Budget support, mentoring, externe |

---

## 💬 Pitch d'elevator (30s)

> *Gardienne est une app gratuite qui aide les jeunes filles du Cameroun à comprendre et se défendre contre le harcèlement en ligne. Elle détecte les menaces même en camfranglais, crée une preuve infalsifiable, et génère un dossier prêt-à-plainte. On vend des licences aux écoles et on s'appuie sur la RSE des télécoms. L'impact est social (moins de silence) et numérique (des preuves qui tiennent). On cherche des écoles pilotes et des partenaires pour déployer au Cameroun.*

