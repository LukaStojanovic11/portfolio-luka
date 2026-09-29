# Cahier des charges — Portfolio de Luka Stojanovic

Ce document est destiné à être donné tel quel à **Claude Code** pour générer le site, puis à le déployer sur **Netlify** via **GitHub**. Il contient : le brief créatif, le design system, l'arborescence, le contenu rédigé de chaque page, l'organisation des assets, et les instructions de déploiement.

---

## 1. Contexte & objectif

Luka Stojanovic est étudiant en **Ingénierie des médias** (filière COMEM) à la **HEIG-VD**, en Suisse. Il souhaite un portfolio professionnel pour présenter 6 projets (UX/UI, branding, e-commerce, design éditorial, business model) à de futurs employeurs ou clients.

- **Style visuel voulu** : sombre, bold, impactant. Pas minimaliste-mou : de la typographie forte, du contraste, du rythme. On peut s'inspirer de la rigueur suisse (grille claire, hiérarchie typographique) vue dans son propre projet "Étoile Blanche", mais en version plus dark/éditoriale.
- **Référence donnée par l'utilisateur** : http://romainblanchard.ch/ — à utiliser uniquement comme inspiration de **structure** (organisation clean d'un portfolio digital multi-compétences), **pas comme référence visuelle**. Le rendu final doit être meilleur et distinct.
- **Structure** : site multi-pages (accueil + une page par projet + à propos/contact), pas un simple scroll one-page.

---

## 2. Stack technique recommandée

Pour un portfolio multi-pages avec mise en page partagée (nav, footer), rapide, simple à déployer sur Netlify sans configuration serveur :

- **Astro** (recommandé) : idéal pour un site à dominante statique/contenu, génère du HTML ultra léger, gère très bien un layout partagé + une page par projet, déploiement Netlify en un clic (détection automatique, zéro config).
- Alternative plus simple si Claude Code préfère : HTML/CSS/JS pur avec un système de "partials" (header/footer inclus par script de build), mais Astro est préférable pour la maintenabilité (7+ pages).
- CSS : Tailwind CSS (rapide à styliser, cohérent) **ou** CSS custom avec variables (si on veut un contrôle typographique plus fin — vu le côté "bold/éditorial" recherché, un CSS custom avec de grandes variables de type peut donner un résultat plus qualitatif que du Tailwind par défaut).
- Polices : Google Fonts. Suggestion : une sans-serif condensée/grasse pour les titres (ex. *Archivo Black*, *Space Grotesk*, *General Sans*, ou *Neue Montreal*-like via *Inter Tight*) + une sans-serif neutre pour le texte courant (*Inter* ou *Inter Tight*).
- Animations légères : transitions CSS + un peu de scroll-reveal (IntersectionObserver natif, pas de grosse librairie).
- Formulaire de contact : simple `mailto:` ou intégration **Netlify Forms** (gratuit, zéro backend) — recommandé.
- Images : format `.webp` optimisé, lazy-loading natif (`loading="lazy"`).

**Consigne à donner telle quelle à Claude Code** : *"Utilise Astro + TypeScript, CSS custom avec variables (pas de framework CSS lourd), déployable directement sur Netlify. Structure en layout partagé (Header/Footer) + une page par projet."*

---

## 3. Arborescence du site

```
/                     → Accueil
/a-propos             → À propos / profil
/projets/pulse-hug            → Projet 1 : Pulse (HUG)
/projets/educhildren-odd      → Projet 2 : EduChildren (ODD)
/projets/fightstart            → Projet 3 : FightStart.ch (e-commerce)
/projets/etoile-blanche        → Projet 4 : L'Étoile Blanche (branding)
/projets/ancoro                → Projet 5 : Ancoro (business model)
/projets/design-editorial      → Projet 6 : Yearbook & Risographie
/contact              → Contact (peut aussi être une section sur /a-propos)
```

Navigation (header, toutes les pages) : `Accueil` — `Projets` (dropdown ou ancre vers la liste) — `À propos` — `Contact`. Le nom "Luka Stojanovic" ou un logo/monogramme "LS" en haut à gauche, cliquable vers l'accueil.

Footer (toutes les pages) : liens GitHub / LinkedIn / mail, copyright, éventuellement "Retour en haut".

---

## 4. Design system

### Couleurs
- Fond principal : noir / anthracite très sombre (`#0A0A0A` à `#111111`)
- Texte principal : blanc cassé (`#F5F5F0` ou `#FAFAFA`)
- Couleur d'accent : **rouge** (`#AB2328` — la couleur exacte utilisée dans son propre projet Étoile Blanche, ça crée un fil rouge cohérent et c'est "sa" couleur signature) à utiliser avec parcimonie (liens, hover, tags, accents).
- Gris intermédiaires pour les cartes/sections : `#1A1A1A`, `#232323`.

