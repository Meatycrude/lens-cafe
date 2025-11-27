// components/Footer.tsx
import {
  Coffee,
  Camera,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Wifi,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + tagline */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Coffee className="w-10 h-10 text-amber-400" />
              <h3 className="text-3xl font-bold">Lens Café</h3>
            </div>
            <p className="text-amber-200 leading-relaxed">
              Where every cup has a story
              <br />
              and every corner is perfect for your shot.
            </p>
            <p className="text-sm italic text-amber-300">
              “Golden hour, all day long.”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-300">
              Explore
            </h4>
            <ul className="space-y-3 text-amber-100">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-amber-300 transition">
                  Today’s Special
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-amber-300 transition">
                  Book a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-300 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Visit Us
            </h4>
            <div className="space-y-4 text-amber-100">
              <p className="flex items-start gap-3">
                <span className="mt-1">Location</span>
                <span>
                  123 Shutter Street
                  <br />
                  kisii towm
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>Daily 7:00 AM – 8:00 PM</span>
              </p>
              <p className="flex items-center gap-3">
                <Wifi className="w-5 h-5" />
                <span>
                  WiFi:{" "}
                  <code className="bg-amber-900 px-2 py-1 rounded">
                    espressoYourself
                  </code>
                </span>
              </p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-amber-300">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 hover:text-amber-300 transition"
              >
                <Phone className="w-5 h-5" />
                <span>254115414231</span>
              </a>
              <a
                href="mailto:hello@lenscafe.co"
                className="flex items-center gap-3 hover:text-amber-300 transition"
              >
                <Mail className="w-5 h-5" />
                <span>@lenscafe.co.ke</span>
              </a>

              <div className="pt-6">
                <p className="text-sm text-amber-300 mb-3">Follow the light</p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/lenscafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/lenscafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-800 p-3 rounded-full hover:bg-amber-700 transition"
                    aria-label="Facebook"
                  >
                    <Camera className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-amber-900 py-6 text-center text-sm text-amber-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Lens Café. Brewed with love</p>
          <p className="italic">
            “Life’s too short for bad coffee and bad light.”
          </p>
        </div>
      </div>
    </footer>
  );
}
