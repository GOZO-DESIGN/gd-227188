import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Calendar } from 'lucide-react';

const STORAGE_KEY = 'promoPopup_salad_v1_seen';

// Aktion endet automatisch (Europe/Vienna, CEST = UTC+2)
const PROMO_END = new Date('2026-08-24T00:00:00+02:00').getTime();

const PromoPopup = () => {
  const saladActive = Date.now() < PROMO_END;
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

  if (!open || !saladActive) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-elevated max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-soft flex items-center justify-center text-foreground transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Aktion: Salad & Sunshine – 27.07. – 23.08.2026 */}
        <div className="bg-gradient-to-br from-yellow-50 via-primary/5 to-orange-50 p-6 pt-8 pb-5 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Kundenpromotion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            27.07. – 23.08.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Salad & Sunshine <span className="text-primary">mit Thermomix®</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Den <strong className="text-foreground">Thermomix® TM7 Gemüse Styler</strong> gibt's jetzt für nur <strong className="text-primary">50 € Aufpreis</strong>!
          </p>
        </div>

        <div className="p-6 pt-5">
          <div className="space-y-3 mb-6">
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">TM7 + Gemüse Styler</p>
              <p className="text-xl font-bold text-foreground">
                € 1.599,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.718,-</span>
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">TM7 + Gemüse Styler + Garantieverlängerung</p>
              <p className="text-xl font-bold text-foreground">
                € 1.748,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.867,-</span>
              </p>
            </div>
          </div>

          <Link
            to="/beratung"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Jetzt Beratung sichern
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            * Aktion gültig vom 27.07. bis 23.08.2026. Angaben ohne Gewähr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
