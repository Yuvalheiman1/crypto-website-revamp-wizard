
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, TrendingUp, Shield, Users } from "lucide-react";

const CourseCurriculum = () => {
  const modules = [
    {
      icon: <BookOpen className="text-blue-500" size={24} />,
      title: "יסודות הקריפטו",
      topics: ["מה זה בלוקצ'יין", "ביטקוין ואת'ריום", "ארנקים דיגיטליים", "מונחי יסוד"]
    },
    {
      icon: <TrendingUp className="text-green-500" size={24} />,
      title: "אסטרטגיות מסחר",
      topics: ["ניתוח טכני", "דפוסי גרפים", "כלי מסחר", "זמני כניסה ויציאה"]
    },
    {
      icon: <Shield className="text-red-500" size={24} />,
      title: "ניהול סיכונים",
      topics: ["חוקי זהב למסחר", "גודל פוזיציה", "Stop Loss", "פיזור השקעות"]
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "מסחר מעשי",
      topics: ["פתיחת חשבון", "ביצוע עסקאות", "מעקב ודיווח", "טעויות נפוצות"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            תוכן הקורס
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            מסע מקיף מהיסודות ועד למסחר מתקדם - כל מה שצריך כדי להצליח
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {module.icon}
                  <CardTitle className="text-white text-xl">{module.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="text-green-400" size={16} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              אל תפספסו את ההזדמנות להוביל את העתיד הכלכלי שלכם
            </h3>
            <p className="text-lg mb-6">
              הצטרפו לקורס מקצועי שילווה אתכם צעד אחר צעד, עם תמיכה אישית וקהילה תומכת לאורך כל הדרך.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              השאירו פרטים והתחילו היום
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
