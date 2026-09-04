import { Instagram, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: t('footer.imprint'), href: '/impressum' },
    { label: t('footer.privacy'), href: '/datenschutz' },
    { label: t('footer.terms'), href: '/agb' },
  ];

  const siteLinks = [
    { label: 'Thermomix® TM7', href: '/tm7' },
    { label: 'Beratung', href: '/beratung' },
    { label: 'Showkochen', href: '/showkochen' },
    { label: 'Blog', href: '/blog' },
    { label: 'Team', href: '/team' },
  ];

  return (
    <footer className="bg-deep-brown text-warm-beige py-12">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Contact */}
          <div>
            <p className="font-serif text-2xl mb-2">Bernhard Prager</p>
            <p className="text-sm opacity-70 mb-3">{t('footer.tagline')}</p>
            <p className="text-xs opacity-50 mb-4">Wassermanngasse 8, A-1210 Wien</p>

            
            <div className="space-y-2">
              <a href="tel:+436763979250" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> +43 676 397 9250
              </a>
              <a href="mailto:office@mixmitprager.at" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" /> office@mixmitprager.at
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <p className="font-medium mb-3">Seiten</p>
            <nav className="flex flex-col gap-2">
              {siteLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.vorwerk.com/at/de/c/home/produkt-vorfuehrung/thermomix.html/bernhard.prager-b.ed.#thermomix-zubehoer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Thermomix® Zubehör bestellen
              </a>
            </nav>
          </div>

          {/* Legal & Social */}
          <div>
            <p className="font-medium mb-3">Rechtliches</p>
            <nav className="flex flex-col gap-2 mb-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
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
        </div>

        <div className="border-t border-warm-beige/20 pt-6 text-center">
          <p className="text-xs opacity-50">
            © {currentYear} Bernhard Prager – Thermomix® Berater in Wien, Niederösterreich & Burgenland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
