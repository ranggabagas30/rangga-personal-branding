import { useState } from "react";
import { ExternalLink, Youtube, Smartphone, Globe } from "lucide-react";
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
  
  const filters = ["All", "Mobile Apps", "FinTech"];
  
  const portfolioItems: PortfolioItem[] = [
    {
      title: "CuanX | Super-app (PPOB & Ride-hailing)",
      category: "FinTech",
      image: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/ef67bc93af28497451eae59bd00ee965?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIE4Lzyu0HozrCAI3J9X3KRYMqGFustrxI%2Fg7f0wSBYg%2BAiAMDmZGn3xQ2qW6G3RW20pgZP79N6phZuCW9EpBq464kSqbBQja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDczOTkzOTE3MzgxOSIMwcKGG7di09Xw3HVRKu8EvlVz1AIXV4BhpGds1GxdiT4%2Bg%2Bw%2FMGMm2zKNs3VSeoItw9endvK7d5MnsX9HuOvPpzFQU7xM6uX3CW6QNop041m3Xohi2PzN9z6ppoOSAt7S91XHcU2ilZn0EXlfmYnJgLb2AAHUlEXZBkHIIbC6W9jOWxO92DAEJlIH%2Bi96MZ75hubv7koR8nuUnc3uKMwRCOYhYuzRXtrAWOw9PTCnOgTtyGJi3ZLXB2T2Q6z6c1NQavC2xhY0FqHaB845QKptmGsWAFB0vRQwYIyuth0rXgCARZPDBagxcdKLYA4%2BuMHnOkpeuOZVJ15ExqNLO1ls7wVCQwlOL6f3AFJImzCCTZ0aE6OG0owJ5BJuM%2BsrUlvmL%2F%2FVpU8FdCSEYdUICvmCrjaBQB5BkJV5hvCfIZ0Zvw4iHZr9Do8De5KpMKtE62BUoDhKxKMLl5zSMYNqZ17fLgWs7cEhoru3mZEB2AUkW4s9TlzeS%2B%2FpjSORYNvzdAtcxt6b73ZPnJxfNfYgrrlQ04drh1AWGhgh4t8fhzrt6Oc3JUeMiwZq17wOpb%2F0%2BzmG%2FMCD0pCtDI1EIIqwG06%2Bs0GTHap5csBvL2%2BnS8NTrRvtoGzt3yWbd5R%2FkRG%2FyLbgOslM4y9PQjBGx5Z6V1XxUV4C9DFwuwAJ0Kk4Y0P9jIgj0Mwtbl9uLfXDtsrMMt4%2BuBHz2tfYahVn4CN86FOWebmjwZ7ZNTY5HvjaattoihvEQYymOAeCig7eu18%2BkPtQQqfeaO3Xi6BTBSmxJb2BUsgT59ZDHv0eSY%2Bu86m76GXI%2FG4u9HQUEKaHhMvJWOdEE6BL2XD4wIsG8Bilkw0wgczmyQY6mgFtC1PY%2BSXKyBwCRDZN1rYVKhLmE6pSpGu8LjR4vU2w%2F5hw%2Bg1YKPae2RcUPOhGz6SCwgE5rSVNI8dqHz0I3GC6ZuMYaRSpvjq4LuUie%2F78%2FF5lazyBc3SdhCzoB%2BkApc1Symde%2B47lMA5%2FsYNE0PCJzhMoB45cJwy9TWREyYcpbLbnJyIBQmYrGih52IiOtC3x5odf3zCHEnVo&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251210T173706Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5WWLYDSMR%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=11d8c3ed8028895d1b9f4262d822202df1163f72d2f7cb633a002188c66fbbd1",
      description: "CuanX is here with practical and innovative solutions for your daily needs. With online motorcycle taxi services, online taxis, and digital product purchases, we help you live your life easier, more comfortable, and more efficient.",
      role: "React Native Developer",
      tech: ["React Native", "Google Maps API", "Firebase", "Payment Gateway Integration", "Mobile Wallet"],
      websiteUrl: "https://cuanx.co.id/about",
      playStoreUrl: "https://play.google.com/store/apps/details?id=co.id.cuanx.customer&hl=en",
      youtubeUrl: "https://youtu.be/1Maz4_u9OTA",
      featured: true
    },
    {
      title: "Football Money | Fantasy Sport Game",
      category: "Mobile Apps",
      image: "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/0fe9ab7d175af299d8261b987689f6e9?response-content-disposition=inline%3B%20filename%3D%22image_original%22%3B%20filename%2A%3Dutf-8%27%27image_original&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGz1nHYZkJ1x39QpK%2Fc292tEvX0ZHAc5BeG%2Fib%2BOIKR9AiBG%2FIxoGAoT%2BY7hJCb1TGCWBQpJJVfIcOKPlOcXAWrZOiqbBQja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDczOTkzOTE3MzgxOSIM%2B6rbpttyD5gX%2Bd%2B4Ku8EuxMPR1dMahvh9cIowq0yGbT2zrkXF0TNL5epHAyQedKZEiVxUyZxBMrgr8WU2I8ON%2B8K5Gy0POFswPpINaigKuy3nmld45Uyp%2FhNF02XthCIT7rgAp%2FexrTqKVuoLwe5yTNHX5Qrm8pdkeJW3lEv6Uns1DR9Dy3u4sxRnaAxv4NSOsshAKUNu2FN7S0%2BA0kMRH1mLM5zucthpUfSEdabijA14fdw8DWRwEUfgmZYjgnQ8J9T2%2ByeKmycIY66st0jW%2BYWVUFpuDWnUsU5QmqYDdmkARhv0GxghocKV2b%2F3qhe%2BzWjCcoEr3%2FkwyI2TD4QkkMLo%2BNy5HPq5bQ2WhGQ4kRXcPqn8jqdmNrSRcJB5OxPDNrGDks4G8uNgz1lxNU14dJVxt0pUkYztsxxJ0%2FsXDYm2mGDDXX59MAx0ty26sqQ1pbaUD8huhqWg0JksItVsj3Qiw8XDXbDNrRdnBiYCuzJv0x9TJ%2FmOYpIYrHcDqTRNpIDqG6N49z52vKXBroXFEPLdHjKUuo2i7%2FGF%2Bf%2B4EavZ2KCk%2B5DeBax0QdpNlNwLwpK26OW%2FO6YbxFK2jeEKrsmT0QnekxyG0U3e4IBdXP281jyeHi7Rt%2BAFzNmIQtjVkhmApPBk0rx4rB08UXz2ir6uVwVhYlNhtsOeIc%2FTIi0%2B2x%2Bq6J1qpCuZtg6UywqOl8SmC4miYEWCEovVNFzvKoGZbKYXfC66PFxDUDtojO1ekyB0Bt8demL7LSnGufXYsesxzjDTiQLBefi86fQhak9Wsp1qDIipu%2FDPANdCcgaLFP7%2FFF%2Fpijm0RWQtCpg3fg6qW8v1U7rhbLUAjsw8svmyQY6mgEb9kZooQIQx9PyMF24y2NbikUFvHzJkcOFqGTNdhmHD7pkAzCwY5cqMAphlw9kXMjKsscE2yTdIkDJSQfAsneaVo%2FdopG%2F6a79gsyt3mJzTk2DnYZA%2FZwwdPuC8pJHrfNuRjZJWPDUqst94XMzdukQnD5byZh8URNjxfl66rqJZadmK9tVX1yWeqnWw%2BJn6srPcn91Mo%2Fd9FAA&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251210T173250Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW552FBLYJR%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=e2456770a6c5634ff49d6282c67e0e13b9953fd74d1f2813813b4a41217ea169",
      description: "Football Money is a virtual trading platform where users can engage in the exciting world of football by trading European footballers like stocks. Player prices fluctuate based on performance and market demand, creating a dynamic and competitive environment.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  {item.youtubeUrl && (
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      title="Watch on YouTube"
                    >
                      <Youtube className="w-5 h-5 text-white" />
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
                      <Globe className="w-5 h-5 text-white" />
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
                      <Smartphone className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-white text-xl mb-1">{item.title}</h3>
                  <p className="text-cyan-400 text-sm">{item.role}</p>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                {/* Links */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.websiteUrl && (
                    <a
                      href={item.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <Globe className="w-3 h-3" />
                      Website
                    </a>
                  )}
                  {item.appStoreUrl && (
                    <a
                      href={item.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <Smartphone className="w-3 h-3" />
                      App Store
                    </a>
                  )}
                  {item.playStoreUrl && (
                    <a
                      href={item.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <Smartphone className="w-3 h-3" />
                      Google Play
                    </a>
                  )}
                  {item.youtubeUrl && (
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-xs hover:border-cyan-500/50 transition-colors"
                    >
                      <Youtube className="w-3 h-3" />
                      YouTube
                    </a>
                  )}
                </div>

                {/* Tech stack */}
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
