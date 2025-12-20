"use client";

import { useParams } from "next/navigation";
import { useEpigramDetail } from "@/hooks/queries/useEpigrams";
import Button from "@/components/common/Button";

export default function EpigramDetailPage() {
  const params = useParams();
  const id = params.id as string; // URL의 [id] 값을 가져옴

  const { data: epigram, isLoading, isError } = useEpigramDetail(id);

  if (isLoading)
    return (
      <div className="p-20 text-center text-gray-500">
        에피그램을 불러오는 중...
      </div>
    );
  if (isError || !epigram)
    return (
      <div className="p-20 text-center text-red-500">
        에피그램을 찾을 수 없습니다.
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {/* 에피그램 본문 */}
      <article className="mb-12 border-b pb-12">
        <h1 className="text-3xl font-serif italic mb-8 leading-relaxed text-gray-800">
          "{epigram.content}"
        </h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {epigram.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-lg font-medium text-gray-600">
            - {epigram.author}
          </p>
        </div>
      </article>

      {/* 댓글 섹션 */}
      <section>
        <h3 className="text-xl font-bold mb-6 text-gray-900">댓글</h3>
        <div className="bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
          <textarea
            className="w-full bg-transparent outline-none resize-none text-gray-700"
            placeholder="따뜻한 감상평을 남겨주세요."
            rows={3}
          />
          <div className="flex justify-end mt-4">
            <Button size="sm">댓글 등록</Button>
          </div>
        </div>

        {/* 댓글 리스트 예시 (데이터 연결 전) */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm text-center py-10 italic">
            아직 댓글이 없습니다. 첫 번째 댓글의 주인공이 되어보세요!
          </p>
        </div>
      </section>
    </div>
  );
}
