import React from 'react';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features?: string[];
  learnMoreText?: string;
}

export default function SolutionCard({
  title,
  description,
  icon,
  href,
  features,
  learnMoreText = 'Learn More',
}: SolutionCardProps) {
  return (
    <Link href={href}>
      <article className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>

        {/* Features list */}
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Learn more link */}
        <div className="flex items-center text-cyan-600 font-medium group-hover:gap-3 gap-2 transition-all mt-auto">
          {learnMoreText}
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
