import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Package, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Images
import tm7Hero from '@/assets/tm7-hero.jpg';
import deviceEierkocher from '@/assets/device-eierkocher.jpg';
import deviceMixer from '@/assets/device-mixer.jpg';
import deviceKochtopf from '@/assets/device-kochtopf.jpg';
import deviceWasserkocher from '@/assets/device-wasserkocher.jpg';
import deviceRuehrgeraet from '@/assets/device-ruehrgeraet.jpg';
import deviceWaage from '@/assets/device-waage.jpg';
import deviceFleischwolf from '@/assets/device-fleischwolf.jpg';
import deviceKuechenmaschine from '@/assets/device-kuechenmaschine.jpg';
import tm7Intro from '@/assets/tm7-intro.webp';

// Modi images
import modiAnbraten from '@/assets/modi-anbraten.png';
import modiAndicken from '@/assets/modi-andicken.png';
import modiDampfgaren from '@/assets/modi-dampfgaren.png';
import modiEierkochen from '@/assets/modi-eierkochen.png';
import modiFermentieren from '@/assets/modi-fermentieren.png';
import modiOffeneskochen from '@/assets/modi-offeneskochen.png';
import modiPeelen from '@/assets/modi-peelen.png';
import modiPuerieren from '@/assets/modi-puerieren.png';
import modiReiskochen from '@/assets/modi-reiskochen.png';
import modiSchneiden from '@/assets/modi-schneiden.png';
import modiSlowcooking from '@/assets/modi-slowcooking.png';
import modiSousvide from '@/assets/modi-sousvide.png';
import modiTeigkneten from '@/assets/modi-teigkneten.png';

// Cookidoo images
import cookidoo1 from '@/assets/cookidoo-1.jpg';
import cookidoo2 from '@/assets/cookidoo-2.jpg';
import cookidoo3 from '@/assets/cookidoo-3.jpg';

// Accessory images
import accessorySensor from '@/assets/accessory-sensor-new.jpg';
import accessoryPeeler from '@/assets/accessory-peeler-new.jpg';
import accessoryGemuesestyler from '@/assets/accessory-gemuesestyler.jpg';
import accessorySpatel from '@/assets/accessory-spatel-new.jpg';
import accessorySchmetterling from '@/assets/accessory-schmetterling-new.jpg';
import accessoryVaroma from '@/assets/accessory-varoma-new.jpg';
import accessoryGarkorb from '@/assets/accessory-garkorb-new.jpg';

// Display images
import display1 from '@/assets/display-1.webp';
import display2 from '@/assets/display-2.webp';

// Device video
import geraeteVideo from '@/assets/geraete-tm7.mp4';

