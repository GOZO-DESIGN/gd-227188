import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight, Calendar, Users, Gift } from 'lucide-react';

const STORAGE_KEY = 'promoPopup_cocktails_v1_seen';

// Aktionen enden automatisch (Europe/Vienna, CEST = UTC+2)
const PROMO_END = new Date('2026-07-27T00:00:00+02:00').getTime();

const PromoPopup = () => {
  const cocktailsActive = Date.now() < PROMO_END;
  const varomaActive = Date.now() < PROMO_END;
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

        {/* NEUE Aktion: Cocktails & Cakes – 29.06. – 26.07.2026 */}
        {cocktailsActive && (<>
        <div className="bg-gradient-to-br from-orange-100 via-pink-50 to-orange-50 p-6 pt-8 pb-5 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Kundenpromotion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            29.06. – 26.07.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Cocktails & Cakes <span className="text-primary">mit Thermomix®</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Die <strong className="text-foreground">Thermomix® TM7 Multi-Silikonform</strong> gibt's <strong className="text-primary">geschenkt on top</strong>!
          </p>
        </div>

        <div className="p-6 pt-5">
          <div className="space-y-3 mb-6">
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">TM7 + Multi-Silikonform</p>
              <p className="text-xl font-bold text-foreground">
                € 1.549,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.583,-</span>
              </p>
            </div>
            <div className="bg-white border border-primary/20 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">TM7 + Multi-Silikonform + Garantieverlängerung</p>
              <p className="text-xl font-bold text-foreground">
                € 1.698,- <span className="text-sm font-normal text-muted-foreground line-through ml-1">statt € 1.732,-</span>
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
            * Aktion gültig vom 29.06. bis 26.07.2026. Die Multi-Silikonform erhältst du on top geschenkt. Angaben ohne Gewähr.
          </p>
        </div>

        <div className="px-6"><div className="border-t border-border" /></div>
        </>)}

        {/* Aktion: Varoma Förmchen – 29.06. – 26.07.2026 */}
        {varomaActive && (<>
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/30 p-6 pt-8 pb-4 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Aktion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            29.06. – 26.07.2026
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Varoma® Förmchen <span className="text-primary">als Präsent!</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Die neuen Varoma® Förmchen exklusiv als Gastgeberpräsent im Vorwerk Bonus Club – wahlweise in Schwarz oder Weiß.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Gastgeber plus 3 Gäste</p>
                <p className="text-sm text-muted-foreground">
                  Aus unterschiedlichen Haushalten, die den Thermomix® TM7 kennenlernen möchten.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Show Kochen erfolgreich</p>
                <p className="text-sm text-muted-foreground">
                  Im Vorwerk Bonus Club als erfolgreich kennzeichnen.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Varoma® Förmchen Set</p>
                <p className="text-sm text-muted-foreground">
                  Max. 1 Set, wahlweise in Schwarz oder Weiß, als exklusives Präsent.
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="/showkochen"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Jetzt Show Kochen buchen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            * Aktion gültig vom 29.06. bis 26.07.2026. Show Kochen muss im Vorwerk Bonus Club als erfolgreich gekennzeichnet sein. Angaben ohne Gewähr.
          </p>
        </div>

        <div className="px-6"><div className="border-t border-border" /></div>
        </>)}


      </div>
    </div>
  );
};

export default PromoPopup;
