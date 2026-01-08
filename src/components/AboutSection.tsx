import { Instagram, ChefHat, Award } from 'lucide-react';

interface AboutSectionProps {
  aboutImage: string;
}

const AboutSection = ({ aboutImage }: AboutSectionProps) => {
  return (
    <section className="section-padding gradient-warm">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 animate-slide-in-left">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Ihre Thermomix Beraterin"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-card animate-scale-in delay-400">
              <div className="text-center">
                <Award className="w-6 h-6 mx-auto mb-1" />
                <p className="font-bold text-lg">Zertifiziert</p>
                <p className="text-xs opacity-90">Thermomix® Beraterin</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              Über mich
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
              Mit Herz und <br />Leidenschaft dabei
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8 animate-fade-up delay-200">
              <p>
                Als zertifizierte Thermomix® Beraterin begleite ich Sie auf Ihrer kulinarischen Reise. 
                Meine Leidenschaft ist es, Menschen für das einfache und kreative Kochen zu begeistern.
              </p>
              <p>
                Ob Familien mit wenig Zeit, gesundheitsbewusste Genießer oder experimentierfreudige 
                Hobbyköche – ich finde die passende Lösung für Ihre Bedürfnisse.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-up delay-300">
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="font-serif text-2xl lg:text-3xl text-primary mb-1">500+</p>
                <p className="text-xs text-muted-foreground">Kunden</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="font-serif text-2xl lg:text-3xl text-primary mb-1">5+</p>
                <p className="text-xs text-muted-foreground">Jahre Erfahrung</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="font-serif text-2xl lg:text-3xl text-primary mb-1">100%</p>
                <p className="text-xs text-muted-foreground">Hingabe</p>
              </div>
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/kochmitthermo21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-card border border-border px-6 py-4 rounded-xl
                transition-all duration-300 hover:border-accent hover:shadow-card hover:-translate-y-1 group animate-fade-up delay-400"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                  @kochmitthermo21
                </p>
                <p className="text-sm text-muted-foreground">Folgen Sie mir auf Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
