"use client";

import { Suspense, useState } from "react";
import EpigramCard from "@/components/epigram/EpigramCard";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { useDebounce } from "@/hooks/useDebounce";

export default function FeedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500); // 0.5초 디바운스 적용

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-8 text-3xl font-bold">에피그램 피드</h1>

      {/* 검색창 최적화 */}
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        className="w-full p-3 mb-8 border rounded-lg"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ErrorBoundary>
        <Suspense fallback={<p className="text-center">데이터 로딩 중...</p>}>
          {/* 실제 데이터 리스트 컴포넌트가 올 자리 */}
          <div className="grid gap-6">
            {/* 여기에 서버에서 받아온 데이터를 .map()으로 돌려 
               <EpigramCard key={item.id} data={item} /> 을 렌더링합니다.
             */}
          </div>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
