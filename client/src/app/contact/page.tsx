import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Send,
  Coffee,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
export default function ContactPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/fb/a6/ad/fba6adc34711997b82a6c670befd6a14.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Get in Touch</h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide">
            We’d love to hear from you
          </p>
          <p className="text-lg mt-6 opacity-90">
            Questions • Reservations • Events • Just saying hi
          </p>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-10">
                  Visit or Reach Out
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="bg-amber-700 p-4 rounded-full text-white">
                      <MapPin className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-amber-900">
                        Address
                      </p>
                      <p className="text-gray-700 mt-1">
                        123 Shutter Street
                        <br />
                        Lensville, LV 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-amber-700 p-4 rounded-full text-white">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-amber-900">
                        Phone
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-700 hover:text-amber-700 transition"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-amber-700 p-4 rounded-full text-white">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-amber-900">
                        Email
                      </p>
                      <a
                        href="mailto:hello@lenscafe.co"
                        className="text-gray-700 hover:text-amber-700 transition"
                      >
                        hello@lenscafe.co
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-amber-700 p-4 rounded-full text-white">
                      <Clock className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-amber-900">
                        Hours
                      </p>
                      <p className="text-gray-700">Daily 7:00 AM – 8:00 PM</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="bg-amber-700 p-4 rounded-full text-white">
                      <Instagram className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-amber-900">
                        Instagram
                      </p>
                      <a
                        href="https://instagram.com/lenscafe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-amber-700 transition"
                      >
                        @lenscafe
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WiFi note */}
              <div className="bg-amber-100 rounded-2xl p-8 border-2 border-amber-300">
                <p className="text-lg font-semibold text-amber-900">
                  WiFi Password
                </p>
                <p className="text-3xl font-bold text-amber-700 mt-2 font-mono">
                  espressoYourself
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-10">
                <h3 className="text-3xl font-bold text-amber-900 mb-8">
                  Send Us a Message
                </h3>

                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-4 focus:ring-amber-100 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-4 focus:ring-amber-100 outline-none transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-amber-600 focus:ring-4 focus:ring-amber-100 outline-none transition resize-none"
                      placeholder="What’s on your mind? We read every message ☕"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-lg transition shadow-lg"
                  >
                    <Send className="w-6 h-6" />
                    Send Message
                  </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-6">
                  We usually reply within a few hours (unless we’re pulling
                  shots)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map + Final CTA */}
      <div className="bg-amber-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Can’t Wait to See You
          </h2>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 max-w-5xl mx-auto mb-10">
            {/* Replace with real map embed later */}
            <div className="flex items-center justify-center h-full text-gray-500">
              <MapPin className="w-16 h-16" />
            </div>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-3 bg-white text-amber-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-50 transition"
          >
            <Coffee className="w-6 h-6" />
            Reserve a Table Now
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
