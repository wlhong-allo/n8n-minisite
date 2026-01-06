'use client';

import React, { useState } from 'react';

const tabs = [
  { id: 'finance', label: 'Finance' },
  { id: 'business', label: 'Business' },
  { id: 'department', label: 'Department' },
  { id: 'cfo', label: 'CFO' },
];

const contentData = {
  finance: {
    title: 'Finance / Accounting',
    description: 'Finance teams can automate invoice processing, expense approvals, and financial reporting with precision.',
    points: [
      'Automated invoice extraction and processing.',
      'Real-time expense tracking and approval workflows.',
      'Seamless integration with major accounting software.',
    ],
  },
  business: {
    title: 'Business Operations',
    description: 'Streamline daily operations and improve cross-departmental collaboration with automated workflows.',
    points: [
      'Centralized project management and tracking.',
      'Automated resource allocation and scheduling.',
      'Enhanced communication between departments.',
    ],
  },
  department: {
    title: 'Department Specific',
    description: 'Tailored solutions for various departments to address their unique challenges and requirements.',
    points: [
      'Customizable workflow templates for specific needs.',
      'Department-level analytics and reporting.',
      'Scalable solutions that grow with your team.',
    ],
  },
  cfo: {
    title: 'Finance / CFO',
    description: 'Finance / CFO is a customers target about equipment for orecs and customized department specific benefits orand what we excurtize your issues.',
    points: [
      'Finance and santiness department extraction.',
      'Business and businiss department overition.',
      'Fumshce and department specifist of management.',
    ],
  },
};

export default function SecondBenefits() {
  const [activeTab, setActiveTab] = useState('cfo');
  const activeContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Department-Specific Benefits</h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="glass rounded-xl p-1 mb-8 grid grid-cols-2 md:grid-cols-4 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-md'
                  : 'text-gray-600 hover:bg-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden border border-white/60">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeContent.title}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl">
                {activeContent.description}
            </p>

            <ul className="space-y-3">
                {activeContent.points.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
