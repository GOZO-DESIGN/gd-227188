import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const Galerie = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('seo.gallery.title')}</title>
        <meta name="description" content={t('seo.gallery.description')} />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="section-padding">
            <div className="container-narrow">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-12 animate-fade-up">
                <span className="text-primary">{t('gallery.title')}</span>
              </h1>
              
              {/* Instagram Feed Embed */}
              <div className="animate-fade-up delay-200">
                <div 
                  className="elfsight-app-7b2f6942-994b-426c-b558-37261b349130" 
                  data-elfsight-app-lazy
                />
              </div>
            </div>
          </div>

          {/* CONTACT CTA */}
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Galerie;
