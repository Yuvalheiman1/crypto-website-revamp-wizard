
import { Card, CardContent } from "@/components/ui/card";

const Instructors = () => {
  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">הכירו את המדריכים</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            מומחים מנוסים שילוו אתכם בכל שלב בדרך להצלחה בעולם הקריפטו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-gray-900 border-gray-700 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-orange-500">
                  <img 
                    src="/lovable-uploads/47056d71-42c1-4089-ba34-e9914f2f0a2f.png" 
                    alt="אביב - מדריך קריפטו"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">אביב</h3>
                <p className="text-gray-300 leading-relaxed">
                  היי, אני אביב, ומגיל 21 הקריפטו הוא חלק מהחיים שלי.
                  עברתי דרך – למדתי, ניסיתי, טעיתי והצלחתי.
                  בניתי שיטות שמקלות על כל אחד לסחור ולהשקיע נכון.
                  המטרה שלי? לחסוך לכם את הדרך המפותלת שאני עברתי.
                  לתת לכם כלים אמיתיים, מתוך ניסיון מהשטח.
                  כדי שתוכלו להרגיש בטוחים בשוק הדינמי הזה.
                  להבין, לפעול נכון – ולהצליח.
                  אם אתם מוכנים להתחיל, אני כאן בשבילכם.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-700 text-white">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-500">
                  <img 
                    src="/lovable-uploads/9d3760e4-cc08-4cb9-bb4c-ea44f13c287b.png" 
                    alt="אופק - מדריך קריפטו"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">אופק</h3>
                <p className="text-gray-300 leading-relaxed">
                  שמי אופק,
                  נחשפתי לעולם הקריפטו במהלך השירות הצבאי שלי. אחרי השחרור התחלתי לחקור ולסחור לעומק בשוק. במהלך הדרך צברתי ניסיון ממסחר יומי, השקעות והפקת לקחים.
                  פיתחתי גישות שעוזרות לי לקבל החלטות חכמות בשוק משתנה. היום אני כאן כדי להעביר את הידע ולעזור גם לך להצליח.
                  רוצה להתחיל? תשאיר פרטים ונצא לדרך יחד.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
