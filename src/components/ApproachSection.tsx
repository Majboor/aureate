const ApproachSection = () => {
  const approaches = [
    {
      number: "01",
      title: "bespoke design & art direction",
      description: "we start with your brand's soul, not a template. we design a unique, memorable online experience from the ground up. the result is a website that feels like a high-end boutique, not a digital flea market."
    },
    {
      number: "02", 
      title: "custom asset creation",
      description: "this is where we shine. we don't just ask you for \"assets.\" we create them with you. we direct and produce the high-fidelity photography, cinematic product videos, and custom graphics that make your brand look as premium as it actually is."
    },
    {
      number: "03",
      title: "conversion through storytelling",
      description: "we replace cringe-worthy countdown timers and annoying pop-ups with intelligent design and compelling copy. we build an immersive experience that builds trust and makes customers want to buy."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30" id="approach">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-headline mb-8 text-foreground lowercase">
            our anti-spam, pro-brand approach
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            every decision we make is designed to elevate your brand above the noise of generic e-commerce.
          </p>
        </div>
        
        <div className="grid-minimal lg:grid-cols-1 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 border-b border-border/30 last:border-0"
            >
              <div className="lg:col-span-2">
                <span className="text-6xl lg:text-8xl font-light text-accent">
                  {approach.number}
                </span>
              </div>
              <div className="lg:col-span-10 space-y-4">
                <h3 className="text-xl lg:text-2xl font-display font-medium text-foreground lowercase tracking-wide">
                  {approach.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed max-w-2xl">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;