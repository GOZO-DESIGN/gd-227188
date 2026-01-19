import { ChefHat, Award } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface AboutSectionProps {
  aboutImage: string;
}

const AboutSection = ({ aboutImage }: AboutSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding gradient-warm">
      <div className="container-narrow" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Ihr Thermomix Berater"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className={`absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-card transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="text-center">
                <Award className="w-6 h-6 mx-auto mb-1" />
                <p className="font-bold text-lg">Zertifiziert</p>
                <p className="text-xs opacity-90">Thermomix® Berater</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              Über mich
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Mit Herz und <br />Leidenschaft dabei
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hallo, ich bin Bernhard – Lehrer, Familienvater von drei Kindern und Thermomix®-Berater aus Wien.
              </p>
              <p>
                Zum Thermomix® bin ich gekommen, als ich mit meinem ersten Sohn in Karenz war. Ich wollte für meine Familie gesund kochen, hatte aber im Alltag oft wenig Zeit und Energie. Der Thermomix® hat mich dabei enorm entlastet – weniger Stress, mehr Zeit für die Familie und trotzdem gutes, frisches Essen.
              </p>
              <p>
                Mit der Zeit habe ich gemerkt, wie sehr man sich mit dem Thermomix® auch weiterentwickeln kann: neue Rezepte, mehr Abwechslung und wieder mehr Freude am Kochen. Genau diese Erfahrung möchte ich weitergeben und begleite dich persönlich dabei, den Thermomix® in deinen Alltag zu integrieren und Schritt für Schritt sicherer damit zu werden.
              </p>
              <p>
                Mir ist wichtig, dass Kochen dich nicht belastet, sondern dir den Alltag erleichtert und wieder Freude macht.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '500+', label: 'Kunden' },
                { value: '5+', label: 'Jahre Erfahrung' },
                { value: '100%', label: 'Hingabe' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center p-4 bg-card rounded-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: isVisible ? `${400 + index * 100}ms` : '0ms' }}
                >
                  <p className="font-serif text-2xl lg:text-3xl text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
