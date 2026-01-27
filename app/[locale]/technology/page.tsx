import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Technology.meta');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TechnologyPage() {
  const t = await getTranslations('Technology');
  const tFooter = await getTranslations('Footer');
  const tCommon = await getTranslations('Common');

  const sections = [
    {
      key: 'ai',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'integration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      key: 'platform',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      <StructuredData type="Organization" />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-cyan-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Technology Sections */}
        {sections.map((section, index) => (
          <section
            key={section.key}
            className={`py-20 px-6 md:px-12 lg:px-24 ${index % 2 === 1 ? 'bg-gray-50' : ''}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t(`sections.${section.key}.title`)}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t(`sections.${section.key}.description`)}
                  </p>
                  <ul className="space-y-4">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">
                          {t(`sections.${section.key}.features.${i}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-cyan-100 to-purple-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white opacity-50">
                      {section.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <ConversionCTA
          title={tFooter('cta_title')}
          subtitle={tFooter('cta_subtitle')}
          ctaText={tFooter('cta_button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="technology"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
