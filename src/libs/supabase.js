import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://piyurbuxydjkoyiskdzy.supabase.co';
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeXVyYnV4eWRqa295aXNrZHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczOTA0OTksImV4cCI6MjA2Mjk2NjQ5OX0.LIoPkPg2OI7vLAbFdJdaxnRmbx9hEoBrPJQC4m7yW48"

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;