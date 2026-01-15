import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Beratung = () => {
  return (
    <>
      <Helmet>
        <title>Beratung - Mein Rundum-Sorglos-Paket | kochmitthermo21</title>
        <meta name="description" content="Profitieren Sie von meinem Rundum-Sorglos-Paket für Ihre Thermomix Beratung - persönlich, kompetent und individuell." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="section-padding">
            <div className="container-narrow">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up">
                <span className="text-primary">Beratung</span>
              </h1>
              <h2 className="font-serif text-2xl sm:text-3xl text-muted-foreground mb-8 animate-fade-up delay-100">
                Mein Rundum-Sorglos-Paket
              </h2>
              <p className="text-muted-foreground text-lg animate-fade-up delay-200">
                Inhalt folgt in Kürze...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Beratung;