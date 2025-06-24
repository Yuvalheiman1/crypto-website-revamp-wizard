
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowLeft, Phone, Mail, User } from "lucide-react";
import { useState } from "react";

const UrgencyCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would integrate with your CRM
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <Clock className="mx-auto mb-6 animate-pulse" size={60} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            הזמן עובר ועוד לא לקחת את הצעד הראשון?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            לעתיד כלכלי חזק ובטוח - השאירו פרטים ותנו לנו לעזור לכם להיכנס לעולם הקריפטו בביטחון!
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-md mx-auto">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-right flex items-center gap-2 justify-end">
                  <User size={16} />
                  שם מלא
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-white/70 text-right"
                  placeholder="הכנס את שמך המלא"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-right flex items-center gap-2 justify-end">
                  <Phone size={16} />
                  טלפון
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-white/70 text-right"
                  placeholder="הכנס מספר טלפון"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-right flex items-center gap-2 justify-end">
                  <Mail size={16} />
                  אימייל
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder-white/70 text-right"
                  placeholder="הכנס כתובת אימייל"
                  required
                />
              </div>

              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-white text-orange-600 hover:bg-gray-100 py-4 text-lg font-semibold"
              >
                לפרטים נוספים
                <ArrowLeft className="mr-2" size={20} />
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-lg opacity-90">
          נחזור אליכם תוך 24 שעות עם כל הפרטים
        </p>
      </div>
    </section>
  );
};

export default UrgencyCTA;
