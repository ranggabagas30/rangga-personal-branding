const skills = [
  "React Native", "React", "Android", "Flutter", "Kotlin", 
  "Swift", "JavaScript", "iOS", "TypeScript", "Firebase", 
  "MySQL", "MongoDB", "Git", "REST API", "GraphQL", 
  "Node.js", "Express.js", "Redux"
];

export function SkillsSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-gray-900 mb-6">Skills</h2>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
