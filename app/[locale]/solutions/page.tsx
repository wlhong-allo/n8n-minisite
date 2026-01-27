import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { financeSolutions, hrSolutions, BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Solutions.hub');
  return {
    title: t('title') + ' | Aitivate',
    description: t('subtitle'),
  };
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Solutions.hub');
  const tNav = await getTranslations('Navbar.solutions');
  const tFooter = await getTranslations('Footer');
  const tCommon = await getTranslations('Common');

  const financeIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const hrIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

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

        {/* Finance Solutions */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('finance.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('finance.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {financeSolutions.map((solution) => (
                <SolutionCard
                  key={solution.slug}
                  title={tNav(`finance.${solution.translationKey === 'fpsQrCode' ? 'fps' : 
                    solution.translationKey === 'ocrDocument' ? 'ocr' :
                    solution.translationKey === 'revenueCycle' ? 'revenue' :
                    solution.translationKey === 'receivableAging' ? 'aging' : 'reminder'}`)}
                  description=""
                  icon={financeIcon}
                  href={`/${locale}/solutions/account-finance/${solution.slug}`}
                  learnMoreText={tCommon('learnMore')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HR Solutions */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('hr.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('hr.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hrSolutions.map((solution) => (
                <SolutionCard
                  key={solution.slug}
                  title={tNav(`hr.${solution.translationKey === 'freelancerManagement' ? 'freelancer' :
                    solution.translationKey === 'payrollManagement' ? 'payroll' :
                    solution.translationKey === 'talentIntelligence' ? 'talent' : 'mpf'}`)}
                  description=""
                  icon={hrIcon}
                  href={`/${locale}/solutions/human-resources/${solution.slug}`}
                  learnMoreText={tCommon('learnMore')}
                />
              ))}
            </div>
          </div>
        </section>

        <ConversionCTA
          title={tFooter('cta_title')}
          subtitle={tFooter('cta_subtitle')}
          ctaText={tFooter('cta_button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="solutions_hub"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
