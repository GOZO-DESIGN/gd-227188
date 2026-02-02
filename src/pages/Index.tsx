import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PasswordProtection from '@/components/PasswordProtection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import OffersSection from '@/components/OffersSection';
import AboutSection from '@/components/AboutSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import InstagramSection from '@/components/InstagramSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Import images
import aboutImage from '@/assets/about-portrait.webp';

const CACHE_KEY = 'thermomix_access_granted';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  if (!isUnlocked) {
    return (
      <>
        <Helmet>
          <title>{t('seo.index.title')}</title>
          <meta 
            name="description" 
            content={t('seo.index.description')}
          />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <PasswordProtection onUnlock={() => setIsUnlocked(true)} />
      </>
    );
  }

  // JSON-LD Schema for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mix mit Prager - Thermomix Beratung",
    "description": "Zertifizierter Thermomix Berater in Wien, Niederösterreich und Burgenland. Showkochen, persönliche Beratung und TM7 Vorführungen.",
    "url": "https://mixmitprager.at",
    "telephone": "+43 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wien",
      "addressRegion": "Wien",
      "addressCountry": "AT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.2082",
      "longitude": "16.3738"
    },
    "areaServed": [
      { "@type": "State", "name": "Wien" },
      { "@type": "State", "name": "Niederösterreich" },
      { "@type": "State", "name": "Burgenland" }
    ],
    "priceRange": "€€",
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
          <BenefitsSection />
          <OffersSection />
          <AboutSection aboutImage={aboutImage} />
          <GoogleReviewsSection />
          <InstagramSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;