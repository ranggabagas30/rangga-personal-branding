import { Brain, Zap, Target, Award } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI-Powered Development",
      description: "Leveraging cutting-edge AI tools to enhance productivity and code quality"
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Obsessed with creating lightning-fast, smooth user experiences"
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Dedicated to understanding and exceeding client expectations"
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Never settling for good enough - always pursuing excellence"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Building the Future of
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Mobile</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a Senior Mobile Engineer based in Jakarta, Indonesia, specializing in cross-platform 
            and native mobile development. With over 7 years of experience, I transform complex ideas 
            into elegant, user-friendly applications that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Quick facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm">
            <div className="text-gray-400 mb-2">Location</div>
            <div className="text-white text-xl">Jakarta, Indonesia 🇮🇩</div>
            <div className="text-gray-500 text-sm mt-1">Available for remote work</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm">
            <div className="text-gray-400 mb-2">Availability</div>
            <div className="text-white text-xl">30+ hrs/week</div>
            <div className="text-gray-500 text-sm mt-1">Open to new opportunities</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-sm">
            <div className="text-gray-400 mb-2">Rate</div>
            <div className="text-white text-xl">$35/hour</div>
            <div className="text-gray-500 text-sm mt-1">Flexible pricing for long-term projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
