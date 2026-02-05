// Blog posts data
import blogBaby1 from '@/assets/blog-baby-1.jpg';
import blogBaby2 from '@/assets/blog-baby-2.jpg';
import blogBabyBottles from '@/assets/blog-baby-bottles.jpg';
import blogDampfgaren from '@/assets/blog-dampfgaren-icon.jpg';
import blogDisplay from '@/assets/blog-display.jpg';
import blogOnepotPasta from '@/assets/blog-onepot-pasta.jpg';
import blogOnepotSpaghetti from '@/assets/blog-onepot-spaghetti.jpg';
import blogOnepotThermomix from '@/assets/blog-onepot-thermomix.jpg';
import blogOnepotSauce from '@/assets/blog-onepot-sauce.jpg';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  excerpt: string;
  content: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  featuredImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mit-baby-laeuft-nichts-perfekt',
    title: 'Mit Baby läuft nichts perfekt – aber manches läuft einfach',
    date: '2025-02-03',
    excerpt: 'Ich bin Papa von drei Kindern. Mit Baby sind es nicht die großen Dinge, die anstrengend sind. Es sind die vielen kleinen Handgriffe, die sich über den Tag – und die Nacht – verteilen.',
    featuredImage: blogBaby2,
    content: `Ich bin Papa von drei Kindern.

5 Jahre, 3 Jahre und ein Baby, das erst seit kurzem bei uns ist.

Und wenn ich eines gelernt habe, dann das:

Mit Baby sind es nicht die großen Dinge, die anstrengend sind.

Es sind die vielen kleinen Handgriffe, die sich über den Tag – und die Nacht – verteilen.

- Fläschchen.
- Schnuller.
- Wasser abkochen.

… immer wieder. Und meistens dann, wenn man eigentlich gerade keine Ruhe hat.

## Babyalltag besteht aus Wiederholungen

Mit einem Baby läuft vieles gleich ab.

Nicht einmal am Tag, sondern mehrmals.

- Ein Schnuller fällt runter.
- Ein Fläschchen muss sauber sein.
- Wasser soll passen – nicht zu heiß, nicht zu kalt.

Früher hätte ich dafür einen Topf aufgestellt und nebenbei gehofft, dass ich nichts vergesse.

Heute bin ich froh über alles, was mir genau diese Gedanken abnimmt.

## Mit dem Thermomix läuft der Babyalltag einfach ruhiger

Der Thermomix steht bei uns nicht „fürs Baby" da.

Er steht einfach da – und hilft.

Fläschchen rein, Wasser rein, Zeit einstellen.

Ich muss nicht daneben stehen.

Ich muss nicht aufpassen.

Ich kann mich in der Zeit um eines der anderen Kinder kümmern oder kurz durchatmen.

Wenn ein Schnuller runterfällt, wird er abgekocht.

Wenn Wasser gebraucht wird, ist es konstant und zuverlässig.

Nichts Spektakuläres.

Aber genau das macht es so angenehm.

## Es geht nicht um Zeit – sondern um Ruhe

Ich habe durch den Thermomix nicht plötzlich mehr Freizeit.

Aber ich habe weniger diese kleinen Stressmomente.

- Nicht überlegen müssen.
- Nicht kontrollieren müssen.
- Nicht im Kopf mitdenken müssen.

Und gerade mit Baby ist das Gold wert.

## Kein Anspruch auf Perfektion

Dieser Alltag ist nicht perfekt.

Und das muss er auch nicht sein.

Aber wenn ein paar Abläufe einfach funktionieren,

bleibt mehr Energie für das, was wirklich zählt:

bei den Kindern sein, statt ständig nebenbei etwas zu erledigen.

Mit Baby läuft vieles durcheinander.

Mit dem Thermomix läuft zumindest das Drumherum.

Und das reicht gerade völlig.

*In den nächsten Tagen erzähle ich ein bisschen, wie sich der Thermomix bei uns im Alltag mit Baby bewährt.*`,
    images: [
      {
        src: blogBaby1,
        alt: 'Papa mit Baby im Tragetuch',
        caption: 'Der Alltag mit Baby – kleine Momente zählen'
      }
    ]
  },
  {
    id: '2',
    slug: 'babyalltag-flaeschchen-sterilisieren',
    title: 'Babyalltag, Teil 2 – kleine Dinge, die einfach laufen',
    subtitle: 'Fläschchen sterilisieren',
    date: '2025-02-04',
    excerpt: 'Wenn ein paar Abläufe einfach funktionieren, wird der Alltag spürbar ruhiger. Gerade mit drei Kindern ist das kein Luxus, sondern notwendig.',
    featuredImage: blogBabyBottles,
    content: `Im ersten Beitrag habe ich geschrieben, dass mit Baby nichts perfekt läuft.

Das stimmt noch immer.

Was sich aber gezeigt hat:

Wenn ein paar Abläufe einfach funktionieren, wird der Alltag spürbar ruhiger.

Gerade mit drei Kindern ist das kein Luxus, sondern notwendig.

## Wiederholungen, die man nicht wegdiskutieren kann

Mit Baby gibt es Dinge, die einfach immer wieder kommen:

Fläschchen vorbereiten.

Schnuller reinigen.

Wasser abkochen.

Nicht einmal am Tag, sondern mehrmals.

Und oft dann, wenn gerade jemand weint oder etwas anderes Aufmerksamkeit braucht.

Ich habe gemerkt, dass genau diese Wiederholungen am meisten Energie kosten –

nicht weil sie kompliziert sind, sondern weil sie **ständig präsent** sind.

## Fläschchen & Schnuller sterilisieren – so machen wir es

Gerade im Babyalltag ist es angenehm, wenn Dinge einfach und verlässlich laufen.

So sterilisiere ich Fläschchen, Aufsätze und Schnuller bei uns mit dem Thermomix.

### Was du brauchst:

- Fläschchen
- Aufsätze
- Schnuller
- Varomabehälter
- Thermomix

### Schritt für Schritt

1. Fläschchen, Aufsätze und Schnuller locker in den Varomabehälter einlegen (nicht stapeln, damit der Dampf überall hinkommt)
2. 500 g Wasser in den Mixtopf geben
3. Thermomix auf Kochmodi → Dampfgaren → 25 Minuten einstellen
4. Nach Ablauf vorsichtig öffnen und die Teile an der Luft trocknen lassen

## Warum das für mich gut funktioniert

- kein Danebenstehen
- kein Überkochen
- gleichbleibende Temperatur
- einfach reproduzierbar

Gerade mit Baby (und noch zwei größeren Kindern) ist es angenehm, wenn dieser Teil vom Alltag einfach mitläuft.`,
    images: [
      {
        src: blogDampfgaren,
        alt: 'Dampfgaren Symbol',
        caption: 'Der Dampfgaren-Modus'
      },
      {
        src: blogDisplay,
        alt: 'Thermomix Display mit Dampfgaren-Einstellung',
        caption: '25 Minuten Dampfgaren – die perfekte Einstellung'
      },
      {
        src: blogBaby2,
        alt: 'Papa mit Baby',
        caption: 'Mehr Zeit für das, was zählt'
      }
    ]
  },
  {
    id: '3',
    slug: 'one-pot-gerichte-wenn-ruhe-einkehrt',
    title: 'One-Pot-Gerichte! Wenn Ruhe einkehrt und trotzdem etwas Gutes am Tisch steht',
    date: '2025-02-05',
    excerpt: 'Nur ich und die Kleine daheim… Und genau diese Momente sind es, in denen Kochen plötzlich wieder einfach sein muss. Kein großes Vorbereiten, kein Ständiges Danebenstehen.',
    featuredImage: blogOnepotPasta,
    content: `Die beiden Großen waren heute im Kindergarten. Unsere Wohnung war, für einen kurzen Moment, ungewohnt ruhig.

Nur ich und die Kleine daheim… Und genau diese Momente sind es, in denen Kochen plötzlich wieder einfach sein muss. Jedoch heute anders:

Kein großes Vorbereiten, kein Ständiges Danebenstehen, kein Topfwechsel-Abwasch-Marathon. Ein Auge bei meiner Tochter, eines beim Essen – und am besten beides entspannt.

Und hier bringen die One-Pot-Gerichte im Thermomix einen einmaligen Vorteil.

## Was ich an One-Pot-Gerichten wirklich liebe!

- Alles kommt in einen Topf
- Kein Hin und Her, keine fünf Töpfe am Herd, kein Stress

Gerade wenn man mit einem Baby zu Hause ist, merkt man schnell:

- Zeit ist knapp
- Hände sind oft nicht frei
- und Ruhe ist ein Luxus ;-)

Gerade diese Gerichte geben mir genau das zurück: **Zeit und Gelassenheit**.

## So einfach geht's

Zutaten kurz vorbereiten → Alles in den Mixtopf geben → Starten → Mich um die Kleine kümmern

**Der Thermomix erledigt hier den Rest. Rührt, kocht, passt auf – und ich muss nicht ständig danebenstehen.**

## Was mir besonders wichtig hier zu sagen ist:

### One-Pot heißt nicht langweilig!

Im Gegenteil.

Ob Pasta, Reisgerichte oder sanfte Familiengerichte, alles wird…

- Gleichmäßig gegart
- Voller Geschmack
- und wunderbar cremig

## Und das Beste:

Wenn die Großen aus dem Kindergarten kommen, steht das Essen schon da.

**Warm — Fertig — Ohne Stress**

[Hier geht's zur One-Pot-Kollektion von Cookidoo](https://cookidoo.at/search/de-AT?query=one%20pot&countries=at&context=recipes)`,
    images: [
      {
        src: blogOnepotThermomix,
        alt: 'Thermomix TM7 mit Spaghetti im Mixtopf',
        caption: 'Nudeln rein – der Rest erledigt sich von selbst'
      },
      {
        src: blogOnepotSauce,
        alt: 'Frische Tomatensauce im Thermomix',
        caption: 'Die Sauce köchelt gleichmäßig vor sich hin'
      },
      {
        src: blogOnepotSpaghetti,
        alt: 'Fertige Spaghetti im Mixtopf',
        caption: 'Alles in einem Topf – fertig!'
      }
    ]
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-AT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
