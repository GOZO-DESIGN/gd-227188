import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Briefcase, Sparkles, RefreshCw, MessageSquare, Calendar, ChefHat, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Images
import showkochen1 from '@/assets/showkochen-1.jpg';
import showkochen2 from '@/assets/showkochen-2.jpg';
import showkochen3 from '@/assets/showkochen-3.jpg';
import showkochen4 from '@/assets/showkochen-4.jpg';
import showkochen5 from '@/assets/showkochen-5.jpg';
import menuFocaccia from '@/assets/menu-focaccia.jpg';
import menuRisotto from '@/assets/menu-risotto.jpg';
import menuErdbeer from '@/assets/menu-erdbeer.jpg';

const showkochenImages = [showkochen1, showkochen2, showkochen3, showkochen4, showkochen5];

const menuItems = [
  {
    type: 'Vorspeise',
    title: 'Vollwert-Focaccia mit Paradeiser-Feta-Dip',
    img: menuFocaccia,
    link: 'https://cookidoo.de/recipes/recipe/de-DE/r917225',
  },
  {
    type: 'Hauptspeise',
    title: 'Basilikumrisotto',
    img: menuRisotto,
    link: 'https://cookidoo.de/recipes/recipe/de-DE/r917226',
  },
  {
    type: 'Nachspeise',
    title: 'Erdbeertraum',
    img: menuErdbeer,
    link: 'https://cookidoo.de/recipes/recipe/de-DE/r928212',
  },
];

const targetAudience = [
  { icon: Users, title: 'Familien', desc: '… die Zeit sparen wollen' },
  { icon: Briefcase, title: 'Berufstätige', desc: '… die trotzdem frisch kochen möchten' },
  { icon: Sparkles, title: 'Thermomix-Neugierige', desc: '… die vor dem Kauf sicher sein wollen' },
  { icon: RefreshCw, title: 'TM-Umsteiger', desc: '… die bereits einen Thermomix haben aber den TM7 kennenlernen möchten' },
];

const processSteps = [
  {
    step: '1',
    title: 'Anfrage schicken',
    desc: 'Du benutzt mein Kontaktformular oder kontaktierst mich über WhatsApp.',
  },
  {
    step: '2',
    title: 'Termin & Ort',
    desc: 'Wir machen einen Termin aus – bei dir zu Hause oder nach Vereinbarung.',
  },
  {
    step: '3',
    title: 'Live kochen & genießen',
    desc: 'Ich bringe den Thermomix mit, wir kochen gemeinsam mit dir und deinen Freunden, du probierst alles und bekommst praktische Tipps.',
  },
  {
    step: '4',
    title: 'Danach',
    desc: 'Wenn du willst, helfe ich dir beim nächsten Schritt (z.B. Kauf, Finanzierung, Zubehör).',
  },
];

// Image Slideshow Component
const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showkochenImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
      {showkochenImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Showkochen ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {showkochenImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Showkochen = () => {
  const heroAnimation = useScrollAnimation();
  const wasIstAnimation = useScrollAnimation();
  const wichtigAnimation = useScrollAnimation();
  const fuerWenAnimation = useScrollAnimation();
  const ablaufAnimation = useScrollAnimation();
  const menuAnimation = useScrollAnimation();

  const scrollToMenu = () => {
    document.getElementById('showkochmenu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Showkochen | kochmitthermo21</title>
        <meta name="description" content="Erlebe den Thermomix® TM7 live bei einem Showkochen bei dir zu Hause. Unverbindlich, kostenlos und ohne Verpflichtung." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          
          {/* HERO SECTION */}
          <section className="section-padding" ref={heroAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Live-Erlebnis
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                    Erlebe den Thermomix® TM7 live – bei einem <span className="text-primary">Showkochen</span> bei dir zu Hause
                  </h1>
                  <p className="text-muted-foreground text-lg mb-8">
                    In ca. 2-3 Stunden zeige ich dir, wie der TM7 im Alltag wirklich arbeitet: schnelle Schritte, klare Anleitung, geniale Funktionen – und am Ende wird natürlich fein gegessen.
                  </p>
                  
                  {/* Highlight Badge */}
                  <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
                    <div className="flex flex-wrap justify-center gap-4 text-center">
                      <span className="text-primary font-bold uppercase tracking-wide">Unverbindlich</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-primary font-bold uppercase tracking-wide">Kostenlos</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-primary font-bold uppercase tracking-wide">Ohne Verpflichtung</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="group">
                      <Link to="/beratung">
                        Showkochen anfragen
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" onClick={scrollToMenu}>
                      Zum Showkochmenü
                    </Button>
                  </div>
                </div>
                <div>
                  <ImageSlideshow />
                </div>
              </div>
            </div>
          </section>

          {/* WAS IST EIN SHOWKOCHEN */}
          <section className="section-padding bg-secondary/30" ref={wasIstAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${wasIstAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <img
                    src={showkochen2}
                    alt="Thermomix im Einsatz"
                    className="w-full rounded-2xl shadow-elegant"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Das Erlebnis
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    Was ist ein Showkochen?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Showkochen bedeutet: du siehst den TM7 im Einsatz, nicht nur auf Bildern.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Wir kochen gemeinsam ein komplettes Menü. Du bekommst ein Gefühl dafür, wie schnell, sauber und entspannt Kochen mit dem Thermomix sein kann.
                  </p>
                  
                  <p className="font-medium text-foreground mb-4">Das erwartet dich:</p>
                  <ul className="space-y-3">
                    {[
                      'Live-Zubereitung Schritt für Schritt',
                      'Tipps für Alltag, Familie & Meal-Prep',
                      'Verkostung der Gerichte',
                      'Alle Fragen sind willkommen',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* WICHTIG */}
          <section className="section-padding" ref={wichtigAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${wichtigAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/10 rounded-3xl p-8 md:p-12">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Wichtig
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                    Kein Druck, nur Inspiration
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Das Showkochen ist <span className="text-primary font-semibold">unverbindlich</span>. Du musst nichts kaufen, nichts unterschreiben! Du nimmst einfach Ideen, Infos und Eindrücke mit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FÜR WEN IST DAS IDEAL */}
          <section className="section-padding bg-secondary/30" ref={fuerWenAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${fuerWenAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Zielgruppe
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  Für wen ist das ideal?
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {targetAudience.map((item) => (
                  <div
                    key={item.title}
                    className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WIE LÄUFT EIN SHOWKOCHEN AB */}
          <section className="section-padding" ref={ablaufAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${ablaufAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Der Ablauf
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  Wie läuft ein Showkochen ab?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ChevronRight className="w-6 h-6 text-primary/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SHOWKOCHMENÜ */}
          <section id="showkochmenu" className="section-padding bg-secondary/30" ref={menuAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${menuAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-6">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Das Menü
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  Showkochmenü
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Es handelt sich hierbei um ein Standardmenü. Gerne stelle ich mit dir auch ein individuelles Menü zusammen.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {menuItems.map((item) => (
                  <div
                    key={item.title}
                    className="group bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-accent font-medium tracking-wide uppercase text-xs mb-2">
                        {item.type}
                      </span>
                      <h3 className="font-serif text-lg text-foreground mb-4">{item.title}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                      >
                        Rezept auf Cookidoo®
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="section-padding">
            <div className="container-narrow">
              <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  Bereit für dein Showkochen?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Kontaktiere mich jetzt und erlebe den Thermomix® TM7 live in Aktion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/beratung">
                      Showkochen anfragen
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://wa.me/436641234567"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp schreiben
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Showkochen;
