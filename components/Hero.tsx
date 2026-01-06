import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-screen overflow-hidden flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Automate Your HK Business Workflows with <span className="text-cyan-400">AI-Native Precision.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Bilingual sub-headline, nas vervillong needs.
            <br />
            實接正幫業務機能，和面機模組。
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
              Get a new flow
            </button>
          </div>
        </div>

        {/* Hero Image / Graphic */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative z-10 flex justify-center">
          {/* Placeholder for the 3D Illustration */}
          <div className="relative w-full max-w-lg aspect-square">
            {/* Blue/Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 glass-card w-full h-full rounded-3xl flex items-center justify-center p-8 transform rotate-y-12 rotate-x-6 transition-transform hover:rotate-0 duration-500">
               {/* Mock Laptop Screen */}
               <div className="bg-white w-full h-3/4 rounded-xl shadow-inner p-4 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-8 bg-blue-50"></div>
                  <div className="text-center">
                      <h3 className="font-bold text-blue-600 text-xl">Hello New AI</h3>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-10 left-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-lg shadow-lg">AI</div>
                  <div className="absolute bottom-10 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg shadow-lg">CRM</div>
                  <div className="absolute top-20 right-8 bg-cyan-400 text-white text-xs px-3 py-1 rounded-lg shadow-lg">Auto</div>
                  <div className="absolute bottom-20 left-8 bg-indigo-500 text-white text-xs px-3 py-1 rounded-lg shadow-lg">HR</div>
               </div>
               {/* Laptop Base */}
               <div className="absolute bottom-4 w-[110%] h-8 bg-gray-200 rounded-b-xl transform perspective-1000 rotate-x-6"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
