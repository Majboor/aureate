import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agency.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium web design agency workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="text-display mb-8 animate-fade-in">
          Your Brand is Amazing.
          <br />
          <span className="text-accent">Your Website Makes it Look Cheap.</span>
        </h1>
        
        <p className="text-subheading max-w-4xl mx-auto mb-12 opacity-90 animate-fade-in delay-300">
          The e-commerce landscape is a graveyard of generic templates, spammy pop-ups, and soulless stock photos. 
          Your brand deserves better than looking like everyone else.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-500">
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-lg px-8 py-4 shadow-accent hover-glow">
            Book Your Creative Consultation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 transition-smooth">
            See Our Work
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;