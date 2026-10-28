import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChristmasOffers from '@/components/ChristmasOffers';
import { getChristmasPromotionState } from '@/lib/christmasPromotion';

const STORAGE_KEY = 'promoPopup_weihnachten_2026_seen';

const PromoPopup = () => {
  const { bundleActive } = getChristmasPromotionState();
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

  if (!open || !bundleActive) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div
        className="relative bg-background rounded-xl shadow-elevated max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
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
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground">Deine Weihnachtsangebote</h2>
        </div>
        <div className="p-4 md:p-6">
          <ChristmasOffers compact onSelect={close} />
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
