import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import editorialImage from "@/assets/editorial-work.jpg";

const EditorialSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);
  const offsetY = useParallax();

  return (
    <section className="relative" ref={ref}>
      {/* Full-width Editorial Image with Enhanced Parallax */}
      <div className="relative h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        <div className="parallax-container">
          <img 
            src={editorialImage}
            alt="Creative professional at work"
            className={`image-fullscreen parallax-element hover-scale-gentle transition-all duration-1000 ${
              isInView ? 'scale-100' : 'scale-105'
            }`}
            style={{ 
              transform: `translateY(${offsetY * 0.5}px) scale(${isInView ? 1 : 1.05})`,
              transition: isInView ? 'transform 1s ease-out' : 'none'
            }}
          />
        </div>
        
        {/* Dynamic Overlay with Mobile Optimization */}
        <div className={`absolute inset-0 bg-gradient-to-r from-black/50 sm:from-black/40 via-black/30 sm:via-black/20 to-transparent transition-all duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-80'
        }`} />
        
        {/* Asymmetrical Text with Enhanced Mobile Layout */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-md sm:max-w-lg ml-0 sm:ml-auto mr-0 sm:mr-0 lg:mr-20">
              <div className={`transform transition-all duration-1000 delay-300 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6 sm:translate-x-12'
              }`}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 sm:mb-6 leading-tight">
                  we don't just design websites.
                  <br />
                  <em className="font-medium">we craft digital experiences.</em>
                </h2>
                
                <div className={`transform transition-all duration-800 delay-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    every pixel, every interaction, every moment is carefully considered to elevate your brand above the noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Accent Elements - Responsive */}
        <div className={`absolute top-1/4 left-4 sm:left-8 w-0.5 sm:w-1 h-8 sm:h-12 lg:h-16 bg-white/60 transform transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`} />
      </div>
    </section>
  );
};

export default EditorialSection;