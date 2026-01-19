import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const InstagramSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

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
      <div className="container-narrow" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            {t('instagram.tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            {t('instagram.title')} <span className="text-primary">Instagram</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('instagram.subtitle')}
          </p>
        </div>

        {/* Instagram Feed Embed */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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