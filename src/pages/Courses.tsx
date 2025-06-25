
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: "basic",
      title: "קורס בסיסי",
      price: "290 ש\"ח",
      icon: BookOpen,
      description: "תלמד איך לפתוח ארנק, איך להעביר כסף, איך להשקיע נכון ולהיכנס לעולם הקריפטו בדרך חכמה, כולל כמה טיפים מקצועיים.",
      features: [
        "פתיחת ארנק דיגיטלי",
        "העברת כספים בביטחון",
        "השקעות נכונות למתחילים",
        "כניסה חכמה לעולם הקריפטו",
        "טיפים מקצועיים"
      ],
      purchaseUrl: "https://secure.cardcom.solutions/EA/EA5/DGhxCjR4gEq24DqYS1ytw/Order",
      color: "blue"
    },
    {
      id: "advanced",
      title: "קורס מסחר יומי מתקדם",
      price: "₪",
      icon: TrendingUp,
      description: "בקורס הזה אתה לומד איך לסחור ביום-יום, להפוך את זה לעבודה, כולל גישה לקבוצה פרטית עם ניתוחים והמלצות.",
      features: [
        "מסחר יומי מקצועי",
        "הפיכת המסחר לעבודה",
        "גישה לקבוצה פרטית",
        "ניתוחים והמלצות יומיות",
        "ליווי אישי"
      ],
      purchaseUrl: "https://secure.cardcom.solutions/EA/EA5/DGhxCjR4gEq24DqYS1ytw/Order",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 via-gray-700 to-orange-800 pb-20" dir="rtl">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors">
            <ArrowLeft size={20} />
            חזור לעמוד הראשי
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            הקורסים שלנו
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            בחר את הקורס המתאים לך והתחל את המסע שלך בעולם הקריפטו
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card 
                key={course.id}
                className="bg-black/40 backdrop-blur-sm border-gray-600 hover:border-orange-400 transition-all duration-300 text-white"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${course.color}-500/20 flex items-center justify-center`}>
                    <course.icon className={`text-${course.color}-400`} size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    {course.title}
                  </CardTitle>
                  <div className={`text-3xl font-bold text-${course.color}-400 mb-4`}>
                    {course.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed text-center">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-center mb-4 flex items-center justify-center gap-2">
                      <Users size={20} className="text-orange-400" />
                      מה תלמד בקורס:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      asChild
                      size="lg"
                      className={`w-full bg-${course.color}-500 hover:bg-${course.color}-600 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <a href={course.purchaseUrl} target="_blank" rel="noopener noreferrer">
                        רכישת הקורס
                        <ArrowLeft className="mr-2" size={20} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-none text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                יש לך שאלות? נשמח לעזור!
              </h2>
              <p className="text-xl mb-6 opacity-90">
                צור קשר איתנו לפני הרכישה ונענה על כל השאלות שלך
              </p>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold"
              >
                <Link to="/#contact">
                  צור קשר
                  <ArrowLeft className="mr-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Courses;
