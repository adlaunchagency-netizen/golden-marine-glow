
CREATE TABLE public.ameex_cities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  city_name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.ameex_cities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cities are publicly readable"
ON public.ameex_cities
FOR SELECT
TO anon, authenticated
USING (true);
