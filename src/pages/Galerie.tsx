import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Galerie = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('seo.gallery.title')}</title>
        <meta name="description" content={t('seo.gallery.description')} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="section-padding">
            <div className="container-narrow">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up">
                <span className="text-primary">{t('gallery.title')}</span>
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-up delay-100">
                {t('gallery.comingSoon')}
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Galerie;