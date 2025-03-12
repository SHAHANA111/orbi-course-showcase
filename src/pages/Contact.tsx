
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-orbi-blue mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-orbi-blue/80">
                Have questions about our courses or need help? Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center p-8 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orbi-blue/10 mb-4 text-orbi-blue">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-orbi-blue mb-2">Email Us</h3>
                <p className="text-orbi-blue/70 mb-4">For general inquiries and support</p>
                <a href="mailto:education@orbi.pk" className="text-orbi-gold hover:underline">education@orbi.pk</a>
              </div>
              
              <div className="flex flex-col items-center p-8 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orbi-blue/10 mb-4 text-orbi-blue">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-orbi-blue mb-2">Call Us</h3>
                <p className="text-orbi-blue/70 mb-4">Mon-Fri from 9am to 5pm</p>
                <a href="tel:+92xxxxxxxxx" className="text-orbi-gold hover:underline">+92 xxx xxx xxxx</a>
              </div>
              
              <div className="flex flex-col items-center p-8 rounded-xl border border-border bg-background text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orbi-blue/10 mb-4 text-orbi-blue">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-orbi-blue mb-2">Visit Us</h3>
                <p className="text-orbi-blue/70 mb-4">Our headquarters</p>
                <address className="not-italic text-orbi-gold">Islamabad, Pakistan</address>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl border border-border bg-background">
                <h2 className="text-2xl font-semibold text-orbi-blue mb-6">Send Us a Message</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-orbi-blue mb-1">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-orbi-blue mb-1">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-orbi-blue mb-1">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-orbi-blue mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orbi-gold"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-orbi-blue text-white font-medium rounded-lg hover:bg-orbi-blue/90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
