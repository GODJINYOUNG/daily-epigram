"use client";

import Link from "next/link";

export default function Navbar() {
  const handleLogoClick = () => {
    // 로고 버튼 클릭 시 "/"로 이동하며 새로고침 발생
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div
        onClick={handleLogoClick}
        className="cursor-pointer font-bold text-xl"
      >
        날마다 에피그램
      </div>

      <div className="flex gap-4">
        {/* 피드 버튼 클릭 시 피드 페이지로 이동 */}
        <Link href="/feed" className="hover:text-blue-500">
          피드
        </Link>
        <Link href="/login" className="bg-black text-white px-4 py-2 rounded">
          로그인
        </Link>
      </div>
    </nav>
  );
}
