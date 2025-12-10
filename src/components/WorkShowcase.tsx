import { Star, ExternalLink, Calendar, DollarSign } from "lucide-react";

export function WorkShowcase() {
  const projects = [
    {
      title: "Fantasy Sports Racing Market App",
      client: "Confidential Client",
      duration: "Jun 2020 - Dec 2020",
      rate: "$35/hr",
      rating: 5.0,
      reviews: 12,
      description: "Led a team of developers to build a comprehensive fantasy sports platform with real-time updates, complex betting mechanics, and seamless user experience across iOS and Android.",
      technologies: ["React Native", "Node.js", "WebSocket", "Redux", "Firebase"],
      impact: ["100K+ users", "4.8★ App Store rating", "Featured in Top Sports Apps"]
    },
    {
      title: "React Native E-Commerce Platform",
      client: "Startup Venture",
      duration: "Dec 2020 - Feb 2021",
      rate: "$35/hr",
      rating: 5.0,
      reviews: 8,
      description: "Developed a full-featured e-commerce mobile application with advanced filtering, payment gateway integration, and real-time inventory management.",
      technologies: ["React Native", "TypeScript", "GraphQL", "Stripe"],
      impact: ["50K+ downloads", "30% increase in mobile sales", "99.9% uptime"]
    },
    {
      title: "Healthcare Monitoring System",
      client: "MedTech Company",
      duration: "Mar 2021 - Aug 2021",
      rate: "$35/hr",
      rating: 5.0,
      reviews: 15,
      description: "Built a cross-platform healthcare app for patient monitoring, appointment scheduling, and telemedicine consultations with HIPAA compliance.",
      technologies: ["Flutter", "Dart", "Firebase", "AWS"],
      impact: ["Healthcare certified", "20K+ active patients", "24/7 availability"]
    }
  ];

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Work Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering exceptional results with 100% client satisfaction
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white text-2xl mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.client}</p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20">
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-white">{project.rating}</span>
                      <span className="text-gray-500">({project.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.rate}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-cyan-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">5.0</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">100%</div>
              <div className="text-gray-400">Job Success</div>
            </div>
            <div>
              <div className="text-4xl text-white mb-2">30+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
