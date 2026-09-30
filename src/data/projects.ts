export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  /** browser = mockup fenêtre navigateur (projets digitaux) · print = mockup document/planche (branding, print, stratégie) */
  coverStyle: 'browser' | 'print';
  /** object-position CSS pour cadrer la partie la plus forte du visuel */
  coverPosition?: string;
  /** facteur de zoom (scale) appliqué au visuel de couverture, pour resserrer sur un détail */
  coverZoom?: number;
}

export const projects: Project[] = [
  {
    slug: 'pulse-hug',
    title: 'Pulse — Trophée de la Générosité',
    subtitle: 'UX/UI · Projet HUG',
    summary:
      'Repenser le parcours de don du sang pour combler le delta entre inscriptions et dons réels.',
    tags: ['UX/UI', 'Recherche', 'Concept digital'],
    cover: '/images/projects/hug/screenshot-home.jpg',
    coverAlt: "Capture de la page d'accueil du site Pulse",
    coverStyle: 'browser',
    coverPosition: 'top',
  },
  {
    slug: 'educhildren-odd',
    title: 'EduChildren',
    subtitle: 'UX Research · Projet ODD',
    summary:
      'Une plateforme de parrainage scolaire transparente, pensée pour restaurer la confiance des donateurs.',
    tags: ['UX Research', 'Prototypage', 'ODD 4'],
    cover: '/images/projects/odd/cover.jpg',
    coverAlt: 'Couverture du brief EduChildren — ODD 4, Éducation de qualité',
    coverStyle: 'browser',
    coverPosition: 'center',
  },
  {
    slug: 'fightstart',
    title: 'FightStart.ch',
    subtitle: 'E-commerce',
    summary:
      'Boutique en ligne de matériel de sport de combat pour débutants, de la stratégie à la mise en ligne.',
    tags: ['E-commerce', 'WordPress', 'Stratégie digitale'],
    cover: '/images/projects/fightstart/screenshot-home-hero.jpg',
    coverAlt: 'Capture de la page d\'accueil de FightStart.ch',
    coverStyle: 'browser',
    coverPosition: 'top',
  },
  {
    slug: 'etoile-blanche',
    title: "L'Étoile Blanche",
    subtitle: 'Branding & Direction artistique',
    summary:
      "Refonte de l'identité visuelle d'un restaurant lausannois : menus, réseaux sociaux, playbook de marque.",
    tags: ['Branding', 'Direction artistique', 'Print & Digital'],
    cover: '/images/projects/etoile-blanche/post3.jpg',
    coverAlt: 'Post Instagram "Fumant" — cordon bleu fumant, série signature Étoile Blanche',
    coverStyle: 'print',
    coverPosition: 'center top',
  },
  {
    slug: 'ancoro',
    title: 'Ancoro',
    subtitle: 'Stratégie & Business Model',
    summary:
      'Un service de navettes B2B pensé comme outil de marque employeur.',
    tags: ['Stratégie', 'Business Model', 'Mobilité B2B'],
    cover: '/images/projects/ancoro/business-model-canvas.jpg',
    coverAlt: 'Logo Ancoro et navette de marque employeur, extrait de la planche stratégique',
    coverStyle: 'print',
    coverPosition: 'left top',
    coverZoom: 2.6,
  },
  {
    slug: 'design-editorial',
    title: 'Design éditorial',
    subtitle: 'Mise en page & Illustration',
    summary:
      'Yearbook institutionnel 28 pages et infographie sur la risographie.',
    tags: ['Mise en page', 'InDesign', 'Illustration'],
    cover: '/images/projects/yearbook-riso/yearbook-cover.jpg',
    coverAlt: 'Couverture du Yearbook 2025 — Ingénierie des médias',
    coverStyle: 'print',
    coverPosition: 'center top',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
