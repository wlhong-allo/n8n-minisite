import React from 'react';

const nodes = [
  {
    title: "Creative Nodes",
    description: "Automate a isestic such as ronp-isso werflers, mit rate widemniation and customioncal bovolers.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-cyan-500",
  },
  {
    title: "Workflow Headline",
    description: "Ssternate a olanalc vortve interaction with the opening data, messaging, and one-time routes.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "bg-blue-500",
  },
  {
    title: "Module Nodes",
    description: "Promo to conenct ouf core elabwiet-od code and assets a rouive team raoms management it at ensier.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    color: "bg-indigo-500",
  },
];

export default function CoreNodes() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Nodes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Frosted glass conics with animator zed core nodes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {nodes.map((node, index) => (
          <div key={index} className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-white/40">
            <div className={`w-12 h-12 ${node.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
              {node.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{node.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {node.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

