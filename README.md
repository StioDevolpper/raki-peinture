# Raki Schilderwerken — Angular 15

Site vitrine une page pour **Raki Schilderwerken** (peinture intérieure /
extérieure, gyproc, enduits, rénovation — Anvers), **bilingue NL / EN**
(néerlandais par défaut).

Projet volontairement minimal : **un seul composant** (`AppComponent`,
standalone), pas de routeur, pas de module. Design sombre & premium avec un
**fond animé** (dégradés de couleur qui dérivent lentement + léger parallaxe à
la souris), titres *Marcellus*, boutons en pastilles arrondies — structure
inspirée de *peltier-batiment.fr*.

## Démarrer

```bash
npm install
npm start          # http://localhost:4200
```

Build de production :

```bash
npm run build      # génère dist/raki-peinture/
```

Le contenu de `dist/raki-peinture/` se dépose tel quel sur n'importe quel
hébergeur statique (Netlify, Vercel, GitHub Pages, Combell…).

## Arborescence

```
raki-peinture/
├── angular.json          config CLI (builder browser)
├── package.json          Angular 15.2, un seul composant
├── tsconfig*.json
└── src/
    ├── index.html        <head> : polices, favicon, Open Graph, JSON-LD
    ├── main.ts           bootstrapApplication(AppComponent)
    ├── styles.css        toute la feuille de style (design system + fond animé)
    └── app/
        ├── app.component.ts     logique : langue, menu, FAQ, formulaire, reveal, parallaxe
        ├── app.component.html    le gabarit complet
        └── content.ts            TOUS les textes NL / EN (à modifier ici)
```

## Modifier le contenu

Tout le texte est dans **`src/app/content.ts`**, objet `CONTENT` avec une clé
`nl` et une clé `en` de structure identique. Modifiez les deux.

La **langue par défaut est le néerlandais** (`lang: Lang = 'nl'` dans
`app.component.ts`). Le choix du visiteur est mémorisé dans le navigateur.
L'ordre des boutons NL / EN est défini par `LANGS` dans `content.ts`.

Les données non traduites (couleurs des cartes, icônes SVG, teintes du
nuancier) sont dans `app.component.ts` (`services`, `steps`, `swatchColors`).

## Fonctionnement du formulaire de devis

Identique à la version statique : à l'envoi, le composant construit un lien
`mailto:schilderwerkenraki@gmail.com` prérempli (objet + récapitulatif) et
ouvre le logiciel de messagerie du visiteur. Voir `submitQuote()` dans
`app.component.ts`.

Pour un envoi direct sans client mail (Formspree / Web3Forms), remplacer le
corps de `submitQuote()` par un `fetch()` POST — 5 lignes.

## À confirmer avant mise en ligne

Mêmes points que la version statique (voir `../README.md`) :

1. **E-mail** — la carte de visite affiche `www.schilderwerkenraki@gmail.com` ;
   le `www.` est probablement une faute. Valeur utilisée :
   `schilderwerkenraki@gmail.com` (constante `EMAIL` en haut de
   `app.component.ts`, + `content.ts`, + `src/index.html`).
2. **Numéro d'entreprise / BTW** — absent de la carte, à ajouter dans le pied
   de page pour les mentions légales.
3. **Photos de chantiers** — la section « Ambiances » présente des teintes,
   pas de vraies réalisations ; renvoi vers Instagram.
4. **Domaine** — `schilderwerkenraki.com` est utilisé dans les métadonnées
   (`src/index.html`) ; adapter si besoin.

## Détails techniques

- Angular **15.2.10**, composant **standalone** + `bootstrapApplication`.
- `FormsModule` (`ngModel`) pour le formulaire.
- `Title` / `Meta` (NL / EN) mis à jour à chaque changement de langue.
- Fond animé en CSS pur (`@keyframes`), **désactivé** si
  `prefers-reduced-motion`. Parallaxe souris throttlé via `requestAnimationFrame`.
- Révélation au scroll via `IntersectionObserver`.
- Polices *Marcellus* + *Hanken Grotesk* chargées depuis Google Fonts
  (fallback système si hors ligne).
- Aucune dépendance UI tierce.
