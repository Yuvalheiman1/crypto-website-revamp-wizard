
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Globe, DollarSign } from "lucide-react";

const WhyCrypto = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "פוטנציאל לרווחים גבוהים",
      description: "התנודתיות בשוק יוצרת הזדמנויות לרווח מהיר"
    },
    {
      icon: Clock,
      title: "שוק פתוח 24/7",
      description: "בלי שעות סגירה - סחר מתי שנוח לך"
    },
    {
      icon: Globe,
      title: "מסחר גלובלי ונגיש",
      description: "בלי דרישות הון גבוהות - התחל עם סכום קטן"
    },
    {
      icon: DollarSign,
      title: "עצמאות כלכלית",
      description: "הזדמנות לבנות הכנסה פסיבית ועתיד כלכלי יציב"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">למה קריפטו ולא מניות?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            הקריפטו מציע יתרונות ייחודיים שקשה למצוא בשווקים מסורתיים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <reason.icon className="text-blue-400 mt-1" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCrypto;
