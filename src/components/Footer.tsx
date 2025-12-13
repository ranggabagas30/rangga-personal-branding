import { MailIcon, SimpleIcon } from "./icons/UIcons";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="mb-4">About me</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">How it works</a></li>
              <li><a href="#" className="hover:text-white">Trust, Safety & Security</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="mb-4">Help & Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect me</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Mobile App</a></li>
              <li><a href="#" className="hover:text-white">Data for Solutions</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-300"><SimpleIcon icon="github" color="FFFFFF" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><SimpleIcon icon="linkedin" color="FFFFFF" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><SimpleIcon icon="x" color="FFFFFF" className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><MailIcon className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-300"><SimpleIcon icon="internetarchive" color="FFFFFF" className="w-5 h-5" /></a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2025 - Senior Mobile Engineer | Rangga Bagas
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <button className="hover:text-white">Follow</button>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-800"></div>
                <div className="w-6 h-6 rounded-full bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
