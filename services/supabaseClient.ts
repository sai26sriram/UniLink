import { createClient } from '@supabase/supabase-js';

// Environment variables – ensure these are set in your .env file
const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_API_KEY!;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
