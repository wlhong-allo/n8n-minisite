export interface CaseStudy {
  slug: string;
  translationKey: string;
  relatedSolution: string;
  category: string;
  datePublished: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'talent-market-trend',
    translationKey: 'talentMarketTrend',
    relatedSolution: 'talent-market-intelligence',
    category: 'Human Resources',
    datePublished: '2025-12-15',
  },
  {
    slug: 'fps-code-invoice-augmentation',
    translationKey: 'fpsInvoice',
    relatedSolution: 'fps-qr-code-augmentation',
    category: 'Account & Finance',
    datePublished: '2025-11-20',
  },
  {
    slug: 'payroll-operation-ai',
    translationKey: 'payrollAi',
    relatedSolution: 'payroll-management',
    category: 'Human Resources',
    datePublished: '2025-09-05',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === category);
}
