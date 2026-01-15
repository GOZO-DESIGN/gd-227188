import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TM7 = () => {
  return (
    <>
      <Helmet>
        <title>Was ist der TM7 | kochmitthermo21</title>
        <meta name="description" content="Erfahren Sie alles über den Thermomix TM7 - Funktionen, Vorteile und warum er Ihre Küche revolutionieren wird." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 md:pt-40">
          <div className="section-padding">
            <div className="container-narrow">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up">
                Was ist der <span className="text-primary">TM7</span>?
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

export default TM7;