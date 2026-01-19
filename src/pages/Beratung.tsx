import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ChefHat, 
  Home, 
  Package, 
  Sparkles, 
  ArrowRight,
  Newspaper,
  UtensilsCrossed,
  Wrench,
  PackageCheck,
  MessageSquare
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Step images
import beratungStep1 from '@/assets/beratung-step-1.webp';
import beratungStep2 from '@/assets/beratung-step-2.webp';
import showkochen1 from '@/assets/showkochen-1.jpg';
import beratungStep4 from '@/assets/beratung-step-4.webp';
import beratungStep5 from '@/assets/beratung-step-5.webp';
import beratungStep6 from '@/assets/beratung-step-6.webp';

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Kontakt & Kennenlernen',
    description: 'Du meldest dich bei mir unkompliziert: per Website-Formular, WhatsApp oder Instagram.',
    details: 'Wir lernen uns kurz telefonisch kennen und ich höre mir an, was dir im Küchenalltag wirklich fehlt. So kann ich dich genau dort abholen, wo du gerade stehst.',
    image: beratungStep1,
    buttonText: 'Jetzt Kontakt aufnehmen',
    buttonLink: '#kontakt',
  },
  {
    number: 2,
    icon: MessageCircle,
    title: 'Persönliche Beratung',
    description: 'In einem persönlichen Gespräch, online oder vor Ort, sprechen wir über deine Wünsche, deinen Alltag und deine Kochgewohnheiten.',
    details: null,
    image: beratungStep2,
    buttonText: null,
    buttonLink: null,
  },
  {
    number: 3,
    icon: ChefHat,
    title: 'Thermomix live erleben beim Showkochen',
    description: 'Beim Showkochen kannst du den Thermomix mit deiner Familie sowie deinen Freundinnen und Freunden live erleben. Ganz entspannt bei dir zu Hause!',
    details: 'Du siehst, wie vielseitig und einfach das Kochen damit ist und bekommst ein echtes Gefühl für das Gerät in deiner Küche.',
    image: showkochen1,
    buttonText: 'Showkochen buchen',
    buttonLink: '/showkochen',
  },
  {
    number: 4,
    icon: Home,
    title: 'Im Alltag testen',
    optional: true,
    description: 'Wenn du möchtest, kannst du den Thermomix auch ein paar Tage zu Hause testen. Ich leihe dir dafür einfach mein Gerät.',
    details: 'So erlebst du ganz real, wie er dich im Alltag begleiten wird. Familienküche, schnelles Abendessen oder gesunde Gerichte: Du entscheidest, was du ausprobieren möchtest.',
    image: beratungStep4,
    buttonText: null,
    buttonLink: null,
  },
  {
    number: 5,
    icon: Package,
    title: 'Bestellung und Lieferung',
    description: 'Hast du dich für den Thermomix entschieden, begleite ich dich bei der Bestellung und kümmere mich um alle Details.',
    details: 'Gemeinsam klären wir Bezahlung, Finanzierungsmöglichkeiten und Liefertermine.',
    image: beratungStep5,
    highlights: ['Einfach', 'Transparent', 'Unkompliziert'],
    buttonText: null,
    buttonLink: null,
  },
  {
    number: 6,
    icon: Sparkles,
    title: 'Start & Persönliche Einschulung',
    description: 'Kurz vor einer Thermomixlieferung kontaktiere ich dich. Wenn der Thermomix bei dir angekommen ist, unterstütze ich dich beim Einstieg.',
    details: 'Ich zeige dir die wichtigsten Funktionen, gebe dir Tipps für die ersten Rezepte und helfe dir, dich schnell sicher mit dem Gerät zu fühlen. So macht Kochen von Anfang an Spaß.',
    image: beratungStep6,
    buttonText: null,
    buttonLink: null,
  },
];

const afterPurchaseServices = [
  {
    icon: Newspaper,
    title: 'Infos & Neuigkeiten',
    description: 'Updates zu Aktionen, Zubehör und neuen Funktionen von Vorwerk.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Rezepte & Inspiration',
    description: 'Ideen für den Alltag, saisonale Rezepte und Tipps zum Kochen.',
  },
  {
    icon: Wrench,
    title: 'Service & Reparatur',
    description: 'Ich unterstütze dich bei Reparaturen und Garantiefällen mit Vorwerk.',
  },
  {
    icon: PackageCheck,
    title: 'Abwicklung & Einsendung',
    description: 'Hilfe bei Versand, Austauschgeräten und allen organisatorischen Themen.',
  },
  {
    icon: MessageSquare,
    title: 'Persönlicher Kontakt',
    description: 'Du kannst dich jederzeit bei Fragen direkt an mich wenden.',
  },
];

// Timeline Progress Component
const TimelineProgress = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the timeline is visible
      const containerTop = rect.top;
      const containerHeight = rect.height;
      
      // Start filling when container enters viewport
      const startOffset = windowHeight * 0.5;
      const scrollProgress = (startOffset - containerTop) / (containerHeight);
      
      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <>
      {/* Background Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border rounded-full"></div>
      {/* Progress Line */}
      <div 
        className="hidden lg:block absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-primary rounded-full transition-all duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      ></div>
    </>
  );
};

