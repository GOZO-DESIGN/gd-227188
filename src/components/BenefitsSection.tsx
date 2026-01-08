import { Clock, Heart, Sparkles, Users } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Zeit sparen',
    description: 'Bis zu 70% schneller kochen dank intelligenter Technik und geführter Rezepte.',
  },
  {
    icon: Heart,
    title: 'Gesund genießen',
    description: 'Frische Zutaten, nährstoffschonendes Garen und volle Kontrolle über alle Inhaltsstoffe.',
  },
  {
    icon: Sparkles,
    title: 'Vielfalt erleben',
    description: 'Über 75.000 Rezepte auf Cookidoo® – von einfach bis exquisit, für jeden Geschmack.',
  },
  {
    icon: Users,
    title: 'Persönliche Beratung',
    description: 'Individuelle Einführung und kontinuierliche Unterstützung für Ihren Kochalltag.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
            Ihre Vorteile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
            Warum Thermomix®?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Der Thermomix® vereint über 20 Küchengeräte in einem. Entdecken Sie, 
            wie er Ihren Alltag bereichert.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group bg-card p-6 lg:p-8 rounded-2xl shadow-soft hover-lift animate-fade-up`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-5 
                transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <benefit.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
