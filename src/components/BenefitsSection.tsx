import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return <div className="relative w-full max-w-xs mx-auto">
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {slides.map((slide, index) => <img key={index} src={slide} alt={`Cookidoo App ${index + 1}`} className={`w-full transition-all duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'}`} />)}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`} />)}
      </div>
    </div>;
};
const BenefitsSection = () => {
  const {
    t
  } = useTranslation();
  const {
    ref: introRef,
    isVisible: introVisible
  } = useScrollAnimation();
  const {
    ref: timeRef,
    isVisible: timeVisible
  } = useScrollAnimation();
  const {
    ref: familyRef,
    isVisible: familyVisible
  } = useScrollAnimation();
  const {
    ref: healthRef,
    isVisible: healthVisible
  } = useScrollAnimation();
  const {
    ref: cookidooRef,
    isVisible: cookidooVisible
  } = useScrollAnimation();
  const {
    ref: functionsRef,
    isVisible: functionsVisible
  } = useScrollAnimation();
  const {
    ref: profiRef,
    isVisible: profiVisible
  } = useScrollAnimation();
  const {
    ref: supportRef,
    isVisible: supportVisible
  } = useScrollAnimation();
  const {
    ref: ctaRef,
    isVisible: ctaVisible
  } = useScrollAnimation();
  const timeList = t('benefits.time.list', {
    returnObjects: true
  }) as string[];
  const familyList = t('benefits.family.list', {
    returnObjects: true
  }) as string[];
  const healthList = t('benefits.health.list', {
    returnObjects: true
  }) as string[];
  const cookidooList = t('benefits.cookidoo.list', {
    returnObjects: true
  }) as string[];
  const supportList = t('benefits.support.list', {
    returnObjects: true
  }) as string[];
  return <section id="vorteile" className="bg-background">
      {/* INTRO */}
      <div className="section-padding" ref={introRef}>
        <div className={`container-narrow transition-all duration-700 ${introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t('benefits.tagline')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t('benefits.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="order-2 lg:order-1">
              <p className="text-muted-foreground text-lg mb-6">
                {t('benefits.intro.text1')}
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('benefits.intro.text2')}</p>
                <p>{t('benefits.intro.text3')}</p>
              </div>
              
              {/* Feature highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-serif text-primary font-bold">20+</p>
                  <p className="text-sm text-muted-foreground">{t('benefits.stats.functions')}</p>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-serif text-primary font-bold">100.000+</p>
                  <p className="text-sm text-muted-foreground">{t('benefits.stats.recipes')}</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <img alt="Thermomix TM7" className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" src="/lovable-uploads/1f6a4d8e-9b60-4740-933f-341d90e7f7e5.webp" />
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
                <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('benefits.time.tagline')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                {t('benefits.time.title')}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {t('benefits.time.subtitle')}
              </p>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>{t('benefits.time.text1')}</p>
                <p>{t('benefits.time.text2')}</p>
              </div>
              <div className="mb-6">
                <p className="font-medium text-foreground mb-3">{t('benefits.time.idealFor')}</p>
                <ul className="space-y-2">
                  {timeList.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>)}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <video src={thermomixVideo} autoPlay loop muted playsInline className="relative rounded-3xl shadow-xl w-full" />
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
                <img src={familie1} alt="Kind am Thermomix" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                <img src={familie2} alt="Familie zusammen" className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('benefits.family.tagline')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                {t('benefits.family.title')}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {t('benefits.family.subtitle')}
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>{t('benefits.family.text1')}</p>
                <p>{t('benefits.family.text2')}</p>
              </div>
              <div className="mb-6">
                <p className="font-medium text-foreground mb-3">{t('benefits.family.practicalFor')}</p>
                <ul className="space-y-2">
                  {familyList.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>)}
                </ul>
              </div>
              <p className="text-foreground font-medium italic">
                {t('benefits.family.outro')}
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
                <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('benefits.health.tagline')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                {t('benefits.health.title')}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {t('benefits.health.subtitle')}
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>{t('benefits.health.text1')}</p>
                <p>{t('benefits.health.text2')}</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">{t('benefits.health.youDecide')}</p>
                <ul className="space-y-2">
                  {healthList.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>)}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={gesund1} alt="Gesundes Kochen mit Thermomix" className="rounded-2xl shadow-xl w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
              <img src={gesund2} alt="Frische Zutaten" className="rounded-2xl shadow-xl w-full h-72 object-cover mt-8 hover:scale-105 transition-transform duration-500" />
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
                <span className="text-accent font-medium tracking-wide uppercase text-sm">{t('benefits.cookidoo.tagline')}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                {t('benefits.cookidoo.title')}
              </h3>
              <p className="text-xl text-primary font-medium mb-6">
                {t('benefits.cookidoo.subtitle')}
              </p>
              <div className="space-y-4 text-muted-foreground mb-6">
                <p>{t('benefits.cookidoo.text1')}</p>
                <p>{t('benefits.cookidoo.text2')}</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-3">{t('benefits.cookidoo.advantages')}</p>
                <ul className="space-y-2">
                  {cookidooList.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      {item}
                    </li>)}
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
              {t('benefits.functions.tagline')}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
              {t('benefits.functions.title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('benefits.functions.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
            {[modi1, modi2, modi3, modi4, modi5, modi6].map((img, index) => <div key={index} className="bg-card rounded-2xl shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden">
                <img src={img} alt={`Thermomix Modus ${index + 1}`} className="w-full h-auto" />
              </div>)}
          </div>
          
          <p className="text-center text-muted-foreground font-medium">
            {t('benefits.functions.outro')}
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
              {t('benefits.profi.title')}
            </h3>
            <p className="text-xl text-primary font-medium mb-6">
              {t('benefits.profi.subtitle')}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('benefits.profi.text')}
            </p>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft max-w-xl mx-auto">
              <p className="text-lg text-foreground italic mb-4">
                "{t('benefits.profi.quote')}"
              </p>
              <p className="text-muted-foreground text-sm">
                {t('benefits.profi.quoteAuthor')}
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
                {t('benefits.support.tagline')}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                {t('benefits.support.title')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('benefits.support.subtitle')}
              </p>
              <ul className="space-y-2 mb-8">
                {supportList.map(item => <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary font-bold">✓</span>
                    {item}
                  </li>)}
              </ul>
              <p className="text-foreground font-medium">
                {t('benefits.support.outro')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl"></div>
              <img src={aboutPortrait} alt="Bernhard Prager - Thermomix Berater" className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-padding" ref={ctaRef}>
        <div className={`container-narrow transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              {t('benefits.cta.title')}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('benefits.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/tm7">{t('benefits.cta.buttonSecondary')}</Link>
              </Button>
              <Button asChild size="lg" className="text-base">
                <Link to="/beratung">{t('benefits.cta.buttonPrimary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;