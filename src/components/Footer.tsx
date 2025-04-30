
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#403E43] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
              <div className="w-6 h-6 bg-[#D6BCFA] rounded-full ml-[-10px]"></div>
              <span className="font-bold text-xl ml-2">КулинарГео</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Мир кулинарии через призму геометрических форм. Простые рецепты в необычном исполнении.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-white transition-colors">
                  Рецепты
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-gray-300 hover:text-white transition-colors">
                  Кулинарные советы
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О проекте
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📧</span> info@kulinar-geo.ru
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span> +7 (999) 123-45-67
              </li>
              <li className="flex items-center">
                <span className="mr-2">🌍</span> Москва, Россия
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 КулинарГео. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
