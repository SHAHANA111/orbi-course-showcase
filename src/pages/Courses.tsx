
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { useSearchParams } from "react-router-dom";
import { Filter, Search } from "lucide-react";

// Sample course data
const allCourses = [
  {
    id: "dropship-101",
    title: "Dropshipping 101: Getting Started",
    description: "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "dropshipping",
  },
  {
    id: "vendor-negotiation",
    title: "Vendor Negotiation Mastery",
    description: "Develop your negotiation skills and build better relationships with suppliers.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ290aWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "vendor",
  },
  {
    id: "import-essentials",
    title: "Import Essentials: From Source to Warehouse",
    description: "Navigate international sourcing, shipping, customs, and local logistics.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1wb3J0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "importing",
  },
  {
    id: "orbi-selling",
    title: "Mastering the Orbi.pk Marketplace",
    description: "Learn how to optimize your product listings, manage inventory, and increase sales on Orbi.pk.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "selling",
  },
  {
    id: "ecom-marketing",
    title: "E-commerce Marketing Strategies",
    description: "Drive traffic and convert visitors into customers with proven marketing techniques.",
    image: "https://images.unsplash.com/photo-1565698764020-27d557fd5af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "marketing",
  },
  {
    id: "dropship-advanced",
    title: "Advanced Dropshipping Techniques",
    description: "Scale your dropshipping business with automation, customer service, and retention strategies.",
    image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "dropshipping",
  },
  {
    id: "vendor-management",
    title: "Supply Chain & Vendor Management",
    description: "Build resilient supply chains and manage multiple vendor relationships effectively.",
    image: "https://images.unsplash.com/photo-1570648349256-148cd42e3ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwcGx5JTIwY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "vendor",
  },
  {
    id: "selling-psychology",
    title: "Psychology of Selling Online",
    description: "Understanding customer behavior and optimizing your store for higher conversions.",
    image: "https://images.unsplash.com/photo-1521118702313-63fca89fe771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBzeWNob2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "selling",
  },
];

const categories = [
  { id: "all", name: "All Categories" },
  { id: "dropshipping", name: "Dropshipping" },
  { id: "vendor", name: "Vendor Relations" },
  { id: "importing", name: "Importing" },
  { id: "selling", name: "Direct Selling" },
  { id: "marketing", name: "E-commerce Marketing" },
];

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";
  
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [query, setQuery] = useState(searchQuery);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    setActiveCategory(categoryParam);
    setQuery(searchQuery);
  }, [categoryParam, searchQuery]);
  
  useEffect(() => {
    let filtered = allCourses;
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    
    // Filter by search term
    if (query) {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(
        course => 
          course.title.toLowerCase().includes(searchLower) || 
          course.description.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredCourses(filtered);
  }, [activeCategory, query]);
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchParams(params => {
      if (categoryId === "all") {
        params.delete("category");
      } else {
        params.set("category", categoryId);
      }
      return params;
    });
    setIsMobileFilterOpen(false);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(params => {
      if (query) {
        params.set("search", query);
      } else {
        params.delete("search");
      }
      return params;
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 bg-gradient-to-b from-orbi-blue/10 to-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-orbi-blue mb-6">
                Explore Our Courses
              </h1>
              <p className="text-lg text-orbi-blue/80">
                Discover specialized courses to help you succeed in every aspect of e-commerce.
              </p>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-orbi-blue/20 rounded-lg"
                >
                  <Filter className="h-4 w-4" />
                  <span>Categories</span>
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="flex w-full max-w-md ml-auto">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-orbi-blue/50" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-2 border border-orbi-blue/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-orbi-blue text-white font-medium rounded-r-lg hover:bg-orbi-blue/90 transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Mobile category filter */}
              {isMobileFilterOpen && (
                <div className="lg:hidden bg-white p-4 rounded-lg border border-border mb-6">
                  <h3 className="font-semibold text-orbi-blue mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`px-3 py-1.5 rounded-md text-sm ${
                          activeCategory === category.id
                            ? "bg-orbi-blue text-white"
                            : "bg-orbi-blue/10 text-orbi-blue hover:bg-orbi-blue/20"
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Desktop category sidebar */}
              <div className="hidden lg:block w-64 bg-white p-6 rounded-lg border border-border self-start sticky top-24">
                <h3 className="font-semibold text-orbi-blue mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-4 py-2 rounded-md text-left ${
                        activeCategory === category.id
                          ? "bg-orbi-blue text-white"
                          : "hover:bg-orbi-blue/10 text-orbi-blue"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Course listing */}
              <div className="flex-grow">
                {filteredCourses.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold text-orbi-blue mb-2">No courses found</h3>
                    <p className="text-orbi-blue/70">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
                      <CourseCard
                        key={course.id}
                        {...course}
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
