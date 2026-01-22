import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="container-narrow">
        <div className="bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Icon and Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cookie className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {t('cookies.title')}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('cookies.text')}{' '}
                <Link 
                  to="/datenschutz" 
                  className="text-primary hover:underline"
                >
                  {t('cookies.learnMore')}
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl border border-border text-foreground font-medium
                  transition-all duration-300 hover:bg-secondary hover:border-primary/30"
              >
                {t('cookies.decline')}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium
                  transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                {t('cookies.accept')}
              </button>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={handleDecline}
              className="absolute top-4 right-4 md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;