### Typographie
- Titres (H1/H2) : grande casse, bold, potentiellement en majuscules pour les gros titres de hero, avec un tracking légèrement resserré.
- Sous-titres/labels : petite taille, espacée (letter-spacing large), en majuscules — façon "étiquette" (comme vu dans ses propres livrables Étoile Blanche : "01 — SYSTÈME", "STRATÉGIE SIGNATURE").
- Corps de texte : lisible, taille confortable (16–18px), interligne aéré.

### Ton de la rédaction
- Direct, professionnel, pas de blabla marketing creux. Phrases courtes. On peut reprendre la logique "problème → démarche → solution → résultat" qui structure déjà son travail (UX).

### Composants clés
- **Hero accueil** : grand titre (nom + accroche), photo ou pas (voir contenu ci-dessous), CTA vers les projets.
- **Cartes projets** (grille sur l'accueil) : image de couverture, titre du projet, 1 ligne de description, tag(s) de compétence (UX, Branding, E-commerce...).
- **Page projet type** : hero (titre + tags + lien externe si dispo), contexte, rôle, démarche/process (avec visuels), solution, résultats, galerie d'images, bouton retour aux projets.
- **Bloc "À propos"** : photo (fournie), bio, compétences, formation, liens.

---

## 5. Organisation des assets fournis

Un pack d'assets a été généré et te sera livré en téléchargement, à placer dans `/public/images/` de ton projet Astro :

```
assets/
├── profile/
│   └── luka-photo.png              → photo de profil (page À propos + éventuellement hero)
└── projects/
    ├── hug/
    │   └── onepager.jpg             → infographie one-pager du concept Pulse
    ├── odd/
    │   └── cover.jpg                → couverture du brief EduChildren
    ├── ancoro/
    │   └── business-model-canvas.jpg → planche BMC / Value Proposition / SWOT / PESTEL
    ├── etoile-blanche/
    │   ├── story1.jpg               → story Instagram
    │   ├── post1.jpg                → post Instagram "Le Clair" (cocktail signature)
    │   ├── post2.jpg
    │   ├── post3.jpg
    │   ├── menu-carte-des-mets.jpg  → page menu redesigné
    │   └── menu-signature.jpg
    └── yearbook-riso/
        ├── yearbook-cover.jpg       → couverture Yearbook 2025
        └── risographie-poster.jpg   → infographie sur la risographie
```

**Assets manquants à ajouter toi-même avant de lancer Claude Code** (je n'ai pas pu les générer automatiquement) :
- Une **capture d'écran** du site https://dondusang.loannjuillerat.ch/ (page d'accueil, et idéalement la page `/entreprise/ubs`) pour illustrer le projet Pulse/HUG.
- Une ou deux **captures d'écran** de https://fightstart.ch/ (accueil + page boutique) pour illustrer FightStart.
- Optionnel : une capture du prototype Figma ODD (le lien nécessite une connexion Figma, difficile à capturer automatiquement).

Pour prendre ces captures : ouvre le site dans ton navigateur, `Cmd/Ctrl+Shift+4` (Mac) ou l'outil Capture (Windows), et enregistre en `.png`/`.jpg` dans les dossiers correspondants ci-dessus.

---

## 6. Contenu rédigé — à donner tel quel à Claude Code

### 6.1 Page d'accueil

**Hero :**
> Titre : LUKA STOJANOVIC
> Accroche : Designer UX/UI & Ingénieur des médias
> Sous-texte : Étudiant en Ingénierie des médias à la HEIG-VD, je conçois des expériences digitales claires, utiles et soignées — de la recherche UX à la direction artistique.
> CTA : "Voir mes projets" → ancre/scroll vers la grille de projets

**Grille des 6 projets** (titre + 1 ligne + tag) :

1. **Pulse — Trophée de la Générosité** · UX/UI · Projet HUG
   *Repenser le parcours de don du sang pour combler le delta entre inscriptions et dons réels.*
2. **EduChildren** · UX Research · Projet ODD
   *Une plateforme de parrainage scolaire transparente, pensée pour restaurer la confiance des donateurs.*
3. **FightStart.ch** · E-commerce
   *Boutique en ligne de matériel de sport de combat pour débutants, de la stratégie à la mise en ligne.*
4. **L'Étoile Blanche** · Branding & Direction artistique
   *Refonte de l'identité visuelle d'un restaurant lausannois : menus, réseaux sociaux, playbook de marque.*
5. **Ancoro** · Stratégie & Business Model
   *Un service de navettes B2B pensé comme outil de marque employeur.*
6. **Design éditorial** · Mise en page & Illustration
   *Yearbook institutionnel 28 pages et infographie sur la risographie.*

### 6.2 Page "À propos"

> Je m'appelle Luka Stojanovic, étudiant en Ingénierie des médias (filière COMEM) à la HEIG-VD. Je m'intéresse à tout ce qui touche à la conception digitale : recherche UX, direction artistique, branding et développement front-end.
>
> Ce qui m'anime, c'est de transformer un problème complexe (un parcours utilisateur confus, une identité visuelle éclatée, une offre difficile à lire) en une solution simple, claire et cohérente — sans sacrifier l'exigence graphique.
>
> Mes projets récents couvrent la recherche UX (personas, tests utilisateurs, prototypage Figma), le branding (identité visuelle, réseaux sociaux, supports print) et le développement de sites (e-commerce, sites vitrines).

**Compétences** (à afficher en tags/liste) : UX Research · UI Design · Figma · Direction artistique · Identité visuelle · InDesign · Business Model & Stratégie · HTML/CSS · WordPress

**Formation** : Ingénierie des médias, HEIG-VD (COMEM)

**Contact / liens** :
- Email : sluka1008@gmail.com
- LinkedIn : https://www.linkedin.com/in/luka-stojanovic-434a962a1/
- GitHub : https://github.com/LukaStojanovic11

### 6.3 Projet — Pulse (HUG)

> **Tags :** UX/UI · Recherche · Concept digital
> **Client / cadre :** Collaboration HUG × HEIG-VD
> **Lien :** https://dondusang.loannjuillerat.ch/ (démo — voir aussi la page entreprise : /entreprise/ubs)

**Contexte**
Les Hôpitaux Universitaires de Genève constatent un delta de 30% entre le nombre de personnes qui s'inscrivent à une collecte de sang et celles qui donnent réellement le jour J — alors que 700 dons sont nécessaires chaque jour en Suisse. Le Trophée de la Générosité, un dispositif de reconnaissance pour les entreprises partenaires, avait disparu depuis 2010.

**Problématique**
Comment rassurer les donneurs potentiels, valoriser les entreprises partenaires et redonner un cadre motivant aux collectes en entreprise — sans complexifier un processus déjà encadré médicalement ?

**Démarche & solution**
- Un **quiz d'éligibilité interactif** en 10 questions, guidé par une mascotte (Courage, un castor en blouse médicale), pour rassurer en amont sur l'éligibilité au don.
- Des **pages co-brandées** par entreprise (logo + charte CTS), accessibles via un lien unique par collecte, avec un label CTS renouvelable intégrable à une démarche RSE.
- La **relance du Trophée de la Générosité**, intégrée au parcours RH dès la création d'une collecte, avec historique des vainqueurs et candidature simplifiée.

**Objectifs mesurables définis**
- Taux de complétion du quiz : > 70%
- Taux de conversion quiz → RDV : > 50%
- Réduction du delta inscriptions/dons réels : de 30% à < 20%
- Téléchargement des kits de communication par les RH : > 80%

**Résultat**
Une UX rassurante, proche de l'interface existante pour ne pas dérouter les utilisateurs habitués, combinée à une mascotte originale et un nouveau label — sans modifier le processus médical existant.

---

### 6.4 Projet — EduChildren (ODD)

> **Tags :** UX Research · Prototypage · ODD 4 — Éducation de qualité
> **Lien prototype :** https://www.figma.com/design/9mwjQqhMEiVJbH1GfRrv8H/BasesUI-LukaStojanovic-WilliamVladStancu-SteveBenjamin-NabilMohamedHagos

**Contexte**
Projet mené autour de l'Objectif de Développement Durable n°4 (éducation de qualité). Recherche menée sur les freins au don pour l'éducation dans les pays défavorisés : manque de transparence des ONG, frais de fonctionnement élevés, difficulté à vérifier l'usage réel des fonds.

**Recherche utilisateur**
Deux personas construits à partir des recherches : *Thomas*, chef de projet tech de 32 ans, sensible aux causes sociales mais méfiant envers les intermédiaires financiers non identifiés ; *Sophie*, enseignante de 45 ans, en quête d'un lien humain concret avec l'enfant ou l'école soutenue.

**How Might We**
"Comment garantir une transparence totale et un suivi engageant pour les donateurs souhaitant financer la scolarité d'un enfant dans des pays défavorisés via un site internet ?"

**Solution retenue**
Une plateforme hybride combinant :
- des **smart contracts** pour sécuriser les dons et automatiser les paiements,
- un **dashboard de transparence financière** pour suivre le flux d'argent en temps réel,
- un **module de parrainage** pour suivre l'évolution de l'enfant soutenu.

**Protection des mineurs**
Le projet intègre un volet éthique fort : anonymisation systématique des enfants sur les plateformes, appels encadrés exclusivement via l'école, communications toujours supervisées par un parent ou enseignant — aucun contact direct entre parrain et enfant.

**Itérations post-tests utilisateurs**
Les tests ont révélé une perception erronée du coût réel du parrainage (~30 CHF/mois) et un besoin de réassurance sur la vérification des écoles partenaires — deux axes d'amélioration identifiés et documentés.

---

### 6.5 Projet — FightStart.ch

> **Tags :** E-commerce · WordPress · Stratégie digitale
> **Lien live :** https://fightstart.ch/

**Contexte**
Conception d'un site e-commerce fictif (projet d'étude HEIG-VD) dédié à la vente de matériel de sport de combat pour débutants en Suisse : sacs de frappe, protections, sacs de sport.

