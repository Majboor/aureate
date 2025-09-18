import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-minimal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Full-screen Editorial Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Creative workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      
      {/* Asymmetrical Content Layout */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          {/* Hero Text - Offset Left */}
          <div className="max-w-2xl lg:max-w-3xl">
            <h1 className="text-display text-foreground mb-8 leading-tight animate-fade-in">
              your brand is amazing.
              <br />
              <span className="text-muted-foreground font-light">your website makes it look cheap.</span>
            </h1>
            
            <p className="text-subheading text-muted-foreground max-w-xl mb-12 animate-fade-in leading-relaxed">
              we create elevated digital experiences for e-commerce brands who refuse to look like everyone else.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium transition-gentle"
              >
                book consultation
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-full font-medium transition-gentle"
              >
                view our work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Quote - Bottom Right */}
        <div className="absolute bottom-20 right-8 lg:right-20 max-w-xs animate-fade-in">
          <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
            "desire converts better than discounts"
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Hero;