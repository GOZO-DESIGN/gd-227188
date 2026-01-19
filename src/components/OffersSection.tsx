import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import promo images
import promoGarantie from '@/assets/promo-garantie.jpeg';
import promoShowkochen from '@/assets/promo-showkochen.jpeg';
import promoExklusiv from '@/assets/promo-exklusiv.jpeg';

interface Offer {
  id: string;
  image: string;
  alt: string;
}

const offers: Offer[] = [
  {
    id: 'garantie',
    image: promoGarantie,
    alt: 'Thermomix TM7 mit 5 Jahren Garantieverlängerung und Gemüse Styler',
  },
  {
    id: 'showkochen',
    image: promoShowkochen,
    alt: 'Mehr Punkte im Vorwerk Bonus Club für dein Show Kochen',
  },
  {
    id: 'exklusiv',
    image: promoExklusiv,
    alt: 'Exklusives Angebot: Thermomix TM7 inkl. Gemüse Styler',
  },
];

const OffersSection = () => {
  // Dynamically determine grid columns based on number of offers
  const gridCols = offers.length === 2 
    ? 'md:grid-cols-2' 
    : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Aktionen & Angebote
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Derzeitige Angebote
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sichere dir jetzt exklusive Vorteile und Aktionen rund um den Thermomix® TM7.
          </p>
        </div>

        {/* Offers Grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6 md:gap-8 mb-16`}>
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              {/* Promo Image - maintains aspect ratio */}
              <div className="w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Button */}
              <div className="p-4 md:p-6">
                <Link
                  to="/beratung"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                    transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group/btn"
                >
                  Mehr Infos & Angebot anfragen
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Financing Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Finanzierung über die Denzel Bank möglich
              </h3>
              
              <p className="text-muted-foreground mb-2">
                Du möchtest deinen Thermomix® flexibel bezahlen?
              </p>
              <p className="text-muted-foreground mb-6">
                Über die Denzel Bank AG ist eine Finanzierung möglich.
                Ich informiere dich gerne über die aktuellen Konditionen und unterstütze dich bei der Abwicklung.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Flexible Laufzeiten</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Transparente Raten</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Abwicklung direkt über mich</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/beratung"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                Finanzierung & Aktionen anfragen
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-4xl font-bold">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
