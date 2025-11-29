// app/team/page.tsx   (or pages/team.tsx)
import { Coffee, Camera, Heart, Instagram } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Head Barista",
    bio: "Former street photographer turned coffee obsessive. Alex designed Lens Café so every shot — of latte art or golden hour — looks perfect.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face",
    instagram: "alex.lenscafe",
  },
  {
    name: "Maya Chen",
    role: "Pastry Chef",
    bio: "Trained in Paris, obsessed with butter. Maya’s croissants have been called “dangerously flaky” by more than one customer.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop&crop=face",
    instagram: "maya.bakes",
  },
  {
    name: "Jordan Kim",
    role: "Community & Events Lead",
    photo:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=800&fit=crop&crop=face",
    bio: "Professional smiler and organizer of our monthly mini photo shoots. If you’ve ever left Lens Café happier than when you arrived — thank Jordan.",
    instagram: "jordan.at.lens",
  },
  {
    name: "Sam Ortiz",
    role: "Barista & Roast Master",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop&crop=face",
    bio: "Sources our single-origin beans directly from farmers. Makes a mean pour-over and an even meaner playlist.",
    instagram: "sam.pours",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-orange-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554110397-9bac6c4a8dbf?w=1800')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Meet the Team</h1>
          <p className="text-2xl md:text-3xl font-light">
            The humans behind your favorite cups
          </p>
          <div className="flex justify-center gap-8 mt-10">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8" />
              <span className="text-lg">Made with love</span>
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="w-8 h-8" />
              <span className="text-lg">Brewed with passion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-amber-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold mt-1">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mt-6 leading-relaxed text-sm">
                    {member.bio}
                  </p>

                  <div className="mt-8">
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>@{member.instagram}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join the Team CTA */}
      <div className="py-24 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Want to Join Us?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            We’re always looking for passionate baristas, bakers, and
            light-chasers.
          </p>
          <a
            href="mailto:jobs@lenscafe.co"
            className="inline-flex items-center gap-3 bg-white text-amber-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-amber-50 transition"
          >
            <Coffee className="w-6 h-6" />
            Work With Us
          </a>
        </div>
      </div>
    </>
  );
}
