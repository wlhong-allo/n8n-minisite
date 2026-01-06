import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import CoreNodes from "@/components/CoreNodes";
import DepartmentBenefits from "@/components/DepartmentBenefits";
import SecondBenefits from "@/components/SecondBenefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
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
        <CoreNodes /> 
        <SecondBenefits />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
