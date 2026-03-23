import { ArrowRight, Check, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import promo images
import promo1549 from '@/assets/promo-1549.jpg';
import promo1698 from '@/assets/promo-1698.jpg';
import promoCasserole from '@/assets/promo-casserole.jpg';
import promoBirthday from '@/assets/promo-birthday-tm7.jpg';

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

  const financingBenefits = t('offers.financing.benefits', { returnObjects: true }) as string[];

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

        {/* Birthday Promo Banner */}
        <div className="mb-12 relative">
          <Link to="/beratung" className="block group">
            <div className="bg-gradient-to-r from-secondary/30 to-accent/30 rounded-2xl overflow-hidden shadow-elevated hover:shadow-lg transition-all duration-300 border-2 border-primary/30">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={promoBirthday}
                    alt="Happy Birthday TM7 – Thermomix mit 2. Mixtopf um nur € 1.678,-"
                    className="w-48 md:w-64 h-auto rounded-xl shadow-soft"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-3">
                    <Gift className="w-4 h-4" />
                    🎂 Happy Birthday TM7!
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                    Thermomix TM7 mit 2. Mixtopf
                  </h3>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    um nur € 1.678,-
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Mit Garantieverlängerung um nur € 1.827,- · Gültig 17.2. – 29.3.2026
                  </p>
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-lg">
                    Jetzt Beratung buchen
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
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

        {/* Berater Promo Teaser */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 shadow-soft mb-16 border border-primary/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                🔥 {t('team.promo.tagline')}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {t('team.promo.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('team.promo.subtitle')}
              </p>
              <Link
                to="/team"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                {t('common.learnMore')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="hidden md:flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-3">
                <span className="font-bold text-primary">1.</span>
                <span className="text-foreground">{t('team.promo.step1.sale')} → <strong>{t('team.promo.step1.price')}</strong></span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-3">
                <span className="font-bold text-primary">2.</span>
                <span className="text-foreground">{t('team.promo.step2.sale')} → <strong>{t('team.promo.step2.price')}</strong></span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 rounded-lg px-4 py-3">
                <span className="font-bold text-primary">3.</span>
                <span className="text-foreground">{t('team.promo.step3.sale')} → <strong>{t('team.promo.step3.price')}</strong></span>
              </div>
              <div className="flex items-center gap-3 bg-primary/20 rounded-lg px-4 py-3">
                <span className="font-bold text-primary">4.</span>
                <span className="text-foreground font-semibold">{t('team.promo.step4.sale')} → {t('team.promo.step4.price')} 🎉</span>
              </div>
            </div>
          </div>
        </div>

        {/* Financing Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="flex-1">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {t('offers.financing.title')}
              </h3>
              
              <p className="text-muted-foreground mb-2">
                {t('offers.financing.text1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('offers.financing.text2')}
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {financingBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/beratung"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                {t('offers.financing.button')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <span className="text-primary font-serif text-5xl font-bold">{t('offers.financing.badge')}</span>
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
