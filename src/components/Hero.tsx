import { ArrowDownIcon, SparklesIcon } from "./icons/UIcons";

export function Hero() {
  return (
    <section className="relative mb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8 mt-16">        
          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white pt-16">
              Rangga Bagas
              <br />              
            </h1>
            <h1 className="text-2xl sm:text-2xl lg:text-4xl text-gray-400">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Senior Mobile Engineer
              </span>
            </h1>
            {/* Tech stack icons */}
            <div className="flex flex-wrap justify-center gap-1">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <img 
                  src="https://cdn.simpleicons.org/react/61DAFB" 
                  alt="React Native" 
                  className="w-5 h-5"
                />
                <span className="text-gray-300">React Native</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <img 
                  src="https://cdn.simpleicons.org/flutter/02569B" 
                  alt="Flutter" 
                  className="w-5 h-5"
                />
                <span className="text-gray-300">Flutter</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <img 
                  src="https://cdn.simpleicons.org/android/3DDC84" 
                  alt="Android" 
                  className="w-5 h-5"
                />
                <span className="text-gray-300">Android</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 rounded-lg backdrop-blur-sm border border-slate-700/50">
                <img 
                  src="https://cdn.simpleicons.org/apple/000000" 
                  alt="iOS" 
                  className="w-5 h-5"
                />
                <span className="text-gray-300">iOS</span>
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl pt-6">
              Spent 
              <span className="text-cyan-400"> 7+ years</span> making applications that works.
            </p>
          </div>

          {/* Stats */}
          {/* <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl text-white mb-2">7+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="w-px bg-slate-800"></div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="w-px bg-slate-800"></div>
            <div className="text-center">
              <div className="text-4xl text-white mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <button className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all">
              View My Work
              <ArrowDownIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1Qs_p91SU6_7qzuzRu63JAGNU95S8_HV0/view?usp=sharing', '_blank')}
              className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl hover:bg-slate-800 transition-all backdrop-blur-sm"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div> */}
    </section>
  );
}
