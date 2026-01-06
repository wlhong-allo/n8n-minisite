import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen overflow-hidden flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('title_start')} <span className="text-cyan-400">{t('title_highlight')}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            {t('subtitle')}
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
              {t('get_flow')}
            </button>
          </div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 flex justify-center">
          {/* Placeholder for the 3D Illustration */}
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Blue/Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
               {/* Using w-full h-auto to respect aspect ratio of re-cropped image */}
               <Image
                 src="/assets/heropage_laptop.png"
                 alt="n8n Dashboard"
                 width={0}
                 height={0}
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="w-full h-auto object-contain drop-shadow-2xl"
                 priority
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
