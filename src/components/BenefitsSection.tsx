import { useState, useEffect } from 'react';
import { Clock, Users, Heart, Sparkles, ChefHat, Check, Baby, Utensils, Apple, Calendar, ShoppingCart, Flame, Blend, HandMetal, Thermometer, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Images
import heroThermomix from '@/assets/thermomix-hero.jpg';
import familie1 from '@/assets/familie-1.jpg';
import familie2 from '@/assets/familie-2.jpg';
import gesund1 from '@/assets/gesund-1.jpg';
import gesund2 from '@/assets/gesund-2.jpg';
import cookidoo1 from '@/assets/cookidoo-1.jpg';
import cookidoo2 from '@/assets/cookidoo-2.jpg';
import cookidoo3 from '@/assets/cookidoo-3.jpg';
import aboutPortrait from '@/assets/about-portrait.jpg';
import thermomixVideo from '@/assets/thermomix-video.mp4';

// Modi Images
import modi1 from '@/assets/modi-1.png';
import modi2 from '@/assets/modi-2.png';
import modi3 from '@/assets/modi-3.png';
import modi4 from '@/assets/modi-4.png';
import modi5 from '@/assets/modi-5.png';
import modi6 from '@/assets/modi-6.png';

const CookidooSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cookidoo1, cookidoo2, cookidoo3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Cookidoo App ${index + 1}`}
            className={`w-full transition-all duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: timeRef, isVisible: timeVisible } = useScrollAnimation();
  const { ref: familyRef, isVisible: familyVisible } = useScrollAnimation();
  const { ref: healthRef, isVisible: healthVisible } = useScrollAnimation();
  const { ref: cookidooRef, isVisible: cookidooVisible } = useScrollAnimation();
  const { ref: functionsRef, isVisible: functionsVisible } = useScrollAnimation();
  const { ref: profiRef, isVisible: profiVisible } = useScrollAnimation();
  const { ref: supportRef, isVisible: supportVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section id="vorteile" className="bg-background">
      {/* INTRO */}
      <div className="section-padding" ref={introRef}>
        <div className={`container-narrow transition-all duration-700 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              Dein Küchenhelfer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Warum der Thermomix® dein Leben leichter macht
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ein Gerät, das mitdenkt, Zeit spart und Kochen wieder entspannt macht.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="order-2 lg:order-1">
              <p className="text-muted-foreground text-lg mb-6">
                Der Alltag ist oft hektisch – trotzdem wollen wir gut und frisch essen.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Der Thermomix® TM7 hilft dir dabei, schnell, gesund und abwechslungsreich zu kochen, 
                  ohne stundenlang in der Küche zu stehen.
                </p>
                <p>
                  Er vereint viele Küchengeräte in einem und führt dich Schritt für Schritt durch jedes 
                  Rezept – ideal für Anfänger und erfahrene Köche.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { number: '20+', label: 'Funktionen in einem Gerät' },
                  { number: '100.000+', label: 'Rezepte auf Cookidoo®' },
                ].map((item) => (
                  <div key={item.label} className="bg-secondary/50 rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif text-primary font-bold">{item.number}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <img
                  src={heroThermomix}
                  alt="Thermomix TM7"
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MEHR ZEIT IM ALLTAG */}
      <div className="section-padding bg-secondary/30" ref={timeRef}>
        <div className={`container-narrow transition-all duration-700 ${timeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Zeitersparnis</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                Mehr Zeit im Alltag
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                Weniger Aufwand – mehr Zeit für dich
              </p>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Der Thermomix® übernimmt viele Arbeitsschritte gleichzeitig.
                </p>
                <p>
                  Während das Essen kocht, kannst du dich um anderes kümmern.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-medium text-foreground mb-3">Ideal für:</p>
                <div className="flex flex-col gap-2">
                  {['Familien', 'Berufstätige', 'Alle mit wenig Zeit'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full text-sm w-fit">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <video
                src={thermomixVideo}
                autoPlay
                loop
                muted
                playsInline
                className="relative rounded-3xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PERFEKT FÜR FAMILIEN */}
      <div className="section-padding" ref={familyRef}>
        <div className={`container-narrow transition-all duration-700 ${familyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={familie1}
                  alt="Kind am Thermomix"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <img
                  src={familie2}
                  alt="Familie zusammen"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Familien</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                Perfekt für Familien
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                Weniger Stress, mehr gemeinsame Zeit
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>
                  Der Thermomix® kocht, während du dich um deine Kinder kümmern kannst.
                </p>
                <p>
                  Viele Gerichte sind schnell vorbereitet und gelingen fast nebenbei.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-medium text-foreground mb-3">Besonders praktisch für Familien:</p>
                <ul className="space-y-2 text-muted-foreground">
                  {[
                    'Babynahrung und Breie selbst machen',
                    'Kinderfreundliche Gerichte schnell zubereiten',
                    'Snacks und Jause ohne Zusatzstoffe',
                    'Gemeinsames Kochen macht sogar Spaß'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-foreground font-medium italic">
                So bleibt mehr Zeit für das, was wirklich zählt: gemeinsam essen, lachen und Zeit verbringen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GESUND KOCHEN */}
      <div className="section-padding bg-secondary/30" ref={healthRef}>
        <div className={`container-narrow transition-all duration-700 ${healthVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Gesundheit</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                Gesund kochen wird einfach
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                Frisch, ohne Fertigprodukte
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>
                  Du kochst mit frischen Zutaten und bestimmst selbst, was in dein Essen kommt.
                </p>
                <p>
                  Von schnellen Gerichten bis zu gesunden Snacks für Kinder! Alles gelingt unkompliziert.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">Du bestimmst:</p>
                <div className="flex flex-col gap-2">
                  {['Zutaten', 'Portionsgrößen', 'Ernährungsform'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full text-sm w-fit">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={gesund1}
                alt="Gesundes Kochen mit Thermomix"
                className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <img
                src={gesund2}
                alt="Frische Zutaten"
                className="rounded-2xl shadow-xl w-full h-72 object-cover mt-8 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* COOKIDOO */}
      <div className="section-padding" ref={cookidooRef}>
        <div className={`container-narrow transition-all duration-700 ${cookidooVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <CookidooSlideshow />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">Rezepte</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                Tausende Rezepte mit Anleitung
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                Kochen mit Cookidoo®
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>
                  Rezepte direkt am Display, Schritt für Schritt geführt.
                </p>
                <p>
                  Der Thermomix® stellt Zeit und Temperatur automatisch ein.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">Vorteile:</p>
                <ul className="space-y-2 text-muted-foreground">
                  {['Gelinggarantie', 'Wochenplanung', 'Einkaufslisten'].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EIN GERÄT MIT VIELEN FUNKTIONEN */}
      <div className="section-padding bg-secondary/30" ref={functionsRef}>
        <div className={`container-narrow transition-all duration-700 ${functionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              Vielseitigkeit
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
              Ein Gerät mit vielen Funktionen
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Der Thermomix® ersetzt viele Geräte:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {[modi1, modi2, modi3, modi4, modi5, modi6].map((img, index) => (
              <div 
                key={index} 
                className="bg-card rounded-2xl shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`Thermomix Modus ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground font-medium">
            Weniger Geräte, weniger Abwasch, mehr Platz.
          </p>
        </div>
      </div>

      {/* FÜR ANFÄNGER & KOCHPROFIS */}
      <div className="section-padding" ref={profiRef}>
        <div className={`container-narrow transition-all duration-700 ${profiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Für Anfänger & Kochprofis
            </h3>
            <p className="text-xl text-primary font-medium mb-6">
              Einfach starten – kreativ werden – und Neues entdecken
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Du kannst dich führen lassen oder eigene Ideen umsetzen.
            </p>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft max-w-xl mx-auto">
              <p className="text-lg text-foreground italic mb-4">
                „Ich koche jetzt öfter und viel entspannter."
              </p>
              <p className="text-muted-foreground text-sm">
                – Viele Kundinnen und Kunden sagen das
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MIT MIR AN DEINER SEITE */}
      <div className="section-padding bg-secondary/30" ref={supportRef}>
        <div className={`container-narrow transition-all duration-700 ${supportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                Mit mir an deiner Seite
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                Persönliche Begleitung
              </h3>
              <p className="text-muted-foreground mb-6">
                Bei mir bekommst du nicht nur ein Gerät, sondern auch Unterstützung:
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {[
                  'Beratung vor dem Kauf',
                  'Einschulung beim Start',
                  'Tipps & Rezepte für den Alltag'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-medium">
                Ich bin auch nach dem Kauf für dich da.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img
                src={aboutPortrait}
                alt="Bernhard Prager - Thermomix Berater"
                className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-padding" ref={ctaRef}>
        <div className={`container-narrow transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              Willst du den Thermomix® TM7 genauer kennenlernen?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Erfahre mehr über Funktionen, Technik und Vorteile des TM7 – 
              oder melde dich direkt bei mir für ein persönliches Kennenlernen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/tm7">Zum Thermomix® TM7</Link>
              </Button>
              <Button asChild size="lg" className="text-base">
                <Link to="/beratung">Persönliche Beratung anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
