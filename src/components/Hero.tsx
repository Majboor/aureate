import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-minimal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Minimal Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-display text-foreground animate-fade-in">
            your brand is amazing.
            <br />
            <span className="text-muted-foreground">your website makes it look cheap.</span>
          </h1>
          
          <p className="text-subheading text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            we create elevated digital experiences for e-commerce brands who refuse to look like everyone else.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full font-medium transition-gentle"
            >
              book consultation
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground px-8 py-3 rounded-full font-medium transition-gentle"
            >
              view our work
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-20 max-w-5xl mx-auto">
          <img 
            src={heroImage} 
            alt="Minimal workspace showcasing clean design aesthetic" 
            className="w-full h-auto rounded-2xl shadow-soft"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;