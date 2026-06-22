import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowRight, Calendar, Users, Euro, ChefHat, Gift, Repeat, Coins, Percent, PiggyBank } from 'lucide-react';

const STORAGE_KEY = 'promoPopup_zinsen_v1_seen';

// Aktionen enden automatisch Mo. 29.06.2026 00:00 (Europe/Vienna, CEST = UTC+2)
const SPIELERWECHSEL_END = new Date('2026-06-29T00:00:00+02:00').getTime();
const ZINSEN_END = new Date('2026-06-29T00:00:00+02:00').getTime();

const PromoPopup = () => {
  const spielerwechselActive = Date.now() < SPIELERWECHSEL_END;
  const zinsenActive = Date.now() < ZINSEN_END;
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

        {/* NEUE Aktion: Zinsen zum Grinsen – 0% Finanzierung 22.06. – 28.06.2026 */}
        {zinsenActive && (<>
        <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-accent/30 p-6 pt-8 pb-4 text-center border-b-2 border-primary">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Aktion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            22.06. – 28.06.2026
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Zinsen zum <span className="text-primary">Grinsen!</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Erstmalig <strong className="text-primary">0% Finanzierung</strong> mit 24 Monaten Laufzeit – ohne Zinsen, ohne Gebühren, ohne Anzahlung.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-2 mb-6">
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><Percent className="w-4 h-4 text-primary" /> Zinsen</span>
              <span className="font-bold text-primary">0%</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><PiggyBank className="w-4 h-4 text-primary" /> Anzahlung</span>
              <span className="font-bold text-primary">0&nbsp;€</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><Calendar className="w-4 h-4 text-primary" /> Laufzeit</span>
              <span className="font-bold text-primary">24 Monate</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-primary/10 border border-primary/30">
              <span className="flex items-center gap-2 text-foreground font-semibold"><Sparkles className="w-4 h-4 text-primary" /> Bundle „Modus: Traumsommer!"</span>
              <span className="font-bold text-primary">ab €&nbsp;1.827,&#8209;</span>
            </li>
          </ul>

          <Link
            to="/beratung"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Jetzt mit 0% finanzieren
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            * Gültig 22.06.–28.06.2026 ab Warenkorbwert €&nbsp;1.827,&#8209;. Vorbehaltlich Bonitätsprüfung.
          </p>
        </div>

        <div className="px-6"><div className="border-t border-border" /></div>
        </>)}

        {/* NEUE Aktion: Spielerwechsel – Eintausch-Aktion (endet automatisch Mo. 29.06.2026 00:00) */}
        {spielerwechselActive && (<>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-3 uppercase tracking-wide">
            Neue Aktion
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            08.06. – 21.06.2026
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Zeit für einen <span className="text-primary">neuen Stürmer!</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Tausche dein Altgerät ein und hol dir den <strong>Thermomix® TM7</strong> im Basispaket – mit bis zu <strong className="text-primary">€&nbsp;450,&#8209; Gutschrift</strong>.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-2 mb-6">
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><Repeat className="w-4 h-4 text-primary" /> TM21 eintauschen</span>
              <span className="font-bold text-primary">€&nbsp;200,&#8209;</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><Repeat className="w-4 h-4 text-primary" /> TM31 eintauschen</span>
              <span className="font-bold text-primary">€&nbsp;200,&#8209;</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-muted/40">
              <span className="flex items-center gap-2 text-foreground"><Repeat className="w-4 h-4 text-primary" /> TM5 eintauschen</span>
              <span className="font-bold text-primary">€&nbsp;350,&#8209;</span>
            </li>
            <li className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-primary/10 border border-primary/30">
              <span className="flex items-center gap-2 text-foreground font-semibold"><Coins className="w-4 h-4 text-primary" /> TM6 eintauschen</span>
              <span className="font-bold text-primary">€&nbsp;450,&#8209;</span>
            </li>
          </ul>

          <Link
            to="/beratung"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Jetzt eintauschen & TM7 sichern
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-muted-foreground mt-3 text-center italic leading-relaxed">
            * Gutschrift auf den Kaufpreis nach Einsendung deines Altgeräts. Gültig 08.06.–21.06.2026 für TM7 im Basispaket.
          </p>
        </div>

        <div className="px-6"><div className="border-t border-border" /></div>
        </>)}

        {/* Aktion 1: TM7 mit 2. Mixtopf + 0% Finanzierung */}
        <div className="bg-gradient-to-br from-primary/15 via-secondary/30 to-accent/20 p-6 pt-8 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            Aktion gültig bis 28.06.2026
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
            Aktion gültig bis 28.06.2026, ausschließlich für das TM-Bundle mit 2. Mixtopf. Nicht kombinierbar mit anderen Aktionen.
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
        </div>

        {/* Trennlinie */}
        <div className="px-6">
          <div className="border-t border-border" />
        </div>

        {/* Aktion 3: TM4U / Team König */}
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 pt-6 pb-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
            <Calendar className="w-4 h-4" />
            Aktion bis 29.06.2026
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Hol dir deinen Thermomix <span className="text-primary">günstiger oder gratis!</span>
          </h3>
          <p className="text-muted-foreground text-sm">
            Werde Teil vom Team König – attraktive Vergütung statt Restzahlung.
          </p>
        </div>

        <div className="p-6 pt-4">
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Attraktive Vergütung</p>
                <p className="text-sm text-muted-foreground">
                  Mit jedem Verkauf wird dein eigener Thermomix günstiger bzw. gratis.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Kostenlose Schulungen</p>
                <p className="text-sm text-muted-foreground">
                  Lerne alles, was du brauchst – persönlich und praxisnah.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Wertschätzung & Unterstützung</p>
                <p className="text-sm text-muted-foreground">
                  Du bist nicht allein – ich begleite dich auf deinem Weg.
                </p>
              </div>
            </li>
          </ul>

          <Link
            to="/team"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-lg group"
          >
            Melde dich für mehr Infos!
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
