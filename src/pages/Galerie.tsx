import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Galerie = () => {
  return (
    <>
      <Helmet>
        <title>Galerie | kochmitthermo21</title>
        <meta name="description" content="Impressionen aus meinen Showkochen-Events und Thermomix Beratungen - lassen Sie sich inspirieren!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="section-padding">
            <div className="container-narrow">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up">
                <span className="text-primary">Galerie</span>
              </h1>
              <p className="text-muted-foreground text-lg animate-fade-up delay-100">
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

export default Galerie;