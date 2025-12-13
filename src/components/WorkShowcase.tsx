import { useState } from "react";
import { StarIcon, ExternalLinkIcon, CalendarIcon, DollarSignIcon, MapPinIcon, UsersIcon, ClockIcon } from "./icons/UIcons";

interface Testimonial {
  rating: number;
  text: string;
  date?: string;
}

interface ClientInfo {
  rating: number;
  reviewCount: number;
  location: string;
  totalSpent: string;
  hires: number;
  activeHires: number;
  memberSince: string;
}

interface Project {
  title: string;
  duration: string;
  earnings: string;
  paymentType: string;
  jobDescription: string;
  projectUrl?: string;
  testimonials: Testimonial[];
  clientInfo: ClientInfo;
}

export function WorkShowcase() {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});

  const projects: Project[] = [
    {
      title: "Create App for Fantasy Sports Stock Market",
      duration: "Jun 6, 2024 - Dec 9, 2024",
      earnings: "$1,500.00 earned",
      paymentType: "Fixed price",
      jobDescription: "Website is live: https://footballmoney.us. Please sign up and you'll get 2 million coins to buy and sell players. The app features real-time market updates, player trading, and comprehensive fantasy sports management.",
      projectUrl: "https://footballmoney.us",
      testimonials: [
        {
      rating: 5.0,
          text: "Rangga is wonderful to work with and I would encourage every entrepreneur to find a way to work with him. Organized, on time, goes above and beyond and a very respectful person. 10/10",
          date: "Dec 4, 2024"
        },
        {
          rating: 5.0,
          text: "I would recommend Rangga to every aspiring entrepreneur. He is hard working, good at communicating and uber organized. Fun person to work with and I hope we work on many more additional projects in the future. 10/10 on my behalf for his work and commitment to the project!",
          date: "Dec 4, 2024"
        }
      ],
      clientInfo: {
      rating: 5.0,
        reviewCount: 14,
        location: "United States, Jersey City",
        totalSpent: "Over $10,000 total spent",
        hires: 19,
        activeHires: 0,
        memberSince: "Aug 27, 2020"
      }
    },
    {
      title: "App Maintenance",
      duration: "Ongoing",
      earnings: "Fixed price",
      paymentType: "Fixed price",
      jobDescription: "Ongoing maintenance and support for mobile applications. Includes bug fixes, performance optimizations, feature updates, and technical support.",
      testimonials: [
        {
      rating: 5.0,
          text: "Excellent work on maintaining our app. Rangga is responsive, professional, and always delivers on time. Highly recommended!",
        }
      ],
      clientInfo: {
        rating: 4.8,
        reviewCount: 8,
        location: "United States",
        totalSpent: "Over $5,000 total spent",
        hires: 12,
        activeHires: 1,
        memberSince: "Jan 15, 2021"
      }
    }
  ];

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="work" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400">Client Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            What Clients
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from clients who trusted me with their projects
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-white text-2xl mb-3">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <DollarSignIcon className="w-4 h-4" />
                      <span>{project.earnings}</span>
                    </div>
                    <span className="text-gray-500">{project.paymentType}</span>
                  </div>
                </div>
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
                  >
                    <ExternalLinkIcon className="w-5 h-5 text-cyan-400" />
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Client Testimonials */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-white text-lg mb-4 flex items-center gap-2">
                      <StarIcon className="w-5 h-5 text-yellow-400" filled />
                      <span>Client's Review</span>
                    </h4>
                    <div className="space-y-4">
                      {project.testimonials.map((testimonial, idx) => (
                        <div
                          key={idx}
                          className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                filled
                              />
                            ))}
                            {testimonial.date && (
                              <span className="text-gray-500 text-sm ml-2">{testimonial.date}</span>
                            )}
                          </div>
                          <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Description */}
                  <div>
                    <h4 className="text-white text-lg mb-4">Job Description</h4>
                    <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
                      <p className="text-gray-300 leading-relaxed">
                        {expandedDescriptions[index] || project.jobDescription.length < 200
                          ? project.jobDescription
                          : `${project.jobDescription.substring(0, 200)}...`}
                      </p>
                      {project.jobDescription.length > 200 && (
                        <button
                          onClick={() => toggleDescription(index)}
                          className="mt-3 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                        >
                          {expandedDescriptions[index] ? "Show less" : "more"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* About the Client */}
                <div className="lg:col-span-1">
                  <h4 className="text-white text-lg mb-4">About the client</h4>
                  <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/50 border border-slate-700 rounded-xl space-y-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-white">
                        {project.clientInfo.rating} stars
                      </span>
                      <span className="text-gray-400 text-sm">
                        based on {project.clientInfo.reviewCount} reviews
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <MapPinIcon className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{project.clientInfo.location}</span>
                    </div>
                    
                    <div className="text-gray-300 text-sm">
                      {project.clientInfo.totalSpent}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        {project.clientInfo.hires} Hires
                      </span>
                      {project.clientInfo.activeHires > 0 && (
                        <span className="text-cyan-400 text-sm">
                          {project.clientInfo.activeHires} Active
                        </span>
                      )}
                  </div>

                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-300 text-sm">
                        Member since {project.clientInfo.memberSince}
                      </span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        {/* <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl">
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
        </div> */}
      </div>
    </section>
  );
}
