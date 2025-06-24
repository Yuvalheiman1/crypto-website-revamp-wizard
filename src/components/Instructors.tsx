
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Instructors = () => {
  const instructors = [
    {
      name: "אביב",
      age: "21",
      avatar: "/placeholder.svg",
      bio: "היי, אני אביב, ומגיל 21 הקריפטו הוא חלק מהחיים שלי. עברתי דרך – למדתי, ניסיתי, טעיתי והצלחתי. בניתי שיטות שמקלות על כל אחד לסחור ולהשקיע נכון. המטרה שלי? לחסוך לכם את הדרך המפותלת שאני עברתי. לתת לכם כלים אמיתיים, מתוך ניסיון מהשטח. כדי שתוכלו להרגיש בטוחים בשוק הדינמי הזה. להבין, לפעול נכון – ולהצליח. אם אתם מוכנים להתחיל, אני כאן בשבילכם."
    },
    {
      name: "אופק",
      age: "מנוסה",
      avatar: "/placeholder.svg",
      bio: "שמי אופק, נחשפתי לעולם הקריפטו במהלך השירות הצבאי שלי. אחרי השחרור התחלתי לחקור ולסחור לעומק בשוק. במהלך הדרך צברתי ניסיון ממסחר יומי, השקעות והפקת לקחים. פיתחתי גישות שעוזרות לי לקבל החלטות חכמות בשוק משתנה. היום אני כאן כדי להעביר את הידע ולעזור גם לך להצליח. רוצה להתחיל? תשאיר פרטים ונצא לדרך יחד."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            הכירו את המדריכים
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנשי מקצוע עם ניסיון מוכח שילוו אתכם לאורך כל הדרך
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {instructors.map((instructor, index) => (
            <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Avatar className="h-20 w-20 ml-4">
                    <AvatarImage src={instructor.avatar} alt={instructor.name} />
                    <AvatarFallback className="text-2xl font-bold bg-blue-100 text-blue-600">
                      {instructor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{instructor.name}</h3>
                    <p className="text-blue-600 font-semibold">{instructor.age}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute top-0 right-0 text-blue-200 opacity-50" size={32} />
                  <p className="text-gray-700 text-base leading-relaxed pr-8">
                    {instructor.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
