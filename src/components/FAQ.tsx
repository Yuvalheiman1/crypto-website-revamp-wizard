
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "האם אני צריך לדעת אנגלית כדי להשתתף בקורס?",
      answer: "ממש לא. כל התכנים מועברים בעברית ברמה ברורה, פשוטה ונגישה לכל אחד"
    },
    {
      question: "האם יש מגבלת זמן לצפייה בקורס?",
      answer: "אין מגבלת זמן. מהרגע שרכשת, התכנים זמינים עבורך לצפייה חופשית, כולל עדכונים שנוספים בהמשך"
    },
    {
      question: "איך אני יודע שהמידע אמין?",
      answer: "כל מה שתלמד מבוסס על ניסיון מעשי, ידע מקצועי ומחקר מעמיק. אנחנו שמים דגש על למידה אחראית, מעשית ומדויקת."
    },
    {
      question: "האם יש תמיכה אישית במהלך הקורס?",
      answer: "בוודאי. תוכל להצטרף לקבוצות תמיכה ולקבל ליווי מקצועי לאורך כל הדרך."
    },
    {
      question: "איך אדע אם הקורס מתאים לי?",
      answer: "הקורס מתאים לכל מי שרוצה להבין קריפטו לעומק וללמוד איך להשקיע בו נכון, גם אם אין לך שום רקע קודם"
    },
    {
      question: "האם יש סיכונים בהשקעה בקריפטו?",
      answer: "כמו בכל השקעה, גם כאן קיימים סיכונים. תנודתיות גבוהה יכולה להביא לרווח או להפסד. לכן תלמד איך לנהל סיכונים בצורה חכמה ואחראית."
    },
    {
      question: "האם יש לי שליטה מלאה על הכספים שלי?",
      answer: "בהחלט. קריפטו מאפשר שליטה מלאה על הכסף שלך באמצעות ארנק דיגיטלי פרטי. חשוב רק לשמור על רמת אבטחה גבוהה"
    },
    {
      question: "הקריפטו חוקי בישראל?",
      answer: "כן. מסחר והשקעה במטבעות דיגיטליים חוקיים בישראל. רק חשוב לעמוד בדרישות הדיווח לרשויות המס. רצוי להתייעץ עם רואה חשבון"
    },
    {
      question: "מה זה בכלל קריפטו?",
      answer: "קריפטו הוא שם כולל למטבעות דיגיטליים המבוססים על טכנולוגיית בלוקצ'יין. הם משמשים למסחר, תשלומים, השקעות ויישומים טכנולוגיים מתקדמים. הדוגמאות הבולטות הן ביטקוין ואת'ריום"
    },
    {
      question: "צריך ניסיון קודם כדי להצטרף?",
      answer: "ממש לא. הקורסים שלנו נבנו גם למי שמתחיל מאפס, עם הדרכה צמודה שלב אחר שלב עד שתהיה מוכן לסחור בביטחון"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            שאלות נפוצות
          </h2>
          <p className="text-xl text-gray-600">
            התשובות לשאלות הכי חשובות שיש לכם
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0 shadow-sm">
                <AccordionTrigger className="text-right text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
