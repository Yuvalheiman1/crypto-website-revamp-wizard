
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Instructors = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);

  const instructors = [
    {
      id: "aviv",
      name: "אביב",
      image: "/lovable-uploads/47056d71-42c1-4089-ba34-e9914f2f0a2f.png",
      color: "orange-500",
      description: `היי, אני אביב, ומגיל 21 הקריפטו הוא חלק מהחיים שלי.
      עברתי דרך – למדתי, ניסיתי, טעיתי והצלחתי.
      בניתי שיטות שמקלות על כל אחד לסחור ולהשקיע נכון.
      המטרה שלי? לחסוך לכם את הדרך המפותלת שאני עברתי.
      לתת לכם כלים אמיתיים, מתוך ניסיון מהשטח.
      כדי שתוכלו להרגיש בטוחים בשוק הדינמי הזה.
      להבין, לפעול נכון – ולהצליח.
      אם אתם מוכנים להתחיל, אני כאן בשבילכם.`
    },
    {
      id: "ofek",
      name: "אופק",
      image: "/lovable-uploads/9d3760e4-cc08-4cb9-bb4c-ea44f13c287b.png",
      color: "blue-500",
      description: `שמי אופק,
      נחשפתי לעולם הקריפטו במהלך השירות הצבאי שלי. אחרי השחרור התחלתי לחקור ולסחור לעומק בשוק. במהלך הדרך צברתי ניסיון ממסחר יומי, השקעות והפקת לקחים.
      פיתחתי גישות שעוזרות לי לקבל החלטות חכמות בשוק משתנה. היום אני כאן כדי להעביר את הידע ולעזור גם לך להצליח.
      רוצה להתחיל? תשאיר פרטים ונצא לדרך יחד.`
    }
  ];

  const handleCardClick = (instructorId: string) => {
    setSelectedInstructor(selectedInstructor === instructorId ? null : instructorId);
  };

  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">הכירו את המדריכים</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            מומחים מנוסים שילוו אתכם בכל שלב בדרך להצלחה בעולם הקריפטו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {instructors.map((instructor) => (
            <Card 
              key={instructor.id}
              className={`bg-black/40 backdrop-blur-sm border-gray-600 text-white cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedInstructor === instructor.id 
                  ? `border-${instructor.color} ring-2 ring-${instructor.color}/50 shadow-2xl shadow-${instructor.color}/20` 
                  : 'hover:border-orange-400'
              }`}
              onClick={() => handleCardClick(instructor.id)}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-32 h-40 rounded-2xl overflow-hidden mb-6 border-4 border-${instructor.color} transition-all duration-300 ${
                    selectedInstructor === instructor.id ? 'scale-110' : ''
                  }`}>
                    <img 
                      src={instructor.image}
                      alt={`${instructor.name} - מדריך קריפטו`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-${instructor.color} transition-all duration-300 ${
                    selectedInstructor === instructor.id ? 'text-3xl' : ''
                  }`}>
                    {instructor.name}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed transition-all duration-300 ${
                    selectedInstructor === instructor.id ? 'text-white text-lg' : ''
                  }`}>
                    {instructor.description}
                  </p>
                  {selectedInstructor === instructor.id && (
                    <div className="mt-4 text-sm text-gray-400 animate-fade-in">
                      לחץ שוב כדי לצמצם
                    </div>
                  )}
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
