import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import breadImage from '@/assets/promo-brotmonat-2026.jpeg.asset.json';

const mediaHost = 'https://gd-227188.lovable.app';

const STORAGE_KEY = 'promoPopup_brotmonat_2026_seen';

// Die Zeitumstellung in Wien findet am letzten Aktionstag statt.
const PROMO_START = new Date('2026-09-28T00:00:00+02:00').getTime();
const PROMO_END = new Date('2026-10-26T00:00:00+01:00').getTime();

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
        className="relative bg-background rounded-2xl shadow-elevated max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
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

        <div className="bg-secondary/30 p-6 pt-8 pb-5 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            28.09. – 25.10.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Frisch gebacken. Direkt ins Herz.
          </h2>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">Thermomix® TM7 + Brotback-Set + Garantieverlängerung</strong> für <strong className="text-primary">€ 1.599,-</strong> statt € 1.836,-.
          </p>
        </div>

        <div className="p-6 pt-5 text-center">
          <div className="max-w-[240px] mx-auto overflow-hidden mb-4">
            <img
              src={`${mediaHost}${breadImage.url}`}
              alt="Aktionsbild: Thermomix® TM7 mit Brotback-Set und Garantieverlängerung"
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground mb-4">Limitiertes Angebot – nur solange der Vorrat reicht.</p>
          <Button asChild className="w-full"><Link to="/beratung" onClick={close}>Jetzt Beratung sichern <ArrowRight className="w-4 h-4" /></Link></Button>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            * Aktion gültig vom 28.09. bis 25.10.2026, solange der Vorrat reicht.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
