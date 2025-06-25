
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, ArrowLeft, Phone, Mail, User } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "@/hooks/use-toast";

const UrgencyCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const emailParams = {
        to_email: 'cryptomath10@gmail.com',
        subject: 'new lead',
        message: `${formData.name}\n${formData.phone}\n${formData.email}`
      };

      await emailjs.send(
        'service_default', // You'll need to configure this
        'template_default', // You'll need to configure this
        emailParams,
        'your_public_key' // You'll need to configure this
      );

      toast({
        title: "הפרטים נשלחו בהצלחה!",
        description: "נחזור אליך תוך 24 שעות",
      });

      // Reset form
      setFormData({ name: "", phone: "", email: "" });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "שגיאה בשליחת הפרטים",
        description: "אנא נסה שוב או צור קשר ישירות",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-transparent text-white">
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
                disabled={isSubmitting}
                className="w-full bg-white text-orange-600 hover:bg-gray-100 py-4 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "שולח..." : "לפרטים נוספים"}
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