**Positionnement**
Rassurer un public novice avec trois piliers : protection totale (équipements certifiés), expédition rapide depuis un stock suisse (Yverdon-les-Bains), et budget maîtrisé (packs essentiels accessibles).

**Réalisation**
Site développé sous WordPress/Elementor : structure boutique complète (catalogue, fiches produit, panier), pages institutionnelles (à propos, FAQ, CGV, livraison, retours), stratégie de contenu (blog), intégration newsletter avec code de réduction, et widget de contact WhatsApp.

**Rôle**
Conception de l'arborescence, direction artistique du site, rédaction des contenus, mise en ligne et configuration e-commerce.

---

### 6.6 Projet — L'Étoile Blanche (Simple Type)

> **Tags :** Branding · Direction artistique · Print & Digital

**Contexte**
L'Étoile Blanche, établissement historique de Lausanne, vient de changer de gérance. Les supports existants (menus notamment) souffrent d'une surcharge visuelle (90.9% des retours diagnostic) qui nuit à la lisibilité de l'offre.

**Mandat**
Clarifier les supports visuels de l'établissement pour renforcer lisibilité, cohérence et image globale — sans dénaturer l'identité existante. Passer d'une simple lecture informative à une véritable expérience de marque.

**Stratégie : "L'essentiel suffit"**
Une approche par réduction plutôt que par décoration : une structure logique et durable plutôt qu'un habillage graphique. Grille claire, hiérarchie typographique stricte (Titre > Catégorie > Contenu > Prix), palette resserrée (noir, rouge `#AB2328`, blanc) où la typographie devient l'outil de design principal — un clin d'œil à la rigueur graphique suisse, pensé pour rassurer une clientèle locale autant que touristique.

