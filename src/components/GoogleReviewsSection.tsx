import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const GoogleReviewsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

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
      <div className="container-narrow" ref={ref}>
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            {t('reviews.tagline')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {t('reviews.title')} <span className="text-primary">{t('reviews.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>
        
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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