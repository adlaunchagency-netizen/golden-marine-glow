import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Your Project Credentials
const SUPABASE_URL = "https://oyhdpkefrtlwoscuabde.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95aGRwa2VmcnRsd29zY3VhYmRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NjM3NzMsImV4cCI6MjA4OTQzOTc3M30.mQBt79_Q6HtuaVL2sZVjXmGKYPycTVd4gpozILlhooI";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false, // Fix: Stops Shopify from blocking the script
    autoRefreshToken: false, // Fix: Stops background crashes in iframe
    detectSessionInUrl: false, // Fix: Prevents iframe navigation errors
    storage: undefined, // Fix: Forces the app to ignore blocked cookies
  },
  global: {
    headers: {
      "X-Client-Info": "supabase-js/iframe",
    },
  },
});
