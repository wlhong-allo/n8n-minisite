import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { caseStudies } from '@/lib/case-studies';
import { BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('CaseStudies.hub');
  return {
    title: t('title') + ' | Aitivate',
    description: t('subtitle'),
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('CaseStudies.hub');
  const tFooter = await getTranslations('Footer');
  const tCommon = await getTranslations('Common');

  return (
    <div className="relative min-h-screen">
      <StructuredData type="Organization" />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map(async (caseStudy) => {
                const tCase = await getTranslations(`CaseStudies.${caseStudy.translationKey}`);
                return (
                  <CaseStudyCard
                    key={caseStudy.slug}
                    title={tCase('title')}
                    excerpt={tCase('excerpt')}
                    result={tCase('hero.result')}
                    slug={caseStudy.slug}
                    locale={locale}
                    category={caseStudy.category}
                    keyResultLabel={tCommon('keyResult')}
                    readMoreText={tCommon('readCaseStudy')}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <ConversionCTA
          title={tFooter('cta_title')}
          subtitle={tFooter('cta_subtitle')}
          ctaText={tFooter('cta_button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="case_studies_hub"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
