
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "About", href: "#" },
    { name: "Instructors", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/50" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <span className="font-display text-2xl font-bold text-orbi-900">
            Orbi<span className="text-orbi-600">University</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-orbi-700 hover:text-orbi-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="#login"
              className="font-medium text-sm text-orbi-700 hover:text-orbi-900 transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              className="font-medium text-sm px-4 py-2 rounded-lg bg-orbi-600 text-white hover:bg-orbi-700 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-orbi-800" />
          ) : (
            <Menu className="h-6 w-6 text-orbi-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg animate-fade-in">
          <div className="container px-4 mx-auto py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-orbi-700 hover:text-orbi-900 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border flex flex-col space-y-3">
              <a
                href="#login"
                className="font-medium text-orbi-700 hover:text-orbi-900 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a
                href="#signup"
                className="font-medium px-4 py-2 text-center rounded-lg bg-orbi-600 text-white hover:bg-orbi-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
