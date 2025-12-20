import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value; // 쿠키 기반일 경우
  // 혹은 간단하게 클라이언트 사이드에서 처리할 수도 있으나, 미들웨어가 더 안전합니다.

  const { pathname } = request.nextUrl;

  // 로그인이 필요한 경로 리스트
  if (pathname.startsWith("/epigrams/add")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/epigrams/add/:path*"],
};
