import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import OffersSection from '@/components/OffersSection';
import AboutSection from '@/components/AboutSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import InstagramSection from '@/components/InstagramSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// Import images
import aboutImage from '@/assets/about-portrait.webp';

const FAQSection = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  // FAQ JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="section-padding bg-secondary/30" id="faq">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container-narrow" ref={ref}>
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4">
              {t('faq.tagline')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA after FAQ */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Noch Fragen? Ich helfe dir gerne persönlich weiter.</p>
            <Link
              to="/beratung"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium
                transition-all duration-300 hover:bg-primary/90 hover:shadow-elevated hover:-translate-y-1"
            >
              Jetzt Beratung anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const { t } = useTranslation();

  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bernhard Prager – Thermomix® Berater",
    "description": "Zertifizierter Thermomix® Berater in Wien, Niederösterreich und Burgenland. Thermomix testen beim kostenlosen Showkochen, persönliche Beratung und TM7 Vorführungen.",
    "url": "https://mixmitprager.at",
    "telephone": "+436763979250",
    "email": "office@mixmitprager.at",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wassermanngasse 8",
      "addressLocality": "Wien",
      "postalCode": "1210",
      "addressRegion": "Wien",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.2480",
      "longitude": "16.3870"
    },
    "areaServed": [
      { "@type": "State", "name": "Wien" },
      { "@type": "State", "name": "Niederösterreich" },
      { "@type": "State", "name": "Burgenland" }
    ],
    "priceRange": "€€",
    "image": "https://mixmitprager.at/og-image.jpg",
    "sameAs": [
      "https://www.instagram.com/kochmitthermo21"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('seo.index.titleFull')}</title>
        <meta 
          name="description" 
          content={t('seo.index.descriptionFull')}
        />
        <meta name="keywords" content={t('seo.index.keywords')} />
        <meta property="og:title" content={t('seo.index.title')} />
        <meta property="og:description" content={t('seo.index.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mixmitprager.at/" />
        <link rel="canonical" href="https://mixmitprager.at/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <OffersSection />
          <BenefitsSection />
          <AboutSection aboutImage={aboutImage} />
          <GoogleReviewsSection />
          <FAQSection />
          <InstagramSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;