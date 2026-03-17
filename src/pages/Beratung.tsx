import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Step images
import beratungStep1 from '@/assets/beratung-step-1.webp';
import beratungStep2 from '@/assets/beratung-step-2.webp';
import showkochen1 from '@/assets/showkochen-1.jpg';
import beratungStep4 from '@/assets/beratung-step-4.webp';
import beratungStep5 from '@/assets/beratung-step-5.webp';
import beratungStep6 from '@/assets/beratung-step-6.webp';

const stepImages = [beratungStep1, beratungStep2, showkochen1, beratungStep4, beratungStep5, beratungStep6];
const stepIcons = [Phone, MessageCircle, ChefHat, Home, Package, Sparkles];

const serviceIcons = [Newspaper, UtensilsCrossed, Wrench, PackageCheck, MessageSquare];

// Timeline Progress Component
const TimelineProgress = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight * 0.5;
      const scrollProgress = (startOffset - rect.top) / (rect.height);
      
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      setProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <>
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border rounded-full"></div>
      <div 
        className="hidden lg:block absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-primary rounded-full transition-all duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      ></div>
    </>
  );
};

const Beratung = () => {
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();
  const afterPurchaseAnimation = useScrollAnimation();
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: 1,
      icon: stepIcons[0],
      title: t('beratung.steps.step1.title'),
      description: t('beratung.steps.step1.description'),
      details: t('beratung.steps.step1.details'),
      image: stepImages[0],
      buttonText: t('beratung.steps.step1.button'),
      buttonLink: '#kontakt',
    },
    {
      number: 2,
      icon: stepIcons[1],
      title: t('beratung.steps.step2.title'),
      description: t('beratung.steps.step2.description'),
      details: null,
      image: stepImages[1],
      buttonText: null,
      buttonLink: null,
    },
    {
      number: 3,
      icon: stepIcons[2],
      title: t('beratung.steps.step3.title'),
      description: t('beratung.steps.step3.description'),
      details: t('beratung.steps.step3.details'),
      image: stepImages[2],
      buttonText: t('beratung.steps.step3.button'),
      buttonLink: '/showkochen',
    },
    {
      number: 4,
      icon: stepIcons[3],
      title: t('beratung.steps.step4.title'),
      optional: true,
      optionalText: t('beratung.steps.step4.optional'),
      description: t('beratung.steps.step4.description'),
      details: t('beratung.steps.step4.details'),
      image: stepImages[3],
      buttonText: null,
      buttonLink: null,
    },
    {
      number: 5,
      icon: stepIcons[4],
      title: t('beratung.steps.step5.title'),
      description: t('beratung.steps.step5.description'),
      details: t('beratung.steps.step5.details'),
      image: stepImages[4],
      highlights: t('beratung.steps.step5.highlights', { returnObjects: true }) as string[],
      buttonText: null,
      buttonLink: null,
    },
    {
      number: 6,
      icon: stepIcons[5],
      title: t('beratung.steps.step6.title'),
      description: t('beratung.steps.step6.description'),
      details: t('beratung.steps.step6.details'),
      image: stepImages[5],
      buttonText: null,
      buttonLink: null,
    },
  ];

  const afterPurchaseServices = [
    {
      icon: serviceIcons[0],
      title: t('beratung.afterPurchase.services.news.title'),
      description: t('beratung.afterPurchase.services.news.description'),
    },
    {
      icon: serviceIcons[1],
      title: t('beratung.afterPurchase.services.recipes.title'),
      description: t('beratung.afterPurchase.services.recipes.description'),
    },
    {
      icon: serviceIcons[2],
      title: t('beratung.afterPurchase.services.service.title'),
      description: t('beratung.afterPurchase.services.service.description'),
    },
    {
      icon: serviceIcons[3],
      title: t('beratung.afterPurchase.services.handling.title'),
      description: t('beratung.afterPurchase.services.handling.description'),
    },
    {
      icon: serviceIcons[4],
      title: t('beratung.afterPurchase.services.contact.title'),
      description: t('beratung.afterPurchase.services.contact.description'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.beratung.title')}</title>
        <meta name="description" content={t('seo.beratung.description')} />
        <link rel="canonical" href="https://mixmitprager.at/beratung" />
        <meta property="og:title" content={t('seo.beratung.title')} />
        <meta property="og:description" content={t('seo.beratung.description')} />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main className="pt-32 md:pt-40">
          
          {/* HERO SECTION */}
          <section className="section-padding" ref={heroAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  {t('beratung.tagline')}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                  {t('beratung.title')} <span className="text-primary">{t('beratung.titleHighlight')}</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-4">
                  {t('beratung.intro')}
                </p>
                <p className="text-foreground font-medium text-lg mb-4">
                  {t('beratung.promise')}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t('beratung.together')}
                </p>
                <Button size="lg" className="group" onClick={scrollToContact}>
                  {t('beratung.startButton')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  <Link 
                    to="/tm7" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    {t('beratung.quickLinks.tm7')}
                  </Link>
                  <Link 
                    to="/showkochen" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    {t('beratung.quickLinks.showkochen')}
                  </Link>
                  <Link 
                    to="/galerie" 
                    className="px-4 py-2 bg-secondary/50 hover:bg-secondary rounded-full text-sm font-medium text-foreground transition-colors"
                  >
                    {t('beratung.quickLinks.galerie')}
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
                <TimelineProgress containerRef={timelineRef} />

                {steps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  const StepIcon = step.icon;
                  
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
                            <span className="text-sm text-muted-foreground">{t('common.step')} {step.number}</span>
                          </div>

                          <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : ''}`}>
                            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                              <StepIcon className="w-5 h-5 text-primary" />
                            </div>
                            <span className="hidden lg:inline text-sm text-muted-foreground">{t('common.step')} {step.number}</span>
                          </div>
                          
                          <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
                            {step.title}
                            {step.optional && (
                              <span className="text-sm font-normal text-muted-foreground ml-2">{step.optionalText}</span>
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
                  {t('beratung.afterPurchase.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  {t('beratung.afterPurchase.title')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('beratung.afterPurchase.subtitle')}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {afterPurchaseServices.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                        <ServiceIcon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-medium text-foreground mb-2 text-sm">{service.title}</h3>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-muted-foreground mt-8">
                {t('beratung.afterPurchase.outro')}
              </p>
            </div>
          </section>

          {/* CONTACT CTA */}
          <ContactCTA />

        </main>
        <Footer />
      </div>
    </>
  );
};

export default Beratung;
