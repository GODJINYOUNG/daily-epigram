"use client";

import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function QueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  // 컴포넌트 내부에서 QueryClient를 생성해야 SSR 환경에서 데이터 혼선을 방지합니다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분 동안 데이터를 신선한 상태로 유지
            retry: 1, // 실패 시 1번 더 재시도
          },
        },
      })
  );

  return <Provider client={queryClient}>{children}</Provider>;
}
