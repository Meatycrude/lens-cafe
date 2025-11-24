// components/TodaysSpecial.tsx
import { Coffee } from "lucide-react";

export function TodaysSpecial() {
  return (
    <div className="py-20 bg-orange-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
          Today’s Special
        </h2>
        <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1517251798998-05f3ce407b8b?w=800"
            alt="Today’s special drink"
            className="w-full h-96 object-cover"
          />
          <div className="p-10">
            <h3 className="text-3xl font-bold text-amber-800">
              Maple Cinnamon Oat Latte
            </h3>
            <p className="text-5xl font-bold text-amber-600 mt-4">ksh 500</p>
            <p className="text-gray-600 mt-4">
              House-made maple-cinnamon syrup with oat milk and double espresso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
