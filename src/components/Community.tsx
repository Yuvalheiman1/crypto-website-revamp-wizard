
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Heart, Lightbulb } from "lucide-react";

const Community = () => {
  const features = [
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "קבוצת תלמידים פעילה",
      description: "קהילה של סוחרים ומשקיעים שתומכים זה בזה"
    },
    {
      icon: <MessageCircle className="text-green-500" size={32} />,
      title: "שאלות ותשובות",
      description: "מקום לשאול, לשתף ולקבל עזרה מהקהילה"
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "תמיכה מתמדת",
      description: "אנחנו כאן בשבילכם בכל שלב של המסע"
    },
    {
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      title: "טיפים ועדכונים",
      description: "הזדמנויות בשוק ותובנות מעודכנות"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            אתם אף פעם לא לבד!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בקורס של קריפטומאט אתם מצטרפים לקהילה תומכת ומקצועית. הצלחה היא תהליך, ואנחנו מלווים אתכם בכל שלב בדרך.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              קבוצת תלמידים פעילה
            </h3>
            <p className="text-gray-600 mb-6">
              שבה אפשר לשאול, לשתף, להתייעץ וללמוד יחד
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Users size={16} />
                500+ תלמידים
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={16} />
                דיונים יומיים
              </span>
              <span className="flex items-center gap-1">
                <Heart size={16} />
                תמיכה 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
