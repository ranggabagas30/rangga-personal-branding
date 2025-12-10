import { Star, ThumbsUp } from "lucide-react";

const workHistory = [
  {
    title: "React Native Developer",
    company: "Completed Jobs: 3",
    rating: 5.0,
    period: "Dec 15, 2020 - Feb 14, 2021",
    hourlyRate: "$35.00 /hr",
    description: "Working as a MERN stack developer as well as native Android / iOS developer and I never let clients out of ideas. All projects I handle with high responsibility. I am very passionate about development and innovative technologies."
  },
  {
    title: "Create App for Fantasy Sports Raci Market",
    company: "Private Job",
    rating: 5.0,
    period: "Jun 24, 2020 - Dec 6, 2020",
    hourlyRate: "$35.00 /hr",
    description: "Working as a manager for the world with good team up of developers. At first it was a matter of choice but in the end, this team with our agility and development at scale. Not ..."
  }
];

export function WorkHistorySection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900">Work History</h2>
        <button className="text-green-600 hover:text-green-700">
          <ThumbsUp className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-4 px-4 py-2 bg-gray-50 rounded-lg inline-block">
        <span className="text-gray-900">Completed Jobs (3)</span>
      </div>

      <div className="space-y-6">
        {workHistory.map((job, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-gray-900">{job.title}</h3>
                <p className="text-gray-600 text-sm">{job.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
                <span className="ml-1 text-gray-900">{job.rating}</span>
              </div>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">{job.period}</span>
            </div>

            <p className="text-gray-700 mb-3">{job.description}</p>

            <div className="flex items-center gap-4">
              <button className="text-green-600 hover:text-green-700">Show review</button>
              <button className="text-green-600 hover:text-green-700">Fixed price</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
