import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.avif';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Start', href: '#' },
    { label: 'Vorteile', href: '#' },
    { label: 'Über mich', href: '#' },
    { label: 'Rezepte', href: '#' },
    { label: 'Kontakt', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity duration-300">
            <img src={logo} alt="kochmitthermo21 Logo" className="h-10 md:h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => e.preventDefault()}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 link-underline py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium
              transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            Beratung buchen
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menü öffnen"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => e.preventDefault()}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium text-center
                  transition-all duration-300 hover:bg-primary/90 mt-2"
              >
                Beratung buchen
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
