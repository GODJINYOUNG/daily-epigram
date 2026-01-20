"use client";

import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import "./globals.css";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// 내부 컨텐츠 컴포넌트 (useAuth를 사용하기 위해 분리)
function Header() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/"; // 로그아웃 시 홈으로 이동하며 상태 초기화
  };

  return (
    <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 bg-white sticky top-0 z-[100]">
      <div className="scale-90 origin-left">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {user ? (
          // 로그인 상태일 때 표시
          <>
            <div className="flex items-center gap-2 mr-2">
              <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-black text-slate-500 border border-slate-200">
                {user.nickname?.[0] || "U"}
              </div>
              <span className="text-sm font-bold text-slate-700 hidden md:block">
                {user.nickname}님
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm font-bold text-red-500 px-4 py-2 hover:bg-red-50 rounded-xl transition-colors"
            >
              로그아웃
            </button>
          </>
        ) : (
          // 로그아웃 상태일 때 표시
          <>
            <Link
              href="/login"
              className="text-sm font-bold text-slate-600 px-4 py-2"
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className="text-sm font-bold bg-[#2B2B2B] text-white px-5 py-2 rounded-xl hover:bg-black transition-colors"
            >
              시작하기
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="ko">
      <body className="bg-white">
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Header />
            <main className="min-h-[calc(100vh-80px)]">{children}</main>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
