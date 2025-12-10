import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: "Hourly Monitoring/Accounting",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjQ3MDIxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "To-Do App Development",
    category: "Mobile & Web",
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMG5hdGl2ZSUyMGFwcHxlbnwxfHx8fDE3NjQ3NzIwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Hello - E-Wallet Development App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1622611404296-6d9bca423567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwYXBwJTIwc2NyZWVufGVufDF8fHx8MTc2NDc3MjAxNXww&ixlib=rb-4.1.0&q=80&w=1080",
  }
];

export function PortfolioSection() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-gray-900 mb-6">Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.category}</p>
            </div>
            <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">1</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-50">2</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-50">3</button>
        </div>
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
