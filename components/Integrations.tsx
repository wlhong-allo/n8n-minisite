export default function Integrations() {
  return (
    <section className="relative z-20 px-4 md:px-12 lg:px-24 -mt-10 mb-20">
      <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        <div className="text-gray-600 font-medium text-sm md:text-base whitespace-nowrap">
          Frosted glass integration
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-8 items-center w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          {/* Mock Logos */}
          <div className="flex items-center gap-2 font-bold text-xl text-gray-700">
            <span>∞</span> n8n
          </div>
          <div className="font-semibold text-lg text-gray-600">Google Workspace</div>
          <div className="flex items-center gap-1 font-semibold text-lg text-gray-600">
            <span className="text-teal-600">S</span> SharePoint
          </div>
          <div className="font-bold text-xl text-gray-800 italic">aws</div>
        </div>
      </div>
    </section>
  );
}

