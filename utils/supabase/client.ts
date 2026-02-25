import { createBrowserClient } from "@supabase/ssr";

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL!);
console.log(process.env.NEXT_PUBLIC_ANON_KEY!);

const supabaseClient = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_ANON_KEY!,
);

export default supabaseClient;
