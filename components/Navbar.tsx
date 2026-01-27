'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from 'react';

const BOOKING_URL = 'https://calendar.app.google/i528ifBA6o7rMdsq7';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current locale from pathname
  const locale = pathname.startsWith('/zh-HK') ? 'zh-HK' : 'en';

  const openBooking = () => {
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLocale;
    } else {
      segments.push(newLocale);
    }
    const newPath = segments.join('/');
    router.push(newPath);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const financeSolutions = [
    { name: t('solutions.finance.fps'), href: `/${locale}/solutions/account-finance/fps-qr-code-augmentation` },
    { name: t('solutions.finance.ocr'), href: `/${locale}/solutions/account-finance/ocr-document-management` },
    { name: t('solutions.finance.revenue'), href: `/${locale}/solutions/account-finance/revenue-cycle-documents` },
  ];

  const hrSolutions = [
    { name: t('solutions.hr.freelancer'), href: `/${locale}/solutions/human-resources/freelancer-management` },
    { name: t('solutions.hr.payroll'), href: `/${locale}/solutions/human-resources/payroll-management` },
    { name: t('solutions.hr.talent'), href: `/${locale}/solutions/human-resources/talent-market-intelligence` },
    { name: t('solutions.hr.mpf'), href: `/${locale}/solutions/human-resources/mpf-documents` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Aitivate
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-gray-600 font-medium items-center">
          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className="flex items-center gap-1 hover:text-cyan-600 transition-colors py-2"
            >
              {t('solutions.title')}
              <svg
                className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mega Menu */}
            {isSolutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-8">
                {/* Finance Solutions */}
                <div>
                  <Link
                    href={`/${locale}/solutions/account-finance`}
                    className="text-sm font-semibold text-gray-900 mb-4 block hover:text-cyan-600 transition-colors"
                  >
                    {t('solutions.finance.title')}
                  </Link>
                  <ul className="space-y-3">
                    {financeSolutions.map((solution) => (
                      <li key={solution.href}>
                        <Link
                          href={solution.href}
                          className="text-gray-600 hover:text-cyan-600 transition-colors text-sm block"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HR Solutions */}
                <div>
                  <Link
                    href={`/${locale}/solutions/human-resources`}
                    className="text-sm font-semibold text-gray-900 mb-4 block hover:text-cyan-600 transition-colors"
                  >
                    {t('solutions.hr.title')}
                  </Link>
                  <ul className="space-y-3">
                    {hrSolutions.map((solution) => (
                      <li key={solution.href}>
                        <Link
                          href={solution.href}
                          className="text-gray-600 hover:text-cyan-600 transition-colors text-sm block"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View All Link */}
                <div className="col-span-2 pt-4 border-t border-gray-100">
                  <Link
                    href={`/${locale}/solutions`}
                    className="text-cyan-600 hover:text-cyan-700 font-medium text-sm flex items-center gap-2"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {t('solutions.viewAll')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href={`/${locale}/case-studies`} className="hover:text-cyan-600 transition-colors">
            {t('caseStudies')}
          </Link>
          <Link href={`/${locale}/technology`} className="hover:text-cyan-600 transition-colors">
            {t('technology')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-cyan-600 transition-colors">
            {t('about')}
          </Link>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 ml-4 text-sm border-l border-gray-200 pl-4">
            <button 
              onClick={() => switchLocale('en')}
              className={`hover:text-cyan-600 ${pathname.startsWith('/en') ? 'font-bold text-cyan-600' : ''}`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => switchLocale('zh-HK')}
              className={`hover:text-cyan-600 ${pathname.startsWith('/zh-HK') ? 'font-bold text-cyan-600' : ''}`}
            >
              繁
            </button>
          </div>

          {/* CTA Button - Opens Booking */}
          <button
            onClick={openBooking}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition-all transform hover:scale-105"
          >
            {t('contact')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-900 font-medium"
              >
                {t('solutions.title')}
                <svg
                  className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSolutionsOpen && (
                <div className="pl-4 space-y-4 mt-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">{t('solutions.finance.title')}</p>
                    {financeSolutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="block py-1 text-gray-600 hover:text-cyan-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">{t('solutions.hr.title')}</p>
                    {hrSolutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="block py-1 text-gray-600 hover:text-cyan-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href={`/${locale}/case-studies`}
              className="block py-2 text-gray-900 font-medium hover:text-cyan-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('caseStudies')}
            </Link>
            <Link
              href={`/${locale}/technology`}
              className="block py-2 text-gray-900 font-medium hover:text-cyan-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('technology')}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="block py-2 text-gray-900 font-medium hover:text-cyan-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('about')}
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-4 py-2 border-t border-gray-100">
              <button 
                onClick={() => { switchLocale('en'); setIsMobileMenuOpen(false); }}
                className={`${pathname.startsWith('/en') ? 'font-bold text-cyan-600' : 'text-gray-600'}`}
              >
                English
              </button>
              <button 
                onClick={() => { switchLocale('zh-HK'); setIsMobileMenuOpen(false); }}
                className={`${pathname.startsWith('/zh-HK') ? 'font-bold text-cyan-600' : 'text-gray-600'}`}
              >
                繁體中文
              </button>
            </div>

            {/* CTA - Opens Booking */}
            <button
              onClick={() => { openBooking(); setIsMobileMenuOpen(false); }}
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full"
            >
              {t('contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
