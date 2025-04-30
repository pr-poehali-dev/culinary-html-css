
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Utensils } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  time: string;
  difficulty: string;
}

export const RecipeCard = ({
  title,
  description,
  imageUrl,
  category,
  time,
  difficulty
}: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-[#9b87f5] hover:bg-[#7E69AB]">{category}</Badge>
        </div>
        <div className="absolute w-16 h-16 bg-[#FEF7CD] rounded-full top-[-24px] right-[-24px] z-0 group-hover:scale-150 transition-transform duration-500"></div>
        <div className="absolute w-10 h-10 bg-[#9b87f5] rounded-sm transform rotate-45 bottom-[-20px] left-[-20px] z-0 group-hover:rotate-[135deg] transition-transform duration-500"></div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-[#403E43]">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </CardContent>
      <CardFooter className="px-4 py-3 border-t flex justify-between text-xs text-gray-500">
        <div className="flex items-center">
          <Clock size={14} className="mr-1" />
          <span>{time}</span>
        </div>
        <div className="flex items-center">
          <Utensils size={14} className="mr-1" />
          <span>{difficulty}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
