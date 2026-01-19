import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero.webp';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  // Delayed bar progress - starts after 150px scroll, completes at 600px
  const delayedScroll = Math.max(0, scrollY - 150);
  const barProgress = Math.min(delayedScroll / 450, 1);

  return (
    <section className="relative pt-20 md:pt-24 overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image with Parallax */}
        <div className="relative lg:w-1/2 min-h-[35vh] sm:min-h-[40vh] lg:min-h-[calc(100vh-6rem)] overflow-hidden flex-shrink-0">
          {/*
            Unterhalb von "lg" zeigen wir das Bild komplett (object-contain),
            damit es nicht abgeschnitten wird. Parallax nur auf großen Screens.
          */}
          <div className="absolute inset-0 hidden lg:block w-full h-[120%]" style={{ transform: `translateY(-${parallaxOffset}px)` }}>
            <img
              src={heroImage}
              alt="Thermomix Berater in moderner Küche"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 lg:hidden flex items-center justify-center">
            <img
              src={heroImage}
              alt="Thermomix Berater in moderner Küche"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Animated Bar Overlay - White, from right to left */}
          <div 
            className="absolute top-0 right-0 h-full bg-white z-10 transition-all duration-300 ease-out"
            style={{ 
              width: `${barProgress * 100}%`,
              opacity: barProgress > 0 ? 0.95 : 0
            }}
          />
          
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 lg:to-white/60"></div>
        </div>

        {/* Right Side - Content with white background overlapping into image */}
        <div className="relative lg:w-1/2 bg-white lg:-ml-24 z-20 flex items-start lg:items-center">
          <div className="w-full px-6 py-8 lg:py-8 lg:pl-16 lg:pr-12 xl:pl-24 xl:pr-20">
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              Thermomix® Berater
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Endlich wieder entspannt kochen – <br />
              <span className="text-primary">auch wenn im Alltag wenig Zeit bleibt</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mb-4 animate-fade-up delay-200">
              Der Thermomix® TM7 hilft dir, schnell, gesund und abwechslungsreich zu kochen.
            </p>

            <p className="text-lg text-muted-foreground max-w-lg mb-4 animate-fade-up delay-200">
              Ich bin <strong className="text-foreground">Bernhard Prager</strong>, dein persönlicher Thermomix® Berater, und begleite dich vom ersten Kennenlernen bis zum Einzug in deine eigene Küche.
            </p>

            <p className="text-muted-foreground max-w-lg mb-6 animate-fade-up delay-200">
              Schon viele Kundinnen und Kunden durfte ich auf ihrem Weg zum eigenen Thermomix begleiten.
            </p>

            {/* Animated Benefits */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-1">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">Mehr Zeit für dich und deine Familie.</span>
              </div>
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-2">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">Weniger Stress beim Kochen.</span>
              </div>
              <div className="flex items-center gap-3 opacity-0 animate-fade-in-delay-3">
                <span className="text-primary text-xl">✓</span>
                <span className="text-foreground font-medium">Mehr Genuss auf dem Teller.</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Link
                to="/beratung"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                Jetzt beraten lassen
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
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
