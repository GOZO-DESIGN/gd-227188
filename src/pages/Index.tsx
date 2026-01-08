import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PasswordProtection from '@/components/PasswordProtection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Import images
import heroImage from '@/assets/hero-thermomix.jpg';
import aboutImage from '@/assets/about-portrait.jpg';
import insta1 from '@/assets/insta-1.jpg';
import insta2 from '@/assets/insta-2.jpg';
import insta3 from '@/assets/insta-3.jpg';
import insta4 from '@/assets/insta-4.jpg';
import insta5 from '@/assets/insta-5.jpg';
import insta6 from '@/assets/insta-6.jpg';
import insta7 from '@/assets/insta-7.jpg';
import insta8 from '@/assets/insta-8.jpg';

const CACHE_KEY = 'thermomix_access_granted';

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8];

  if (!isUnlocked) {
    return (
      <>
        <Helmet>
          <title>kochmitthermo21 | Ihre Thermomix® Beraterin</title>
          <meta 
            name="description" 
            content="Entdecken Sie die Welt des einfachen und kreativen Kochens mit dem Thermomix®. Persönliche Beratung und Vorführungen in Ihrer Region."
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
        <title>kochmitthermo21 | Ihre Thermomix® Beraterin – Kochen mit Leidenschaft</title>
        <meta 
          name="description" 
          content="Entdecken Sie die Welt des einfachen, gesunden und kreativen Kochens mit dem Thermomix®. Persönliche Beratung, Vorführungen und Rezeptideen von Ihrer zertifizierten Thermomix® Beraterin."
        />
        <meta name="keywords" content="Thermomix, Beratung, Kochen, Rezepte, Vorführung, Küchenmaschine, gesund kochen" />
        <meta property="og:title" content="kochmitthermo21 | Ihre Thermomix® Beraterin" />
        <meta property="og:description" content="Entdecken Sie die Welt des einfachen und kreativen Kochens mit dem Thermomix®." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kochmitthermo21.de" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection heroImage={heroImage} />
          <BenefitsSection />
          <AboutSection aboutImage={aboutImage} />
          <InstagramSection images={instagramImages} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
