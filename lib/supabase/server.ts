// عميل Supabase الخاص بجهة السيرفر (Server Components / Route Handlers).
// يُستخدم مع cookies() من next/headers للحفاظ على جلسة المستخدم.
// راجع: https://supabase.com/docs/guides/auth/server-side/nextjs

import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function createSupabaseServerClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase غير مهيأ بعد. الرجاء تعبئة NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY في .env.local"
    );
  }

  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // يمكن تجاهل الخطأ عند استدعاء setAll من Server Component بدون Middleware.
        }
      },
    },
  });
}

// عميل بصلاحية Service Role — لا يُستخدم إلا داخل Route Handlers/Server Actions
// موثوقة (مثل عمليات لوحة التحكم الإدارية)، ولا يُستورد أبدًا داخل Client Components.
export function createSupabaseServiceRoleClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("SUPABASE_SERVICE_ROLE_KEY أو NEXT_PUBLIC_SUPABASE_URL غير معرّفة.");
  }
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
