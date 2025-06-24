import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, TrendingUp, Heart } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">אתם אף פעם לא לבד!</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            בקורס של קריפטומאט אתם מצטרפים לקהילה תומכת ומקצועית
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-black/40 backdrop-blur-sm border-gray-600">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-blue-400" size={32} />
                <h3 className="text-xl font-semibold text-white">קהילת תלמידים</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                קבוצת תלמידים פעילה שבה אפשר לשאול, לשתף, להתייעץ וללמוד יחד.
                כולם עוברים את אותו תהליך ומבינים בדיוק מה אתם חווים.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-gray-600">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle className="text-green-400" size={32} />
                <h3 className="text-xl font-semibold text-white">תמיכה צמודה</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                המדריכים זמינים לענות על שאלות, לספק הבהרות ולתת עצות אישיות.
                אתם לא נשארים עם שאלות פתוחות.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 mb-8">
            <Heart className="mx-auto mb-4 text-white" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">הצלחה היא תהליך</h3>
            <p className="text-white text-lg">ואנחנו מלווים אתכם בכל שלב בדרך</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
