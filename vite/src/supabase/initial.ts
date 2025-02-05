import { createClient } from "@supabase/supabase-js";
import { Database } from "@/supabase/supabaseTypes";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: "sulmun_auth_key",
  },
});

export default supabase;
