import { useState } from 'react';
import { Phone, Mail, MapPin, Send, ChevronRight, ChevronLeft, Calendar, Check } from 'lucide-react';

const serviceOptions = [
  { id: 'showkochen', label: 'Showkochen in Wien/NÖ/BGLD' },
  { id: 'beratung', label: 'Beratungstermin' },
  { id: 'bestellung', label: 'Bestellung eines TM7!' },
  { id: 'info', label: 'Weitere Informationen' },
];

const ContactSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1 && !formData.service) {
      newErrors.service = 'Bitte wählen Sie eine Option aus.';
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name ist erforderlich.';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Telefonnummer ist erforderlich.';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'E-Mail ist erforderlich.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      }
    }

    if (currentStep === 4 && !formData.consent) {
      newErrors.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      console.log('Form submitted:', formData);
      // Here you would send the data to your backend
      alert('Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen.');
      setStep(1);
      setFormData({
        service: '',
        preferredDate: '',
        preferredTime: '',
        name: '',
        phone: '',
        email: '',
        message: '',
        consent: false,
      });
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background transition-all duration-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section className="section-padding gradient-warm" id="kontakt">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
              Kontakt
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
              Lassen Sie uns <br />ins Gespräch kommen
            </h2>
            
            <p className="text-muted-foreground mb-10 animate-fade-up delay-200">
              Haben Sie Fragen zum Thermomix® oder möchten Sie eine persönliche 
              Vorführung erleben? Ich freue mich auf Ihre Nachricht!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+436763979250"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group animate-fade-up delay-300"
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground">+43 676 397 9250</p>
                </div>
              </a>

              <a
                href="mailto:office@mixmitprager.at"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group animate-fade-up delay-400"
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="font-medium text-foreground">office@mixmitprager.at</p>
                </div>
              </a>

              <div className="flex items-center gap-4 animate-fade-up delay-500">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Adresse</p>
                  <p className="font-medium text-foreground">Bernhard Prager</p>
                  <p className="text-sm text-muted-foreground">Viehtriftgasse 3, A-1210 Wien</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Contact Form */}
          <div className="animate-slide-in-right delay-200">
            <form 
              className="bg-card p-8 lg:p-10 rounded-2xl shadow-card"
              onSubmit={handleSubmit}
            >
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                      step >= s 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 4 && (
                      <div className={`w-12 sm:w-16 h-1 mx-1 rounded transition-all duration-300 ${
                        step > s ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    Für welches unserer Produkte oder Dienstleistungen möchten Sie Informationen anfordern? *
                  </h3>
                  
                  <div className="space-y-3">
                    {serviceOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                          formData.service === option.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={option.id}
                          checked={formData.service === option.id}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-4 h-4 text-primary accent-primary"
                        />
                        <span className="text-foreground">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {step === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    Wunschtermin und mögliches Zeitfenster für ein Telefonat
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Wunschtermin
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Bevorzugtes Zeitfenster
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="vormittag">Vormittag (9:00 - 12:00)</option>
                      <option value="mittag">Mittag (12:00 - 14:00)</option>
                      <option value="nachmittag">Nachmittag (14:00 - 17:00)</option>
                      <option value="abend">Abend (17:00 - 19:00)</option>
                      <option value="flexibel">Flexibel</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    Ihre Kontaktdaten
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                      className={inputClass}
                      maxLength={100}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+43 ..."
                      className={inputClass}
                      maxLength={20}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre.email@beispiel.at"
                      className={inputClass}
                      maxLength={255}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              )}

              {/* Step 4: Message & Consent */}
              {step === 4 && (
                <div className="space-y-5 animate-fade-in">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    Ihre Nachricht
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nachricht (optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder="Wie kann ich Ihnen helfen?"
                      className={`${inputClass} resize-none`}
                      maxLength={1000}
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="w-5 h-5 mt-0.5 text-primary accent-primary rounded"
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Durch Klicken des „Abschicken"-Buttons stimme ich zu, dass die im Formular 
                        eingegebenen personenbezogenen Daten zur Bearbeitung der Anfrage und der 
                        personalisierten Beratung verarbeitet werden. Meine Einwilligungen kann ich 
                        jederzeit mit Wirkung für die Zukunft postalisch oder per E-Mail widerrufen.
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                    
                    <p className="text-sm text-muted-foreground">
                      Es gilt unsere{' '}
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-primary hover:underline">
                        Datenschutzerklärung
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 flex items-center justify-center gap-2 bg-muted text-foreground py-4 px-6 rounded-lg font-medium
                      transition-all duration-300 hover:bg-muted/80"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Zurück
                  </button>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium
                      transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    Weiter
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium
                      transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    Abschicken
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
