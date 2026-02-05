import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogLikeButton from '@/components/BlogLikeButton';
import { getPostBySlug, formatDate, blogPosts } from '@/data/blogPosts';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find next and previous posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Parse inline markdown (links, bold)
  const parseInlineMarkdown = (text: string): (string | JSX.Element)[] => {
    const elements: (string | JSX.Element)[] = [];
    // Match markdown links [text](url) and bold **text**
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        elements.push(text.slice(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        // Link: [text](url)
        elements.push(
          <a
            key={`link-${match.index}`}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // Bold: **text**
        elements.push(
          <strong key={`bold-${match.index}`} className="text-foreground font-semibold">
            {match[3]}
          </strong>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      elements.push(text.slice(lastIndex));
    }

    return elements.length > 0 ? elements : [text];
  };

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let orderedListItems: string[] = [];
    let inList = false;
    let inOrderedList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    const flushOrderedList = () => {
      if (orderedListItems.length > 0) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
            {orderedListItems.map((item, i) => (
              <li key={i}>{parseInlineMarkdown(item)}</li>
            ))}
          </ol>
        );
        orderedListItems = [];
      }
      inOrderedList = false;
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Headers
      if (trimmedLine.startsWith('### ')) {
        flushList();
        flushOrderedList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('## ')) {
        flushList();
        flushOrderedList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      }
      // Unordered list items
      else if (trimmedLine.startsWith('- ')) {
        flushOrderedList();
        inList = true;
        listItems.push(trimmedLine.replace('- ', ''));
      }
      // Ordered list items
      else if (/^\d+\.\s/.test(trimmedLine)) {
        flushList();
        inOrderedList = true;
        orderedListItems.push(trimmedLine.replace(/^\d+\.\s/, ''));
      }
      // Italic text (entire line)
      else if (trimmedLine.startsWith('*') && trimmedLine.endsWith('*') && !trimmedLine.includes('**')) {
        flushList();
        flushOrderedList();
        elements.push(
          <p key={index} className="text-muted-foreground italic mb-4">
            {trimmedLine.slice(1, -1)}
          </p>
        );
      }
      // Regular paragraphs (with inline parsing for links and bold)
      else if (trimmedLine) {
        flushList();
        flushOrderedList();
        elements.push(
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {parseInlineMarkdown(trimmedLine)}
          </p>
        );
      }
    });

    // Flush any remaining list items
    flushList();
    flushOrderedList();

    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog – Mix mit Prager</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <link rel="canonical" href={`https://mixmitprager.at/blog/${post.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32 pb-20">
          <article className="container-narrow max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {post.title}
              </h1>
              
              {post.subtitle && (
                <p className="text-xl text-primary font-medium">
                  {post.subtitle}
                </p>
              )}
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="rounded-2xl overflow-hidden mb-10">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div
              ref={contentRef}
              className={`prose prose-lg max-w-none transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {renderContent(post.content)}
            </div>

            {/* Like Button */}
            <div className="mt-10 flex justify-center">
              <BlogLikeButton slug={post.slug} />
            </div>

            {/* Images Gallery */}
            {post.images && post.images.length > 0 && (
              <div className="mt-12 space-y-8">
                <h3 className="text-xl font-semibold text-foreground">Bilder</h3>
                <div className="grid gap-6">
                  {post.images.map((image, index) => (
                    <figure key={index} className="rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto"
                      />
                      {image.caption && (
                        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <nav className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="line-clamp-1">{prevPost.title}</span>
                  </Link>
                ) : (
                  <div />
                )}
                
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors sm:text-right"
                  >
                    <span className="line-clamp-1">{nextPost.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </nav>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
