import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import portfolioImage from "@/assets/portfolio-hands.jpg";

const PortfolioPreview = () => {
  const { ref, isInView } = useScrollAnimation(0.2);

  const projects = [
    {
      title: "luxe skincare brand",
      result: "400% increase in conversions",
      description: "transformed a generic template into a premium digital experience"
    },
    {
      title: "sustainable fashion",
      result: "built for hailey bieber's favorite brand",
      description: "elevated storytelling through immersive visual design"
    },
    {
      title: "wellness startup",
      result: "from 0 to 7-figure revenue",
      description: "created authentic brand connection that drives loyalty"
    }
  ];

  return (
    <section className="relative py-0" ref={ref}>
      {/* Asymmetrical Grid Layout */}
      <div className="grid lg:grid-cols-12 min-h-screen">
        {/* Left Content with Staggered Animation */}
        <div className="lg:col-span-5 bg-secondary/30 flex items-center p-8 lg:p-16">
          <div className="max-w-md space-y-8">
            <div className={`transform transition-all duration-800 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
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
            
            <div className={`space-y-6 stagger-children ${isInView ? 'in-view' : ''}`}>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group border-l-2 border-border hover:border-accent pl-6 py-3 transition-all duration-300 hover:bg-white/50 rounded-r-lg hover:shadow-soft cursor-pointer"
                >
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-1">
                    {project.result}
                  </p>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Image with Hover Effects */}
        <div className="lg:col-span-7 relative group overflow-hidden">
          <img 
            src={portfolioImage}
            alt="Hands holding device showing beautiful website design"
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Floating Badge with Animation */}
          <div className={`absolute top-8 right-8 transform transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 rotate-3'
          }`}>
            <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <span className="text-xs font-medium text-foreground uppercase tracking-wide">
                award winning
              </span>
            </div>
          </div>
          
          {/* Interactive Preview */}
          <div className="absolute bottom-8 left-8 right-8 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-soft">
              <p className="text-sm font-medium text-foreground mb-1">Premium E-commerce Design</p>
              <p className="text-xs text-muted-foreground">Scroll to explore more work →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;