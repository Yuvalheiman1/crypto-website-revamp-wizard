
import { useState, useEffect } from "react";
import { Home, Award, TrendingUp, HelpCircle, Users, BookOpen, MessageCircle, Clock, Phone } from "lucide-react";

const MobileNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'בית', icon: Home },
    { id: 'value', label: 'יתרונות', icon: Award },
    { id: 'crypto', label: 'קריפטו', icon: TrendingUp },
    { id: 'faq', label: 'שאלות', icon: HelpCircle },
    { id: 'instructors', label: 'מדריכים', icon: Users },
    { id: 'curriculum', label: 'תוכנית', icon: BookOpen },
    { id: 'community', label: 'קהילה', icon: MessageCircle },
    { id: 'contact', label: 'צור קשר', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2 px-2">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          const isContact = section.id === 'contact';
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 min-w-0 ${
                isContact 
                  ? 'bg-orange-500 text-white shadow-lg scale-110 pulse' 
                  : isActive 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={isContact ? 18 : 16} />
              <span className={`text-xs mt-1 font-medium ${isContact ? 'text-white' : ''}`}>
                {section.label}
              </span>
              {isContact && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavigation;
