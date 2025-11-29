"use client";
import {
  Coffee,
  Camera,
  Wifi,
  Calendar,
  Users,
  Image,
  Croissant,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed">
            More than just a café — we’re your creative space, your meeting
            room, and your photography-friendly third place.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Coffee className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Hand-Crafted Drinks & Pastries
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Single-origin espresso, seasonal lattes, pour-overs, and fresh
                pastries baked every morning.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Calendar className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Table Reservations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Book your favorite spot — window seats with perfect light
                guaranteed.
              </p>
              <Link
                href="/book"
                className="inline-block mt-6 text-amber-700 font-semibold hover:underline"
              >
                Book Now
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Camera className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Photography-Friendly Space
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Abundant natural light, clean aesthetics, and no rush — made for
                content creators.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Wifi className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Work & Study Haven
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fast WiFi, power outlets everywhere, and quiet corners for deep
                focus.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Users className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Private Events & Workshops
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Host photography meetups, birthdays, or workshops. Up to 30
                guests.
              </p>
              <a
                href="mailto:events@lenscafe.co"
                className="inline-block mt-6 text-amber-700 font-semibold hover:underline"
              >
                Inquire
              </a>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500">
              <Image className="w-16 h-16 text-amber-700 mb-6 group-hover:scale-110 transition" />
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Monthly Mini Photo Shoots
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Themed sessions with pro photographers. Coffee + photos = magic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Visit Lens Café?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-3 bg-white text-amber-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-50 transition"
            >
              <Calendar className="w-6 h-6" />
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 border-2 border-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-amber-900 transition"
            >
              <Croissant className="w-6 h-6" />
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
