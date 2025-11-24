// components/MenuGrid.tsx
import { Coffee, Croissant, Cake, Utensils } from "lucide-react";

const items = [
  { name: "Signature Latte", price: "ksh 480", Icon: Coffee },
  { name: "Butter Croissant", price: "ksh 450", Icon: Croissant },
  { name: "Avocado Toast", price: "ksh 900", Icon: Utensils },
  { name: "Matcha Cake", price: "ksh 600", Icon: Cake },
  { name: "Pour Over", price: "ksh 500–700", Icon: Coffee },
  { name: "Chocolate Babka", price: "ksh 550", Icon: Croissant },
];

export default function MenuGrid() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-amber-900 mb-12">
          Menu Favorites
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ name, price, Icon }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <Icon className="w-20 h-20 text-amber-700 opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-3xl font-bold text-amber-700 mt-2">
                  {price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-block bg-amber-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-amber-800 transition"
          >
            See Full Menu →
          </a>
        </div>
      </div>
    </div>
  );
}
