'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: t('q1'), answer: t('a1') },
    { question: t('q2'), answer: t('a2') },
    { question: t('q3'), answer: t('a3') },
    { question: t('q4'), answer: t('a4') },
  ];

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass rounded-xl overflow-hidden transition-all duration-300">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/20 transition-colors"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
