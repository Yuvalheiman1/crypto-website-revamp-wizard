
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import WhyCrypto from "@/components/WhyCrypto";
import FAQ from "@/components/FAQ";
import Instructors from "@/components/Instructors";
import CourseCurriculum from "@/components/CourseCurriculum";
import Community from "@/components/Community";
import UrgencyCTA from "@/components/UrgencyCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Hero />
      <ValueProposition />
      <WhyCrypto />
      <FAQ />
      <Instructors />
      <CourseCurriculum />
      <Community />
      <UrgencyCTA />
      <Footer />
    </div>
  );
};

export default Index;
