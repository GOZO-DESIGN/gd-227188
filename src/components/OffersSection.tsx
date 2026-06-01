import { ArrowRight, Sparkles, Calendar, Gift, ChefHat, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import promo images
import promo1549 from '@/assets/promo-1549.jpg';
import promo1698 from '@/assets/promo-1698.jpg';
import promoCasserole from '@/assets/promo-casserole.jpg';
import promoTM7MixtopfAsset from '@/assets/promo-tm7-2mixtopf.webp.asset.json';
import promoShowkochen from '@/assets/promo-showkochen-gastfreundschaft.jpg';

const promoTM7Mixtopf = promoTM7MixtopfAsset.url;

interface Offer {
  id: string;
  image: string;
  alt: string;
  priceKey: string;
}

const offers: Offer[] = [
  {
    id: 'tm7-1549',
    image: promo1549,
    alt: 'Der neue Thermomix® TM7 um nur € 1.549,-',
    priceKey: 'offers.prices.tm7-1549',
  },
  {
    id: 'tm7-1698',
    image: promo1698,
    alt: 'Der neue Thermomix® TM7 inkl. Garantieverlängerung auf 5 Jahre um nur € 1.698,-',
    priceKey: 'offers.prices.tm7-1698',
  },
  {
    id: 'casserole',
    image: promoCasserole,
    alt: 'Casserole und Thermomix® Sensor',
    priceKey: 'offers.prices.casserole',
  },
];

const OffersSection = () => {
  const { t } = useTranslation();
  
  const gridCols = offers.length === 2 
    ? 'md:grid-cols-2' 
    : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
            {t('offers.tagline')}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {t('offers.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('offers.subtitle')}
          </p>
        </div>

        {/* Aktion 1: TM7 mit 2. Mixtopf – gültig bis 31.05.2026 */}
        <div className="mb-8 relative">
          <Link to="/beratung" className="block group">
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/20 rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300 border-2 border-primary/40">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                <div className="w-full md:w-2/5 flex justify-center">
                  <img
                    src={promoTM7Mixtopf}
                    alt="Thermomix TM7 mit 2. Mixtopf um nur € 1.678,-"
                    className="w-full max-w-xs rounded-2xl shadow-soft"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    <Calendar className="w-4 h-4" />
                    Aktion gültig bis 28.06.2026
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    Thermomix® TM7 mit 2. Mixtopf
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Jetzt das TM-Bundle inkl. zweitem Mixtopf um nur <strong>€&nbsp;1.678,&#8209;</strong> sichern – mit <strong>2 Jahren Garantie</strong>.
                  </p>
                  <ul className="space-y-2 mb-4 text-left max-w-md mx-auto md:mx-0">
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        TM7 inkl. 2. Mixtopf um nur <strong>€&nbsp;1.678,&#8209;</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Mit Garantieverlängerung um nur <strong>€&nbsp;1.827,&#8209;</strong>
                      </span>
                    </li>
                  </ul>
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg">
                    Melde dich für mehr Infos!
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Aktion gültig bis 28.06.2026, ausschließlich für das TM-Bundle mit 2. Mixtopf. Nicht kombinierbar mit anderen Aktionen. Angaben ohne Gewähr.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Aktion 2: Showkochen & Genießen – 25.05. – 28.06.2026 */}
        <div className="mb-12 relative">
          <Link to="/showkochen" className="block group">
            <div className="relative bg-gradient-to-br from-secondary/40 via-primary/5 to-accent/20 rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300 border-2 border-primary/40">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                <div className="w-full md:w-2/5 flex justify-center">
                  <img
                    src={promoShowkochen}
                    alt="Gastfreundschaft lohnt sich jetzt richtig! Showkochen & Genießen 25.05. – 28.06.2026"
                    className="w-full max-w-xs rounded-2xl shadow-soft"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    <Calendar className="w-4 h-4" />
                    25.05. – 28.06.2026
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                    Gastfreundschaft lohnt sich jetzt richtig!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Showkochen & Genießen</strong> – erlebe, wie einfach beeindruckende Gerichte mit dem Thermomix® gelingen. Wähle deinen Helfer:
                  </p>
                  <ul className="space-y-2 mb-4 text-left max-w-md mx-auto md:mx-0">
                    <li className="flex items-start gap-2">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        <strong>Peeler GRATIS</strong> – Messerabdeckung mit Peeler, ohne Zuzahlung
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChefHat className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        <strong>Gemüsestyler</strong> inkl. Messerabdeckung um nur <strong>€&nbsp;99,&#8209;</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">
                        Gemeinschaft erleben – Austausch, Spaß und neue Inspirationen
                      </span>
                    </li>
                  </ul>
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg">
                    Melde dich für mehr Infos!
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    Aktion gültig vom 25.05. bis 28.06.2026. Nur während des Aktionszeitraums. Angaben ohne Gewähr.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>


        {/* Offers Grid */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6 md:gap-8 mb-16`}>
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.alt}
                  className="w-full max-h-72 md:max-h-96 object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              
              <div className="p-4 md:p-6 mt-auto">
                <p className="text-xl md:text-2xl font-bold text-foreground mb-4 text-center">
                  {t(offer.priceKey)}
                </p>
                <Link
                  to="/beratung"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                    transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group/btn"
                >
                  {t('offers.moreInfo')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Berater Teaser */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 shadow-soft mb-16 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                🔥 {t('team.promo.tagline')}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
                {t('team.promo.title')}
              </h3>
              <p className="text-muted-foreground mb-2">
                Du bestimmst den Preis – nach 6 Verkäufen gehört der TM7 dir. Bei Start erhältst du einen Leih-Thermomix.
              </p>
              <div className="flex flex-wrap gap-2 my-4 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-card border border-border text-sm text-foreground">1. Verkauf → € 1.349,–</span>
                <span className="px-3 py-1 rounded-full bg-card border border-border text-sm text-foreground">4. Verkauf → € 699,–</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-sm text-foreground font-semibold">6. Verkauf → € 0,– 🎉</span>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                {t('common.learnMore')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
