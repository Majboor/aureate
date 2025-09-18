import portfolioImage from "@/assets/portfolio-hands.jpg";

const PortfolioPreview = () => {
  return (
    <section className="relative py-0">
      {/* Asymmetrical Grid Layout */}
      <div className="grid lg:grid-cols-12 min-h-screen">
        {/* Left Content */}
        <div className="lg:col-span-5 bg-secondary/30 flex items-center p-8 lg:p-16">
          <div className="max-w-md space-y-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">
                selected work
              </span>
              <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-6 leading-tight lowercase">
                we build brands that people can't ignore.
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                from concept to conversion, we create digital experiences that transform browsers into buyers and customers into advocates.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h3 className="font-medium text-foreground mb-1">luxe skincare brand</h3>
                <p className="text-sm text-muted-foreground">400% increase in conversions</p>
              </div>
              
              <div className="border-l-2 border-border pl-4">
                <h3 className="font-medium text-foreground mb-1">sustainable fashion</h3>
                <p className="text-sm text-muted-foreground">built for hailey bieber's favorite brand</p>
              </div>
              
              <div className="border-l-2 border-border pl-4">
                <h3 className="font-medium text-foreground mb-1">wellness startup</h3>
                <p className="text-sm text-muted-foreground">from 0 to 7-figure revenue</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="lg:col-span-7 relative">
          <img 
            src={portfolioImage}
            alt="Hands holding device showing beautiful website design"
            className="w-full h-full object-cover"
          />
          
          {/* Floating Badge */}
          <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-xs font-medium text-foreground uppercase tracking-wide">
              award winning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;