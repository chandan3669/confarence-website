import { createClient } from "@supabase/supabase-js";

// Server-only client using service role key (Never exposed to browser)
export function getServiceRoleServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY is not defined. Using mock fallback client.");
  }

  return createClient(supabaseUrl, serviceRoleKey || "placeholder-service-key", {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
