
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Users, BookOpen, HeadphonesIcon, Clock } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: <CheckCircle className="text-green-500" size={24} />,
      title: "הדרכה מקצועית",
      description: "למד מאנשי מקצוע עם ניסיון מוכח בשוק"
    },
    {
      icon: <Shield className="text-blue-500" size={24} />,
      title: "מסחר בטוח ואחראי",
      description: "כלים לניהול סיכונים ולמסחר חכם"
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "קהילה תומכת",
      description: "קבוצת תלמידים פעילה עם תמיכה מתמדת"
    },
    {
      icon: <BookOpen className="text-orange-500" size={24} />,
      title: "תכנים מעודכנים",
      description: "עדכונים שוטפים לשוק המשתנה"
    },
    {
      icon: <HeadphonesIcon className="text-red-500" size={24} />,
      title: "תמיכה אישית",
      description: "ליווי מקצועי לאורך כל המסע"
    },
    {
      icon: <Clock className="text-teal-500" size={24} />,
      title: "גישה ללא הגבלה",
      description: "צפייה חופשית בכל התכנים, לתמיד"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            למה לבחור בקורס שלנו?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            הקורס המקיף ביותר לקריפטו בישראל - עם הכלים, הידע והתמיכה שתצטרכו להצליח
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
