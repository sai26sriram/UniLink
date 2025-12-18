## Setting Up Supabase Client

1. Install the required dependency:
   ```bash
   npm install @supabase/supabase-js
   ```

2. Configure your environment variables:
   - Copy the content from `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Replace `your-supabase-url` and `your-anon-api-key` with your Supabase project details.

3. Use the `supabaseClient` service in your code:
   ```typescript
   import supabase from './services/supabaseClient';
   ```

That's it! Supabase is now integrated into your application.