**Livrables**
- Refonte complète des menus (carte des mets, boissons, signature, bricoles & bar)
- Stratégie de contenu digital : 3 posts/semaine Instagram & TikTok
- Templates de posts et stories Instagram (ex. la série "Signature" mettant en scène les cocktails maison)
- Playbook de marque complet pour une prise en main autonome par l'équipe en place

**Résultat**
Un système simple à utiliser en interne (templates réutilisables), livré avec un playbook — pas seulement un nouveau menu, mais une structure visuelle durable pour accompagner la nouvelle gérance.

---

### 6.7 Projet — Ancoro

> **Tags :** Stratégie · Business Model · Mobilité B2B

**Contexte**
Ancoro est un service de navettes B2B pensé comme un outil de marque employeur plutôt qu'un simple service de transport : "Le seul trajet qui porte votre logo et renforce votre marque employeur."

**Pivot stratégique**
Plutôt qu'une compagnie de transport possédant sa propre flotte, Ancoro devient une agence d'expérience employé qui s'appuie sur des partenariats avec des opérateurs de transport locaux, via un "Pack Onboarding & Marque Employeur" (covering extérieur, aménagement intérieur, application de badgeage compatible avec le trajet et diffusée en contenu d'onboarding).

**Travail réalisé**
- Business Model Canvas & Value Proposition Canvas
- Analyse de marché : PESTEL, analyse de la concurrence, SWOT, matrice TOWS
- Team Alignment Map et Assessment Questions for Leaders
- Prototype financier : structure de coûts, marge brute par bus, projection de revenus à 5/10/15 contrats

