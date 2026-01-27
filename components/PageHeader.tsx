'use client';

import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs = [] }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>/</span>
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
