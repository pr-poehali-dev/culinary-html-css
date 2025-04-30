
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const CulinaryHeader = () => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
            <div className="w-6 h-6 bg-[#D6BCFA] rounded-full ml-[-10px]"></div>
          </div>
          <span className="font-bold text-xl text-[#403E43]">КулинарГео</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">
            Главная
          </Link>
          <Link to="/recipes" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">
            Рецепты
          </Link>
          <Link to="/tips" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">
            Советы
          </Link>
          <Link to="/about" className="text-[#403E43] hover:text-[#9b87f5] transition-colors">
            О нас
          </Link>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] hidden md:inline-flex">
            Личный кабинет
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Меню</span>
            <div className="w-4 h-0.5 bg-current mb-1"></div>
            <div className="w-4 h-0.5 bg-current mb-1"></div>
            <div className="w-4 h-0.5 bg-current"></div>
          </Button>
        </div>
      </div>
    </header>
  );
};
