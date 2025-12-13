import { Code2Icon, SmartphoneIcon, LibraryIcon, LayersIcon, RocketIcon } from "./icons/UIcons";

export function Expertise() {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code2Icon,
      items: [
        "Kotlin (6+ years)",
        "Java (4+ years)",
        "JavaScript/TypeScript",
        "Python",
        "C++"
      ]
    },
    {
      category: "Frameworks",
      icon: SmartphoneIcon,
      items: [
        "Android Native",
        "Flutter",
        "React Native (bare or with Expo, EAS)",
        "React.js, Vite, Next.js",
        "XML or Android Jetpack Compose"
      ]
    },
    {
      category: "Libraries",
      icon: LibraryIcon,
      items: [
        "Google Map SDK",
        "Exoplayer SDK",
        "Agora SDK",
        "CIAM",
        "Firebase",
        "Supabase",
        "Dagger2 / Hilt",
        "Kotlin Coroutines",
        "RxJava",
        "Zustand",
        "Reanimated"
      ]
    },
    {
      category: "Architecture & Design Patterns",
      icon: LayersIcon,
      items: [
        "MVVM",
        "MVI",
        "MVP",
        "Clean Code",
        "Domain Driven Design"
      ]
    },
    {
      category: "Release & Deployment",
      icon: RocketIcon,
      items: [
        "Docker",
        "CI/CD (Jenkins, Github Actions, Fastlane)",
        "Code Push (OTA updates)",
        "MDM Enrollment"
      ]
    }
  ];

  const certifications = [
    { name: "Android Developer - Dicoding Indonesia", year: "2019 - 2020" },
    { name: "Bachelor of Information Technology - Universitas Pembangunan Nasional Veteran Yogyakarta", year: "2013 - 2017" }
  ];

  return (
    <section id="expertise" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* <div className="inline-block px-4 py-2 bg-muted/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Expertise</span>
          </div> */}
          <h2 className="text-4xl sm:text-5xl text-foreground mb-6">
            Expertise
            {/* <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Arsenal</span> */}
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building world-class mobile applications
          </p> */}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card/50 border border-border rounded-2xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-foreground text-xl">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted/50 border border-border rounded-lg text-muted-foreground text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Education */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-border rounded-2xl">
            <h3 className="text-foreground text-2xl mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-foreground">{cert.name}</div>
                    <div className="text-muted-foreground text-sm">{cert.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-border rounded-2xl">
            <h3 className="text-foreground text-2xl mb-6">Languages</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">Conversational</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground">Indonesian</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
