import React from 'react';

interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: Array<{
    title: string;
    description: string;
    metric?: string;
  }>;
}

export default function Benefits({ title, subtitle, benefits }: BenefitsProps) {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-8 glass-card rounded-2xl hover:shadow-lg transition-shadow"
            >
              {benefit.metric && (
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-4">
                  {benefit.metric}
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