// Nutrition image
import ernaehrungTm7 from '@/assets/ernaehrung-tm7.webp';
const DeviceSlider = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const checkWidth = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const devices = [{
    img: deviceEierkocher,
    labelKey: 'eierkocher'
  }, {
    img: deviceMixer,
    labelKey: 'mixer'
  }, {
    img: deviceKochtopf,
    labelKey: 'kochtopf'
  }, {
    img: deviceWasserkocher,
    labelKey: 'wasserkocher'
  }, {
    img: deviceRuehrgeraet,
    labelKey: 'ruehrgeraet'
  }, {
    img: deviceWaage,
    labelKey: 'waage'
  }, {
    img: deviceFleischwolf,
    labelKey: 'fleischwolf'
  }, {
    img: deviceKuechenmaschine,
    labelKey: 'kuechenmaschine'
  }];

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % devices.length);
  };
  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + devices.length) % devices.length);
  };

  // Calculate transform based on items per view
  const gapSize = itemsPerView === 1 ? 0 : 16; // no gap for single item, gap-4 = 16px
  const itemWidth = 100 / itemsPerView;
  const gapPercentage = (gapSize / (typeof window !== 'undefined' ? window.innerWidth : 1000)) * 100;

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <button onClick={prev} className="p-2 rounded-full bg-card shadow-md hover:bg-secondary transition-colors z-10 flex-shrink-0">
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-3 md:gap-4" 
            style={{
              transform: `translateX(-${currentIndex * (itemWidth + gapPercentage)}%)`
            }}
          >
            {[...devices, ...devices].map((device, index) => (
              <div 
                key={`${device.labelKey}-${index}`} 
                className="text-center flex-shrink-0 w-full md:w-[calc(25%-12px)]"
              >
                <div className="bg-card rounded-2xl p-3 md:p-4 shadow-soft mb-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img src={device.img} alt={t(`tm7.devices.labels.${device.labelKey}`)} className="w-full h-full object-cover rounded-xl" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{t(`tm7.devices.labels.${device.labelKey}`)}</p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={next} className="p-2 rounded-full bg-card shadow-md hover:bg-secondary transition-colors z-10 flex-shrink-0">
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
};

const ModiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  
  const modiItems = [
    modiAnbraten, modiAndicken, modiDampfgaren, modiEierkochen, 
    modiFermentieren, modiOffeneskochen, modiPeelen, modiPuerieren, 
    modiReiskochen, modiSchneiden, modiSlowcooking, modiSousvide, modiTeigkneten
  ];

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 768) {
        setItemsPerView(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(5);
      }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Group slides into pages for dot navigation (fewer dots)
  const totalPages = Math.ceil(modiItems.length / itemsPerView);
  const maxIndex = Math.max(0, modiItems.length - itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const itemWidthPercent = 100 / itemsPerView;
  const gapPx = 4; // smaller gap

  // Calculate which "page" we're on for dot highlighting
  const currentPage = Math.min(Math.floor(currentIndex / itemsPerView * totalPages / (maxIndex + 1) * totalPages), totalPages - 1);

  const goToPage = (pageIndex: number) => {
    const newIndex = Math.floor((pageIndex / (totalPages - 1)) * maxIndex);
    setCurrentIndex(Math.min(newIndex, maxIndex));
  };

  return (
    <div className="relative">
      {/* Slider Container - extra padding for shadow visibility */}
      <div className="overflow-hidden px-3 py-3 -mx-3">
        <div 
          className="flex transition-transform duration-500 ease-out gap-1"
          style={{ transform: `translateX(calc(-${currentIndex * itemWidthPercent}% - ${currentIndex * gapPx / itemsPerView}px))` }}
        >
          {modiItems.map((img, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center p-1"
              style={{ width: `calc(${itemWidthPercent}% - ${gapPx * (itemsPerView - 1) / itemsPerView}px)` }}
            >
              <div className="bg-white rounded-xl border border-border/50 p-4">
                <img 
                  src={img} 
                  alt={`Thermomix Modus ${index + 1}`} 
                  className="w-full h-auto max-w-[120px] mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation - only 3 dots */}
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button 
            key={index} 
            onClick={() => goToPage(index)} 
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentPage 
                ? 'bg-primary w-6' 
                : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Seite ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
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
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`} />)}
      </div>
    </div>;
};
const TM7 = () => {
  const {
    t
  } = useTranslation();
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation();
  const {
    ref: devicesRef,
    isVisible: devicesVisible
  } = useScrollAnimation();
  const {
    ref: modiRef,
    isVisible: modiVisible
  } = useScrollAnimation();
  const {
    ref: cookidooRef,
    isVisible: cookidooVisible
  } = useScrollAnimation();
  const {
    ref: nutritionRef,
    isVisible: nutritionVisible
  } = useScrollAnimation();
  const {
    ref: displayRef,
    isVisible: displayVisible
  } = useScrollAnimation();
  const {
    ref: accessoriesRef,
    isVisible: accessoriesVisible
  } = useScrollAnimation();
  const {
    ref: comparisonRef,
    isVisible: comparisonVisible
  } = useScrollAnimation();
  const {
    ref: specsRef,
    isVisible: specsVisible
  } = useScrollAnimation();
  const specs = [{
    categoryKey: 'motor',
    itemKeys: ['motorType', 'drivePower', 'speedRange', 'doughMode', 'motorProtection', 'noiseLevel']
  }, {
    categoryKey: 'heating',
    itemKeys: ['heatingPower', 'tempControl', 'safety']
  }, {
    categoryKey: 'scale',
    itemKeys: ['range', 'negativeWeighing', 'tare', 'weighDuringOp']
  }, {
    categoryKey: 'bowl',
    itemKeys: ['material', 'insulation', 'sensors', 'maxCapacity']
  }, {
    categoryKey: 'blade',
    itemKeys: ['blades', 'material', 'maintenance']
  }, {
    categoryKey: 'power',
    itemKeys: ['voltage', 'maxPower', 'cable']
  }, {
    categoryKey: 'system',
    itemKeys: ['processor', 'updates', 'expandability']
  }, {
    categoryKey: 'display',
    itemKeys: ['size', 'type', 'operation', 'recipeAccess']
  }, {
    categoryKey: 'dimensions',
    itemKeys: ['height', 'width', 'depth', 'weight']
  }];
  const cookidooFeatures = t('tm7.cookidoo.features', {
    returnObjects: true
  }) as string[];
  const displayFeatures = t('tm7.display.features', {
    returnObjects: true
  }) as string[];
  const comparisonFeatures = t('tm7.comparison.features', {
    returnObjects: true
  }) as string[];
  return <>
      <Helmet>
        <title>{t('seo.tm7.title')}</title>
        <meta name="description" content={t('seo.tm7.description')} />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main className="pt-32 md:pt-40">
          
          {/* HERO */}
          <section className="section-padding" ref={heroRef}>
            <div className={`container-narrow transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.tagline')}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                    {t('tm7.title')}
                  </h1>
                  <p className="text-xl text-primary font-medium mb-6">
                    {t('tm7.subtitle')}
                  </p>
                  <p className="text-muted-foreground">
                    {t('tm7.intro')}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>
                  <img alt="Thermomix TM7" className="relative w-full max-w-md mx-auto drop-shadow-2xl" src={tm7Intro} />
                </div>
              </div>
            </div>
          </section>

          {/* EIN GERÄT – VIELE GERÄTE ERSETZT */}
          <section className="section-padding bg-secondary/30" ref={devicesRef}>
            <div className={`container-narrow transition-all duration-700 ${devicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Video + Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Video - Left */}
                <div className="rounded-2xl overflow-hidden shadow-elegant max-w-xs mx-auto lg:mx-0">
                  <video 
                    src={geraeteVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full"
                  />
                </div>

                {/* Content - Right */}
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.devices.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                    {t('tm7.devices.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('tm7.devices.subtitle')}
                  </p>
                  <p className="font-medium text-foreground mb-4">
                    {t('tm7.devices.highlight')}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Eierkocher
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Wasserkocher
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Mixer
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Kochtopf
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Rührgerät
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Küchenwaage
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Fleischwolf
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary font-bold">✓</span>
                      Küchenmaschine
                    </li>
                  </ul>
                  <p className="text-muted-foreground italic">
                    {t('tm7.devices.outro')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FUNKTIONEN UND MODI */}
          <section className="section-padding" ref={modiRef}>
            <div className={`container-narrow transition-all duration-700 ${modiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  {t('tm7.modi.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  {t('tm7.modi.title')}
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  {t('tm7.modi.subtitle')}
                </p>
              </div>

              <ModiSlider />

              <p className="text-center text-muted-foreground">
                {t('tm7.modi.outro')}
              </p>
            </div>
          </section>

          {/* COOKIDOO */}
          <section className="section-padding bg-secondary/30" ref={cookidooRef}>
            <div className={`container-narrow transition-all duration-700 ${cookidooVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.cookidoo.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    {t('tm7.cookidoo.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('tm7.cookidoo.subtitle')}
                  </p>
                  <p className="font-medium text-foreground mb-3">{t('tm7.cookidoo.featuresTitle')}</p>
                  <ul className="space-y-2 mb-6">
                    {cookidooFeatures.map((item, index) => <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>)}
                  </ul>
                  <p className="text-muted-foreground italic">
                    {t('tm7.cookidoo.outro')}
                  </p>
                </div>
                <div>
                  <CookidooSlideshow />
                </div>
              </div>
            </div>
          </section>

          {/* ERNÄHRUNG */}
          <section className="section-padding" ref={nutritionRef}>
            <div className={`container-narrow transition-all duration-700 ${nutritionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.nutrition.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    {t('tm7.nutrition.title')}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {t('tm7.nutrition.intro')}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t('tm7.nutrition.text1')}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {t('tm7.nutrition.text2')}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {t('tm7.nutrition.text3')}
                  </p>
                  <p className="text-primary font-semibold text-lg mb-6">
                    {t('tm7.nutrition.highlight')}
                  </p>
                  <p className="font-medium text-foreground mb-3">{t('tm7.nutrition.supportTitle')}</p>
                  <ul className="space-y-2 mb-6">
                    {(t('tm7.nutrition.features', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    {t('tm7.nutrition.outro')}
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl"></div>
                  <img 
                    src={ernaehrungTm7} 
                    alt="Thermomix TM7 Ernährung - Vegan, Vegetarisch, Glutenfrei, Low Carb" 
                    className="relative w-full rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* DISPLAY & BEDIENUNG */}
          <section className="section-padding" ref={displayRef}>
            <div className={`container-narrow transition-all duration-700 ${displayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl blur-2xl"></div>
                      <img src={display1} alt="Thermomix TM7 Display Rezept" className="relative w-full rounded-xl shadow-lg" />
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-2xl"></div>
                      <img src={display2} alt="Thermomix TM7 Display Waage" className="relative w-full rounded-xl shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.display.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    {t('tm7.display.title')}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t('tm7.display.subtitle')}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {displayFeatures.map((item, index) => <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ZUBEHÖR */}
          <section className="section-padding bg-secondary/30" ref={accessoriesRef}>
            <div className={`container-narrow transition-all duration-700 ${accessoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  {t('tm7.accessories.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  {t('tm7.accessories.title')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
                  {t('tm7.accessories.subtitle')}
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  {t('tm7.accessories.intro')}
                </p>
              </div>

              {/* Kompakte Zubehör-Karten */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Spatel */}
                <div className="bg-card rounded-xl shadow-card overflow-hidden flex flex-col sm:flex-row">
                  <div className="bg-white p-6 flex items-center justify-center sm:w-1/3">
                    <img src={accessorySpatel} alt={t('tm7.accessories.compactSpatel.title')} className="h-28 object-contain" />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <h4 className="font-serif text-xl text-foreground mb-3">{t('tm7.accessories.compactSpatel.title')}</h4>
                    <ul className="space-y-2">
                      {(t('tm7.accessories.compactSpatel.checkmarks', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Schmetterlingsaufsatz */}
                <div className="bg-card rounded-xl shadow-card overflow-hidden flex flex-col sm:flex-row">
                  <div className="bg-white p-6 flex items-center justify-center sm:w-1/3">
                    <img src={accessorySchmetterling} alt={t('tm7.accessories.compactSchmetterling.title')} className="h-28 object-contain" />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <h4 className="font-serif text-xl text-foreground mb-3">{t('tm7.accessories.compactSchmetterling.title')}</h4>
                    <ul className="space-y-2">
                      {(t('tm7.accessories.compactSchmetterling.checkmarks', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Varoma */}
                <div className="bg-card rounded-xl shadow-card overflow-hidden flex flex-col sm:flex-row">
                  <div className="bg-white p-6 flex items-center justify-center sm:w-1/3">
                    <img src={accessoryVaroma} alt={t('tm7.accessories.compactVaroma.title')} className="h-28 object-contain" />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <h4 className="font-serif text-xl text-foreground mb-3">{t('tm7.accessories.compactVaroma.title')}</h4>
                    <ul className="space-y-2">
                      {(t('tm7.accessories.compactVaroma.checkmarks', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Garkörbchen */}
                <div className="bg-card rounded-xl shadow-card overflow-hidden flex flex-col sm:flex-row">
                  <div className="bg-white p-6 flex items-center justify-center sm:w-1/3">
                    <img src={accessoryGarkorb} alt={t('tm7.accessories.garkorb.title')} className="h-28 object-contain" />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <h4 className="font-serif text-xl text-foreground mb-3">{t('tm7.accessories.garkorb.title')}</h4>
                    <ul className="space-y-2">
                      {(t('tm7.accessories.garkorb.checkmarks', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mehr Zubehör Button mit Modal */}
              <div className="mt-8 text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Package className="w-5 h-5" />
                      {t('tm7.accessories.moreButton')}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl text-center">
                        {t('tm7.accessories.modalTitle')}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-6">
                      {/* Sensor */}
                      <div className="bg-muted/30 rounded-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="p-6 flex flex-col justify-center">
                            <span className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                              {t('tm7.accessories.sensor.tagline')}
                            </span>
                            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                              {t('tm7.accessories.sensor.title')}
                            </h3>
                            <p className="text-muted-foreground italic mb-2 text-sm">
                              {t('tm7.accessories.sensor.intro')}
                            </p>
                            <p className="text-muted-foreground mb-4 text-sm">
                              {t('tm7.accessories.sensor.description')}
                            </p>
                            <h4 className="font-semibold text-foreground mb-2 text-sm">
                              {t('tm7.accessories.sensor.benefitsTitle')}
                            </h4>
                            <ul className="space-y-1 mb-4">
                              {(t('tm7.accessories.sensor.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                                  <span className="text-primary font-bold">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="text-foreground font-medium mb-3 text-sm">
                              {t('tm7.accessories.sensor.outro')}
                            </p>
                            <p className="text-xl font-bold text-primary">
                              {t('tm7.accessories.sensor.price')}
                            </p>
                          </div>
                          <div className="flex items-center justify-center p-4">
                            <img 
                              src={accessorySensor} 
                              alt={t('tm7.accessories.sensor.title')} 
                              className="max-h-72 object-contain rounded-xl"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Peeler */}
                      <div className="bg-muted/30 rounded-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="flex items-center justify-center p-4 order-2 lg:order-1">
                            <img 
                              src={accessoryPeeler} 
                              alt={t('tm7.accessories.peeler.title')} 
                              className="max-h-72 object-contain rounded-xl"
                            />
                          </div>
                          <div className="p-6 flex flex-col justify-center order-1 lg:order-2">
                            <span className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
                              {t('tm7.accessories.peeler.tagline')}
                            </span>
                            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                              {t('tm7.accessories.peeler.title')}
                            </h3>
                            <p className="text-muted-foreground mb-3 text-sm">
                              {t('tm7.accessories.peeler.description')}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-semibold text-foreground mb-1 text-sm">{t('tm7.accessories.peeler.peelTitle')}</h4>
                                <p className="text-muted-foreground text-xs">{t('tm7.accessories.peeler.peelText')}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-1 text-sm">{t('tm7.accessories.peeler.cookTitle')}</h4>
                                <p className="text-muted-foreground text-xs">{t('tm7.accessories.peeler.cookText')}</p>
                              </div>
                            </div>
                            <ul className="space-y-1 mb-4">
                              {(t('tm7.accessories.peeler.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                                  <span className="text-primary font-bold">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="text-xl font-bold text-primary">
                              {t('tm7.accessories.peeler.price')}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Gemüsestyler */}
                      <div className="bg-muted/30 rounded-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div className="p-6 flex flex-col justify-center">
                            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                              {t('tm7.accessories.gemuesestyler.title')}
                            </h3>
                            <p className="text-muted-foreground mb-3 text-sm">
                              {t('tm7.accessories.gemuesestyler.description')}
                            </p>
                            <p className="text-muted-foreground mb-4 text-sm">
                              {t('tm7.accessories.gemuesestyler.text')}
                            </p>
                            <h4 className="font-semibold text-foreground mb-2 text-sm">
                              {t('tm7.accessories.gemuesestyler.idealTitle')}
                            </h4>
                            <ul className="space-y-1 mb-4">
                              {(t('tm7.accessories.gemuesestyler.idealList', { returnObjects: true }) as string[]).map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                                  <span className="text-primary font-bold">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            <ul className="space-y-1 mb-4">
                              {(t('tm7.accessories.gemuesestyler.benefits', { returnObjects: true }) as string[]).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                                  <span className="text-primary font-bold">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            <p className="text-muted-foreground italic mb-3 text-sm">
                              {t('tm7.accessories.gemuesestyler.outro')}
                            </p>
                            <p className="text-xl font-bold text-primary">
                              {t('tm7.accessories.gemuesestyler.price')}
                            </p>
                          </div>
                          <div className="bg-white flex items-center justify-center p-6">
                            <img 
                              src={accessoryGemuesestyler} 
                              alt={t('tm7.accessories.gemuesestyler.title')} 
                              className="max-h-56 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>

          {/* TM7 vs KÜCHENMASCHINEN */}
          <section className="section-padding" ref={comparisonRef}>
            <div className={`container-narrow transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    {t('tm7.comparison.tagline')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    {t('tm7.comparison.title')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('tm7.comparison.subtitle')}
                  </p>
                </div>

                <div className="bg-card rounded-2xl shadow-card p-8 mb-8">
                  <ul className="space-y-4">
                    {comparisonFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold text-lg">✓</span>
                        <span>{feature}</span>
                      </li>)}
                  </ul>
                </div>

                <p className="text-center text-foreground font-medium">
                  {t('tm7.comparison.outro')}
                </p>
              </div>
            </div>
          </section>

          {/* TECHNISCHE DATEN */}
          <section className="section-padding bg-secondary/30" ref={specsRef}>
            <div className={`container-narrow transition-all duration-700 ${specsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  {t('tm7.specs.tagline')}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground">
                  {t('tm7.specs.title')}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map(category => <div key={category.categoryKey} className="bg-card rounded-2xl shadow-soft p-6">
                    <h3 className="font-serif text-lg text-foreground mb-4 pb-2 border-b border-border">
                      {t(`tm7.specs.categories.${category.categoryKey}`)}
                    </h3>
                    <ul className="space-y-2">
                      {category.itemKeys.map((itemKey, index) => <li key={index} className="text-sm">
                          <span className="text-muted-foreground">{t(`tm7.specs.items.${category.categoryKey}.${itemKey}.label`)}:</span>
                          <span className="text-foreground ml-1">{t(`tm7.specs.items.${category.categoryKey}.${itemKey}.value`)}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>
            </div>
          </section>

          {/* CONTACT CTA */}
          <ContactCTA />

        </main>
        <Footer />
      </div>
    </>;
};
export default TM7;