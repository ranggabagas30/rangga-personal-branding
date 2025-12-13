import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { WorkShowcase } from "./components/WorkShowcase";
import { Portfolio } from "./components/Portfolio";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
      
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <Expertise />
        {/* <WorkShowcase />         */}
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
