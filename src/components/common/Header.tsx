"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 컴포넌트 마운트 시 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken"); // 토큰 삭제
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
    router.push("/");
    router.refresh(); // 변경된 인증 상태를 전체 페이지에 반영
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b">
      <Link href="/" className="text-xl font-bold">
        Daily Epigram
      </Link>

      <nav className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            <Link
              href="/create"
              className="text-sm font-medium hover:text-blue-600"
            >
              에피그램 만들기
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-gray-500 hover:text-black"
            >
              로그아웃
            </button>
            {/* 여기에 나중에 유저 프로필 아이콘을 추가할 예정입니다 */}
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm font-medium">
              로그인
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium bg-black text-white px-4 py-2 rounded-lg"
            >
              시작하기
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
