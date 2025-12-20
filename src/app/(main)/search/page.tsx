"use client";

import { useState, useEffect } from "react";
// 1. useEpigrams를 useInfiniteEpigrams로 변경
import { useInfiniteEpigrams } from "@/hooks/queries/useEpigrams";
import Input from "@/components/common/Input";
import EpigramCard from "@/components/common/EpigramCard"; // 카드 컴포넌트 임포트 확인

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 2. useEpigrams() 대신 useInfiniteEpigrams() 호출
  const { data, status } = useInfiniteEpigrams(debouncedSearch);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">검색</h1>
      <Input
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-10 space-y-6">
        {status === "success" &&
          data?.pages.map((page) =>
            page.list.map((epigram: any) => (
              <EpigramCard key={epigram.id} epigram={epigram} />
            ))
          )}
      </div>
    </div>
  );
}
