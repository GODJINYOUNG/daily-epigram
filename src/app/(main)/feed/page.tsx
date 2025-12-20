"use client";

import { useEffect, useRef, useState } from "react";
import { useInfiniteEpigrams } from "@/hooks/queries/useEpigrams";
// 에러 해결 포인트: 경로를 정확히 확인하세요.
// @/ 가 안된다면 "../../../components/common/EpigramCard"로 변경해보세요.
import EpigramCard from "@/components/common/EpigramCard";

export default function FeedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 1. 검색어 디바운스 (입력 후 0.5초 뒤에 검색 실행)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteEpigrams(debouncedSearch);

  // 2. 무한 스크롤 바닥 감지 (Intersection Observer)
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.5 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "pending")
    return <div className="p-20 text-center">피드 불러오는 중...</div>;
  if (status === "error")
    return (
      <div className="p-20 text-center text-red-500">데이터 로딩 에러</div>
    );

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">피드</h1>

        {/* 검색창 UI */}
        <div className="relative">
          <input
            type="text"
            placeholder="내용이나 저자를 검색해보세요"
            className="w-full p-4 pl-12 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black outline-none transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-4 top-4 grayscale">🔍</span>
        </div>
      </header>

      {/* 에피그램 목록 출력 */}
      <div className="space-y-8">
        {data?.pages.map((page) =>
          page.list.map((epigram: any) => (
            <EpigramCard key={epigram.id} epigram={epigram} />
          ))
        )}

        {/* 검색 결과가 전혀 없을 때 */}
        {data?.pages[0].list.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            검색 결과가 없습니다. 😢
          </div>
        )}
      </div>

      {/* 무한 스크롤 트리거 */}
      <div ref={loadMoreRef} className="py-16 flex justify-center">
        {isFetchingNextPage ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        ) : hasNextPage ? (
          <div className="h-1" />
        ) : (
          <p className="text-gray-400 text-sm">마지막 글입니다. ✨</p>
        )}
      </div>
    </div>
  );
}
