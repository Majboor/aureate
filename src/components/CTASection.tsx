import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-display text-foreground lowercase">
            stop blending in.
            <br />
            <span className="text-muted-foreground">start standing out.</span>
          </h2>
          
          <p className="text-subheading text-muted-foreground">
            your brand deserves a digital home as unique and compelling as your products. 
            it's time to stop looking generic and start being iconic.
          </p>
          
          <div className="space-y-8">
            <h3 className="text-xl font-display font-medium text-foreground lowercase tracking-wide">
              ready to build a brand people remember and buy from?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium transition-gentle"
              >
                book your creative consultation
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground px-8 py-4 rounded-full font-medium transition-gentle"
              >
                view case studies
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                free 30-minute strategy call to discuss your vision and explore how we can transform your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;