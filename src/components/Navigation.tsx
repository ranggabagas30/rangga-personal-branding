import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "./icons/UIcons";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverContact, setIsOverContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const navHeight = 64; // h-16 = 4rem = 64px
        const contactTop = contactSection.getBoundingClientRect().top;
        // Check if navigation is overlapping with contact section
        setIsOverContact(contactTop <= navHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    // { name: "Work", href: "#work" },
    { name: "Portfolio", href: "#portfolio" },
    // { name: "Journey", href: "#journey" },
    // { name: "Contact", href: "#contact" }
  ];

  const textColorClass = isOverContact ? "text-white" : "text-foreground";
  const mutedTextColorClass = isOverContact ? "text-white" : "text-muted-foreground";
  const hoverColorClass = isOverContact ? "hover:text-cyan-300" : "hover:text-cyan-400";
  const iconColorClass = isOverContact ? "text-white" : "text-foreground";

  const borderColorClass = isOverContact ? "border-white/20" : "border-border";
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b ${borderColorClass}`} style={{ backdropFilter: 'blur(20px) saturate(180%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white">RB</span>
            </div> */}
            <span className={textColorClass}>Rangga Bagas</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${mutedTextColorClass} ${hoverColorClass} transition-colors`}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle className="px-6 py-2" whiteMode={isOverContact} />
            {/* <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Hire Me
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${iconColorClass}`}
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block ${isOverContact ? "text-white" : "text-gray-300"} ${hoverColorClass} transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="py-2">
              <ThemeToggle whiteMode={isOverContact} />
            </div>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg">
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
