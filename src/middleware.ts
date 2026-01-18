// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken");
  const { pathname } = request.nextUrl;

  // 서버 터미널(VS Code 아래쪽)에서 확인용
  console.log("현재 접속 경로:", pathname);
  console.log("토큰 존재 여부:", !!token);

  // 1. 로그인이 안 된 상태에서 /feed로 시작하는 모든 경로 접속 시 -> /login으로 리다이렉트
  if (!token && pathname.startsWith("/feed")) {
    console.log("미인증 사용자: /login으로 이동시킵니다.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. 이미 로그인했는데 /login 페이지에 접속하려 할 때 -> /feed로 이동
  if (token && pathname === "/login") {
    console.log("이미 로그인됨: /feed로 이동시킵니다.");
    return NextResponse.redirect(new URL("/feed", request.url));
  }

  return NextResponse.next();
}

// matcher를 더 명확하게 수정
export const config = {
  matcher: [
    "/feed/:path*", // /feed/1, /feed/list 등 하위 경로 포함
    "/feed", // /feed 자체
    "/login", // /login 자체
  ],
};
