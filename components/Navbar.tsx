import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          {/* Placeholder for n8n logo */}
          <div className="text-2xl font-bold text-gray-800 flex items-center gap-1">
            <span className="text-3xl">∞</span> n8n
          </div>
        </div>
        <div className="flex gap-6 text-gray-600 font-medium">
          <Link href="#" className="hover:text-gray-900 transition-colors">Contact Us</Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">Support</Link>
        </div>
      </div>
    </nav>
  );
}
