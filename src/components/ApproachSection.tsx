import { Palette, Camera, Sparkles } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bespoke Design & Art Direction",
      description: "We start with your brand's soul, not a template. We design a unique, memorable online experience from the ground up. The result is a website that feels like a high-end boutique, not a digital flea market."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Custom Asset Creation",
      description: "This is where we shine. We don't just ask you for \"assets.\" We create them with you. We direct and produce the high-fidelity photography, cinematic product videos, and custom graphics that make your brand look as premium as it actually is."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Conversion Through Storytelling, Not Gimmicks",
      description: "We replace cringe-worthy countdown timers and annoying pop-ups with intelligent design and compelling copy. We build an immersive experience that builds trust and makes customers want to buy, creating loyal fans, not one-time bargain hunters."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6">
            Our Anti-Spam, Pro-Brand Approach
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Every decision we make is designed to elevate your brand above the noise of generic e-commerce.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover-lift group"
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-smooth">
                {approach.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-foreground">
                {approach.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;