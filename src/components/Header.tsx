import { MapPin, Star, Clock, CheckCircle2, MessageSquare } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Profile Info */}
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white">RB</span>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-gray-900">Rangga B.</h1>
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia - 8:18 am local time</span>
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-green-600">Working now</span>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex flex-col items-end gap-3">
            <div className="text-right">
              <div className="text-gray-900">$35.00/hr</div>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
              <MessageSquare className="w-4 h-4" />
              Hire Me
            </button>
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-6">
          <h2 className="text-gray-900 mb-2">Android | React Native | iOS | Flutter</h2>
        </div>
      </div>
    </header>
  );
}
