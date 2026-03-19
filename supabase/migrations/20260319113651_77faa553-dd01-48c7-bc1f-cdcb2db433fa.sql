
CREATE TABLE public.lead_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  empresa TEXT NOT NULL,
  whatsapp TEXT,
  email TEXT,
  faturamento TEXT,
  desafio TEXT,
  cidade TEXT,
  segmento TEXT,
  pessoas TEXT,
  ferramenta TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert lead submissions"
  ON public.lead_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
