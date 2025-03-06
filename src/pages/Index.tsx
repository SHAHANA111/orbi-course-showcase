
import { CourseCard } from "@/components/CourseCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { BookOpen, Users, Award, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Foundations of Machine Learning",
    description: "Learn the core principles and algorithms behind machine learning with practical applications and real-world examples.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    level: "Intermediate" as const,
    duration: "10 weeks",
    students: 2435,
    lessons: 42,
    instructor: "Dr. Sarah Chen",
    featured: true
  },
  {
    id: "2",
    title: "Modern Web Development",
    description: "Master the latest frontend frameworks and build responsive, high-performance web applications.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    level: "Beginner" as const,
    duration: "8 weeks",
    students: 3870,
    lessons: 36,
    instructor: "Alex Rodriguez"
  },
  {
    id: "3",
    title: "Strategic Marketing Management",
    description: "Develop comprehensive marketing strategies and learn how to effectively position brands in competitive markets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Business",
    level: "Advanced" as const,
    duration: "12 weeks",
    students: 1895,
    lessons: 48,
    instructor: "Maya Johnson"
  },
  {
    id: "4",
    title: "UX/UI Design Fundamentals",
    description: "Learn the principles of user-centered design and create intuitive, engaging user experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Design",
    level: "Beginner" as const,
    duration: "6 weeks",
    students: 4210,
    lessons: 30,
    instructor: "Leo Park"
  },
  {
    id: "5",
    title: "Financial Analysis & Modeling",
    description: "Master financial modeling techniques and learn to make data-driven business decisions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Business",
    level: "Intermediate" as const,
    duration: "9 weeks",
    students: 1750,
    lessons: 38,
    instructor: "Emma Sinclair"
  },
  {
    id: "6",
    title: "Data Science Essentials",
    description: "Build a solid foundation in data analysis, visualization, and statistical methods for making data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    category: "Technology",
    level: "Intermediate" as const,
    duration: "11 weeks",
    students: 3120,
    lessons: 45,
    instructor: "Dr. Michael Roberts"
  },
  {
    id: "7",
    title: "Digital Photography Masterclass",
    description: "Elevate your photography skills with advanced techniques in composition, lighting, and post-processing.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    category: "Arts",
    level: "Advanced" as const,
    duration: "8 weeks",
    students: 2890,
    lessons: 36,
    instructor: "Isabella Martinez"
  }
];

const stats = [
  { icon: BookOpen, value: "100+", label: "Courses" },
  { icon: Users, value: "50,000+", label: "Students" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-8 rounded-xl border border-border bg-background animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orbi-100 mb-4">
                    <stat.icon className="h-8 w-8 text-orbi-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-orbi-900 mb-1">{stat.value}</h3>
                  <p className="text-orbi-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section id="courses" className="py-20 bg-gradient-to-b from-white to-orbi-50">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-orbi-900 mb-4 animate-fade-in-up">
                Explore Our Featured Courses
              </h2>
              <p className="text-orbi-600 text-balance animate-fade-in-up">
                Discover our most popular courses designed to help you master new skills and advance your career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-orbi-600 text-orbi-700 font-medium hover:bg-orbi-50 transition-colors"
              >
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-orbi-900 text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-orbi-200 mb-8 text-balance animate-fade-in-up">
                Join thousands of students already learning with Orbi University. 
                Start your journey today and transform your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <a
                  href="#signup"
                  className="px-6 py-3 bg-white text-orbi-900 font-medium rounded-lg hover:bg-orbi-100 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#courses"
                  className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore Courses
                </a>
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
