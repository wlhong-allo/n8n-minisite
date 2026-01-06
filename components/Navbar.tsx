'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            {/* Using w-auto and h-8/h-10 to respect new crop aspect ratio */}
            <Image 
              src="/assets/n8n_logo.png" 
              alt="n8n Logo" 
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <div className="flex gap-6 text-gray-600 font-medium items-center">
          <Link href="#" className="hover:text-gray-900 transition-colors">{t('contact')}</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">{t('support')}</Link>
          
          <div className="flex items-center gap-2 ml-4 text-sm">
            <button 
                onClick={() => switchLocale('en')}
                className={`hover:text-blue-600 ${pathname.startsWith('/en') ? 'font-bold text-blue-600' : ''}`}
            >
                EN
            </button>
            <span className="text-gray-300">|</span>
            <button 
                onClick={() => switchLocale('zh-HK')}
                className={`hover:text-blue-600 ${pathname.startsWith('/zh-HK') ? 'font-bold text-blue-600' : ''}`}
            >
                繁
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
