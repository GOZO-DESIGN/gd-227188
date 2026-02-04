import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.svg';

const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=%2B436763979250&text&type=phone_number&app_absent=0';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" />
  </svg>
);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang.flag}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden min-w-[140px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-secondary transition-colors ${
                  lang.code === i18n.language ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.start'), href: '/' },
    { label: t('nav.tm7'), href: '/tm7' },
    { label: t('nav.showkochen'), href: '/showkochen' },
    { label: t('nav.beratung'), href: '/beratung' },
    { label: t('nav.galerie'), href: '/galerie' },
    { label: t('nav.team'), href: '/team' },
    { label: t('nav.blog'), href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-border/50 transition-all duration-300 ${isScrolled ? 'py-0.5' : 'py-1'}`}>
      <div className="container-narrow">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-all duration-300">
            <img 
              src={logo} 
              alt="Bernhard Prager - Thermomix Berater Logo" 
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-20 md:h-28'}`} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors duration-300 link-underline py-1 ${
                  location.pathname === link.href 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language, WhatsApp & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSelector />
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white
                transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="WhatsApp Kontakt"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            
            <Link
              to="/beratung"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium
                transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('nav.bookConsultation')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-300 py-2 ${
                    location.pathname === link.href 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-medium
                  transition-all duration-300 hover:bg-[#128C7E] mt-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                to="/beratung"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium text-center
                  transition-all duration-300 hover:bg-primary/90"
              >
                {t('nav.bookConsultation')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
