
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Users, BookOpen, Clock, Star } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "מסחר מתקדם",
      description: "למד טכניקות מסחר מתקדמות ואסטרטגיות מנצחות"
    },
    {
      icon: Shield,
      title: "ניהול סיכונים",
      description: "כלים מקצועיים לניהול סיכונים ושמירה על ההון"
    },
    {
      icon: Users,
      title: "קהילה תומכת",
      description: "הצטרף לקהילה של סוחרים מנוסים ומתחילים"
    },
    {
      icon: BookOpen,
      title: "חומר לימוד מקיף",
      description: "מדריכים מפורטים וחומרי לימוד איכותיים"
    },
    {
      icon: Clock,
      title: "ליווי אישי",
      description: "תמיכה אישית וליווי צמוד לאורך כל הדרך"
    },
    {
      icon: Star,
      title: "תוצאות מוכחות",
      description: "שיטות מוכחות שהניבו תוצאות אמיתיות"
    }
  ];

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">למה לבחור בנו?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            הקורס המקיף ביותר בישראל ללימוד מסחר והשקעה במטבעות דיגיטליים
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-sm border-gray-600 hover:border-orange-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <benefit.icon className="mx-auto mb-4 text-orange-400" size={40} />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-200">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
