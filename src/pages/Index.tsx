
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CulinaryHeader } from "@/components/CulinaryHeader";
import { RecipeCard } from "@/components/RecipeCard";
import { GeometricDecoration } from "@/components/GeometricDecoration";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FEF7CD] flex flex-col">
      <CulinaryHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden">
          <GeometricDecoration position="top-left" />
          <GeometricDecoration position="bottom-right" />
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#403E43]">
              Искусство <span className="text-[#9b87f5]">кулинарии</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[#555555]">
              Откройте для себя мир вкусных рецептов, кулинарных техник и гастрономических открытий
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                <Link to="/recipes">Популярные рецепты</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
                <Link to="/about">О проекте</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16 px-4 bg-white relative overflow-hidden">
          <GeometricDecoration position="center-right" />
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#403E43]">
              Избранные <span className="text-[#9b87f5]">рецепты</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <RecipeCard 
                title="Паста Карбонара" 
                description="Классическая итальянская паста с беконом и сливочным соусом"
                imageUrl="https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3"
                category="Итальянская кухня"
                time="30 минут"
                difficulty="Средняя"
              />
              <RecipeCard 
                title="Борщ украинский" 
                description="Традиционный борщ со свежей зеленью и сметаной"
                imageUrl="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3"
                category="Славянская кухня"
                time="1.5 часа"
                difficulty="Средняя"
              />
              <RecipeCard 
                title="Шоколадный фондан" 
                description="Нежный десерт с жидкой шоколадной начинкой"
                imageUrl="https://images.unsplash.com/photo-1620736663606-c31eecbfd2bc?ixlib=rb-4.0.3"
                category="Десерты"
                time="40 минут"
                difficulty="Сложная"
              />
            </div>
            <div className="text-center mt-10">
              <Button asChild className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                <Link to="/recipes">Все рецепты</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-4 bg-[#E5DEFF] relative overflow-hidden">
          <GeometricDecoration position="bottom-left" />
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#403E43]">
              Кулинарные <span className="text-[#9b87f5]">категории</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Завтраки", "Обеды", "Ужины", "Десерты", "Напитки", "Закуски"].map((category) => (
                <Card key={category} className="p-6 text-center hover:shadow-lg transition-shadow group">
                  <div className="mb-4 w-16 h-16 mx-auto bg-[#9b87f5] rounded-full flex items-center justify-center group-hover:bg-[#7E69AB] transition-colors">
                    <div className="w-8 h-8 bg-white rounded-sm transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{category}</h3>
                  <p className="text-gray-600 mb-4">Лучшие рецепты для вашего стола</p>
                  <Button asChild variant="ghost" className="text-[#9b87f5] hover:text-[#7E69AB]">
                    <Link to={`/category/${category.toLowerCase()}`}>Смотреть →</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 bg-[#9b87f5] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7E69AB] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#7E69AB] rounded-sm transform -translate-x-1/2 translate-y-1/2 rotate-45"></div>
          
          <div className="container mx-auto text-center relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="mb-6">Получайте новые рецепты и кулинарные советы каждую неделю</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow px-4 py-2 rounded-md focus:outline-none text-gray-800"
              />
              <Button className="bg-white text-[#9b87f5] hover:bg-[#E5DEFF]">
                Подписаться
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
