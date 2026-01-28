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
        <link rel="canonical" href="https://kochmitthermo21.de" />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <BenefitsSection />
          <AboutSection aboutImage={aboutImage} />
          <OffersSection />
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