const Beratung = () => {
  const heroAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();
  const afterPurchaseAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Beratung - Mein Rundum-Sorglos-Paket | kochmitthermo21</title>
        <meta name="description" content="Dein persönlicher Weg zum Thermomix. Ich begleite dich Schritt für Schritt – persönlich, ehrlich und auch nach dem Kauf für dich da." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          
          {/* HERO SECTION */}
          <section className="section-padding" ref={heroAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Beratung bei mir
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                  Dein persönlicher Weg zum <span className="text-primary">Thermomix</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-4">
                  Ich begleite dich Schritt für Schritt auf deinem Thermomix-Weg:
                </p>
                <p className="text-foreground font-medium text-lg mb-4">
                  Persönlich, ehrlich und auch nach dem Kauf weiterhin für dich da.
                </p>
                <p className="text-muted-foreground mb-8">
                  Gemeinsam finden wir heraus, ob der Thermomix zu dir passt.
                </p>
                <Button size="lg" className="group" onClick={scrollToContact}>
                  Beratung starten
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <Link 
                    to="/tm7" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    Was ist der TM7?
                  </Link>
                  <Link 
                    to="/showkochen" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    Showkochen
                  </Link>
                  <Link 
                    to="/galerie" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    Galerie
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* STEPS SECTION */}
          <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background" ref={stepsAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${stepsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              {/* Timeline */}
              <div className="relative" ref={timelineRef}>
                {/* Animated Timeline */}
                <TimelineProgress containerRef={timelineRef} />

                {steps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={step.number} className="relative mb-20 last:mb-0">
                      {/* Step Number Circle - Center */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                        <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-background">
                          {step.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                        {/* Text Content */}
                        <div className={`${isEven ? 'lg:pr-20 lg:text-right' : 'lg:pl-20 lg:order-2'}`}>
                          {/* Mobile Step Number */}
                          <div className="lg:hidden flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                              {step.number}
                            </div>
                            <span className="text-sm text-muted-foreground">Schritt {step.number}</span>
                          </div>

                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : ''}`}>
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                              <step.icon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="hidden lg:inline text-sm text-muted-foreground">Schritt {step.number}</span>
                          </div>
                          
                          <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
                            {step.title}
                            {step.optional && (
                              <span className="text-sm font-normal text-muted-foreground ml-2">(optional)</span>
                            )}
                          </h3>
                          
                          <p className="text-muted-foreground mb-3">
                            {step.description}
                          </p>
                          
                          {step.details && (
                            <p className="text-muted-foreground text-sm mb-4">
                              {step.details}
                            </p>
                          )}

                          {step.highlights && (
                            <div className={`flex gap-3 mb-4 flex-wrap ${isEven ? 'lg:justify-end' : ''}`}>
                              {step.highlights.map((highlight) => (
                                <span 
                                  key={highlight}
                                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          )}

                          {step.buttonText && step.buttonLink && (
                            <div className={isEven ? 'lg:text-right' : ''}>
                              {step.buttonLink.startsWith('#') ? (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => document.getElementById(step.buttonLink!.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                  {step.buttonText}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              ) : (
                                <Button asChild variant="outline" size="sm">
                                  <Link to={step.buttonLink}>
                                    {step.buttonText}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Image */}
                        <div className={`${isEven ? 'lg:order-2 lg:pl-20' : 'lg:pr-20'}`}>
                          <div className="relative group">
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                              src={step.image}
                              alt={step.title}
                              className="relative w-full rounded-2xl shadow-elegant group-hover:shadow-lg transition-shadow duration-300 aspect-[4/3] object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* AFTER PURCHASE SECTION */}
          <section className="section-padding bg-secondary/30" ref={afterPurchaseAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${afterPurchaseAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Nach dem Kauf
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  Mehr als Beratung – persönliche Begleitung
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Mein Ziel ist es, dass du dich mit deinem Gerät langfristig wohlfühlst und ihn mit Freude in deinem Alltag integrierst.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {afterPurchaseServices.map((service) => (
                  <div
                    key={service.title}
                    className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2 text-sm">{service.title}</h3>
                    <p className="text-xs text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground mt-8">
                Vom ersten Gespräch bis lange nach dem Kauf bin ich gerne für dich da.
              </p>
            </div>
          </section>

          {/* CTA / CONTACT SECTION */}
          <section id="kontakt" className="section-padding" ref={ctaAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${ctaAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  Bereit für deine persönliche Beratung?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Kontaktiere mich jetzt und wir finden gemeinsam heraus, ob der Thermomix zu dir passt.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <a href="mailto:kontakt@kochmitthermo21.at">
                      Kontakt aufnehmen
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://wa.me/436641234567"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://instagram.com/kochmitthermo21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
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

export default Beratung;
