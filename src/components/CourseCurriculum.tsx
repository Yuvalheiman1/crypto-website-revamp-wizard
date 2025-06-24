import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BookOpen, TrendingUp, Shield, Users, Target } from "lucide-react";

const CourseCurriculum = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "יסודות הקריפטו",
      description: "הבנת הטכנולוגיה, ארנקים דיגיטליים ורכישה ראשונה"
    },
    {
      icon: TrendingUp,
      title: "אנליזה טכנית",
      description: "קריאת גרפים, זיהוי טרנדים ואינדיקטורים מתקדמים"
    },
    {
      icon: Shield,
      title: "ניהול סיכונים",
      description: "אסטרטגיות הגנה, Stop Loss ו-Take Profit"
    },
    {
      icon: Users,
      title: "פסיכולוגיית מסחר",
      description: "שליטה ברגשות ובקבלת החלטות בלחץ"
    },
    {
      icon: Target,
      title: "אסטרטגיות מסחר",
      description: "מסחר יומי, Swing Trading והשקעות ארוכות טווח"
    }
  ];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">תוכן הקורס</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            מדריך מקיף וממוקד שילווה אותך משלב המתחיל ועד לרמה המקצועית
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-600 hover:border-orange-400 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <module.icon className="text-green-400" size={24} />
                  <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">מה תקבל בקורס?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "גישה לכל החומרים ללא הגבלת זמן",
              "קבוצת תמיכה פרטית בטלגרם",
              "עדכונים שוטפים על השוק",
              "מדריכים מעשיים ווידאו",
              "תבניות מסחר מוכנות לשימוש",
              "ליווי אישי ותמיכה צמודה"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
