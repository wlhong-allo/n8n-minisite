import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SolutionHero from '@/components/SolutionHero';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import SolutionFAQ from '@/components/SolutionFAQ';
import ConversionCTA from '@/components/ConversionCTA';
import StructuredData from '@/components/StructuredData';
import { BOOKING_URL } from '@/lib/solutions';

interface SolutionPageTemplateProps {
  locale: string;
  categoryName: string;
  categoryHref: string;
  solutionName: string;
  breadcrumbs: {
    home: string;
    solutions: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    seeHowItWorksText: string;
  };
  painPoints: {
    title: string;
    subtitle: string;
    points: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; description: string }>;
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; description: string; metric?: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    disclaimer?: string;
  };
  seoDescription: string;
  utmCampaign: string;
}

export default function SolutionPageTemplate({
  locale,
  categoryName,
  categoryHref,
  solutionName,
  breadcrumbs: breadcrumbLabels,
  hero,
  painPoints,
  howItWorks,
  benefits,
  faq,
  cta,
  seoDescription,
  utmCampaign,
}: SolutionPageTemplateProps) {
  const breadcrumbs = [
    { label: breadcrumbLabels.home, href: '' },
    { label: breadcrumbLabels.solutions, href: '/solutions' },
    { label: categoryName, href: categoryHref },
    { label: solutionName },
  ];

  return (
    <div className="relative min-h-screen">
      <StructuredData
        type="Service"
        name={solutionName}
        description={seoDescription}
        provider="Aitivate"
      />
      <StructuredData type="Organization" />

      <Navbar />

      <main>
        <BreadcrumbNav items={breadcrumbs} locale={locale} />

        <SolutionHero
          title={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
          ctaText={hero.ctaText}
          calendlyUrl={BOOKING_URL}
          utmCampaign={utmCampaign}
          seeHowItWorksText={hero.seeHowItWorksText}
        />

        <PainPoints
          title={painPoints.title}
          subtitle={painPoints.subtitle}
          points={painPoints.points}
        />

        <HowItWorks
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
          steps={howItWorks.steps}
        />

        <Benefits
          title={benefits.title}
          subtitle={benefits.subtitle}
          benefits={benefits.items}
        />

        <SolutionFAQ title={faq.title} faqs={faq.items} />

        <ConversionCTA
          title={cta.title}
          subtitle={cta.subtitle}
          ctaText={cta.buttonText}
          calendlyUrl={BOOKING_URL}
          utmCampaign={utmCampaign}
          disclaimer={cta.disclaimer}
        />
      </main>

      <Footer />
    </div>
  );
}
