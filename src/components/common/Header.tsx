"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export default function Header() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-black">
          Daily Epigram
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/feed" className="text-gray-600 hover:text-black">
            피드
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/epigrams/add"
                className="text-gray-600 hover:text-black"
              >
                글쓰기
              </Link>
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-black">
                로그인
              </Link>
              <Link
                href="/signup"
                className="font-medium text-black border border-black px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-all"
              >
                시작하기
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
