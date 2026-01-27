import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import CalendlyButton from '@/components/CalendlyButton';
import { BOOKING_URL } from '@/lib/solutions';

interface CaseStudyPageTemplateProps {
  locale: string;
  title: string;
  category: string;
  datePublished: string;
  hero: {
    headline: string;
    result: string;
    keyResultLabel: string;
  };
  challenge: {
    title: string;
    content: string;
    points: string[];
  };
  solution: {
    title: string;
    content: string;
    features: string[];
  };
  results: {
    title: string;
    metrics: Array<{ value: string; label: string }>;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  inlineCta: {
    prompt: string;
    buttonText: string;
  };
  breadcrumbs: {
    home: string;
    caseStudies: string;
  };
  seoDescription: string;
  utmCampaign: string;
}

export default function CaseStudyPageTemplate({
  locale,
  title,
  category,
  datePublished,
  hero,
  challenge,
  solution,
  results,
  testimonial,
  cta,
  inlineCta,
  breadcrumbs: breadcrumbLabels,
  seoDescription,
  utmCampaign,
}: CaseStudyPageTemplateProps) {
  const breadcrumbs = [
    { label: breadcrumbLabels.home, href: '' },
    { label: breadcrumbLabels.caseStudies, href: '/case-studies' },
    { label: title },
  ];

  return (
    <div className="relative min-h-screen">
      <StructuredData
        type="Article"
        headline={hero.headline}
        description={seoDescription}
        datePublished={datePublished}
        author="Aitivate"
      />
      <StructuredData type="Organization" />

      <Navbar />

      <main>
        <BreadcrumbNav items={breadcrumbs} locale={locale} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {hero.headline}
            </h1>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-2xl p-8 text-center">
              <p className="text-lg opacity-90 mb-2">{hero.keyResultLabel}</p>
              <p className="text-3xl md:text-4xl font-bold">{hero.result}</p>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{challenge.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{challenge.content}</p>
            <ul className="space-y-4">
              {challenge.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{solution.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{solution.content}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {solution.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-cyan-50 rounded-xl">
                  <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{results.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {results.metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 glass-card rounded-2xl">
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </p>
                  <p className="text-gray-600">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section - Only show if quote is not empty */}
        {testimonial && testimonial.quote && (
          <section className="py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <svg className="w-12 h-12 text-cyan-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Inline CTA */}
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">{inlineCta.prompt}</p>
            <CalendlyButton
              url={BOOKING_URL}
              text={inlineCta.buttonText}
              utmSource="website"
              utmMedium="case_study"
              utmCampaign={utmCampaign}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg"
            />
          </div>
        </section>

        <ConversionCTA
          title={cta.title}
          subtitle={cta.subtitle}
          ctaText={cta.buttonText}
          calendlyUrl={BOOKING_URL}
          utmCampaign={utmCampaign}
        />
      </main>

      <Footer />
    </div>
  );
}
