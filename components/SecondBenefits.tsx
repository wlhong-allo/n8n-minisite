'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SecondBenefits() {
  const t = useTranslations('DepartmentBenefits');
  const [activeTab, setActiveTab] = useState('cfo');

  const tabs = [
    { id: 'finance', label: t('tabs.finance') },
    { id: 'business', label: t('tabs.business') },
    { id: 'department', label: t('tabs.department') },
    { id: 'cfo', label: t('tabs.cfo') },
  ];

  const contentKeys = ['finance', 'business', 'department', 'cfo'] as const;

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h2>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(`content.${activeTab}.title`)}</h3>
            <p className="text-gray-600 mb-8 max-w-2xl">
                {t(`content.${activeTab}.description`)}
            </p>

            <ul className="space-y-3">
                 {/* 
                    We need to access the array of points. 
                    next-intl allows retrieving rich text or arrays via special handling or just by knowing keys.
                    Since `points` is an array in JSON, we can use t.raw() if configured, or keys like points.0, points.1 
                    But standard t() usually returns string.
                    
                    Better approach with next-intl for arrays: 
                    keys are points.0, points.1, etc.
                    We can iterate if we know the count, or use `tm = useMessages()` to inspect structure (but that exposes all messages).
                    
                    Let's assume max 3 points for now or try to use a helper. 
                    Actually, `useTranslations` can return rich text but for arrays it's tricky without knowing length.
                    
                    Workaround: The JSON has 3 points for each. I will hardcode loop 0..2.
                 */}
                {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        {t(`content.${activeTab}.points.${i}`)}
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
