import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Events.meta');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function EventsPage() {
  const t = await getTranslations('Events');
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
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('upcoming.title')}
            </h2>
            
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500">
                {t('upcoming.empty')}
              </p>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('past.title')}
            </h2>
            
            {/* Placeholder for past events - can be populated later */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-sm text-gray-500">{t('past.events.0.date')}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {t('past.events.0.title')}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {t('past.events.0.description')}
                    </p>
                  </div>
                  <button className="text-cyan-600 hover:text-cyan-700 font-medium whitespace-nowrap">
                    {t('past.viewRecording')} →
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <span className="text-sm text-gray-500">{t('past.events.1.date')}</span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1">
                      {t('past.events.1.title')}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {t('past.events.1.description')}
                    </p>
                  </div>
                  <button className="text-cyan-600 hover:text-cyan-700 font-medium whitespace-nowrap">
                    {t('past.viewRecording')} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ConversionCTA
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          ctaText={t('cta.button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="events"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
