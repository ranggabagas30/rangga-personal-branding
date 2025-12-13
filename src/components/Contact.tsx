import React, { useState, useEffect } from "react";
import { SimpleIcon } from "./icons/UIcons";

function JakartaTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Get current time in Jakarta timezone (GMT+7)
      const now = new Date();
      const jakartaTimeString = now.toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(jakartaTimeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className="text-white">{time}</span>;
}

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#4B1F8C", color: "#ffffff" }}>
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col" style={{ color: "#ffffff" }}>
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Heading Section */}
          <div className="mb-8">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="block mt-2 py-2 relative inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Amazing
                <span className="absolute bottom-0 left-0 right-0 h-2 bg-orange-500"></span>
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto opacity-80">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>        
          {/* Pitch Button and Time */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a
              href="mailto:rangga.bagas0@gmail.com?subject=Let's build something great"
              className="mb-12 group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              <span>→ Pitch your idea</span>
            </a>

            {/* Location Text */}
            <p className="text-white text-sm sm:text-base uppercase tracking-wider opacity-80">
              Based in Jakarta (GMT+7), working worldwide
            </p>
            <div className="text-white text-sm sm:text-base">
              LOCAL TIME <JakartaTime />
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/ranggabagas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <img 
                src="/images/portfolio/ic_linkedin.png" 
                alt="LinkedIn" 
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://github.com/ranggabagas30?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors"
              aria-label="GitHub"
            >
              <SimpleIcon icon="github" color="FFFFFF" className="w-6 h-6" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ca635bc2c2002a8c"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 transition-colors"
              aria-label="Upwork"
            >
              <SimpleIcon icon="upwork" color="FFFFFF" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 mb-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white opacity-80">
            © 2025 Rangga B. - Senior Mobile Engineer. All rights reserved.
          </p>
          <p className="text-white opacity-60 text-sm mt-2">
            Built with passion using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-white opacity-60 text-xs mt-2">
            <a 
              href="https://www.flaticon.com/free-icons/linkedin" 
              title="linkedin icons" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Linkedin icons created by Smashicons - Flaticon
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
