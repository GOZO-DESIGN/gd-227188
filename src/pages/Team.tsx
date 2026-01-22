import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Heart, Sparkles, Clock, BookOpen, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teamfoto from '@/assets/teamfoto.jpg';
import logoKoenig from '@/assets/logo-koenig.png';

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=%2B436763979250&text&type=phone_number&app_absent=0';

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
        <title>{t('team.meta.title')}</title>
        <meta name="description" content={t('team.meta.description')} />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <img 
                src={logoKoenig} 
                alt="Team König Logo" 
                className="h-24 md:h-32 mx-auto mb-8"
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/10">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto text-center">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                {t('team.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('team.cta.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/beratung"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold
                    transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1"
                >
                  {t('team.cta.contact')}
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold
                    transition-all duration-300 hover:bg-[#128C7E] hover:shadow-xl hover:-translate-y-1"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Team;