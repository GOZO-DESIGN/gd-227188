import { ArrowRight, Sparkles, Calendar, Gift, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import promo images
import promo1549 from '@/assets/promo-1549.jpg';
import promo1698 from '@/assets/promo-1698.jpg';
import promoCasserole from '@/assets/promo-casserole.jpg';
import promoTM7Mixtopf from '@/assets/promo-tm7-2mixtopf.webp';
import varomaImage from '@/assets/promo-varoma-foermchen.jpg';

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

  // Varoma Förmchen Aktion läuft automatisch ab am Montag, 27.07.2026 um 00:00 Uhr (Europe/Vienna, CEST = UTC+2)
  const varomaActive = Date.now() < new Date('2026-07-27T00:00:00+02:00').getTime();

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

        {/* NEUE Aktion: Varoma Förmchen – 29.06. – 26.07.2026 */}
        {varomaActive && (
        <div className="mb-8 relative">
          <Link to="/showkochen" className="block group">
            <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-accent/30 rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300 border-2 border-primary">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wide uppercase z-10">
                Neue Aktion
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10">
                <div className="w-full md:w-2/5 flex justify-center">
                  <img
                    src={varomaImage}
                    alt="Varoma Förmchen – Exklusives Gastgeberpräsent im Vorwerk Bonus Club"
                    loading="lazy"
                    className="w-full max-w-xs rounded-2xl shadow-soft"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                    <Calendar className="w-4 h-4" />
                    Promotionzeitraum: 29.06. – 26.07.2026
                  </div>
                  <span className="block text-primary font-semibold tracking-wide uppercase text-sm mb-2">
                    Gastgeberpräsent – Varoma Förmchen
                  </span>
                  <h3 className="font-serif text-2xl md:text-4xl text-foreground mb-3">
                    Die neuen Varoma® Förmchen als exklusives Präsent! 🎁
                  </h3>
                  <p className="text-lg text-foreground mb-2">
                    <strong>Good news! Erstmalig im Vorwerk Bonus Club.</strong>
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Für jedes erfolgreiche Show Kochen bekommst du bereits <strong className="text-primary">200 Punkte</strong> im Vorwerk Bonus Club. Im Promotionzeitraum erhältst du zusätzlich max. <strong className="text-primary">1 Varoma® Förmchen Set</strong>, wahlweise in Schwarz oder Weiß.
                  </p>

                  <div className="bg-white/70 rounded-xl p-5 md:p-6 mb-6 border border-primary/20 text-left">
                    <p className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-primary" />
                      So funktioniert's:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          Gastgeberin bzw. Gastgeber plus <strong>drei Gäste</strong> aus unterschiedlichen Haushalten
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          Show Kochen im Vorwerk Bonus Club als <strong>„erfolgreich"</strong> kennzeichnen
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          Max. <strong className="text-primary">1 Varoma® Förmchen Set</strong> (schwarz oder weiß) als Präsent sichern
                        </span>
                      </li>
                    </ul>
                  </div>

                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg">
                    Jetzt Show Kochen buchen
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    * Aktion gültig vom 29.06. bis 26.07.2026. Das Show Kochen muss im Vorwerk Bonus Club als erfolgreich gekennzeichnet sein. Erforderlich sind eine Gastgeberin/ein Gastgeber sowie drei Gäste aus unterschiedlichen Haushalten, die den Thermomix® TM7 gerne kennenlernen möchten. Angaben ohne Gewähr.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        )}

        {/* Aktion 1: TM7 mit 2. Mixtopf – gültig bis 28.06.2026 */}
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

      </div>
    </section>
  );
};

export default OffersSection;
