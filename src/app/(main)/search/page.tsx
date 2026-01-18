"use client";

import { EpigramCard } from "@/components/epigram";
import { Epigram } from "@/types/epigram";

// 예시 데이터 (실제 데이터와 연결 전 확인용)
const MOCK_DATA: Epigram[] = [
  {
    id: 1,
    content:
      "결국 모든 것은 끝이 있다. 하지만 그것이 새로운 시작을 의미하기도 한다.",
    author: "무명",
    tags: ["인생", "희망"],
    likeCount: 12,
  },
  {
    id: 2,
    content: "어제보다 나은 오늘의 내가 되는 것, 그것만으로도 충분하다.",
    author: "지혜",
    tags: ["자기계발"],
    likeCount: 24,
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] px-4 py-12">
      <div className="mx-auto max-w-2xl">
        {" "}
        {/* 👈 핵심: 최대 너비를 제한하여 모바일 앱 느낌을 줌 */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Today's Feed
          </h1>
          <p className="mt-2 text-gray-500">
            오늘 당신의 마음을 울리는 문장을 찾아보세요.
          </p>
        </header>
        <div className="grid gap-6">
          {MOCK_DATA.map((item) => (
            <EpigramCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
