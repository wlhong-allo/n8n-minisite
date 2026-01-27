import React from 'react';
import CalendlyButton from './CalendlyButton';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  calendlyUrl: string;
  utmCampaign?: string;
  seeHowItWorksText?: string;
}

export default function SolutionHero({
  title,
  subtitle,
  description,
  ctaText,
  calendlyUrl,
  utmCampaign,
  seeHowItWorksText = 'See How It Works',
}: SolutionHeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-[70vh] overflow-hidden flex flex-col justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-purple-50 -z-10" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Category label */}
        <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
          {subtitle}
        </span>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CalendlyButton
            url={calendlyUrl}
            text={ctaText}
            utmSource="website"
            utmMedium="solution_page"
            utmCampaign={utmCampaign}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
          />
          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-cyan-600 font-medium flex items-center gap-2 transition-colors"
          >
            {seeHowItWorksText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
