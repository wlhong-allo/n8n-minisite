import React from 'react';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  excerpt: string;
  result: string;
  slug: string;
  locale: string;
  category: string;
  keyResultLabel?: string;
  readMoreText?: string;
}

export default function CaseStudyCard({
  title,
  excerpt,
  result,
  slug,
  locale,
  category,
  keyResultLabel = 'Key Result',
  readMoreText = 'Read Case Study',
}: CaseStudyCardProps) {
  return (
    <Link href={`/${locale}/case-studies/${slug}`}>
      <article className="group glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Category badge */}
        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium mb-4 w-fit">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {excerpt}
        </p>

        {/* Result highlight */}
        <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-500 mb-1">{keyResultLabel}</p>
          <p className="text-lg font-semibold text-cyan-700">{result}</p>
        </div>

        {/* Read more link */}
        <div className="flex items-center text-cyan-600 font-medium group-hover:gap-3 gap-2 transition-all">
          {readMoreText}
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
