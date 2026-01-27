import React from 'react';
import Link from 'next/link';

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

interface FeatureListProps {
  features: FeatureItem[];
  title?: string;
}

export default function FeatureList({ features, title }: FeatureListProps) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col h-full">
              {feature.link ? (
                <Link href={feature.link} className="block h-full p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white flex flex-col">
                  {feature.icon && (
                    <div className="mb-4 text-blue-600">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                  <div className="mt-4 text-blue-600 font-medium text-sm flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="h-full p-6 rounded-xl border border-gray-100 shadow-lg bg-white flex flex-col">
                  {feature.icon && (
                    <div className="mb-4 text-blue-600">
                      {feature.icon}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
