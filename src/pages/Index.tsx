
import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample featured courses
const featuredCourses = [
  {
    id: "dropship-101",
    title: "Dropshipping 101: Getting Started",
    description: "Learn the fundamentals of dropshipping and set up your first store on Orbi.pk.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    category: "Dropshipping",
    featured: true
  },
  {
    id: "vendor-negotiation",
    title: "Vendor Negotiation Mastery",
    description: "Develop your negotiation skills and build better relationships with suppliers.",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5lZ290aWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Vendor Relations"
  },
  {
    id: "import-essentials",
    title: "Import Essentials: From Source to Warehouse",
    description: "Navigate international sourcing, shipping, customs, and local logistics.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1wb3J0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Importing"
  },
  {
    id: "orbi-selling",
    title: "Mastering the Orbi.pk Marketplace",
    description: "Learn how to optimize your product listings, manage inventory, and increase sales on Orbi.pk.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    category: "Direct Selling"
  },
  {
    id: "ecom-marketing",
    title: "E-commerce Marketing Strategies",
    description: "Drive traffic and convert visitors into customers with proven marketing techniques.",
    image: "https://images.unsplash.com/photo-1565698764020-27d557fd5af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Marketing"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Featured Courses Section */}
        <section id="courses" className="py-20 bg-gradient-to-b from-white to-orbi-blue/5">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-orbi-blue mb-4 animate-fade-in-up">
                Featured Courses
              </h2>
              <p className="text-orbi-blue/80 text-balance animate-fade-in-up">
                Explore our most popular courses designed to help you master e-commerce on the Orbi.pk platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/courses" 
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-orbi-blue text-orbi-blue font-medium hover:bg-orbi-blue/5 transition-colors"
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-orbi-blue text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                Ready to Boost Your E-commerce Skills?
              </h2>
              <p className="text-orbi-light mb-8 text-balance animate-fade-in-up">
                Join thousands of successful sellers already learning with Orbi University. 
                Start your journey today and transform your e-commerce business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-orbi-gold text-white font-medium rounded-lg hover:bg-orbi-gold/90 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/courses"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
