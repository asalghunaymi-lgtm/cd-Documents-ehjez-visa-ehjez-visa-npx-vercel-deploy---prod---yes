import type { Metadata } from "next";
import Link from "@/components/i18n/link";
import { LogIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return { title: t.auth.login.metaTitle };
}

export default async function LoginPage() {
  const { t } = await getI18n();
  const l = t.auth.login;
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-navy-50/40 py-14">
      <Card className="w-full max-w-sm">
        <CardContent className="p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-navy-50">
              <LogIn className="size-5 text-navy-700" />
            </div>
            <h1 className="text-lg font-extrabold text-navy-950">{l.title}</h1>
            <p className="mt-1 text-[13px] text-muted-foreground">{l.lead}</p>
          </div>

          <form className="space-y-4">
            <div>
              <Label className="mb-1.5 block">{l.identifier}</Label>
              <Input dir="ltr" placeholder="you@example.com" />
            </div>
            <div>
              <Label className="mb-1.5 block">{l.password}</Label>
              <Input type="password" dir="ltr" />
            </div>
            <Button className="w-full" variant="default" asChild>
              <Link href="/dashboard">{l.submit}</Link>
            </Button>
          </form>

          <p className="mt-5 text-center text-[13px] text-muted-foreground">
            {l.noAccount}{" "}
            <Link href="/signup" className="font-semibold text-navy-800 underline">
              {l.createAccount}
            </Link>
          </p>
          <p className="mt-3 text-center text-[11.5px] text-navy-400">
            {l.note}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
