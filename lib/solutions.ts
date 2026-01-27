export interface Solution {
  slug: string;
  category: 'account-finance' | 'human-resources';
  translationKey: string;
}

export const financeSolutions: Solution[] = [
  {
    slug: 'fps-qr-code-augmentation',
    category: 'account-finance',
    translationKey: 'fpsQrCode',
  },
  {
    slug: 'ocr-document-management',
    category: 'account-finance',
    translationKey: 'ocrDocument',
  },
  {
    slug: 'revenue-cycle-documents',
    category: 'account-finance',
    translationKey: 'revenueCycle',
  },
];

export const hrSolutions: Solution[] = [
  {
    slug: 'freelancer-management',
    category: 'human-resources',
    translationKey: 'freelancerManagement',
  },
  {
    slug: 'payroll-management',
    category: 'human-resources',
    translationKey: 'payrollManagement',
  },
  {
    slug: 'talent-market-intelligence',
    category: 'human-resources',
    translationKey: 'talentIntelligence',
  },
  {
    slug: 'mpf-documents',
    category: 'human-resources',
    translationKey: 'mpfDocuments',
  },
];

export const allSolutions = [...financeSolutions, ...hrSolutions];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return allSolutions.find((s) => s.slug === slug);
}

export function getSolutionsByCategory(category: 'account-finance' | 'human-resources'): Solution[] {
  return allSolutions.filter((s) => s.category === category);
}

export const BOOKING_URL = 'https://calendar.app.google/i528ifBA6o7rMdsq7';
