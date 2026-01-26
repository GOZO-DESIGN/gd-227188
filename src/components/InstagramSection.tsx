import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const InstagramSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container-narrow" ref={ref}>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            <p className="text-lg font-medium text-foreground">
              {t('instagram.followMe')}
            </p>
          </div>
          
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/kochmitthermo21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              @kochmitthermo21
            </a>
            <Link
              to="/galerie"
              className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium border border-border
                transition-all duration-300 hover:bg-secondary"
            >
              {t('instagram.viewGallery')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;