"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // 하이드레이션 오류 방지 (클라이언트 렌더링 확인)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = "/"; // 상태 초기화를 위해 href 사용
  };

  if (!mounted)
    return (
      <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 bg-white sticky top-0 z-[100]">
        <div className="scale-90 origin-left">
          <Logo />
        </div>
      </nav>
    );

  return (
    <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 bg-white sticky top-0 z-[100]">
      <div className="scale-90 origin-left">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <div className="flex items-center gap-2">
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
