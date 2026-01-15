import { useEffect } from 'react';

const InstagramSection = () => {
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
            Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
            Folgen Sie mir auf <span className="text-primary">Instagram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Entdecken Sie leckere Rezepte, Tipps und Einblicke in meinen Kochalltag 
            mit dem Thermomix®.
          </p>
        </div>

        {/* Instagram Feed Embed */}
        <div className="animate-fade-up delay-300">
          <div 
            className="elfsight-app-b749a080-28a3-43da-8564-92e3bc0beec8" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
