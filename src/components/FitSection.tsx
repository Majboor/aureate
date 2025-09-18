import { CheckCircle, XCircle } from "lucide-react";

const FitSection = () => {
  const rightFit = [
    "You are embarrassed to send people to your current website.",
    "You know your product is 10x better than your competitors, but your site doesn't show it.",
    "You are tired of looking like a dropshipper.",
    "You want to build a lasting, premium brand, not just a quick-turnover store."
  ];
  
  const wrongFit = [
    "You are looking for the cheapest or fastest option.",
    "You believe more pop-ups are the answer.",
    "You are content with a template."
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-headline mb-6">
            Are We The Right Fit?
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            We work with ambitious brands who value quality over quantity and understand that great design is an investment, not an expense.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Right Fit */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
              <h3 className="text-2xl font-display font-semibold text-foreground">
                We Are The Right Fit If:
              </h3>
            </div>
            
            <ul className="space-y-4">
              {rightFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Wrong Fit */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <div className="flex items-center mb-6">
              <XCircle className="w-8 h-8 text-red-500 mr-4" />
              <h3 className="text-2xl font-display font-semibold text-foreground">
                We Are NOT The Right Fit If:
              </h3>
            </div>
            
            <ul className="space-y-4">
              {wrongFit.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;