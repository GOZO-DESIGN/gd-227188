import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send, ChevronRight, ChevronLeft, Calendar, Check, Loader2 } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ContactCTAProps {
  className?: string;
}

const ContactCTA = ({ className = '' }: ContactCTAProps) => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    { id: 'showkochen', label: t('contact.form.services.showkochen') },
    { id: 'beratung', label: t('contact.form.services.beratung') },
    { id: 'bestellung', label: t('contact.form.services.bestellung') },
    { id: 'info', label: t('contact.form.services.info') },
  ];

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1 && !formData.service) {
      newErrors.service = t('contact.form.errors.serviceRequired');
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) {
        newErrors.name = t('contact.form.errors.nameRequired');
      }
      if (!formData.phone.trim()) {
        newErrors.phone = t('contact.form.errors.phoneRequired');
      }
      if (!formData.email.trim()) {
        newErrors.email = t('contact.form.errors.emailRequired');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t('contact.form.errors.emailInvalid');
      }
    }

    if (currentStep === 4 && !formData.consent) {
      newErrors.consent = t('contact.form.errors.consentRequired');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          service: formData.service,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) throw error;

      toast.success(t('contact.form.successMessage'));
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
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error(t('contact.form.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background transition-all duration-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section className={`section-padding gradient-warm overflow-hidden ${className}`} id="kontakt">
      <div className="container-narrow px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="inline-block text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {t('contact.tagline')}
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              {t('contact.title')} <br />{t('contact.titleHighlight')}
            </h2>
            
            <p className="text-muted-foreground mb-10">
              {t('contact.subtitle')}
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+436763979250"
                className={`flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                  <p className="font-medium text-foreground">+43 676 397 9250</p>
                </div>
              </a>

              <a
                href="mailto:office@mixmitprager.at"
                className={`flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                  <p className="font-medium text-foreground">office@mixmitprager.at</p>
                </div>
              </a>

              <div 
                className={`flex items-center gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.address')}</p>
                  <p className="font-medium text-foreground">Bernhard Prager</p>
                  <p className="text-sm text-muted-foreground">Wassermanngasse 8, A-1210 Wien</p>


                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Contact Form */}
          <div className={`min-w-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form 
              className="bg-card p-4 sm:p-6 lg:p-10 rounded-2xl shadow-card overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center flex-1 last:flex-none">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 flex-shrink-0 ${
                      step >= s 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > s ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : s}
                    </div>
                    {s < 4 && (
                      <div className={`flex-1 h-1 mx-1 sm:mx-2 rounded transition-all duration-300 ${
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
                    {t('contact.form.step1Title')}
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
                    {t('contact.form.step2Title')}
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {t('contact.form.preferredDate')}
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
                      {t('contact.form.preferredTime')}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">{t('contact.form.timeOptions.placeholder')}</option>
                      <option value="vormittag">{t('contact.form.timeOptions.morning')}</option>
                      <option value="mittag">{t('contact.form.timeOptions.noon')}</option>
                      <option value="nachmittag">{t('contact.form.timeOptions.afternoon')}</option>
                      <option value="abend">{t('contact.form.timeOptions.evening')}</option>
                      <option value="flexibel">{t('contact.form.timeOptions.flexible')}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    {t('contact.form.step3Title')}
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={inputClass}
                      maxLength={100}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.phone')} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('contact.form.phonePlaceholder')}
                      className={inputClass}
                      maxLength={20}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.emailPlaceholder')}
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
                    {t('contact.form.step4Title')}
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      placeholder={t('contact.form.messagePlaceholder')}
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
                        {t('contact.form.consent')}
                      </span>
                    </label>
                    {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
                    
                    <p className="text-sm text-muted-foreground">
                      {t('contact.form.privacyText')}{' '}
                      <a href="#" onClick={(e) => e.preventDefault()} className="text-primary hover:underline">
                        {t('contact.form.privacyLink')}
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 flex items-center justify-center gap-2 bg-muted text-foreground py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base
                      transition-all duration-300 hover:bg-muted/80"
                  >
                    <ChevronLeft className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{t('contact.form.back')}</span>
                  </button>
                )}
                
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base
                      transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    <span className="truncate">{t('contact.form.next')}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base
                      transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 flex-shrink-0 animate-spin" />
                        <span className="truncate">Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <span className="truncate">{t('contact.form.submit')}</span>
                        <Send className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
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

export default ContactCTA;
