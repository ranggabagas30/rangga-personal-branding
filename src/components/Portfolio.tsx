import { ExternalLink, Github, Play } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from "react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Mobile Apps", "E-Commerce", "FinTech", "Healthcare"];
  
  const portfolioItems = [
    {
      title: "Hello - E-Wallet Platform",
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1726066012801-14d892021339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2FsbGV0JTIwYXBwfGVufDF8fHx8MTc2NDc3Mjc0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "A modern e-wallet app with P2P transfers, bill payments, and investment features",
      tech: ["React Native", "Node.js", "MongoDB"],
      link: "#",
      featured: true
    },
    {
      title: "Hourly Monitoring System",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1759139681761-852dd24340df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBjb2RpbmclMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY0NzcyNzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Time tracking and productivity monitoring app for remote teams",
      tech: ["Flutter", "Firebase", "GraphQL"],
      link: "#",
      featured: true
    },
    {
      title: "MediCare - Telemedicine App",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDY2MDczNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Healthcare platform connecting patients with doctors for virtual consultations",
      tech: ["React Native", "WebRTC", "AWS"],
      link: "#",
      featured: false
    },
    {
      title: "ShopEase - E-Commerce",
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjQ3MDIxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Full-featured shopping app with AR product preview and social commerce",
      tech: ["React Native", "Stripe", "Redis"],
      link: "#",
      featured: false
    },
    {
      title: "FitPro - Fitness Tracker",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMG5hdGl2ZSUyMGFwcHxlbnwxfHx8fDE3NjQ3NzIwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "AI-powered fitness tracking with personalized workout recommendations",
      tech: ["Flutter", "TensorFlow", "Firebase"],
      link: "#",
      featured: true
    },
    {
      title: "CryptoVault - Crypto Wallet",
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1622611404296-6d9bca423567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc2NDc3MjAxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration",
      tech: ["React Native", "Web3.js", "Blockchain"],
      link: "#",
      featured: false
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Selected
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/50 border border-slate-700 text-gray-300 hover:border-cyan-500/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-full">
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
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                    <Play className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl">{item.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-cyan-400 text-xs"
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
