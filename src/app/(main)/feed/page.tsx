"use client";

import { useEpigrams } from "@/hooks/queries/useEpigrams";
import Button from "@/components/common/Button";
import { Epigram } from "@/types/epigram"; // 타입 임포트

export default function FeedPage() {
  const { data, isLoading, isError } = useEpigrams(1);

  if (isLoading)
    return <div className="p-10 text-center">에피그램을 불러오는 중...</div>;
  if (isError)
    return (
      <div className="p-10 text-center text-red-500">
        데이터를 가져오는데 실패했습니다.
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">최신 에피그램</h1>
        <Button size="sm">글쓰기</Button>
      </div>

      <div className="space-y-6">
        {/* data가 없을 경우를 대비해 옵셔널 체이닝(?.) 사용 */}
        {data?.list.map(
          (
            epigram: Epigram // epigram 타입 지정
          ) => (
            <article
              key={epigram.id}
              className="p-6 border rounded-2xl bg-white shadow-sm"
            >
              <p className="text-lg mb-4">"{epigram.content}"</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>- {epigram.author}</span>
                <div className="flex gap-2">
                  {epigram.tags.map(
                    (
                      tag: string // tag 타입 지정
                    ) => (
                      <span key={tag} className="bg-gray-100 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}
