
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-orbi-blue mb-6 text-center">
                About Orbi University
              </h1>
              
              <div className="prose max-w-none">
                <p className="text-lg text-orbi-blue/80 mb-6">
                  Welcome to Orbi University, the educational arm of Orbi.pk - Pakistan's premier e-commerce platform. 
                  Established with a vision to empower entrepreneurs and businesses in the digital marketplace, 
                  we provide comprehensive education on all aspects of e-commerce success.
                </p>
                
                <h2 className="text-2xl font-semibold text-orbi-blue mt-12 mb-4">Our Mission</h2>
                <p>
                  Our mission is to democratize e-commerce knowledge and provide actionable education 
                  that helps individuals and businesses thrive in the digital marketplace. We believe that 
                  with the right knowledge and tools, anyone can build a successful online business.
                </p>
                
                <h2 className="text-2xl font-semibold text-orbi-blue mt-12 mb-4">What We Offer</h2>
                <p>
                  Orbi University offers specialized courses across the e-commerce ecosystem:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Dropshipping Mastery:</strong> Learn how to start and scale a dropshipping business with minimal inventory.</li>
                  <li><strong>Vendor Relations:</strong> Develop the skills to build strong supplier networks and negotiate effectively.</li>
                  <li><strong>Import Solutions:</strong> Navigate international procurement, customs, and logistics with confidence.</li>
                  <li><strong>Orbi.pk Platform:</strong> Master the tools and features of the Orbi.pk marketplace to maximize your sales.</li>
                  <li><strong>E-commerce Marketing:</strong> Learn modern digital marketing strategies specifically for e-commerce success.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-orbi-blue mt-12 mb-4">Our Experts</h2>
                <p>
                  Our courses are developed and taught by industry professionals with years of hands-on experience 
                  in the e-commerce space. From successful store owners to logistics experts and marketing specialists, 
                  our instructors bring real-world expertise to every lesson.
                </p>
                
                <h2 className="text-2xl font-semibold text-orbi-blue mt-12 mb-4">The Orbi Ecosystem</h2>
                <p>
                  Orbi University is part of the broader Orbi ecosystem, which includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Orbi.pk:</strong> Our flagship e-commerce marketplace where sellers and buyers connect.</li>
                  <li><strong>Orbi Logistics:</strong> End-to-end logistics solutions for e-commerce businesses.</li>
                  <li><strong>Orbi University:</strong> Educational resources to help you succeed in e-commerce.</li>
                </ul>
                
                <p className="mt-8">
                  Join us at Orbi University and embark on your journey to e-commerce success. 
                  Whether you're just starting out or looking to scale your existing business, 
                  we have the knowledge and resources to help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
