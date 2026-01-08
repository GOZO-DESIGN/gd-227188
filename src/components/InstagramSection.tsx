import { Instagram, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-medium tracking-wide uppercase text-sm mb-4 animate-fade-up">
            Inspiration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 animate-fade-up delay-100">
            Folgen Sie mir auf Instagram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200">
            Entdecken Sie leckere Rezepte, Tipps und Einblicke in meinen Kochalltag 
            mit dem Thermomix®.
          </p>
        </div>

        {/* Instagram Profile Card */}
        <div className="max-w-2xl mx-auto animate-scale-in delay-300">
          <a
            href="https://www.instagram.com/kochmitthermo21/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-2 group"
          >
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
                  <Instagram className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">@kochmitthermo21</h3>
                  <p className="text-white/80 text-sm">Thermomix® Beraterin</p>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                🍳 Einfache & leckere Rezepte<br />
                💚 Gesund kochen mit dem Thermomix®<br />
                ✨ Tipps & Tricks für Ihren Küchenalltag
              </p>

              {/* Stats Preview */}
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>Rezeptideen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 text-accent" />
                  <span>Koch-Tipps</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg">
                <Instagram className="w-5 h-5" />
                Profil auf Instagram öffnen
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </div>

        {/* Alternative: Embed hint */}
        <p className="text-center text-sm text-muted-foreground mt-8 animate-fade-up delay-500">
          Täglich neue Inspiration auf Instagram
        </p>
      </div>
    </section>
  );
};

export default InstagramSection;
