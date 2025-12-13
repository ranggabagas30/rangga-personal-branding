import { useState } from "react";
import { ExternalLinkIcon, YoutubeIcon, SmartphoneIcon, SimpleIcon } from "./icons/UIcons";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
  role: string;
  tech: string[];
  websiteUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  youtubeUrl?: string;
  featured: boolean;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Super-app", "Game"];
  
  const portfolioItems: PortfolioItem[] = [
    {
      title: "CuanX | Super-app (PPOB & Ride-hailing)",
      category: "Super-app",
      image: "/images/portfolio/porto-cuanx.png",
      description: "",
      role: "Project Manager & Mobile Engineer",
      tech: ["React Native", "Google Maps API", "Firebase", "Payment Gateway Integration", "Mobile Wallet"],
      websiteUrl: "https://cuanx.co.id/about",
      playStoreUrl: "https://play.google.com/store/apps/details?id=co.id.cuanx.customer&hl=en",
      youtubeUrl: "https://youtu.be/1Maz4_u9OTA",
      featured: true
    },
    {
      title: "Football Money | Fantasy Sport Game",
      category: "Game",
      image: "/images/portfolio/porto-footballmoney.jpeg",
      description: "",
      role: "React Native Developer",
      tech: ["React Native (Expo)", "React Native Gesture Handler", "Reanimated", "Expo Splash Screen", "Expo Linking"],
      websiteUrl: "https://footballmoney.us/videos",
      appStoreUrl: "https://apps.apple.com/id/app/football-money/id6605934587",
      youtubeUrl: "https://www.youtube.com/shorts/BrRAOci0QwI?feature=share",
      featured: true
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-muted/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-foreground mb-6">
            Selected
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of mobile applications I've crafted with passion and precision
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-foreground shadow-lg shadow-cyan-500/30"
                  : "bg-muted/50 border border-border text-muted-foreground hover:border-cyan-500/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-card/50 border border-border rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-foreground text-sm rounded-full">
                  Featured
                </div>
              )}
              
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Overlay actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.youtubeUrl && (
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      title="Watch on YouTube"
                    >
                      <YoutubeIcon className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                  {item.websiteUrl && (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      title="Visit Website"
                    >
                      <SimpleIcon icon="internetarchive" color="FFFFFF" className="w-5 h-5" />
                    </a>
                  )}
                  {(item.appStoreUrl || item.playStoreUrl) && (
                    <a
                      href={item.appStoreUrl || item.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      title="View on App Store"
                    >
                      <SmartphoneIcon className="w-5 h-5 text-foreground" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-foreground text-xl mb-1">{item.title}</h3>
                  <p className="text-cyan-400 text-sm">{item.role}</p>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{item.description}</p>
                
                {/* Links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.websiteUrl && (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-border rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <SimpleIcon icon="internetarchive" color="FFFFFF" className="w-3 h-3" />
                      Website
                    </a>
                  )}
                  {item.appStoreUrl && (
                    <a
                      href={item.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-border rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <SmartphoneIcon className="w-3 h-3" />
                      App Store
                    </a>
                  )}
                  {item.playStoreUrl && (
                    <a
                      href={item.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-border rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <SmartphoneIcon className="w-3 h-3" />
                      Google Play
                    </a>
                  )}
                  {item.youtubeUrl && (
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-border rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <YoutubeIcon className="w-3 h-3" />
                      YouTube
                    </a>
                  )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-800 border border-border rounded text-cyan-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
