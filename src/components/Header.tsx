import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-business-dark text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Icon name="Truck" size={32} />
            <h1 className="text-2xl font-bold">ПроПарк</h1>
          </div>
          <nav className="flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:text-business-light"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-business-light"
            >
              Каталог
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-business-light"
            >
              Поиск
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-business-light"
            >
              Информация
            </Button>
          </nav>
        </div>

        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
          <h2 className="text-xl font-semibold mb-4">
            Поиск запчастей для грузовых прицепов и рефрижераторов
          </h2>
          <div className="flex gap-4">
            <Input
              placeholder="Введите номер запчасти или артикул"
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="px-8 bg-white text-business-dark hover:bg-business-light">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </Card>
      </div>
    </header>
  );
}
