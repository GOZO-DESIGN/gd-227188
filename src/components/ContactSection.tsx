import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding gradient-warm" id="kontakt">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
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
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group animate-fade-up delay-300"
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground">+49 123 456 7890</p>
                </div>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group animate-fade-up delay-400"
              >
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-Mail</p>
                  <p className="font-medium text-foreground">hallo@kochmitthermo21.de</p>
                </div>
              </a>

              <div className="flex items-center gap-4 animate-fade-up delay-500">
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Region</p>
                  <p className="font-medium text-foreground">Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right delay-200">
            <form 
              className="bg-card p-8 lg:p-10 rounded-2xl shadow-card"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">
                Nachricht senden
              </h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ihr Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background 
                      transition-all duration-300 outline-none
                      focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="ihre.email@beispiel.de"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background 
                      transition-all duration-300 outline-none
                      focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Wie kann ich Ihnen helfen?"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background 
                      transition-all duration-300 outline-none resize-none
                      focus:border-primary focus:ring-2 focus:ring-primary/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium
                    transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
                >
                  Nachricht senden
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
