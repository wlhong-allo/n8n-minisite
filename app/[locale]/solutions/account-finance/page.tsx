import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionCard from '@/components/SolutionCard';
import ConversionCTA from '@/components/ConversionCTA';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import StructuredData from '@/components/StructuredData';
import { financeSolutions, BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Solutions.hub');
  return {
    title: t('finance.title') + ' | Aitivate',
    description: t('finance.description'),
  };
}

export default async function AccountFinancePage({
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

  const breadcrumbs = [
    { label: tCommon('breadcrumb.home'), href: '' },
    { label: tCommon('breadcrumb.solutions'), href: '/solutions' },
    { label: tNav('finance.title') },
  ];

  const getSolutionNavKey = (translationKey: string) => {
    switch (translationKey) {
      case 'fpsQrCode': return 'fps';
      case 'ocrDocument': return 'ocr';
      case 'revenueCycle': return 'revenue';
      case 'receivableAging': return 'aging';
      case 'receivableReminder': return 'reminder';
      default: return 'fps';
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
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              {tNav('finance.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('finance.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('finance.description')}
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financeSolutions.map((solution) => (
                <SolutionCard
                  key={solution.slug}
                  title={tNav(`finance.${getSolutionNavKey(solution.translationKey)}`)}
                  description=""
                  icon={financeIcon}
                  href={`/${locale}/solutions/account-finance/${solution.slug}`}
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
          utmCampaign="account_finance"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
