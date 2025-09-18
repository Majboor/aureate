import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import editorialImage from "@/assets/editorial-work.jpg";

const EditorialSection = () => {
  const { ref, isInView } = useScrollAnimation(0.3);

  return (
    <section className="relative" ref={ref}>
      {/* Full-width Editorial Image with Parallax */}
      <div className="relative h-screen overflow-hidden">
        <div className="parallax-container">
          <img 
            src={editorialImage}
            alt="Creative professional at work"
            className={`w-full h-[110%] object-cover parallax-element transition-transform duration-1000 ${
              isInView ? 'scale-100' : 'scale-105'
            }`}
          />
        </div>
        
        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent transition-all duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-70'
        }`} />
        
        {/* Asymmetrical Text with Reveal Animation */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-md ml-auto mr-0 lg:mr-20">
              <div className={`transform transition-all duration-1000 delay-300 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                  we don't just design websites.
                  <br />
                  <em className="font-medium">we craft digital experiences.</em>
                </h2>
                
                <div className={`transform transition-all duration-800 delay-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className="text-lg text-white/90 leading-relaxed">
                    every pixel, every interaction, every moment is carefully considered to elevate your brand above the noise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Accent Elements */}
        <div className={`absolute top-1/4 left-8 w-1 h-16 bg-white/60 transform transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`} />
      </div>
    </section>
  );
};

export default EditorialSection;