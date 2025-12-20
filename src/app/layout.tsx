import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // 1. 경로 및 파일 존재 확인 필수
import Providers from "./providers";

export const metadata: Metadata = {
  title: "날마다 에피그램",
  description: "나만 알고 있기엔 아까운 글귀를 공유하세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
