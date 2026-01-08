"use client";

import { AuthProvider } from "@/contexts/AuthContext";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* 카드 형태의 흰색 배경 박스 */}
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-sm border border-gray-100">
          {children}
        </div>
      </div>
    </AuthProvider>
  );
}
