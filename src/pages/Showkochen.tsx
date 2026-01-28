import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Briefcase, Sparkles, RefreshCw, ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Images
import showkochen1 from '@/assets/showkochen-1.jpg';
import showkochen2 from '@/assets/showkochen-2.jpg';
import showkochen3 from '@/assets/showkochen-3.jpg';
import showkochen4 from '@/assets/showkochen-4.jpg';
import showkochen5 from '@/assets/showkochen-5.jpg';
import showkochenVideo from '@/assets/showkochen-video.mp4';
import menuFocaccia from '@/assets/menu-focaccia.jpg';
import menuRisotto from '@/assets/menu-risotto.jpg';
import menuErdbeer from '@/assets/menu-erdbeer.jpg';

const showkochenImages = [showkochen1, showkochen2, showkochen3, showkochen4, showkochen5];

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
  const { t } = useTranslation();
  const heroAnimation = useScrollAnimation();
  const wasIstAnimation = useScrollAnimation();
  const wichtigAnimation = useScrollAnimation();
  const fuerWenAnimation = useScrollAnimation();
  const ablaufAnimation = useScrollAnimation();
  const menuAnimation = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      typeKey: 'starter',
      titleKey: 'focaccia',
      img: menuFocaccia,
      link: 'https://cookidoo.de/recipes/recipe/de-DE/r917225',
    },
    {
      typeKey: 'main',
      titleKey: 'risotto',
      img: menuRisotto,
      link: 'https://cookidoo.de/recipes/recipe/de-DE/r917226',
    },
    {
      typeKey: 'dessert',
      titleKey: 'dessert',
      img: menuErdbeer,
      link: 'https://cookidoo.de/recipes/recipe/de-DE/r928212',
    },
  ];

  const targetAudience = [
    { icon: Users, key: 'families' },
    { icon: Briefcase, key: 'professionals' },
    { icon: Sparkles, key: 'curious' },
    { icon: RefreshCw, key: 'switchers' },
  ];

  const processSteps = ['step1', 'step2', 'step3', 'step4'];

  const expectations = t('showkochen.whatIs.expectations', { returnObjects: true }) as string[];

  return (
    <>
      <Helmet>
        <title>{t('seo.showkochen.title')}</title>
        <meta name="description" content={t('seo.showkochen.description')} />
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
                    {t('showkochen.tagline')}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                    {t('showkochen.title')} <span className="text-primary">{t('showkochen.titleHighlight')}</span> {t('showkochen.titleEnd')}
                  </h1>
                  <p className="text-muted-foreground text-lg mb-8">
                    {t('showkochen.subtitle')}
                  </p>
                  
                  {/* Highlight Badge */}
                  <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                      <span className="text-primary font-bold uppercase tracking-wide">{t('showkochen.badges.free')}</span>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-primary font-bold uppercase tracking-wide">{t('showkochen.badges.noCost')}</span>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <span className="text-primary font-bold uppercase tracking-wide">{t('showkochen.badges.noObligation')}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group" onClick={scrollToContact}>
                      {t('showkochen.requestButton')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('showkochmenu')?.scrollIntoView({ behavior: 'smooth' })}>
                      {t('showkochen.menuButton')}
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
                <div className="order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
                  <video
                    src={showkochenVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-2xl shadow-elegant"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('showkochen.whatIs.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    {t('showkochen.whatIs.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('showkochen.whatIs.intro')}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {t('showkochen.whatIs.description')}
                  </p>
                  
                  <p className="font-medium text-foreground mb-4">{t('showkochen.whatIs.expectTitle')}</p>
                  <ul className="space-y-3">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
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
                    {t('showkochen.important.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                    {t('showkochen.important.title')}
                  </h2>
                  <p className="text-muted-foreground text-lg" dangerouslySetInnerHTML={{ 
                    __html: t('showkochen.important.description').replace('<highlight>', '<span class="text-primary font-semibold">').replace('</highlight>', '</span>') 
                  }} />
                </div>
              </div>
            </div>
          </section>

          {/* FÜR WEN IST DAS IDEAL */}
          <section className="section-padding bg-secondary/30" ref={fuerWenAnimation.ref}>
            <div className={`container-narrow transition-all duration-700 ${fuerWenAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  {t('showkochen.forWhom.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  {t('showkochen.forWhom.title')}
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {targetAudience.map((item) => (
                  <div
                    key={item.key}
                    className="group bg-card p-6 rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{t(`showkochen.forWhom.${item.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`showkochen.forWhom.${item.key}.desc`)}</p>
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
                  {t('showkochen.process.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  {t('showkochen.process.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((stepKey, index) => (
                  <div key={stepKey} className="relative">
                    <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                      <div className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-bold mb-4">
                        {index + 1}
                      </div>
                      <h3 className="font-serif text-lg text-foreground mb-3">{t(`showkochen.process.${stepKey}.title`)}</h3>
                      <p className="text-sm text-muted-foreground">{t(`showkochen.process.${stepKey}.desc`)}</p>
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
                  {t('showkochen.menu.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  {t('showkochen.menu.title')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('showkochen.menu.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {menuItems.map((item) => (
                  <div
                    key={item.titleKey}
                    className="group bg-card rounded-2xl shadow-soft overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.img}
                        alt={t(`showkochen.menu.dishes.${item.titleKey}`)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-accent font-medium tracking-wide uppercase text-xs mb-2">
                        {t(`showkochen.menu.${item.typeKey}`)}
                      </span>
                      <h3 className="font-serif text-lg text-foreground mb-4">{t(`showkochen.menu.dishes.${item.titleKey}`)}</h3>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                      >
                        {t('showkochen.menu.recipeLink')}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
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

export default Showkochen;
