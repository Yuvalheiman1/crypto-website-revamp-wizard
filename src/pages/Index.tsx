import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import WhyCrypto from "@/components/WhyCrypto";
import FAQ from "@/components/FAQ";
import Instructors from "@/components/Instructors";
import CourseCurriculum from "@/components/CourseCurriculum";
import Community from "@/components/Community";
import UrgencyCTA from "@/components/UrgencyCTA";
import Footer from "@/components/Footer";
import MobileNavigation from "@/components/MobileNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 via-gray-700 to-orange-800 pb-20 md:pb-0" dir="rtl">
      <div id="hero">
        <Hero />
      </div>
      <div id="value">
        <ValueProposition />
      </div>
      <div id="crypto">
        <WhyCrypto />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="instructors">
        <Instructors />
      </div>
      <div id="curriculum">
        <CourseCurriculum />
      </div>
      <div id="community">
        <Community />
      </div>
      <div id="contact">
        <UrgencyCTA />
      </div>
      <Footer />
      <MobileNavigation />
    </div>
  );
};

export default Index;
