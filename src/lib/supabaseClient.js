import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rwhujaawvcbggqmhvfxu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3aHVqYWF3dmNiZ2dxbWh2Znh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3ODkyMTcsImV4cCI6MjA1NzM2NTIxN30.tHRvcdpvvxWu0Qp3G9HgL6olmqo_5sb_bi4Rl-8DamQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)