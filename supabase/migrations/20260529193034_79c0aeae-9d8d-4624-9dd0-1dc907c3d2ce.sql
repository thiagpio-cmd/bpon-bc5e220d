-- Lock down read/update/delete on lead_submissions (only service_role via edge functions)
REVOKE SELECT, UPDATE, DELETE ON public.lead_submissions FROM anon, authenticated;

CREATE POLICY "No public read access to lead submissions"
ON public.lead_submissions
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "No public update access to lead submissions"
ON public.lead_submissions
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

CREATE POLICY "No public delete access to lead submissions"
ON public.lead_submissions
FOR DELETE
TO anon, authenticated
USING (false);