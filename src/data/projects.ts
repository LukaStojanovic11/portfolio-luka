export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  cover: string;
  coverAlt: string;
}

export const projects: Project[] = [
  {
    slug: 'pulse-hug',
    title: 'Pulse — Trophée de la Générosité',
    subtitle: 'UX/UI · Projet HUG',
    summary:
      'Repenser le parcours de don du sang pour combler le delta entre inscriptions et dons réels.',
    tags: ['UX/UI', 'Recherche', 'Concept digital'],
    cover: '/images/projects/hug/onepager.jpg',
    coverAlt: 'One-pager infographique du concept Pulse pour les HUG',
  },
  {
    slug: 'educhildren-odd',
    title: 'EduChildren',
    subtitle: 'UX Research · Projet ODD',
    summary:
      'Une plateforme de parrainage scolaire transparente, pensée pour restaurer la confiance des donateurs.',
    tags: ['UX Research', 'Prototypage', 'ODD 4'],
    cover: '/images/projects/odd/cover.jpg',
    coverAlt: 'Couverture du brief EduChildren',
  },
  {
    slug: 'fightstart',
    title: 'FightStart.ch',
    subtitle: 'E-commerce',
    summary:
      'Boutique en ligne de matériel de sport de combat pour débutants, de la stratégie à la mise en ligne.',
    tags: ['E-commerce', 'WordPress', 'Stratégie digitale'],
    cover: '/images/projects/fightstart/cover.svg',
    coverAlt: 'Capture du site FightStart.ch',
  },
  {
    slug: 'etoile-blanche',
    title: "L'Étoile Blanche",
    subtitle: 'Branding & Direction artistique',
    summary:
      "Refonte de l'identité visuelle d'un restaurant lausannois : menus, réseaux sociaux, playbook de marque.",
    tags: ['Branding', 'Direction artistique', 'Print & Digital'],
    cover: '/images/projects/etoile-blanche/menu-signature.jpg',
    coverAlt: 'Menu signature redesigné pour L\'Étoile Blanche',
  },
  {
    slug: 'ancoro',
    title: 'Ancoro',
    subtitle: 'Stratégie & Business Model',
    summary:
      'Un service de navettes B2B pensé comme outil de marque employeur.',
    tags: ['Stratégie', 'Business Model', 'Mobilité B2B'],
    cover: '/images/projects/ancoro/business-model-canvas.jpg',
    coverAlt: 'Planche Business Model Canvas du projet Ancoro',
  },
  {
    slug: 'design-editorial',
    title: 'Design éditorial',
    subtitle: 'Mise en page & Illustration',
    summary:
      'Yearbook institutionnel 28 pages et infographie sur la risographie.',
    tags: ['Mise en page', 'InDesign', 'Illustration'],
    cover: '/images/projects/yearbook-riso/yearbook-cover.jpg',
    coverAlt: 'Couverture du Yearbook 2025',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
