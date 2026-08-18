"use client";

// عميل Supabase الخاص بجهة المتصفح (Client Components).
// لا يعمل فعليًا إلا بعد تعبئة متغيرات البيئة NEXT_PUBLIC_SUPABASE_URL و
// NEXT_PUBLIC_SUPABASE_ANON_KEY في ملف .env.local — راجع README.md.

import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function createSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase غير مهيأ بعد. الرجاء تعبئة NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_ANON_KEY في .env.local"
    );
  }
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
