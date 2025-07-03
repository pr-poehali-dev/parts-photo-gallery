import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CompanyInfo() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-business-dark mb-6">
              О компании ПроПарк
            </h2>
            <p className="text-business-gray mb-6 leading-relaxed">
              Специализируемся на поставке запчастей для грузовых прицепов и
              рефрижераторов. Работаем с ведущими производителями и поставляем
              оригинальные комплектующие для коммерческого транспорта.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Icon name="Shield" size={20} className="text-business-dark" />
                <span className="text-business-gray">
                  Гарантия качества на все запчасти
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-business-dark" />
                <span className="text-business-gray">
                  Быстрая обработка заказов
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Users" size={20} className="text-business-dark" />
                <span className="text-business-gray">Опытные консультанты</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-business-dark" />
                <span className="text-business-gray">
                  Доставка по всей России
                </span>
              </div>
            </div>
            <Button className="bg-business-dark hover:bg-business-gray">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-business-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-business-dark" />
              </div>
              <h3 className="font-semibold text-business-dark mb-2">15000+</h3>
              <p className="text-business-gray text-sm">Запчастей в наличии</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-business-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Building"
                  size={32}
                  className="text-business-dark"
                />
              </div>
              <h3 className="font-semibold text-business-dark mb-2">500+</h3>
              <p className="text-business-gray text-sm">Довольных клиентов</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-business-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-business-dark" />
              </div>
              <h3 className="font-semibold text-business-dark mb-2">10 лет</h3>
              <p className="text-business-gray text-sm">Опыта работы</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-business-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-business-dark" />
              </div>
              <h3 className="font-semibold text-business-dark mb-2">100+</h3>
              <p className="text-business-gray text-sm">Марок техники</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
