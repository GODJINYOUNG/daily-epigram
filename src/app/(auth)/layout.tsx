import { AuthProvider } from "@/contexts/AuthContext";
// ...기타 임포트

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <AuthProvider>
          {/* QueryClientProvider 등 기존 코드는 유지 */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
