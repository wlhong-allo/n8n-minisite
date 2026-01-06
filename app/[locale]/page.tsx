import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import CoreNodes from "@/components/CoreNodes";
import DepartmentBenefits from "@/components/DepartmentBenefits";
import SecondBenefits from "@/components/SecondBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Home() {
  const t = await getTranslations('CoreNodes');

  const secondCoreNodesData = [
    {
      title: t('nodes2.creative.title'),
      description: t('nodes2.creative.description'),
      icon: (
        <Image 
          src="/assets/icon1.png" 
          alt="Creative Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm",
    },
    {
      title: t('nodes2.workflow.title'),
      description: t('nodes2.workflow.description'),
      icon: (
        <Image 
          src="/assets/icon2.png" 
          alt="Workflow Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm",
    },
    {
      title: t('nodes2.module.title'),
      description: t('nodes2.module.description'),
      icon: (
        <Image 
          src="/assets/icon3.png" 
          alt="Module Node" 
          width={0} 
          height={0} 
          sizes="100px"
          className="w-full h-full object-contain" 
        />
      ),
      color: "bg-white/10 backdrop-blur-sm",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Top Right Cyan Blob */}
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>
        {/* Mid Left Blue Blob */}
        <div className="absolute top-[30%] -left-20 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        {/* Bottom Right Purple Blob */}
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/20 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Integrations />
        <CoreNodes />
        <DepartmentBenefits />
        <CoreNodes 
          items={secondCoreNodesData}
          subtitle={t('subtitle')}
        /> 
        <SecondBenefits />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
