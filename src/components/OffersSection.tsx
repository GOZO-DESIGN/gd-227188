import { ArrowRight, Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

// Import promo images
import promo1549 from '@/assets/promo-1549.jpg';
import promo1698 from '@/assets/promo-1698.jpg';
import promoCasserole from '@/assets/promo-casserole.jpg';
import breadImage from '@/assets/promo-brotmonat-2026.jpeg.asset.json';
import breadVideo from '@/assets/promo-brotmonat-2026.mp4.asset.json';
import financingImage from '@/assets/promo-finanzierung-2026.jpeg.asset.json';

// The CDN asset path is served by the published host; the local Vite preview does not proxy it.
const mediaHost = 'https://gd-227188.lovable.app';

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

  // Aktionszeitraum in Wiener Ortszeit (vor der Zeitumstellung am 25.10.).
  const breadActive = Date.now() >= new Date('2026-09-28T00:00:00+02:00').getTime()
    && Date.now() < new Date('2026-10-26T00:00:00+01:00').getTime();
  const financingActive = Date.now() >= new Date('2026-09-28T00:00:00+02:00').getTime()
    && Date.now() < new Date('2026-10-19T00:00:00+02:00').getTime();

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

        {(breadActive || financingActive) && (
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {breadActive && (
                <article className="bg-background rounded-xl overflow-hidden shadow-soft flex flex-col">
                  <img src={`${mediaHost}${breadImage.url}`} alt="Thermomix® TM7 mit Brotback-Set und Garantieverlängerung" loading="lazy" className="w-full h-80 md:h-96 object-contain bg-background" />
                  <div className="p-5 md:p-6 flex flex-1 flex-col">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3"><Calendar className="w-4 h-4" /> 28.09. – 25.10.2026</span>
                    <h3 className="font-serif text-3xl text-foreground mb-3">Frisch gebacken. Direkt ins Herz.</h3>
                    <p className="text-muted-foreground mb-4">Thermomix® TM7, Brotback-Set und Garantieverlängerung im limitierten Paket.</p>
                    <p className="text-2xl font-bold text-foreground mb-1">€ 1.599,- <span className="text-base font-normal text-muted-foreground line-through">statt € 1.836,-</span></p>
                    <p className="text-sm text-muted-foreground mb-4">Nur solange der Vorrat reicht.</p>
                    <h4 className="font-semibold text-foreground mb-2">Das Brotback-Set enthält:</h4>
                    <ul className="grid gap-2 text-sm text-foreground sm:grid-cols-2 mb-6">
                      {['Brot-Garkörbchen', 'Sauerteig Starter-Glas', '2-in-1-Teigkarte', 'Silikon-Brotschlinge & Teigmesser', 'Sauerteig-Spatel', 'Gusseiserner Brotbacktopf'].map(item => (
                        <li key={item} className="flex items-start gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}</li>
                      ))}
                    </ul>
                    <Button asChild size="lg" className="w-full mt-auto"><Link to="/beratung">Jetzt Beratung sichern <ArrowRight className="w-4 h-4" /></Link></Button>
                    <p className="text-xs text-muted-foreground mt-4">* Aktion gültig vom 28.09. bis 25.10.2026, solange der Vorrat reicht.</p>
                  </div>
                </article>
              )}
              {financingActive && (
                <article className="bg-background rounded-xl overflow-hidden shadow-soft flex flex-col">
                  <img src={`${mediaHost}${financingImage.url}`} alt="0 % Finanzierung auf 10 Monate ab € 1.699,- Warenkorbwert" loading="lazy" className="w-full h-80 md:h-96 object-contain bg-background" />
                  <div className="p-5 md:p-6 flex flex-1 flex-col">
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3"><Calendar className="w-4 h-4" /> 28.09. – 18.10.2026</span>
                    <h3 className="font-serif text-3xl text-foreground mb-3">Zinsen zum Grinsen</h3>
                    <p className="text-muted-foreground mb-4">0 % Finanzierung auf 10 Monate – ab einem Warenkorbwert von € 1.699,-.</p>
                    <p className="text-sm text-muted-foreground mb-6">Das Brotback-Angebot für € 1.599,- allein erreicht den Mindestbetrag nicht.</p>
                    <Button asChild size="lg" className="w-full mt-auto"><Link to="/beratung">Jetzt beraten lassen <ArrowRight className="w-4 h-4" /></Link></Button>
                    <p className="text-xs text-muted-foreground mt-4">* Finanzierung gültig bis 18.10.2026. Details und Konditionen auf Anfrage.</p>
                  </div>
                </article>
              )}
            </div>
            {breadActive && (
              <div className="mt-10 text-center">
                <h4 className="font-serif text-2xl text-foreground mb-4">Brotbacken mit dem Thermomix®</h4>
                <video src={`${mediaHost}${breadVideo.url}`} controls autoPlay loop muted playsInline preload="metadata" className="w-full max-w-3xl mx-auto rounded-2xl" aria-label="Video zum Brotbacken mit Thermomix®" />
                <div className="mt-8 border-t border-border" />
              </div>
            )}
          </div>
        )}

        {/* Offers Grid */}
        <div className={`mt-12 grid grid-cols-1 ${gridCols} gap-6 md:gap-8 mb-16`}>
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

        {/* Zubehör direkt bei Vorwerk – Beraterlink */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border shadow-soft p-6 md:p-8 text-center">
          <span className="inline-block text-primary font-semibold tracking-wide uppercase text-xs mb-3">
            Thermomix® Zubehör
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
            Zubehör direkt bei Vorwerk bestellen
          </h3>
          <p className="text-muted-foreground mb-6">
            Bestelle Original Thermomix® Zubehör bequem online über meinen persönlichen Beraterlink – ich betreue dich weiterhin persönlich.
          </p>
          <a
            href="https://www.vorwerk.com/at/de/c/home/produkt-vorfuehrung/thermomix.html/bernhard.prager-b.ed.#thermomix-zubehoer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group/btn"
          >
            Jetzt Zubehör entdecken
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
