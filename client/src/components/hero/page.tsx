// components/Hero.tsx
import { section } from "framer-motion/m";
import { Coffee, Camera, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      {/* Background subtle pattern (optional) */}
      <div className="absolute inset-0 opacity-50 bg-amber-50"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Welcome Text */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
                Welcome to
                <br />
                <span className="text-amber-700">Lens Café</span>
              </h1>
              <p className="text-xl lg:text-2xl text-amber-800 font-medium">
                Where coffee meets creativity
              </p>
            </div>

            <p className="text-lg text-gray-700 max-w-lg">
              A cozy haven for photographers, dreamers, and coffee lovers.
              Hand-crafted drinks, buttery pastries, and the perfect light for
              your next shot.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <span>Open Daily 7:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>123 Shutter Street, Lensville</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-full transition shadow-lg"
              >
                <Coffee className="w-5 h-5" />
                View Menu
              </a>
              <a
                href="#book"
                className="inline-flex items-center gap-2 border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold px-8 py-4 rounded-full transition"
              >
                <Camera className="w-5 h-5" />
                Book a Table
              </a>
            </div>
          </div>

          {/* Right: Coffee Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main coffee image */}
              <img
                src="https://images.unsplash.com/photo-1517251798998-05f3ce407b8b?w=1200&h=1400&fit=crop&crop=center"
                alt="Steaming cup of latte art at Lens Café"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover border-8 border-white"
              />

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 bg-amber-600 text-white p-4 rounded-full shadow-xl animate-bounce">
                <Coffee size={32} strokeWidth={2} />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-orange-100 text-amber-800 px-6 py-3 rounded-full shadow-lg text-sm font-semibold">
                Freshly brewed daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
