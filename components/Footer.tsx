'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname();
  const locale = pathname.startsWith('/zh-HK') ? 'zh-HK' : 'en';

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Aitivate
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {t('tagline')}
            </p>
            <p className="text-gray-500 text-sm">
              {t('company')}<br />
              {t('address')}
            </p>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('sections.solutions')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/solutions/account-finance`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.accountFinance')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/solutions/human-resources`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.humanResources')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.caseStudies')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t('sections.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/technology`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.technology')}
                </Link>
              </li>
              {/* Events link hidden for now
              <li>
                <Link href={`/${locale}/events`} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {t('links.events')}
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {t('copyright')}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              {t('links.privacy')}
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              {t('links.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
