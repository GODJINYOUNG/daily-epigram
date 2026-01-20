import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* 모든 페이지 상단에 고정되는 공통 헤더 */}
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

        {/* 각 페이지의 컨텐츠가 들어가는 부분 */}
        {children}
      </body>
    </html>
  );
}
