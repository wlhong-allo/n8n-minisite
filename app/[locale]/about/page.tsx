import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { BOOKING_URL } from '@/lib/solutions';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('About.meta');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage() {
  const t = await getTranslations('About');
  const tCommon = await getTranslations('Common');

  const values = [0, 1, 2, 3];

  return (
    <div className="relative min-h-screen">
      <StructuredData type="Organization" />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('mission.content')}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {t('values.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`values.items.${i}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`values.items.${i}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('team.title')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {t('team.content')}
            </p>

            {/* Team visual placeholder */}
            {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-cyan-100 to-purple-100 rounded-2xl flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full opacity-30" />
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Hong Kong Focus */}
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('hongKong.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {t('hongKong.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{t('hongKong.stats.businesses.value')}</div>
                <div className="text-sm">{t('hongKong.stats.businesses.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{t('hongKong.stats.storage.value')}</div>
                <div className="text-sm">{t('hongKong.stats.storage.label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">{t('hongKong.stats.bilingual.value')}</div>
                <div className="text-sm">{t('hongKong.stats.bilingual.label')}</div>
              </div>
            </div>
          </div>
        </section>

        <ConversionCTA
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          ctaText={t('cta.button')}
          calendlyUrl={BOOKING_URL}
          utmCampaign="about"
          disclaimer={tCommon('freeConsultation')}
        />
      </main>

      <Footer />
    </div>
  );
}
