import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '@/assets/hero.webp';

const HeroSection = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const delayedScroll = Math.max(0, scrollY - 150);
  const barProgress = Math.min(delayedScroll / 450, 1);

  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image with Parallax */}
        <div className="relative md:w-1/2 md:min-h-[calc(100vh-6rem)] overflow-hidden flex-shrink-0">
          {/* Mobile */}
          <div className="md:hidden w-full">
            <img
              src={heroImage}
              alt="Bernhard Prager – Thermomix® Berater in Wien kocht mit dem TM7"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop: Parallax */}
          <div 
            className="absolute inset-0 hidden md:block w-full h-[120%]"
            style={{ transform: `translateY(-${parallaxOffset}px)` }}
          >
            <img
              src={heroImage}
              alt="Thermomix Berater in moderner Küche"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Animated Bar Overlay */}
          <div 
            className="absolute top-0 right-0 h-full bg-white z-10 transition-all duration-300 ease-out hidden md:block"
            style={{ 
              width: `${barProgress * 100}%`,
              opacity: barProgress > 0 ? 0.95 : 0
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 md:to-white/60 hidden md:block"></div>
        </div>

        {/* Right Side - Content */}
        <div className="relative md:w-1/2 bg-white md:-ml-24 z-20 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:py-8 md:pl-16 md:pr-12 xl:pl-24 xl:pr-20">
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              {t('hero.tagline')}
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-foreground leading-tight mb-6 animate-fade-up delay-100">
              {t('hero.title')} <br />
              <span className="text-primary">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-4 animate-fade-up delay-200">
              {t('hero.subtitle')}
            </p>

            <p 
              className="text-lg text-muted-foreground max-w-lg mb-4 animate-fade-up delay-200"
              dangerouslySetInnerHTML={{ __html: t('hero.intro') }}
            />

            <p className="text-muted-foreground max-w-lg mb-6 animate-fade-up delay-200">
              {t('hero.customers')}
            </p>

            {/* Animated Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-1">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">{t('hero.benefits.time')}</span>
              </div>
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">{t('hero.benefits.stress')}</span>
              </div>
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">{t('hero.benefits.taste')}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link
                to="/beratung"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <a
                href="#vorteile"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('vorteile')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
