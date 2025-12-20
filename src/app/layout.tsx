import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import QueryClientProvider from "@/providers/QueryClientProvider";
import Header from "@/components/common/Header";

// 1. 폰트 설정 (기본 Inter 폰트 사용)
const inter = Inter({ subsets: ["latin"] });

// 2. SEO 메타데이터 설정 (검색 결과 및 공유 시 노출되는 정보)
export const metadata: Metadata = {
  title: {
    default: "Daily Epigram | 매일의 영감",
    template: "%s | Daily Epigram",
  },
  description: "당신의 마음을 울린 한 줄을 기록하고 공유하세요.",
  openGraph: {
    title: "Daily Epigram",
    description: "영감을 주는 글귀와 깊은 생각을 나누는 공간",
    type: "website",
    locale: "ko_KR",
    // images: ["/images/og-image.png"], // public 폴더에 이미지 추가 시 활성화
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* 3. React Query 설정: 서버 데이터 관리 */}
        <QueryClientProvider>
          {/* 4. 인증 Context: 로그인 상태 전역 관리 */}
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              {/* 5. 공통 헤더: 모든 페이지 상단에 노출 */}
              <Header />

              {/* 6. 메인 콘텐츠 영역 */}
              <main className="flex-grow bg-gray-50">{children}</main>

              {/* 7. 공통 푸터 (선택 사항) */}
              <footer className="py-8 text-center text-sm text-gray-400 bg-white border-t">
                © 2025 Daily Epigram. All rights reserved.
              </footer>
            </div>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
