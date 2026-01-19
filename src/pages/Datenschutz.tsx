import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-warm-beige">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-brown mb-8">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-deep-brown/80">
            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.generalTitle')}
              </h2>
              <p>{t('privacy.generalText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.dataCollectionTitle')}
              </h2>
              <p>{t('privacy.dataCollectionText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.cookiesTitle')}
              </h2>
              <p>{t('privacy.cookiesText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.rightsTitle')}
              </h2>
              <p>{t('privacy.rightsText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.contactTitle')}
              </h2>
              <p>{t('privacy.contactText')}</p>
              <p>E-Mail: bernhard.prager@thermomix.at</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;
