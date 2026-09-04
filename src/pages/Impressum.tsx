import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-warm-beige">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-brown mb-8">
            {t('imprint.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-deep-brown/80">
            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('imprint.infoTitle')}
              </h2>
              <p>Bernhard Prager</p>
              <p>Wassermanngasse 8</p>
              <p>1210 Wien</p>

              <p className="mt-2">Bernhard Prager - Selbstständiger Thermomixberater</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('imprint.contactTitle')}
              </h2>
              <p>Telefon: +43 676 397 92 50</p>
              <p>E-Mail: prager.bernhard@gmx.at</p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('imprint.editorialTitle')}
              </h2>
              <p>Bernhard Prager</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
