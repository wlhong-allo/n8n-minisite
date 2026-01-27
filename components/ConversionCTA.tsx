import React from 'react';
import CalendlyButton from './CalendlyButton';

interface ConversionCTAProps {
  title: string;
  subtitle: string;
  ctaText: string;
  calendlyUrl: string;
  utmCampaign?: string;
  disclaimer?: string;
}

export default function ConversionCTA({
  title,
  subtitle,
  ctaText,
  calendlyUrl,
  utmCampaign,
  disclaimer,
}: ConversionCTAProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {subtitle}
            </p>
            <CalendlyButton
              url={calendlyUrl}
              text={ctaText}
              utmSource="website"
              utmMedium="cta_section"
              utmCampaign={utmCampaign}
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
            />
            {disclaimer && (
              <p className="mt-6 text-sm text-white/70">
                {disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
