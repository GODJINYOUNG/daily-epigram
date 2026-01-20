"use client";

import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="ko">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {/* 공통 헤더: z-50과 bg-white를 확실히 주어 겹침 방지 */}
            <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 bg-white sticky top-0 z-[100]">
              <div className="scale-90 origin-left">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/login"
                  className="text-sm font-bold text-slate-600 px-4 py-2"
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-bold bg-[#2B2B2B] text-white px-5 py-2 rounded-xl"
                >
                  시작하기
                </Link>
              </div>
            </nav>

            {/* 실제 페이지 내용 */}
            <main>{children}</main>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
