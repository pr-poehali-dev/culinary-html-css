
import { CulinaryHeader } from "@/components/CulinaryHeader";
import { Footer } from "@/components/Footer";
import { RecipeCard } from "@/components/RecipeCard";
import { GeometricDecoration } from "@/components/GeometricDecoration";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

const Recipes = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CulinaryHeader />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10 relative">
            <GeometricDecoration position="top-right" />
            <h1 className="text-4xl font-bold mb-4 text-[#403E43]">
              Наши <span className="text-[#9b87f5]">рецепты</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Найдите идеальный рецепт для любого случая - от простых завтраков до изысканных ужинов
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Поиск рецептов..." 
                  className="pl-10 border-[#9b87f5] focus-visible:ring-[#9b87f5]" 
                />
              </div>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                Найти
              </Button>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full max-w-3xl mx-auto mb-6 bg-[#E5DEFF]">
                <TabsTrigger value="all" className="flex-1">Все рецепты</TabsTrigger>
                <TabsTrigger value="breakfast" className="flex-1">Завтраки</TabsTrigger>
                <TabsTrigger value="lunch" className="flex-1">Обеды</TabsTrigger>
                <TabsTrigger value="dinner" className="flex-1">Ужины</TabsTrigger>
                <TabsTrigger value="desserts" className="flex-1">Десерты</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
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
                  <RecipeCard 
                    title="Овощной салат" 
                    description="Легкий салат со свежими сезонными овощами"
                    imageUrl="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3"
                    category="Салаты"
                    time="15 минут"
                    difficulty="Простая"
                  />
                  <RecipeCard 
                    title="Стейк с картофелем" 
                    description="Сочный стейк с запеченным картофелем и соусом"
                    imageUrl="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3"
                    category="Мясные блюда"
                    time="45 минут"
                    difficulty="Средняя"
                  />
                  <RecipeCard 
                    title="Тирамису" 
                    description="Итальянский десерт на основе сыра маскарпоне"
                    imageUrl="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3"
                    category="Десерты"
                    time="1 час + 4 часа"
                    difficulty="Средняя"
                  />
                </div>
                
                <div className="flex justify-center mt-10">
                  <Button variant="outline" className="mr-2 border-[#9b87f5] text-[#9b87f5]">
                    Предыдущая
                  </Button>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                    Следующая
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="breakfast" className="mt-0">
                <div className="text-center py-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-[#FEF7CD] rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Раздел в разработке</h3>
                  <p className="text-gray-600">Скоро здесь появятся рецепты завтраков</p>
                </div>
              </TabsContent>
              
              {/* Остальные вкладки имеют аналогичное содержимое */}
              <TabsContent value="lunch" className="text-center py-8 mt-0">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-[#E5DEFF] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-2">Раздел в разработке</h3>
                <p className="text-gray-600">Скоро здесь появятся рецепты обедов</p>
              </TabsContent>
              
              <TabsContent value="dinner" className="text-center py-8 mt-0">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-[#FEC6A1] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-2">Раздел в разработке</h3>
                <p className="text-gray-600">Скоро здесь появятся рецепты ужинов</p>
              </TabsContent>
              
              <TabsContent value="desserts" className="text-center py-8 mt-0">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-[#FFDEE2] rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#9b87f5] rounded-sm transform rotate-45"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-medium mb-2">Раздел в разработке</h3>
                <p className="text-gray-600">Скоро здесь появятся рецепты десертов</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recipes;
