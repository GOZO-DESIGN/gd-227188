import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight, Calendar, Users, Euro, Percent, ChefHat, Gift } from 'lucide-react';

const STORAGE_KEY = 'promoPopup_2mixtopf_showkochen_tm4u_v2_seen';

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

        {/* Aktion 1: TM7 mit 2. Mixtopf + 0% Finanzierung */}
        <div className="bg-gradient-to-br from-primary/15 via-secondary/30 to-accent/20 p-6 pt-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            Aktion gültig bis 31.05.2026
          </div>
          <h2 id="promo-popup-title" className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Thermomix® TM7 mit <span className="text-primary">2. Mixtopf</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            um nur <strong>€&nbsp;1.678,&#8209;</strong> – inkl. 2 Jahre Garantie.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Thermomix® TM7 inkl. 2. Mixtopf</p>
                <p className="text-sm text-muted-foreground">
                  um nur <strong>€&nbsp;1.678,&#8209;</strong> – oder mit Garantieverlängerung um <strong>€&nbsp;1.827,&#8209;</strong>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Percent className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">0 % Finanzierung</p>
                <p className="text-sm text-muted-foreground">
                  10 Monate ohne Zinsen und Gebühren – exklusiv für das TM-Bundle mit 2. Mixtopf.
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="/beratung"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Melde dich für mehr Infos!
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            Aktion und 0 %-Finanzierung gültig bis 31.05.2026, ausschließlich für das TM-Bundle mit 2. Mixtopf. Nicht kombinierbar mit anderen Aktionen.
          </p>
        </div>

        {/* Trennlinie */}
        <div className="px-6">
          <div className="border-t border-border" />
        </div>

        {/* Aktion 2: Showkochen & Genießen */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 pt-6 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            25.05. – 28.06.2026
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Gastfreundschaft <span className="text-primary">lohnt sich jetzt richtig!</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Showkochen & Genießen – wähle zwischen zwei starken Helfern.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Peeler – <span className="text-primary">GRATIS</span></p>
                <p className="text-sm text-muted-foreground">
                  Messerabdeckung mit Peeler – ohne Zuzahlung für dich.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ChefHat className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Gemüsestyler – um nur €&nbsp;99,&#8209;</p>
                <p className="text-sm text-muted-foreground">
                  Inkl. Messerabdeckung – die attraktive Aktion für Genießer.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Live kochen & gemeinsam genießen</p>
                <p className="text-sm text-muted-foreground">
                  Gemeinschaft erleben, leckere Gerichte direkt probieren.
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="/showkochen"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Showkochen anfragen
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            onClick={close}
            className="w-full mt-2 text-sm text-muted-foreground hover:text-foreground transition py-2"
          >
            Vielleicht später
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
