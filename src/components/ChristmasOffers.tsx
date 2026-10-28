import { ArrowRight, Calendar, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import christmasImage from '@/assets/promo-weihnachten-2026.jpeg.asset.json';
import financingImage from '@/assets/promo-weihnachten-finanzierung-2026.jpeg.asset.json';
import { christmasPromotion, getChristmasPromotionState } from '@/lib/christmasPromotion';

const mediaHost = 'https://gd-227188.lovable.app';

export default function ChristmasOffers({ compact = false, onSelect }: { compact?: boolean; onSelect?: () => void }) {
  const { bundleActive, financingActive } = getChristmasPromotionState();
  if (!bundleActive) return null;
  const imageClass = compact ? 'w-full h-64 object-contain bg-background' : 'w-full h-[30rem] md:h-[36rem] object-contain bg-background';
  return (
    <div className={`grid gap-6 md:gap-8 ${financingActive ? 'md:grid-cols-2' : 'max-w-3xl mx-auto'}`}>
      <article className="bg-background rounded-xl overflow-hidden shadow-soft flex flex-col border border-primary/30">
        {financingActive && <img src={`${mediaHost}${christmasImage.url}`} alt="Weihnachtsangebot: Thermomix TM7 mit zweitem Mixtopf, Styler, Multi-Silikonform und fünf Jahren Garantie für € 1.748" className={imageClass} />}
        <div className="p-5 md:p-8 flex flex-1 flex-col">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3"><Calendar className="w-4 h-4" />Angebot bis 29.11.2026</span>
          <h3 className={`font-serif text-foreground mb-3 ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>Dein Thermomix® Weihnachtsangebot</h3>
          <p className="text-muted-foreground mb-5">Sichere dir den TM7 mit deinem Zubehörpaket und 5 Jahren Garantie.</p>
          <ul className="space-y-2 mb-6">
            {christmasPromotion.contents.map(item => <li key={item} className="flex gap-2 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>)}
          </ul>
          <p className={`font-bold text-primary mb-2 ${compact ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>€ {christmasPromotion.price.toLocaleString('de-DE')},-</p>
          {financingActive && <p className="text-sm text-muted-foreground mb-6">Mit 0 % Finanzierung kombinierbar – nur bis 16.11.2026.</p>}
          <Button asChild size="lg" className="w-full mt-auto"><Link to="/beratung" onClick={onSelect}>Weihnachtsangebot sichern <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
      </article>
      {financingActive && (
        <article className="bg-background rounded-xl overflow-hidden shadow-soft flex flex-col border border-border">
          <img src={`${mediaHost}${financingImage.url}`} alt="Thermomix TM7: 0 Prozent Finanzierung ohne Zinsen und Gebühren, zehn Monate Laufzeit und keine Anzahlung" className={imageClass} />
          <div className="p-5 md:p-8 flex flex-1 flex-col">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-3"><Calendar className="w-4 h-4" />Finanzierung bis 16.11.2026</span>
            <h3 className={`font-serif text-foreground mb-3 ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>0 % Finanzierung</h3>
            <p className="text-muted-foreground mb-5">Dein Thermomix® TM7 – ohne Zinsen und Gebühren.</p>
            <ul className="space-y-2 mb-6">
              {['10 Monate Laufzeit', 'Keine Anzahlung', 'Ohne Zinsen und Gebühren', 'Mit dem Weihnachtsangebot kombinierbar'].map(item => <li key={item} className="flex gap-2 items-start"><Check className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>)}
            </ul>
            <Button asChild size="lg" className="w-full mt-auto"><Link to="/beratung" onClick={onSelect}>Jetzt beraten lassen <ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
        </article>
      )}
    </div>
  );
}