import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "إنشاء حساب" };

export default function SignupPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-navy-50/40 py-14">
      <Card className="w-full max-w-sm">
        <CardContent className="p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-navy-50">
              <UserPlus className="size-5 text-navy-700" />
            </div>
            <h1 className="text-lg font-extrabold text-navy-950">إنشاء حساب جديد</h1>
            <p className="mt-1 text-[13px] text-muted-foreground">أنشئ حسابك وابدأ طلب تأشيرتك في دقائق</p>
          </div>

          <form className="space-y-4">
            <div>
              <Label className="mb-1.5 block">الاسم الكامل</Label>
              <Input />
            </div>
            <div>
              <Label className="mb-1.5 block">رقم الجوال</Label>
              <Input dir="ltr" placeholder="05xxxxxxxx" />
            </div>
            <div>
              <Label className="mb-1.5 block">البريد الإلكتروني</Label>
              <Input type="email" dir="ltr" />
            </div>
            <div>
              <Label className="mb-1.5 block">كلمة المرور</Label>
              <Input type="password" dir="ltr" />
            </div>
            <Button className="w-full" variant="gold" asChild>
              <Link href="/apply">إنشاء الحساب ومتابعة طلبي</Link>
            </Button>
          </form>

          <p className="mt-5 text-center text-[13px] text-muted-foreground">
            لديك حساب بالفعل؟{" "}
            <Link href="/login" className="font-semibold text-navy-800 underline">
              تسجيل الدخول
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
