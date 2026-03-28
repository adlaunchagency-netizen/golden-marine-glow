
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  secteur TEXT,
  offer_price INTEGER NOT NULL,
  product TEXT NOT NULL DEFAULT 'Neo Collagen',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.orders
  FOR INSERT TO anon WITH CHECK (true);
