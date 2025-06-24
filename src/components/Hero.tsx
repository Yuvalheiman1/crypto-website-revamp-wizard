
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <TrendingUp className="mx-auto mb-6 text-orange-400" size={60} />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            מדריך הקריפטו המקצועי
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            למד איך לסחור ולהשקיע במטבעות דיגיטליים בביטחון - עם מדריכים מקצועיים ותמיכה אישית
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            התחל עכשיו
            <ArrowLeft className="mr-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            לפרטים נוספים
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg text-gray-300">שוק פתוח תמיד</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-lg text-gray-300">בעברית וברור</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
            <div className="text-lg text-gray-300">ניסיון קודם נדרש</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
