import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

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

// Modi images
import modi1 from '@/assets/modi-1.png';
import modi2 from '@/assets/modi-2.png';
import modi3 from '@/assets/modi-3.png';
import modi4 from '@/assets/modi-4.png';
import modi5 from '@/assets/modi-5.png';
import modi6 from '@/assets/modi-6.png';

// Cookidoo images
import cookidoo1 from '@/assets/cookidoo-1.jpg';
import cookidoo2 from '@/assets/cookidoo-2.jpg';
import cookidoo3 from '@/assets/cookidoo-3.jpg';

// Accessory images
import accessorySpatel from '@/assets/accessory-spatel.jpg';
import accessorySchmetterling from '@/assets/accessory-schmetterling.jpg';
import accessoryVaroma from '@/assets/accessory-varoma.jpg';
import accessoryGarkorb from '@/assets/accessory-garkorb.jpg';

const devices = [
  { img: deviceEierkocher, label: 'Eierkocher' },
  { img: deviceMixer, label: 'Mixer' },
  { img: deviceKochtopf, label: 'Kochtopf' },
  { img: deviceWasserkocher, label: 'Wasserkocher' },
  { img: deviceRuehrgeraet, label: 'Rührgerät' },
  { img: deviceWaage, label: 'Küchenwaage' },
  { img: deviceFleischwolf, label: 'Fleischwolf' },
  { img: deviceKuechenmaschine, label: 'Küchenmaschine' },
];

const accessories = [
  {
    title: 'Der Thermomix® Spatel',
    img: accessorySpatel,
    features: ['Passgenau für den TM7', 'Hitzebeständig & stabil', 'Flexibel zum Auskratzen', 'Spülmaschinengeeignet'],
  },
  {
    title: 'Der Schmetterlingsaufsatz',
    img: accessorySchmetterling,
    features: ['Ideal für Schlagobers, Eischnee und luftige Cremes', 'Schonend und gleichmäßig'],
  },
  {
    title: 'Der Varoma® Dampfgaraufsatz',
    img: accessoryVaroma,
    features: ['Schonendes Dampfgaren auf mehreren Ebenen', 'Ideal für Gemüse, Fisch und ganze Menüs', 'Gesund garen ohne Geschmacksverlust'],
  },
  {
    title: 'Das Garkörbchen',
    img: accessoryGarkorb,
    features: ['Perfekt zum Abseihen und Dampfgaren kleiner Zutaten', 'Für Reis, Erdäpfel, Nudeln und mehr'],
  },
];

const specs = [
  {
    category: 'Motor & Antrieb',
    items: [
      { label: 'Motortyp', value: 'Wartungsfreier Vorwerk-Synchronmotor' },
      { label: 'Antriebsleistung', value: '500 W' },
      { label: 'Drehzahlbereich', value: 'ca. 40 – 10.700 U/min' },
      { label: 'Teigmodus', value: 'Intervallbetrieb speziell fürs Kneten' },
      { label: 'Motorschutz', value: 'Elektronischer Überlastungsschutz' },
      { label: 'Lautstärke', value: 'Ca. 30 dB(A) Stufe 1 / ca. 50 dB(A) mittlere Stufen' },
    ],
  },
  {
    category: 'Heizsystem',
    items: [
      { label: 'Heizleistung', value: '1.000 W' },
      { label: 'Temperaturregelung', value: 'Elektronisch gesteuert' },
      { label: 'Sicherheit', value: 'Automatische Abschaltung bei Überhitzung' },
    ],
  },
  {
    category: 'Integrierte Waage',
    items: [
      { label: 'Messbereich', value: '1 g – 3.000 g' },
      { label: 'Negativwiegen', value: 'Bis -3.000 g möglich' },
      { label: 'Tara-Funktion', value: 'Ja' },
      { label: 'Wiegen während Betrieb', value: 'Ja' },
    ],
  },
  {
    category: 'Mixtopf',
    items: [
      { label: 'Material', value: 'Rostfreier Edelstahl' },
      { label: 'Isolierung', value: 'Außen isoliert, auch bei Hitze berührbar' },
      { label: 'Sensoren', value: 'Integrierte Temperaturmessung' },
      { label: 'Maximale Füllmenge', value: '2,2 Liter' },
    ],
  },
  {
    category: 'Mixmesser',
    items: [
      { label: 'Klingen', value: '4 Stück' },
      { label: 'Material', value: 'Rostfreier Edelstahl' },
      { label: 'Wartung', value: 'Wartungsfrei geschliffen' },
    ],
  },
  {
    category: 'Strom & Leistung',
    items: [
      { label: 'Netzspannung', value: '220 – 240 V / 50-60 Hz' },
      { label: 'Max. Leistungsaufnahme', value: 'bis zu 2.000 W' },
      { label: 'Netzkabel', value: 'ca. 1m, ausziehbar' },
    ],
  },
  {
    category: 'System & Software',
    items: [
      { label: 'Prozessor', value: 'Mehrkern-Prozessor' },
      { label: 'Updates', value: 'Automatisch über WLAN' },
      { label: 'Erweiterbarkeit', value: 'Neue Funktionen per Software-Update' },
    ],
  },
  {
    category: 'Display & Bedienung',
    items: [
      { label: 'Displaygröße', value: '10 Zoll' },
      { label: 'Displaytyp', value: 'Multi-Touch, hochauflösend' },
      { label: 'Bedienung', value: 'Auch mit nassen / öligen Fingern möglich' },
      { label: 'Rezeptzugriff', value: 'Direkt über integriertes Cookidoo®' },
    ],
  },
  {
    category: 'Maße & Gewicht',
    items: [
      { label: 'Höhe', value: 'ca. 33,6 cm' },
      { label: 'Breite', value: 'ca. 25,3 cm' },
      { label: 'Tiefe', value: 'ca. 40,5 cm' },
      { label: 'Gewicht', value: 'ca. 6,5 kg (ohne Varoma®)' },
    ],
  },
];

const DeviceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % devices.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + devices.length) % devices.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-card shadow-md hover:bg-secondary transition-colors z-10 flex-shrink-0"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-4"
            style={{ transform: `translateX(-${currentIndex * (100 / 4 + 1)}%)` }}
          >
            {[...devices, ...devices].map((device, index) => (
              <div 
                key={`${device.label}-${index}`} 
                className="text-center flex-shrink-0"
                style={{ width: 'calc(25% - 12px)' }}
              >
                <div className="bg-card rounded-2xl p-4 shadow-soft mb-2 aspect-square flex items-center justify-center overflow-hidden">
                  <img
                    src={device.img}
                    alt={device.label}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{device.label}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-card shadow-md hover:bg-secondary transition-colors z-10 flex-shrink-0"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
};

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

const TM7 = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: devicesRef, isVisible: devicesVisible } = useScrollAnimation();
  const { ref: modiRef, isVisible: modiVisible } = useScrollAnimation();
  const { ref: cookidooRef, isVisible: cookidooVisible } = useScrollAnimation();
  const { ref: displayRef, isVisible: displayVisible } = useScrollAnimation();
  const { ref: accessoriesRef, isVisible: accessoriesVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: specsRef, isVisible: specsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>Thermomix® TM7 – Technik, Funktionen & Möglichkeiten | Bernhard Prager</title>
        <meta name="description" content="Der smarte All-in-One-Küchenhelfer für moderne Küchen. Erfahren Sie alles über den Thermomix TM7 - Funktionen, Technik und Vorteile." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          
          {/* HERO */}
          <section className="section-padding" ref={heroRef}>
            <div className={`container-narrow transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Thermomix® TM7
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                    Technik, Funktionen & Möglichkeiten
                  </h1>
                  <p className="text-xl text-primary font-medium mb-6">
                    Der smarte All-in-One-Küchenhelfer für moderne Küchen
                  </p>
                  <p className="text-muted-foreground">
                    Auf dieser Seite zeige ich dir die wichtigsten technischen Merkmale und Funktionen des Thermomix® TM7, 
                    damit du dir ein klareres Bild davon machen kannst, was dieses Gerät im Alltag wirklich leisten kann.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>
                  <img
                    src={tm7Hero}
                    alt="Thermomix TM7"
                    className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* EIN GERÄT – VIELE GERÄTE ERSETZT */}
          <section className="section-padding bg-secondary/30" ref={devicesRef}>
            <div className={`container-narrow transition-all duration-700 ${devicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Vielseitigkeit
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  Ein Gerät – viele Küchengeräte ersetzt
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-4">
                  Der TM7 vereint viele Geräte in einem einzigen System. In der Praxis bedeutet das weniger Platzbedarf, 
                  weniger Abwasch und deutlich einfachere Abläufe in der Küche.
                </p>
                <p className="text-primary font-medium">
                  Alles, was du brauchst – in einem einzigen Gerät
                </p>
              </div>

              <DeviceSlider />

              <p className="text-center text-muted-foreground mt-8 italic">
                Viele meiner Kundinnen und Kunden waren überrascht, wie viele Geräte sie nach kurzer Zeit gar nicht mehr benötigen.
              </p>
            </div>
          </section>

          {/* FUNKTIONEN UND MODI */}
          <section className="section-padding" ref={modiRef}>
            <div className={`container-narrow transition-all duration-700 ${modiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Koch-Modi
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  Funktionen und Geräte
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Der TM7 bietet eine Vielzahl an integrierten Koch- und Arbeitsmodi:
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

              <p className="text-center text-muted-foreground">
                Diese Modi können manuell verwendet oder automatisch über geführte Rezepte gesteuert werden. 
                Gerade diese Kombination aus Technik und Anleitung macht den Thermomix® für so viele attraktiv.
              </p>
            </div>
          </section>

          {/* COOKIDOO */}
          <section className="section-padding bg-secondary/30" ref={cookidooRef}>
            <div className={`container-narrow transition-all duration-700 ${cookidooVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Rezeptplattform
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    Geführtes Kochen mit Cookidoo®
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Der TM7 ist mit der offiziellen Thermomix®-Plattform Cookidoo® verbunden.
                  </p>
                  <p className="font-medium text-foreground mb-3">Damit erhältst du:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Tausende Rezepte aus internationaler Küche direkt am Gerät',
                      'Schritt-für-Schritt-Anleitungen mit Gelinggarantie',
                      'Direkte Benachrichtigungen über den Kocherfolg am Handy',
                      'Automatische Einstellungen für Zeit, Temperatur und Geschwindigkeit',
                      'Wochenplanung leicht gemacht',
                      'Digitale Einkaufslisten'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    Viele Nutzerinnen und Nutzer schätzen besonders, dass sie nicht mehr überlegen müssen, 
                    wie ein Gericht funktioniert. Der Thermomix® führt sie sicher durch den gesamten Kochprozess.
                  </p>
                </div>
                <div>
                  <CookidooSlideshow />
                </div>
              </div>
            </div>
          </section>

          {/* DISPLAY & BEDIENUNG */}
          <section className="section-padding" ref={displayRef}>
            <div className={`container-narrow transition-all duration-700 ${displayVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl"></div>
                    <img
                      src={tm7Hero}
                      alt="Thermomix TM7 Display"
                      className="relative w-full max-w-md mx-auto drop-shadow-2xl"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Bedienung
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    Display & Bedienung
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Der Thermomix® TM7 wird über ein großes Touch-Display bedient.
                  </p>
                  <p className="font-medium text-foreground mb-3">Merkmale:</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Intuitive Menüführung',
                      'Schnelle Reaktion',
                      'Manuelle Einstellungen jederzeit möglich (Schriftgröße, …)',
                      'Direkter Zugriff auf Rezepte – auch ohne Handy',
                      'Laufende Software-Updates über WLAN'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground italic">
                    Auch Personen, die technisch nicht besonders affin sind, finden sich meist sehr schnell zurecht 
                    und schätzen den Mehrwert dieser Displayrevolution.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ZUBEHÖR */}
          <section className="section-padding bg-white" ref={accessoriesRef}>
            <div className={`container-narrow transition-all duration-700 ${accessoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Zubehör
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  Das TM-Paket enthält vielseitige Helfer
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {accessories.map((accessory) => (
                  <div
                    key={accessory.title}
                    className="group bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden border border-border/30"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-white">
                      <img 
                        src={accessory.img} 
                        alt={accessory.title}
                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-foreground mb-4 group-hover:text-primary transition-colors">
                        {accessory.title}
                      </h3>
                      <ul className="space-y-2">
                        {accessory.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-bold">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* UNTERSCHIED ZU KLASSISCHEN KÜCHENMASCHINEN */}
          <section className="section-padding" ref={comparisonRef}>
            <div className={`container-narrow transition-all duration-700 ${comparisonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                    Der Unterschied
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                    Unterschied zu klassischen Küchenmaschinen
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Im Vergleich zu herkömmlichen Küchenmaschinen bietet der TM7:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Aktives Kochen in einem Gerät',
                      'Präzise Temperaturführung',
                      'Geführte Rezepte statt manueller Abläufe',
                      'Viele Kochtechniken in einem System',
                      'Digitale Rezeptverwaltung'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground font-medium">
                    Der Thermomix® ist dadurch deutlich mehr als eine klassische Küchenmaschine – 
                    er ist ein vollständiges Kochsystem.
                  </p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-soft">
                  <img
                    src={deviceKuechenmaschine}
                    alt="Klassische Küchenmaschine"
                    className="w-full rounded-xl mb-4"
                  />
                  <p className="text-center text-muted-foreground text-sm">
                    Klassische Küchenmaschinen können nur rühren und kneten – der TM7 kann kochen, dampfgaren, wiegen und vieles mehr.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TECHNISCHE MERKMALE */}
          <section className="section-padding bg-secondary/30" ref={specsRef}>
            <div className={`container-narrow transition-all duration-700 ${specsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
                  Spezifikationen
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6">
                  Technische Merkmale
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specs.map((specGroup) => (
                  <div key={specGroup.category} className="bg-card p-6 rounded-2xl shadow-soft">
                    <h3 className="font-serif text-lg text-primary mb-4 border-b border-border pb-2">
                      {specGroup.category}
                    </h3>
                    <dl className="space-y-2">
                      {specGroup.items.map((item) => (
                        <div key={item.label} className="flex justify-between gap-2">
                          <dt className="text-sm text-muted-foreground">{item.label}</dt>
                          <dd className="text-sm text-foreground font-medium text-right">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding" ref={ctaRef}>
            <div className={`container-narrow transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                  Interesse geweckt?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Ich zeige dir gerne persönlich, was der Thermomix® TM7 alles kann – 
                  unverbindlich und bei dir zu Hause.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/beratung">Persönliche Beratung anfragen</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-base">
                    <Link to="/showkochen">Showkochen erleben</Link>
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

export default TM7;
