import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import ConversionCTA from '@/components/ConversionCTA';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import StructuredData from '@/components/StructuredData';
import { hrSolutions, BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Solutions.hub');
  return {
    title: t('hr.title') + ' | Aitivate',
    description: t('hr.description'),
  };
}

export default async function HumanResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Solutions.hub');
  const tNav = await getTranslations('Navbar.solutions');
  const tFooter = await getTranslations('Footer');
  const tCommon = await getTranslations('Common');

  const hrIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const breadcrumbs = [
    { label: tCommon('breadcrumb.home'), href: '' },
    { label: tCommon('breadcrumb.solutions'), href: '/solutions' },
    { label: tNav('hr.title') },
  ];

  const getSolutionNavKey = (translationKey: string) => {
    switch (translationKey) {
      case 'freelancerManagement': return 'freelancer';
      case 'payrollManagement': return 'payroll';
      case 'talentIntelligence': return 'talent';
      case 'mpfDocuments': return 'mpf';
      default: return 'freelancer';
    }
  };

  return (
    <div className="relative min-h-screen">
      <StructuredData type="Organization" />
      <Navbar />

      <main>
        <BreadcrumbNav items={breadcrumbs} locale={locale} />

        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              {tNav('hr.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hr.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hr.description')}
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {hrSolutions.map((solution) => (
                <SolutionCard
                  key={solution.slug}
                  title={tNav(`hr.${getSolutionNavKey(solution.translationKey)}`)}
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
          utmCampaign="human_resources"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
