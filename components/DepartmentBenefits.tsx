'use client';

import React, { useState } from 'react';

const tabs = [
  { id: 'finance', label: 'Finance' },
  { id: 'hr', label: 'HR' },
  { id: 'admin', label: 'Admin' },
];

const content = {
  finance: {
    title: 'Finance',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  hr: {
    title: 'HR',
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  admin: {
    title: 'Admin',
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
};

export default function DepartmentBenefits() {
  const [activeTab, setActiveTab] = useState('finance');

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Department-Specific Benefits</h2>
        <p className="text-gray-600">Denmen md axaes tranefics for department-specific benefits.</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-1 overflow-hidden inline-flex mb-8 relative left-1/2 -translate-x-1/2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden min-h-[300px] flex items-center">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20 -ml-16 -mb-16"></div>
            
            <div className="relative z-10 transition-opacity duration-300 w-full">
                <h3 className="text-2xl font-bold mb-6">{content[activeTab as keyof typeof content].title}</h3>
                <p className="text-blue-100 leading-relaxed text-lg">
                    {content[activeTab as keyof typeof content].text}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}

