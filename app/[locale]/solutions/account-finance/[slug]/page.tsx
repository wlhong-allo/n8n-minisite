import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import { getSolutionBySlug, financeSolutions } from '@/lib/solutions';

export async function generateStaticParams() {
  return financeSolutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  
  if (!solution) {
    return { title: 'Not Found' };
  }

  const t = await getTranslations(`Solutions.${solution.translationKey}`);
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
    },
  };
}

// Helper function to get FAQ items dynamically
function getFaqItems(
  t: { (key: string): string; has: (key: string) => boolean },
  maxItems: number = 10
) {
  const items: Array<{ question: string; answer: string }> = [];
  
  for (let i = 0; i < maxItems; i++) {
    const questionKey = `faq.items.${i}.question`;
    const answerKey = `faq.items.${i}.answer`;
    
    // Use t.has() to check if the key exists
    if (t.has(questionKey) && t.has(answerKey)) {
      items.push({
        question: t(questionKey),
        answer: t(answerKey),
      });
    } else {
      break;
    }
  }
  
  return items;
}

// Helper function to get array items dynamically
function getArrayItems<T>(
  t: { (key: string): string; has: (key: string) => boolean },
  basePath: string,
  fields: string[],
  maxItems: number = 10
): T[] {
  const items: T[] = [];
  
  for (let i = 0; i < maxItems; i++) {
    const firstFieldKey = `${basePath}.${i}.${fields[0]}`;
    
    // Use t.has() to check if the key exists
    if (t.has(firstFieldKey)) {
      const item: Record<string, string> = {};
      let allFieldsExist = true;
      
      for (const field of fields) {
        const fieldKey = `${basePath}.${i}.${field}`;
        if (t.has(fieldKey)) {
          item[field] = t(fieldKey);
        } else {
          allFieldsExist = false;
          break;
        }
      }
      
      if (allFieldsExist) {
        items.push(item as T);
      } else {
        break;
      }
    } else {
      break;
    }
  }
  
  return items;
}

export default async function FinanceSolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution || solution.category !== 'account-finance') {
    notFound();
  }

  const t = await getTranslations(`Solutions.${solution.translationKey}`);
  const tNav = await getTranslations('Navbar.solutions');
  const tCommon = await getTranslations('Common');

  // Get dynamic arrays
  const painPointItems = getArrayItems<{ title: string; description: string }>(
    t,
    'painPoints.points',
    ['title', 'description']
  );
  
  const howItWorksSteps = getArrayItems<{ title: string; description: string }>(
    t,
    'howItWorks.steps',
    ['title', 'description']
  );
  
  const benefitItems = getArrayItems<{ metric: string; title: string; description: string }>(
    t,
    'benefits.items',
    ['metric', 'title', 'description']
  );
  
  const faqItems = getFaqItems(t);

  return (
    <SolutionPageTemplate
      locale={locale}
      categoryName={tNav('finance.title')}
      categoryHref="/solutions/account-finance"
      solutionName={t('hero.title')}
      breadcrumbs={{
        home: tCommon('breadcrumb.home'),
        solutions: tCommon('breadcrumb.solutions'),
      }}
      hero={{
        title: t('hero.title'),
        subtitle: t('hero.subtitle'),
        description: t('hero.description'),
        ctaText: t('hero.cta'),
        seeHowItWorksText: tCommon('seeHowItWorks'),
      }}
      painPoints={{
        title: t('painPoints.title'),
        subtitle: t('painPoints.subtitle'),
        points: painPointItems,
      }}
      howItWorks={{
        title: t('howItWorks.title'),
        subtitle: t('howItWorks.subtitle'),
        steps: howItWorksSteps,
      }}
      benefits={{
        title: t('benefits.title'),
        subtitle: t('benefits.subtitle'),
        items: benefitItems,
      }}
      faq={{
        title: t('faq.title'),
        items: faqItems,
      }}
      cta={{
        title: t('cta.title'),
        subtitle: t('cta.subtitle'),
        buttonText: t('cta.button'),
        disclaimer: tCommon('freeConsultation'),
      }}
      seoDescription={t('meta.description')}
      utmCampaign={slug}
    />
  );
}
