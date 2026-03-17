import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Users, Heart, Sparkles, Clock, BookOpen, ArrowRight, Check, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import teamfoto from '@/assets/teamfoto.jpg';
import logoKoenig from '@/assets/logo-koenig.png';
import promoWegTm7 from '@/assets/promo-weg-tm7.jpg';

const Team = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Users, text: t('team.benefits.people') },
    { icon: Heart, text: t('team.benefits.passion') },
    { icon: Users, text: t('team.benefits.support') },
    { icon: Sparkles, text: t('team.benefits.earlyAccess') },
    { icon: Clock, text: t('team.benefits.flexible') },
    { icon: Clock, text: t('team.benefits.freeSchedule') },
  ];

  const requirements = [
    { icon: Heart, text: t('team.requirements.people') },
    { icon: BookOpen, text: t('team.requirements.cooking') },
    { icon: Sparkles, text: t('team.requirements.openness') },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.team.title')}</title>
        <meta name="description" content={t('seo.team.description')} />
        <link rel="canonical" href="https://mixmitprager.at/team" />
        <meta property="og:title" content={t('seo.team.title')} />
        <meta property="og:description" content={t('seo.team.description')} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <img 
                src={logoKoenig} 
                alt="Team König Logo" 
                className="h-32 md:h-44 mx-auto mb-8"
              />
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {t('team.hero.title')} – <span className="text-primary">{t('team.hero.teamName')}</span>
              </h1>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img 
                src={teamfoto} 
                alt={t('team.hero.imageAlt')} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                {t('team.story.intro')}
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                {t('team.story.teamKoenig')}
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                {t('team.story.sideIncome')}
              </p>
              <p className="text-lg text-muted-foreground italic">
                {t('team.story.cta')}
              </p>
            </div>
          </div>
        </section>

        {/* What Makes This Job Special */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {t('team.special.tagline')}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                {t('team.special.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('team.special.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-foreground font-medium">
              {t('team.special.outro')}
            </p>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                {t('team.requirements.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('team.requirements.noExperience')}
              </p>
              <p className="text-lg font-medium text-foreground mb-8">
                {t('team.requirements.important')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {requirements.map((req, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-card px-6 py-4 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <req.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{req.text}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              {t('team.requirements.opportunities')}
            </p>
          </div>
        </section>

        {/* Dein Weg zum TM7 Promo */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                🔥 {t('team.promo.tagline')}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                {t('team.promo.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('team.promo.subtitle')}
              </p>
            </div>

            {/* Infographic Image */}
            <div className="flex justify-center mb-12">
              <div className="max-w-md rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={promoWegTm7} 
                  alt="Dein Weg zum TM7 – Verkaufsstufen Übersicht" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {(['step1', 'step2', 'step3', 'step4'] as const).map((step, index) => {
                const isLast = index === 3;
                return (
                  <div
                    key={step}
                    className={`relative p-6 rounded-xl border text-center transition-all duration-300 hover:shadow-lg ${
                      isLast
                        ? 'bg-primary/10 border-primary/30 ring-2 ring-primary/20'
                        : 'bg-card border-border hover:border-primary/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      isLast ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                    }`}>
                      {isLast ? (
                        <Gift className="w-6 h-6" />
                      ) : (
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      )}
                    </div>
                    <p className="font-semibold text-foreground mb-1">
                      {t(`team.promo.${step}.sale`)}
                    </p>
                    <p className={`text-2xl font-bold mb-1 ${isLast ? 'text-primary' : 'text-foreground'}`}>
                      {t(`team.promo.${step}.price`)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t(`team.promo.${step}.label`)}
                    </p>
                    {step === 'step2' && (
                      <p className="text-xs text-primary mt-2 font-medium">
                        + {t('team.promo.step2.bonus')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Extras */}
            <div className="max-w-2xl mx-auto space-y-3 mb-10">
              {(t('team.promo.extras', { returnObjects: true }) as string[]).map((extra, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{extra}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/#kontakt"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1 group"
              >
                {t('team.promo.cta')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default Team;
