import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalendlyButton from '@/components/CalendlyButton';
import CaseStudyCard from '@/components/CaseStudyCard';
import SolutionCard from '@/components/SolutionCard';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import SolutionFAQ from '@/components/SolutionFAQ';
import { financeSolutions, hrSolutions, BOOKING_URL } from '@/lib/solutions';
import { caseStudies } from '@/lib/case-studies';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tHero = await getTranslations('Hero');
  const tValueProps = await getTranslations('ValueProps');
  const tDept = await getTranslations('DepartmentBenefits');
  const tCaseStudies = await getTranslations('CaseStudiesSection');
  const tFAQ = await getTranslations('FAQ');
  const tFooter = await getTranslations('Footer');
  const tNav = await getTranslations('Navbar.solutions');
  const tIntegrations = await getTranslations('Integrations');
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

  const faqItems = [
    { question: tFAQ('items.q1.question'), answer: tFAQ('items.q1.answer') },
    { question: tFAQ('items.q2.question'), answer: tFAQ('items.q2.answer') },
    { question: tFAQ('items.q3.question'), answer: tFAQ('items.q3.answer') },
    { question: tFAQ('items.q4.question'), answer: tFAQ('items.q4.answer') },
    { question: tFAQ('items.q5.question'), answer: tFAQ('items.q5.answer') },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StructuredData type="Organization" />
      
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[30%] -left-20 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 z-10 max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                {tHero('title_start')} <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">{tHero('title_highlight')}</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                {tHero('subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CalendlyButton
                  url={BOOKING_URL}
                  text={tHero('cta_primary')}
                  utmSource="website"
                  utmMedium="hero"
                  utmCampaign="homepage"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-center"
                />
                <a
                  href="#solutions"
                  className="border-2 border-gray-300 hover:border-cyan-500 text-gray-700 hover:text-cyan-600 font-semibold py-4 px-8 rounded-full transition-all text-center"
                >
                  {tHero('cta_secondary')}
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/heropage_laptop.png"
                    alt="Aitivate Dashboard"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-gray-500 mb-8">{tIntegrations('title')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              <Image src="/assets/googleworkspace_logo.png" alt="Google Workspace" width={120} height={40} className="h-8 w-auto object-contain" />
              <Image src="/assets/AWS_logo.png" alt="AWS" width={80} height={40} className="h-8 w-auto object-contain" />
              <Image src="/assets/SharePoint_logo.png" alt="SharePoint" width={120} height={40} className="h-8 w-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Value Props Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {tValueProps('title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tValueProps('subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['speed', 'accuracy', 'bilingual'].map((key) => (
                <div key={key} className="text-center p-6 glass-card rounded-2xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tValueProps(`items.${key}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {tValueProps(`items.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {tDept('title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tDept('subtitle')}
              </p>
            </div>

            {/* Finance Solutions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{tNav('finance.title')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financeSolutions.slice(0, 3).map((solution) => (
                  <SolutionCard
                    key={solution.slug}
                    title={tNav(`finance.${solution.translationKey === 'fpsQrCode' ? 'fps' : 
                      solution.translationKey === 'ocrDocument' ? 'ocr' : 'revenue'}`)}
                    description=""
                    icon={financeIcon}
                    href={`/${locale}/solutions/account-finance/${solution.slug}`}
                    learnMoreText={tCommon('learnMore')}
                  />
                ))}
              </div>
            </div>

            {/* HR Solutions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{tNav('hr.title')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hrSolutions.slice(0, 3).map((solution) => (
                  <SolutionCard
                    key={solution.slug}
                    title={tNav(`hr.${solution.translationKey === 'freelancerManagement' ? 'freelancer' :
                      solution.translationKey === 'payrollManagement' ? 'payroll' : 'talent'}`)}
                    description=""
                    icon={hrIcon}
                    href={`/${locale}/solutions/human-resources/${solution.slug}`}
                    learnMoreText={tCommon('learnMore')}
                  />
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href={`/${locale}/solutions`}
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
              >
                {tNav('viewAll')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {tCaseStudies('title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {tCaseStudies('subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {caseStudies.slice(0, 2).map(async (cs) => {
                const tCase = await getTranslations(`CaseStudies.${cs.translationKey}`);
                return (
                  <CaseStudyCard
                    key={cs.slug}
                    title={tCase('title')}
                    excerpt={tCase('excerpt')}
                    result={tCase('hero.result')}
                    slug={cs.slug}
                    locale={locale}
                    category={cs.category}
                    keyResultLabel={tCommon('keyResult')}
                    readMoreText={tCommon('readCaseStudy')}
                  />
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
              >
                {tCaseStudies('viewAll')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <SolutionFAQ title={tFAQ('title')} faqs={faqItems} />

        {/* Final CTA */}
        <ConversionCTA
          title={tFooter('cta_title')}
          subtitle={tFooter('cta_subtitle')}
          ctaText={tFooter('cta_button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="homepage_bottom"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
