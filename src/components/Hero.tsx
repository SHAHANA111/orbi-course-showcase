
import { cn } from "@/lib/utils";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };
  
  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        "bg-gradient-to-b from-orbi-50 to-background",
        className
      )}
      style={{
        backgroundImage: `radial-gradient(
          circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
          rgba(113, 141, 180, 0.1) 0%,
          rgba(255, 255, 255, 0) 50%
        )`
      }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNkMWQxZDEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgNjBWME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
        
        {/* Blob decorations */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orbi-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-orbi-200 bg-white/80 backdrop-blur-sm">
            <span className="text-xs font-medium text-orbi-800 mr-2">New courses added monthly</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-orbi-600" />
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-orbi-950 leading-tight mb-6 animate-fade-in-up">
            Transform Your Future With
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orbi-700 to-orbi-500"> Orbi University</span>
          </h1>
          
          <p className="text-lg md:text-xl text-orbi-700 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 text-balance">
            Discover world-class courses taught by industry experts. 
            Elevate your skills and unlock new career opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up animation-delay-300">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-orbi-400" />
              </div>
              <input
                type="text"
                placeholder="Search for a course..."
                className="w-full sm:w-80 pl-10 pr-4 py-3 border border-orbi-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-500 shadow-sm"
              />
            </div>
            <button className="px-6 py-3 bg-orbi-600 text-white font-medium rounded-lg hover:bg-orbi-700 transition-colors flex items-center justify-center">
              Browse Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-orbi-600 animate-fade-in-up animation-delay-400">
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-500 mr-2" />
              <span>100+ Courses</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-500 mr-2" />
              <span>Expert Instructors</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-500 mr-2" />
              <span>Flexible Learning</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-500 mr-2" />
              <span>Certification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
