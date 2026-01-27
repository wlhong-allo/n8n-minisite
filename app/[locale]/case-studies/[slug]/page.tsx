import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import CaseStudyPageTemplate from '@/components/templates/CaseStudyPageTemplate';
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies';
import { BOOKING_URL } from '@/lib/solutions';

export async function generateStaticParams() {
  const locales = ['en', 'zh-HK'];
  return locales.flatMap((locale) =>
    caseStudies.map((cs) => ({
      locale,
      slug: cs.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return { title: 'Not Found' };
  }

  const t = await getTranslations(`CaseStudies.${caseStudy.translationKey}`);
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const t = await getTranslations(`CaseStudies.${caseStudy.translationKey}`);
  const tCommon = await getTranslations('Common');

  return (
    <CaseStudyPageTemplate
      locale={locale}
      title={t('title')}
      category={caseStudy.category}
      datePublished={caseStudy.datePublished}
      hero={{
        headline: t('hero.headline'),
        result: t('hero.result'),
        keyResultLabel: tCommon('keyResult'),
      }}
      breadcrumbs={{
        home: tCommon('breadcrumb.home'),
        caseStudies: tCommon('breadcrumb.caseStudies'),
      }}
      inlineCta={{
        prompt: tCommon('wantResults'),
        buttonText: tCommon('bookConsultation'),
      }}
      challenge={{
        title: t('challenge.title'),
        content: t('challenge.content'),
        points: [
          t('challenge.points.0'),
          t('challenge.points.1'),
          t('challenge.points.2'),
          t('challenge.points.3'),
        ],
      }}
      solution={{
        title: t('solution.title'),
        content: t('solution.content'),
        features: [
          t('solution.features.0'),
          t('solution.features.1'),
          t('solution.features.2'),
          t('solution.features.3'),
        ],
      }}
      results={{
        title: t('results.title'),
        metrics: [
          { value: t('results.metrics.0.value'), label: t('results.metrics.0.label') },
          { value: t('results.metrics.1.value'), label: t('results.metrics.1.label') },
          { value: t('results.metrics.2.value'), label: t('results.metrics.2.label') },
        ],
      }}
      testimonial={{
        quote: t('testimonial.quote'),
        author: t('testimonial.author'),
        role: t('testimonial.role'),
        company: t('testimonial.company'),
      }}
      cta={{
        title: t('cta.title'),
        subtitle: t('cta.subtitle'),
        buttonText: t('cta.button'),
      }}
      seoDescription={t('meta.description')}
      utmCampaign={`case_study_${slug}`}
    />
  );
}