**Différenciation**
Transformer une navette en point de contact émotionnel dès le premier jour d'un nouvel employé — un moment d'onboarding plutôt qu'un simple trajet.

---

### 6.8 Projet — Design éditorial (Yearbook & Risographie)

> **Tags :** Mise en page · InDesign · Illustration

**Yearbook 2025 — Ingénierie des médias**
Mise en page complète (28 pages) du yearbook institutionnel de la filière Ingénierie des médias (HEIG-VD / COMEM), sur le thème de la "Robustesse" : conception de la grille éditoriale, hiérarchie typographique, mise en pages des contributions (éditorial, entretiens, portraits d'enseignants, travaux de bachelor).

**Infographie — La Risographie**
Poster pédagogique expliquant la technique d'impression risographe : histoire, caractéristiques techniques, processus d'impression, avantages/limites et exemples. Un exercice de hiérarchisation de l'information dense sous forme d'infographie colorée et structurée (système de pictogrammes numérotés).

---

## 7. Prompt à copier-coller pour lancer Claude Code

```
Construis un portfolio web pour Luka Stojanovic, designer UX/UI et
ingénieur des médias. Utilise Astro + TypeScript, CSS custom (pas de
framework CSS lourd type Bootstrap), pensé pour un déploiement Netlify
sans configuration serveur.

Style : sombre, bold, impactant. Fond quasi noir (#0A0A0A), texte blanc
cassé (#FAFAFA), couleur d'accent rouge (#AB2328) utilisée avec parcimonie.
Typographie de titres bold/condensée en majuscules pour les headers,
corps de texte lisible et aéré. Inspiration structurelle (pas visuelle) :
un portfolio digital pro à plusieurs pages, clair et bien hiérarchisé.

Structure : page d'accueil (hero + grille de 6 projets), page "à propos"
avec photo et contact, une page dédiée par projet, navigation persistante
(header + footer). Le contenu texte complet de chaque page est fourni
dans le fichier CAHIER_DES_CHARGES_PORTFOLIO.md (sections 6.1 à 6.8) —
utilise-le tel quel, reformate seulement si nécessaire pour le web.

Les images sont dans le dossier /assets fourni, à copier dans
/public/images en respectant l'arborescence donnée dans la section 5
du cahier des charges.

Ajoute un formulaire de contact simple (Netlify Forms) sur la page
"à propos" ou "contact", avec email, LinkedIn et GitHub en liens directs
(voir section 6.2).

Le site doit être responsive (mobile-first), rapide, et prêt à être
poussé sur un dépôt GitHub puis connecté à Netlify.
```

---

## 8. Déploiement — GitHub + Netlify (à partir de zéro)

### Étape 1 — Créer le dépôt GitHub
1. Va sur https://github.com/LukaStojanovic11 et clique sur **New repository**.
2. Nom suggéré : `portfolio` ou `luka-portfolio`.
3. Laisse-le vide (pas de README auto), visibilité publique ou privée au choix.

### Étape 2 — Pousser le code depuis Claude Code
Une fois le site généré localement par Claude Code, dans le dossier du projet :
```bash
git init
git add .
git commit -m "Initial commit — portfolio"
git branch -M main
git remote add origin https://github.com/LukaStojanovic11/NOM-DU-REPO.git
git push -u origin main
```

### Étape 3 — Créer un compte Netlify
1. Va sur https://app.netlify.com/signup et inscris-toi (le plus simple : "Sign up with GitHub", ça connecte directement les deux comptes).

### Étape 4 — Déployer le site
1. Dans Netlify, clique sur **Add new site → Import an existing project**.
2. Choisis **GitHub**, autorise l'accès, puis sélectionne ton dépôt portfolio.
3. Netlify détecte automatiquement Astro (build command `astro build` / publish directory `dist`) — si ce n'est pas automatique, renseigne-le manuellement.
4. Clique sur **Deploy site**. Ton site est en ligne en 1-2 minutes sur une URL du type `nom-aleatoire.netlify.app`.

### Étape 5 — Nom de domaine (optionnel)
Dans **Site settings → Domain management**, tu peux soit renommer le sous-domaine Netlify gratuit (`luka-stojanovic.netlify.app`), soit connecter un nom de domaine personnalisé si tu en achètes un.

### Étape 6 — Mises à jour futures
Chaque fois que tu pousses du code sur la branche `main` (`git push`), Netlify redéploie automatiquement le site — aucune action manuelle nécessaire.

---

*Document préparé pour servir de brief complet à Claude Code. Toutes les données proviennent des livrables PDF fournis par Luka Stojanovic et des sites en ligne cités.*
