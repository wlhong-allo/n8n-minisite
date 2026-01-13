import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import CoreNodes from "@/components/CoreNodes";
import DepartmentBenefits from "@/components/DepartmentBenefits";
import SecondBenefits from "@/components/SecondBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('CoreNodes');

  const secondCoreNodesData = [
    {
      title: t('nodes2.creative.title'),
      description: t('nodes2.creative.description'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-cyan-500",
    },
    {
      title: t('nodes2.workflow.title'),
      description: t('nodes2.workflow.description'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: t('nodes2.module.title'),
      description: t('nodes2.module.description'),
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "bg-indigo-500",
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
