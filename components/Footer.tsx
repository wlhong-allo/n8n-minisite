import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* CTA Card */}
        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-3xl p-12 text-center text-white shadow-2xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('cta_title')}</h2>
                <button className="bg-white/20 hover:bg-white/30 border border-white/40 text-white font-semibold py-3 px-8 rounded-full transition-all backdrop-filter backdrop-blur-md">
                    {t('cta_button')}
                </button>
            </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
