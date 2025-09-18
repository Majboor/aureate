import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display mb-8 text-white">
            Stop Blending In.
            <br />
            <span className="text-accent">Start Standing Out.</span>
          </h2>
          
          <p className="text-subheading mb-12 opacity-90">
            Your brand deserves a digital home as unique and compelling as your products. 
            It's time to stop looking generic and start being iconic.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-premium">
            <h3 className="text-2xl lg:text-3xl font-display font-semibold mb-6 text-white">
              Ready to build a brand people remember and buy from?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4 shadow-accent hover-glow group"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Creative Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <p className="text-sm text-white/80 max-w-xs">
                Free 30-minute strategy call to discuss your vision and explore how we can transform your brand.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-white/70">
                Join 100+ premium e-commerce brands who've elevated their digital presence with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;