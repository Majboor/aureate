import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-display font-bold text-foreground">
              Creative<span className="text-accent">Agency</span>
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#approach" className="text-body text-muted-foreground hover:text-foreground transition-smooth">
              Our Approach
            </a>
            <a href="#fit" className="text-body text-muted-foreground hover:text-foreground transition-smooth">
              Right Fit?
            </a>
            <a href="#work" className="text-body text-muted-foreground hover:text-foreground transition-smooth">
              Our Work
            </a>
            <Button variant="outline" size="sm">
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-accent transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-premium">
            <div className="p-4 space-y-4">
              <a 
                href="#approach" 
                className="block text-body text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Approach
              </a>
              <a 
                href="#fit" 
                className="block text-body text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Right Fit?
              </a>
              <a 
                href="#work" 
                className="block text-body text-muted-foreground hover:text-foreground transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Work
              </a>
              <Button variant="outline" size="sm" className="w-full">
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;