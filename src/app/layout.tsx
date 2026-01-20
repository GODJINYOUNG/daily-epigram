"use client";

import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
// React Query 관련 임포트
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // QueryClient는 렌더링 시마다 새로 생성되지 않도록 useState로 관리합니다.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="ko">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            {/* 공통 네비게이션 바 */}
            <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 bg-white/80 backdrop-blur-md sticky top-0 z-50">
              <div className="scale-90 origin-left">
                <Logo />
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

            {/* 각 페이지 컨텐츠 */}
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
