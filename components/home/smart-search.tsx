"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchCountryByQuery } from "@/lib/data/search-index";
import { getCountryBySlug } from "@/lib/data/countries";
import { cn } from "@/lib/utils";

export function SmartSearch() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);

  const matches = React.useMemo(() => {
    if (query.trim().length < 2) return [];
    return searchCountryByQuery(query)
      .map((slug) => getCountryBySlug(slug))
      .filter(Boolean);
  }, [query]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (matches[0]) router.push(`/visa/${matches[0]!.slug}`);
        }}
        className="flex items-center gap-2 rounded-2xl border border-border bg-white p-2 shadow-xs transition-colors focus-within:border-navy-300"
      >
        <Search className="ms-2 size-5 shrink-0 text-navy-700" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="إلى أين تريد السفر؟ (مثال: لندن، باريس، أمريكا...)"
          className="h-12 border-0 bg-transparent text-navy-950 placeholder:text-muted-foreground shadow-none focus-visible:ring-0"
        />
        <Button type="submit" variant="default" className="hidden shrink-0 sm:inline-flex">
          ابحث
        </Button>
      </form>

      {focused && matches.length > 0 && (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-border bg-white shadow-xl">
          {matches.map((c) => (
            <button
              key={c!.slug}
              onMouseDown={() => router.push(`/visa/${c!.slug}`)}
              className={cn(
                "flex w-full items-center justify-between gap-3 px-4 py-3 text-start hover:bg-navy-50"
              )}
            >
              <span className="flex items-center gap-2.5 text-sm font-semibold text-navy-900">
                <span className="text-xl">{c!.flagEmoji}</span>
                {c!.nameAr}
              </span>
              <ArrowLeft className="size-4 text-navy-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
