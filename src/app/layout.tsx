import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import "./globals.css";
// AuthProvider를 임포트하세요 (경로는 프로젝트 구조에 따라 다를 수 있습니다)
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* 1. AuthProvider로 전체를 감싸줍니다 */}
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

          {/* 2. 각 페이지의 컨텐츠 */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
