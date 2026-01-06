'use client';

import React, { useState } from 'react';

const faqs = [
  { question: "What is your HK finance?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { question: "What is rs the about department?", answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { question: "What is your HK-peetopoamidate?", answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { question: "How is your receipt amrent?", answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

