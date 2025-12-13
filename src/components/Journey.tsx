import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from "./icons/UIcons";

export function Journey() {
  const experience = [
    {
      type: "work",
      title: "Lead Android Developer",
      company: "Aleph-Labs",
      location: "Finland (Remote)",
      period: "June 2022 - Present",
      description: "Leading mobile development initiatives using hybrid and native approaches. Architecting scalable solutions and mentoring junior developers.",
      highlights: ["Team Leadership", "System Architecture", "Code Review"]
    },
    {
      type: "work",
      title: "Senior Mobile Developer",
      company: "Aleph-Labs",
      location: "Remote",
      period: "August 2020 - June 2022",
      description: "Developed high-performance mobile applications using React Native and Flutter. Implemented CI/CD pipelines and maintained 99.9% uptime.",
      highlights: ["React Native", "Flutter", "DevOps"]
    },
    {
      type: "work",
      title: "Senior Android Developer",
      company: "Aleph-Labs",
      location: "Remote",
      period: "May 2017 - August 2020",
      description: "Built native Android applications with modern architectures. Collaborated with cross-functional teams to deliver exceptional user experiences.",
      highlights: ["Android Native", "Kotlin", "MVVM"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (B.Eng)",
      field: "Computer Science",
      school: "Universitas Pembangunan Nasional Veteran Yogyakarta",
      period: "2013 - 2017",
      achievements: [""]
    }
  ];

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">My Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Experience &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A timeline of growth, learning, and achievement
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
            <h3 className="text-white text-2xl">Professional Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600"></div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

                  <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-white text-xl mb-1">{job.title}</h4>
                        <p className="text-cyan-400">{job.company}</p>
                      </div>
                      <div className="text-gray-400">{job.period}</div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCapIcon className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white text-2xl">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <h4 className="text-white text-xl mb-2">{edu.degree}</h4>
                <p className="text-cyan-400 mb-2">{edu.field}</p>
                <p className="text-gray-400 mb-4">{edu.school}</p>
                <p className="text-gray-500 mb-4">{edu.period}</p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AwardIcon className="w-6 h-6 text-cyan-400" />
              <h3 className="text-white text-2xl">Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700 rounded-2xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-white text-xl mb-1">Android Associate Developer</h4>
                    <p className="text-gray-400">Google</p>
                  </div>
                  <div className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                </div>
                <p className="text-gray-500">2022 - Present</p>
              </div>

              {/* <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <h4 className="text-white mb-4">Additional Skills</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">AWS Certified Solutions Architect (In Progress)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Scrum Master Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">UI/UX Design Principles</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
