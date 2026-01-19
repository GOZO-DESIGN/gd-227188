import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AGB = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-warm-beige">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-brown mb-8">
            {t('terms.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-deep-brown/80">
            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('terms.scopeTitle')}
              </h2>
              <p>{t('terms.scopeText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('terms.servicesTitle')}
              </h2>
              <p>{t('terms.servicesText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('terms.liabilityTitle')}
              </h2>
              <p>{t('terms.liabilityText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('terms.copyrightTitle')}
              </h2>
              <p>{t('terms.copyrightText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('terms.finalTitle')}
              </h2>
              <p>{t('terms.finalText')}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AGB;
