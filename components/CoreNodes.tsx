import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type NodeItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

interface CoreNodesProps {
  title?: string;
  subtitle?: string;
  items?: NodeItem[]; 
}

export default function CoreNodes({ 
  items 
}: CoreNodesProps) {
  const t = useTranslations('CoreNodes');

  // Default nodes using translations and image assets
  const defaultNodes = [
    {
      title: t('nodes.creative.title'),
      description: t('nodes.creative.description'),
      icon: (
        <Image 
          src="/assets/icon1.png" 
          alt="Creative Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm", 
    },
    {
      title: t('nodes.workflow.title'),
      description: t('nodes.workflow.description'),
      icon: (
        <Image 
          src="/assets/icon2.png" 
          alt="Workflow Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm",
    },
    {
      title: t('nodes.module.title'),
      description: t('nodes.module.description'),
      icon: (
        <Image 
          src="/assets/icon3.png" 
          alt="Module Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm",
    },
  ];

  const displayNodes = items || defaultNodes;

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayNodes.map((node, index) => (
          <div key={index} className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-white/40 group">
            <div className={`w-24 h-24 ${node.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 p-4`}>
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
