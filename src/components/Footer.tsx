import { Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
  ];

  return (
    <footer className="bg-deep-brown text-warm-beige py-12">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl mb-2">Bernhard Prager</p>
            <p className="text-sm opacity-70">Ihr Thermomix® Berater</p>
            <p className="text-xs opacity-50 mt-1">Viehtriftgasse 3, A-1210 Wien</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => e.preventDefault()}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://www.instagram.com/kochmitthermo21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@kochmitthermo21</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-60 flex items-center justify-center gap-1">
            © {currentYear} kochmitthermo21. Mit <Heart className="w-4 h-4 text-accent" /> erstellt.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
