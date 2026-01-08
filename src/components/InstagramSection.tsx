import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramSectionProps {
  images: string[];
}

const InstagramSection = ({ images }: InstagramSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
            Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
            Folgen Sie mir auf Instagram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Entdecken Sie leckere Rezepte, Tipps und Einblicke in meinen Kochalltag 
            mit dem Thermomix®.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/kochmitthermo21"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square rounded-xl overflow-hidden shadow-soft hover-lift animate-scale-in`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <img
                src={image}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center animate-fade-up delay-500">
          <a
            href="https://www.instagram.com/kochmitthermo21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-lg font-medium
              transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 group"
          >
            <Instagram className="w-5 h-5" />
            @kochmitthermo21 auf Instagram folgen
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
