import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts, formatDate } from '@/data/blogPosts';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <article
      ref={ref}
      className={`bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {post.featuredImage && (
        <Link to={`/blog/${post.slug}`} className="block overflow-hidden bg-muted/30">
          <div className="aspect-[4/3] flex items-center justify-center">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Link>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        
        {post.subtitle && (
          <p className="text-primary font-medium mb-2">{post.subtitle}</p>
        )}
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Weiterlesen
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

const Blog = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  
  return (
    <>
      <Helmet>
        <title>Blog – Thermomix im Alltag | Mix mit Prager</title>
        <meta
          name="description"
          content="Erfahrungen und Tipps rund um den Thermomix im Familienalltag. Praktische Anleitungen für Eltern."
        />
        <meta property="og:title" content="Blog – Thermomix im Alltag" />
        <meta property="og:type" content="blog" />
        <link rel="canonical" href="https://mixmitprager.at/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section
            ref={heroRef}
            className={`container-narrow text-center mb-16 transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Aus dem Alltag
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Echte Erfahrungen, praktische Tipps und ehrliche Einblicke – 
              wie der Thermomix unseren Familienalltag begleitet.
            </p>
          </section>

          {/* Blog Posts Grid */}
          <section className="container-narrow">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
