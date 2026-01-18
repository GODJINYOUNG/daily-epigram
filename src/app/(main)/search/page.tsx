"use client";

import { useState, useEffect } from "react";
import { Epigram } from "@/types/epigram";
import { EpigramCard, EpigramCardSkeleton } from "@/components/epigram";
import { useDebounce } from "@/hooks/useDebounce";

export default function SearchPage() {
  const [keyword, setKeyword] = useState<string>("");
  const [results, setResults] = useState<Epigram[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false); // 로딩 상태 추가

  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    // 검색어가 없으면 결과를 비우고 종료
    if (!debouncedKeyword.trim()) {
      setResults([]);
      return;
    }

    const fetchSearch = async () => {
      setIsFetching(true); // 로딩 시작
      try {
        // 실제 프로젝트의 API 주소로 변경하세요
        const response = await fetch(
          `/api/epigrams?search=${debouncedKeyword}`
        );
        const data = await response.json();

        // 데이터가 Epigram[] 형태라고 가정 (API 구조에 따라 data.list 등으로 수정 필요)
        setResults(data);
      } catch (error) {
        console.error("검색 실패:", error);
      } finally {
        setIsFetching(false); // 로딩 종료
      }
    };

    fetchSearch();
  }, [debouncedKeyword]);

  return (
    <div className="p-8">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full p-3 border rounded text-black mb-8"
        placeholder="검색어를 입력하세요..."
      />

      <div className="grid gap-4">
        {/* 로딩 중일 때는 스켈레톤 3개를 보여줌 */}
        {isFetching ? (
          <>
            <EpigramCardSkeleton />
            <EpigramCardSkeleton />
            <EpigramCardSkeleton />
          </>
        ) : (
          // 로딩이 끝났을 때 결과 출력
          results.map((item: Epigram) => (
            <EpigramCard key={item.id} data={item} />
          ))
        )}

        {/* 결과가 없을 때의 처리 */}
        {!isFetching && debouncedKeyword && results.length === 0 && (
          <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
