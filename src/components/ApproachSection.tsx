const ApproachSection = () => {
  const approaches = [
    {
      number: "01",
      title: "bespoke design & art direction",
      description: "we start with your brand's soul, not a template. we design a unique, memorable online experience from the ground up."
    },
    {
      number: "02", 
      title: "custom asset creation",
      description: "we don't just ask you for \"assets.\" we create them with you. high-fidelity photography, cinematic product videos, custom graphics."
    },
    {
      number: "03",
      title: "conversion through storytelling",
      description: "we replace cringe-worthy countdown timers with intelligent design and compelling copy that builds trust."
    }
  ];

  return (
    <section className="section-padding" id="approach">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left - Sticky Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground lowercase mb-6 leading-tight">
              our anti-spam,
              <br />
              <em className="font-medium">pro-brand approach</em>
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              every decision we make is designed to elevate your brand above the noise of generic e-commerce.
            </p>
          </div>
          
          {/* Right - Scrolling Content */}
          <div className="lg:col-span-8 space-y-20">
            {approaches.map((approach, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-8">
                  <span className="text-4xl lg:text-6xl font-light text-accent group-hover:text-foreground transition-gentle">
                    {approach.number}
                  </span>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl lg:text-2xl font-medium text-foreground lowercase mb-4 tracking-wide">
                      {approach.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed max-w-lg">
                      {approach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;