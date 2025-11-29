import Navbar from "@/components/navbar/page";
import {
  Coffee,
  Croissant,
  CakeSlice,
  Soup,
  Utensils,
  Milk,
} from "lucide-react";
import Link from "next/link";

const menuCategories = [
  {
    name: "Espresso Bar",
    icon: Coffee,
    items: [
      { name: "Espresso", price: "350" },
      { name: "Macchiato", price: "400" },
      { name: "Cortado", price: "420" },
      { name: "Flat White", price: "480" },
      { name: "Cappuccino", price: "480" },
      { name: "Latte", price: "500 / 550" },
      { name: "Mocha", price: "580" },
      { name: "Today's Special Latte", price: "600", highlight: true },
    ],
  },
  {
    name: "Filter & Pour-Over",
    icon: Coffee,
    items: [
      { name: "House Blend Drip", price: "400" },
      { name: "Single-Origin Pour-Over", price: "600 – 800" },
      { name: "Cold Brew", price: "550" },
      { name: "Nitro Cold Brew", price: "650" },
    ],
  },
  {
    name: "Not Coffee",
    icon: Milk,
    items: [
      { name: "Matcha Latte", price: "580" },
      { name: "Golden Turmeric Latte", price: "550" },
      { name: "Chai Latte", price: "550" },
      { name: "Hot Chocolate", price: "500" },
      { name: "Fresh Orange Juice", price: "600" },
    ],
  },
  {
    name: "Pastries & Sweets",
    icon: Croissant,
    items: [
      { name: "Butter Croissant", price: "450" },
      { name: "Almond Croissant", price: "500" },
      { name: "Pain au Chocolat", price: "500" },
      { name: "Cinnamon Babka", price: "550" },
      { name: "Seasonal Danish", price: "580" },
      { name: "Matcha Basque Cheesecake", price: "650" },
    ],
  },
  {
    name: "Light Bites",
    icon: Soup,
    items: [
      { name: "Avocado Toast", price: "950" },
      { name: "Yogurt & House Granola", price: "800" },
      { name: "Truffle Egg Toast", price: "1000" },
      { name: "Soup of the Day", price: "750" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/bc/f2/c2/bcf2c2913e28f70ed6fb7fd12917752c.jpg')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Our Menu</h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide">
            Crafted with care, served with light
          </p>
          <p className="text-lg mt-8 opacity-90">
            Freshly roasted beans • Pastries baked in-house daily • Seasonal
            specials
          </p>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          {menuCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-10">
                  <div className="bg-amber-700 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
                    {category.name}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                        item.highlight
                          ? "ring-4 ring-amber-400 ring-offset-4 ring-offset-amber-50"
                          : ""
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {item.name}
                            {item.highlight && (
                              <span className="ml-3 inline-block px-3 py-1 bg-amber-600 text-white text-xs rounded-full font-bold">
                                TODAYS SPECIAL
                              </span>
                            )}
                          </h3>
                        </div>
                        <span className="text-2xl font-bold text-amber-700">
                          ksh{item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-24 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Thirsty Yet?</h2>
          <p className="text-xl mb-10 opacity-90">
            Come grab a seat by the window — the light’s perfect right now
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 bg-white text-amber-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-50 transition"
            >
              Reserve Your Spot
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-amber-900 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
