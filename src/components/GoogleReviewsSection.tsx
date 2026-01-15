import { useEffect } from 'react';

const GoogleReviewsSection = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Kundenbewertungen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Das sagen meine <span className="text-primary">Kunden</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Echte Erfahrungen von zufriedenen Thermomix® Nutzern
          </p>
        </div>
        
        <div className="animate-fade-up delay-200">
          <div 
            className="elfsight-app-5805e92c-a77d-4cbe-bca2-edf6594f96dc" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;