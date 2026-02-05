import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface BlogLikeButtonProps {
  slug: string;
  className?: string;
}

const LIKED_POSTS_KEY = 'blog_liked_posts';

const getLikedPosts = (): string[] => {
  try {
    const stored = localStorage.getItem(LIKED_POSTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const setLikedPost = (slug: string) => {
  const liked = getLikedPosts();
  if (!liked.includes(slug)) {
    liked.push(slug);
    localStorage.setItem(LIKED_POSTS_KEY, JSON.stringify(liked));
  }
};

const BlogLikeButton = ({ slug, className }: BlogLikeButtonProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user already liked this post
    const likedPosts = getLikedPosts();
    setHasLiked(likedPosts.includes(slug));

    // Fetch current like count
    const fetchLikes = async () => {
      const { data } = await supabase
        .from('blog_likes')
        .select('like_count')
        .eq('blog_slug', slug)
        .maybeSingle();
      
      if (data) {
        setLikeCount(data.like_count);
      }
    };

    fetchLikes();
  }, [slug]);

  const handleLike = async () => {
    if (hasLiked) return;

    setIsAnimating(true);
    setHasLiked(true);
    setLikeCount(prev => prev + 1);
    setLikedPost(slug);

    try {
      const { data, error } = await supabase.rpc('increment_blog_like', {
        slug_param: slug
      });

      if (error) {
        console.error('Error liking post:', error);
        // Revert on error
        setHasLiked(false);
        setLikeCount(prev => prev - 1);
      } else if (data) {
        setLikeCount(data);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300',
        hasLiked
          ? 'bg-primary/10 text-primary cursor-default'
          : 'bg-muted hover:bg-primary/10 hover:text-primary cursor-pointer',
        className
      )}
      aria-label={hasLiked ? 'Bereits geliked' : 'Beitrag liken'}
    >
      <Heart
        className={cn(
          'w-5 h-5 transition-all duration-300',
          hasLiked && 'fill-primary text-primary',
          isAnimating && 'scale-125'
        )}
      />
      <span className="font-medium text-sm">
        {likeCount > 0 ? likeCount : ''} {hasLiked ? 'Gefällt mir' : 'Gefällt mir'}
      </span>
    </button>
  );
};

export default BlogLikeButton;
