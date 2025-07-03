import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Part {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  image: string;
  price: string;
  availability: "В наличии" | "Под заказ" | "Нет в наличии";
}

const mockParts: Part[] = [
  {
    id: "1",
    name: "Тормозная накладка",
    partNumber: "BPW-200.7000",
    category: "Тормозная система",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "В наличии",
  },
  {
    id: "2",
    name: "Подшипник ступицы",
    partNumber: "SKF-BTH-0066",
    category: "Подвеска",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "В наличии",
  },
  {
    id: "3",
    name: "Компрессор холодильной установки",
    partNumber: "CARRIER-30-02120-00",
    category: "Рефрижератор",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "Под заказ",
  },
  {
    id: "4",
    name: "Датчик температуры",
    partNumber: "THERMOKING-45-2184",
    category: "Рефрижератор",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "В наличии",
  },
  {
    id: "5",
    name: "Пневмоподушка",
    partNumber: "CONTITECH-FD330-19",
    category: "Подвеска",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "В наличии",
  },
  {
    id: "6",
    name: "Рессора полуприцепа",
    partNumber: "GIGANT-3213-2912010",
    category: "Подвеска",
    image: "/placeholder.svg",
    price: "По запросу",
    availability: "Под заказ",
  },
];

export default function PartsCatalog() {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "В наличии":
        return "bg-green-100 text-green-800";
      case "Под заказ":
        return "bg-yellow-100 text-yellow-800";
      case "Нет в наличии":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 px-4 bg-business-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-business-dark mb-4">
            Каталог запчастей
          </h2>
          <p className="text-business-gray max-w-2xl mx-auto">
            Широкий ассортимент оригинальных и аналоговых запчастей для грузовых
            прицепов и рефрижераторов
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Icon name="Filter" size={16} />
            Все категории
          </Button>
          <Button variant="outline">Тормозная система</Button>
          <Button variant="outline">Подвеска</Button>
          <Button variant="outline">Рефрижератор</Button>
          <Button variant="outline">Электрика</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockParts.map((part) => (
            <Card
              key={part.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={part.image}
                  alt={part.name}
                  className="w-full h-full object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 ${getAvailabilityColor(part.availability)}`}
                >
                  {part.availability}
                </Badge>
              </div>

              <div className="p-6">
                <Badge variant="outline" className="mb-2 text-xs">
                  {part.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-2 text-business-dark">
                  {part.name}
                </h3>
                <p className="text-business-gray text-sm mb-3">
                  Артикул:{" "}
                  <span className="font-mono font-semibold">
                    {part.partNumber}
                  </span>
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-business-dark">
                    {part.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-business-dark hover:bg-business-gray"
                  >
                    <Icon name="Eye" size={16} className="mr-1" />
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-business-dark hover:bg-business-gray px-8 py-3">
            Показать больше запчастей
          </Button>
        </div>
      </div>
    </section>
  );
}
