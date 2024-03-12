import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://fwoeaiyaumnjlexbwgsw.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3b2VhaXlhdW1uamxleGJ3Z3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyMTE2ODQsImV4cCI6MjAyNTc4NzY4NH0.A2FlYNEqnBVD1mezOPODFoeEzuqFCuLDBKKaeaysuYk';

export const supabase = createClient(supabaseURL, supabaseAnonKey);
