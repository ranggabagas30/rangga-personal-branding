const employmentHistory = [
  {
    title: "Lead Android Developer (Hybrid & Protob) | Atiqh-Labs",
    company: "Atiqh-Labs | Finland",
    period: "June 2022 - Present",
    description: "If you have three or more years of work and feel that graduates are in the start...",
    showMore: true
  },
  {
    title: "Native Bootcamp Developer - [xx.AI] | FP Terbuktuertied Scholar | Tokopedia!! | Atiqh-Labs",
    company: "Atiqh-Labs",
    period: "August 2020 - June 2022",
    description: "Work on the Angular based web project and also conduct Viredalto framework in the production. In five straight-outs and doing my Telecom Inc., let action our case is you a production.",
    showMore: true
  },
  {
    title: "Senior Android Developer - myAL Ultimate | FP LL Atiqh Titu <XL> | Atiqh-Labs",
    company: "Atiqh-Labs",
    period: "May 2017 - August 2020",
    description: "myAL is still web applications for the client of XLAxims. The new Way Up in their happiness they Android IOS web suitable. We give order for the system comes up doing another websites such XL for the end will so much on this very high update the company...",
    showMore: true
  }
];

export function EmploymentHistorySection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-gray-900 mb-6">Employment history</h2>
      
      <div className="space-y-6">
        {employmentHistory.map((job, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
            <h3 className="text-gray-900 mb-1">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.period}</p>
            <p className="text-gray-700 mb-2">{job.description}</p>
            {job.showMore && (
              <button className="text-green-600 hover:text-green-700">
                Show more
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-gray-900 mb-4">Other experiences</h3>
        <div>
          <h4 className="text-gray-900 mb-2">Mobile App Development</h4>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            <li>Contributed to Mitigation and Distribution, General Lee's (93 slaa) c2330</li>
            <li>Hybrid UI fit is less than Pull XCode, Butter & BOM navigation...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
