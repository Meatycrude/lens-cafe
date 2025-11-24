// components/QuickInfoBar.tsx
import { Clock, Wifi, Camera, MapPin } from "lucide-react";

export function QuickInfoBar() {
  return (
    <div className="bg-amber-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <Clock className="w-9 h-9" />
          <div>
            <p className="text-sm opacity-90">Open Daily</p>
            <p className="font-semibold">7 AM – 8 PM</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Wifi className="w-9 h-9" />
          <div>
            <p className="text-sm opacity-90">Free Wi-Fi</p>
            <p className="font-semibold">espressoYourself</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Camera className="w-9 h-9" />
          <div>
            <p className="text-sm opacity-90">Natural Light</p>
            <p className="font-semibold">Perfect for photos</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <MapPin className="w-9 h-9" />
          <div>
            <p className="text-sm opacity-90">Location</p>
            <p className="font-semibold">123 Shutter St.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
