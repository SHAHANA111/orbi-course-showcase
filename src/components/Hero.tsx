
import { cn } from "@/lib/utils";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  
  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        "bg-gradient-to-b from-orbi-blue/10 to-background",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(4, 52, 85, 0.7), rgba(4, 52, 85, 0.5)), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNkMWQxZDEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzAgNjBWME0wIDMwaDYwIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-orbi-light bg-white/90 backdrop-blur-sm">
            <span className="text-xs font-medium text-orbi-blue mr-2">E-commerce mastery starts here</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-orbi-gold" />
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Elevate Your E-commerce Knowledge with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orbi-light to-orbi-gold"> Orbi University</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 text-balance">
            Expert courses on dropshipping, vendor relations, importing, and direct selling
            on the Orbi.pk platform.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up animation-delay-300">
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-orbi-blue/70" />
              </div>
              <input
                type="text"
                placeholder="Search a course..."
                className="w-full sm:w-80 pl-10 pr-4 py-3 border border-orbi-light/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="px-6 py-3 bg-orbi-gold text-white font-medium rounded-lg hover:bg-orbi-gold/90 transition-colors flex items-center justify-center"
            >
              Browse Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/80 animate-fade-in-up animation-delay-400">
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-light mr-2" />
              <span>Dropshipping</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-light mr-2" />
              <span>Vendor Relations</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-light mr-2" />
              <span>Import Solutions</span>
            </div>
            <div className="flex items-center">
              <span className="flex h-2 w-2 rounded-full bg-orbi-light mr-2" />
              <span>Orbi.pk Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
