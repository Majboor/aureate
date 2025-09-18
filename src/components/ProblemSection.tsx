const ProblemSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline mb-8">
            We're here to fix that.
          </h2>
          
          <p className="text-body-large mb-12 text-muted-foreground">
            We are not another web development agency. We are a creative partner for e-commerce brands that refuse to look like everyone else.
          </p>
          
          <div className="bg-card p-8 lg:p-12 rounded-2xl shadow-card">
            <p className="text-body-large font-medium text-center leading-relaxed">
              We believe <span className="text-accent font-semibold">desire converts better than discounts</span>. 
              We build brand-first digital flagships that captivate customers, tell a compelling story, 
              and sell your products through superior creative direction, not aggressive sales tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;