import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Calendar } from 'lucide-react';
import genussImage from '@/assets/promo-genuss-jeder-form.jpg';

const STORAGE_KEY = 'promoPopup_genuss_v1_seen';

// Aktion endet automatisch (Europe/Vienna, CEST = UTC+2)
const PROMO_END = new Date('2026-09-28T00:00:00+02:00').getTime();

const PromoPopup = () => {
  const genussActive = Date.now() < PROMO_END;
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

  if (!open || !genussActive) return null;

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

        {/* Aktion: Genuss in jeder Form – 24.08. – 27.09.2026 */}
        <div className="bg-gradient-to-br from-orange-50 via-primary/5 to-yellow-50 p-6 pt-8 pb-5 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Kundenpromotion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            24.08. – 27.09.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Genuss in jeder Form <span className="text-primary">mit Thermomix®</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">TM7 + Sensor + Varoma® Förmchen</strong> ab nur <strong className="text-primary">€ 1.649,-</strong>!
          </p>
        </div>

        <div className="p-6 pt-5">
          <div className="rounded-xl overflow-hidden mb-5">
            <img
              src={genussImage}
              alt="Genuss in jeder Form – Thermomix® TM7 mit Sensor und Varoma® Förmchen"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-3 mb-5">
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">TM7 + Sensor + Varoma® Förmchen</p>
              <p className="text-xl font-bold text-foreground">
                € 1.649,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.757,-</span>
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Set inkl. Garantieverlängerung</p>
              <p className="text-xl font-bold text-foreground">
                € 1.798,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.906,-</span>
              </p>
            </div>
          </div>

          <div className="bg-primary/10 rounded-xl p-4 border border-primary/30 mb-5">
            <p className="text-sm font-semibold text-foreground text-center">
              0% Finanzierung auf 10 Monate
            </p>
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
            * Aktion gültig vom 24.08. bis 27.09.2026. Ein Set Varoma® Förmchen enthält 6 Förmchen inkl. 6 Deckel. Angaben ohne Gewähr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
