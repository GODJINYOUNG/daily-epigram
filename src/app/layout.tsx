"use client";

import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Header } from "@/components/common/Header"; // 분리한 헤더 임포트

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
            <Header /> {/* 분리된 헤더 컴포넌트 사용 */}
            <main className="min-h-[calc(100vh-80px)]">{children}</main>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
