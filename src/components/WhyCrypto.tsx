
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Globe, DollarSign } from "lucide-react";

const WhyCrypto = () => {
  const reasons = [
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: "פוטנציאל לרווחים גבוהים",
      description: "התנודתיות בשוק יוצרת הזדמנויות לרווח מהיר"
    },
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: "שוק פתוח 24/7",
      description: "בלי שעות סגירה - סחר בכל עת שנוחה לך"
    },
    {
      icon: <Globe className="text-purple-500" size={32} />,
      title: "מסחר גלובלי ונגיש",
      description: "בלי דרישות הון גבוהות או מגבלות גיאוגרפיות"
    },
    {
      icon: <DollarSign className="text-orange-500" size={32} />,
      title: "שליטה מלאה על הכסף",
      description: "ארנק דיגיטלי פרטי שנותן לך שליטה מוחלטת"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            למה קריפטו ולא מניות?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            השוק הדיגיטלי מציע יתרונות ייחודיים שהשוק המסורתי לא יכול להציע
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">{reason.icon}</div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {reason.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCrypto;
