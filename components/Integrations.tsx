import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Integrations() {
  const t = useTranslations('Integrations');

  return (
    <section className="relative z-20 px-4 md:px-12 lg:px-24 -mt-10 mb-20">
      <div className="glass rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        <div className="text-gray-600 font-medium text-sm md:text-base whitespace-nowrap">
          {t('label')}
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-12 items-center w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
          {/* Using height-based sizing to let width adjust automatically based on crop */}
          <div className="relative h-8 md:h-10 min-w-[100px]">
            <Image 
              src="/assets/n8n_logo.png" 
              alt="n8n" 
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-8 md:h-10 min-w-[120px]">
            <Image 
              src="/assets/googleworkspace_logo.png" 
              alt="Google Workspace" 
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-8 md:h-10 min-w-[120px]">
            <Image 
              src="/assets/SharePoint_logo.png" 
              alt="SharePoint" 
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-10 md:h-12 min-w-[60px]">
            <Image 
              src="/assets/AWS_logo.png" 
              alt="AWS" 
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
