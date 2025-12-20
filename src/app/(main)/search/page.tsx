"use client";

import { useState } from "react";
import { useEpigrams } from "@/hooks/queries/useEpigrams";
import Input from "@/components/common/Input";
import { Epigram } from "@/types/epigram";
import Link from "next/link";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // searchTerm이 바뀔 때마다 useEpigrams가 자동으로 호출됨
  const { data, isLoading, isFetching } = useEpigrams(1, searchTerm);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">에피그램 검색</h1>
        <p className="text-gray-500">
          태그나 키워드로 마음에 남는 글귀를 찾아보세요.
        </p>
      </header>

      <div className="mb-10 max-w-2xl mx-auto">
        <Input
          placeholder="태그(#행복)나 키워드(삶)를 입력하세요..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        {isFetching && !isLoading && (
          <p className="text-xs text-blue-500 mt-2 text-right italic">
            새로운 결과를 가져오는 중...
          </p>
        )}
      </div>

      {isLoading ? (
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 4].map((n) => (
            <div
              key={n}
              className="h-40 bg-gray-100 animate-pulse rounded-xl"
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {data?.list.map((epigram: Epigram) => (
            <Link href={`/epigrams/${epigram.id}`} key={epigram.id}>
              <article className="p-6 border border-gray-100 rounded-xl hover:border-black hover:shadow-lg transition-all bg-white h-full flex flex-col justify-between">
                <p className="text-lg font-serif italic text-gray-800 line-clamp-3 mb-6">
                  "{epigram.content}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    - {epigram.author}
                  </span>
                  <div className="flex gap-1">
                    {epigram.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-gray-50 px-2 py-0.5 rounded border text-gray-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {!isLoading && data?.list.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            "<strong>{searchTerm}</strong>"에 대한 검색 결과가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
