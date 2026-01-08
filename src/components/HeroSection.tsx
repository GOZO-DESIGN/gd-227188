import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero pt-20">
      <div className="container-narrow w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              Thermomix® Beraterin
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Kochen mit <br />
              <span className="text-primary">Leidenschaft</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
              Entdecken Sie die Welt des einfachen, gesunden und kreativen Kochens 
              mit dem Thermomix®. Persönliche Beratung, die zu Ihnen passt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                Jetzt beraten lassen
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Mehr erfahren
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up delay-400">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Thermomix in einer modernen Küche"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 gradient-overlay opacity-20"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-xl shadow-card animate-fade-up delay-600 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
