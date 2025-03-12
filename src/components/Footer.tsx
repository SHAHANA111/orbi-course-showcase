
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-orbi-blue text-white/80 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Orbi<span className="text-orbi-gold">University</span>
            </h3>
            <p className="mb-6 text-sm">
              Your e-commerce education partner. Learn everything about dropshipping, vendor relations, imports, and direct selling on Orbi.pk.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orbi-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orbi-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orbi-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orbi-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-orbi-gold transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orbi-gold transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-orbi-gold transition-colors">Courses</Link></li>
              <li><Link to="/about" className="hover:text-orbi-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-orbi-gold transition-colors">Contact</Link></li>
              <li><a href="https://orbi.pk" target="_blank" rel="noopener noreferrer" className="hover:text-orbi-gold transition-colors">Visit Orbi.pk</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Course Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses?category=dropshipping" className="hover:text-orbi-gold transition-colors">Dropshipping</Link></li>
              <li><Link to="/courses?category=vendor" className="hover:text-orbi-gold transition-colors">Vendor Relations</Link></li>
              <li><Link to="/courses?category=importing" className="hover:text-orbi-gold transition-colors">Importing</Link></li>
              <li><Link to="/courses?category=selling" className="hover:text-orbi-gold transition-colors">Direct Selling</Link></li>
              <li><Link to="/courses?category=marketing" className="hover:text-orbi-gold transition-colors">E-commerce Marketing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Orbi Headquarters</li>
              <li>Islamabad, Pakistan</li>
              <li>education@orbi.pk</li>
              <li>+92 xxx xxx xxxx</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Orbi University. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-orbi-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orbi-gold transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-orbi-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
