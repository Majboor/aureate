import editorialImage from "@/assets/editorial-work.jpg";

const EditorialSection = () => {
  return (
    <section className="relative">
      {/* Full-width Editorial Image */}
      <div className="relative h-screen">
        <img 
          src={editorialImage}
          alt="Creative professional at work"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Asymmetrical Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-md ml-auto mr-0 lg:mr-20">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                we don't just design websites.
                <br />
                <em className="font-medium">we craft digital experiences.</em>
              </h2>
              
              <p className="text-lg text-white/80 leading-relaxed">
                every pixel, every interaction, every moment is carefully considered to elevate your brand above the noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;