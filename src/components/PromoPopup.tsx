import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Gift, Sparkles, ArrowRight, Calendar } from 'lucide-react';

const STORAGE_KEY = 'promoPopup_traum_bundle_seen';

const PromoPopup = () => {
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-popup-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-elevated max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-soft flex items-center justify-center text-foreground transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-primary/15 via-secondary/30 to-accent/20 p-6 pt-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            Gültig bis 24.05.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            <span className="text-primary">Mix dir dein Traum Bundle</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Thermomix® TM7 plus €&nbsp;150,&#8209; Online Shop Gutschein geschenkt.*
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Thermomix® TM7</p>
                <p className="text-sm text-muted-foreground">
                  um nur <strong>€&nbsp;1.549,&#8209;</strong>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">€&nbsp;150,&#8209; Online Shop Gutschein</p>
                <p className="text-sm text-muted-foreground">
                  für Zubehör deiner Wahl – (D)ein Gutschein, viele Möglichkeiten
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="/beratung"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Jetzt Termin sichern
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={close}
            className="w-full mt-2 text-sm text-muted-foreground hover:text-foreground transition py-2"
          >
            Vielleicht später
          </button>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            *Bei Buchung eines Welcome Services binnen 3 Monaten. Aktion gültig bis 24.05.2026. Nicht kombinierbar mit anderen Aktionen. Nur über Direktvertrieb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
