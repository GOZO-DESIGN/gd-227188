-- Create blog_likes table to store like counts
CREATE TABLE public.blog_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_slug TEXT NOT NULL UNIQUE,
  like_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_likes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read likes
CREATE POLICY "Anyone can read blog likes"
ON public.blog_likes
FOR SELECT
USING (true);

-- Allow anyone to insert new blog likes
CREATE POLICY "Anyone can insert blog likes"
ON public.blog_likes
FOR INSERT
WITH CHECK (true);

-- Allow anyone to update like counts
CREATE POLICY "Anyone can update blog likes"
ON public.blog_likes
FOR UPDATE
USING (true);

-- Create function to increment likes
CREATE OR REPLACE FUNCTION public.increment_blog_like(slug_param TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_count INTEGER;
BEGIN
  INSERT INTO public.blog_likes (blog_slug, like_count)
  VALUES (slug_param, 1)
  ON CONFLICT (blog_slug)
  DO UPDATE SET like_count = blog_likes.like_count + 1, updated_at = now()
  RETURNING like_count INTO new_count;
  
  RETURN new_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;