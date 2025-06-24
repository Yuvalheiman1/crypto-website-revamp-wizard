
import { Separator } from "@/components/ui/separator";
import { Bitcoin, TrendingUp, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bitcoin className="text-orange-400" size={32} />
            <h3 className="text-2xl font-bold">קריפטומאט</h3>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            המדריך המקצועי שלכם לעולם המטבעות הדיגיטליים - למדו, סחרו והצליחו בביטחון
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <TrendingUp className="mx-auto mb-4 text-green-400" size={24} />
            <h4 className="font-semibold mb-2">מסחר חכם</h4>
            <p className="text-gray-400 text-sm">אסטרטגיות מנצחות למסחר יומי</p>
          </div>
          <div className="text-center">
            <Shield className="mx-auto mb-4 text-blue-400" size={24} />
            <h4 className="font-semibold mb-2">השקעה בטוחה</h4>
            <p className="text-gray-400 text-sm">ניהול סיכונים מקצועי</p>
          </div>
          <div className="text-center">
            <Bitcoin className="mx-auto mb-4 text-orange-400" size={24} />
            <h4 className="font-semibold mb-2">קהילה תומכת</h4>
            <p className="text-gray-400 text-sm">ליווי אישי לאורך הדרך</p>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="text-center text-gray-400">
          <p>&copy; 2024 קריפטומאט. כל הזכויות שמורות.</p>
          <p className="text-sm mt-2">
            מסחר במטבעות דיגיטליים כרוך בסיכונים. השקיעו באחריות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
