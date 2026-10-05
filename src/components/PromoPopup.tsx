import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import breadImage from '@/assets/promo-brotmonat-2026.jpeg.asset.json';
import financingImage from '@/assets/promo-finanzierung-2026.jpeg.asset.json';

const mediaHost = 'https://gd-227188.lovable.app';

const STORAGE_KEY = 'promoPopup_brotmonat_2026_seen';

// Die Zeitumstellung in Wien findet am letzten Aktionstag statt.
const PROMO_START = new Date('2026-09-28T00:00:00+02:00').getTime();
const PROMO_END = new Date('2026-10-26T00:00:00+01:00').getTime();
const FINANCING_END = new Date('2026-10-19T00:00:00+02:00').getTime();

const PromoPopup = () => {
  const breadActive = Date.now() >= PROMO_START && Date.now() < PROMO_END;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setOpen(false);
  };

  if (!open || !breadActive) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div
        className="relative bg-background rounded-xl shadow-elevated max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={close}
          aria-label="Schließen"
          className="absolute top-3 right-3 z-10 bg-background/90 text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="p-5 pr-14 md:p-6 text-center border-b border-border">
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground">Aktuelle Angebote</h2>
        </div>
        <div className={`grid gap-4 p-4 md:p-6 ${Date.now() < FINANCING_END ? 'md:grid-cols-2' : 'max-w-md mx-auto'}`}>
          <article className="bg-background rounded-lg overflow-hidden shadow-soft flex flex-col">
            <img src={`${mediaHost}${breadImage.url}`} alt="Thermomix® TM7 mit Brotback-Set und Garantieverlängerung" className="w-full h-48 md:h-56 object-contain bg-background" />
            <div className="p-4 flex flex-1 flex-col">
              <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold mb-2"><Calendar className="w-4 h-4" />28.09. – 25.10.2026</span>
              <h3 className="font-serif text-2xl text-foreground mb-2">Frisch gebacken. Direkt ins Herz.</h3>
              <p className="text-sm text-muted-foreground mb-3">Zum Brotmonat Oktober: TM7 mit Brotback-Set und Garantieverlängerung. Das Set enthält Garkörbchen, Sauerteig Starter-Glas, 2-in-1-Teigkarte, Silikon-Brotschlinge und Teigmesser, Sauerteig-Spatel und einen gusseisernen Brotbacktopf.</p>
              <p className="text-xl font-bold text-foreground mb-1">€ 1.599,- <span className="text-sm font-normal text-muted-foreground line-through">statt € 1.836,-</span></p>
              <p className="text-xs text-muted-foreground mb-4">Nur in limitierter Stückzahl – solange der Vorrat reicht.</p>
              <Button asChild className="w-full mt-auto"><Link to="/beratung" onClick={close}>Jetzt Beratung sichern <ArrowRight className="w-4 h-4" /></Link></Button>
            </div>
          </article>
          {Date.now() < FINANCING_END && (
            <article className="bg-background rounded-lg overflow-hidden shadow-soft flex flex-col">
              <img src={`${mediaHost}${financingImage.url}`} alt="0 % Finanzierung auf 10 Monate" className="w-full h-48 md:h-56 object-contain bg-background" />
              <div className="p-4 flex flex-1 flex-col">
                <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold mb-2"><Calendar className="w-4 h-4" />28.09. – 18.10.2026</span>
                <h3 className="font-serif text-2xl text-foreground mb-2">Zinsen zum Grinsen</h3>
                <p className="text-sm text-muted-foreground mb-3">0 % Finanzierung auf 10 Monate ab € 1.699,- Warenkorbwert.</p>
                <p className="text-xs text-muted-foreground mb-4">Mit dem Brotback-Paket kombinierbar, wenn du weitere Produkte ergänzt: Das Paket für € 1.599,- allein erreicht den Mindestbetrag nicht.</p>
                <Button asChild className="w-full mt-auto"><Link to="/beratung" onClick={close}>Jetzt beraten lassen <ArrowRight className="w-4 h-4" /></Link></Button>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
