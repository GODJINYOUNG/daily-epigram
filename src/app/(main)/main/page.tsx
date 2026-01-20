"use client";

import React, { useState } from "react";
import { Logo } from "@/components/common/Logo";

interface Epigram {
  id: number;
  content: string;
  author: string;
  tags: string[];
  likes: number;
}

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpigram, setSelectedEpigram] = useState<Epigram | null>(null);
  const [epigrams] = useState<Epigram[]>([
    {
      id: 1,
      content: "결국 중요한 것은 꺾이지 않는 마음이다.",
      author: "데프트",
      tags: ["motivation", "mindset"],
      likes: 120,
    },
    {
      id: 2,
      content: "내일은 내일의 태양이 뜬다.",
      author: "미상",
      tags: ["hope"],
      likes: 85,
    },
    {
      id: 3,
      content: "행복은 습관이다. 그것을 몸에 익혀라.",
      author: "허버드",
      tags: ["happy", "habit"],
      likes: 230,
    },
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 2. 상단 네비바 로고 교체 및 정렬 */}
      <nav className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <div className="scale-90 origin-left">
            <Logo />
          </div>
          <div className="hidden md:flex gap-6 border-l border-slate-100 pl-10">
            <span className="text-slate-800 font-black cursor-pointer italic tracking-tight">
              Feed
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 px-5 py-2.5 rounded-full border border-slate-100">
          <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-xs font-black">
            👤
          </div>
          <span className="text-sm font-bold text-slate-700 italic">
            User_Name
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight italic">
            Feed.
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#2B2B2B] text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:-translate-y-1 transition-all"
          >
            + 에피그램 만들기
          </button>
        </div>

        {/* 피드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {epigrams.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedEpigram(item)}
            >
              <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 aspect-[16/10] p-10 md:p-12 flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-2xl hover:border-blue-100">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "100% 2.5rem",
                  }}
                ></div>

                <p className="text-2xl font-bold text-slate-700 leading-relaxed z-10 break-keep italic">
                  "{item.content}"
                </p>
                <div className="flex justify-between items-center z-10 border-t border-slate-50 pt-6">
                  <span className="text-slate-400 font-black">
                    - {item.author} -
                  </span>
                  <button className="text-slate-300 group-hover:text-red-400 transition-colors font-bold">
                    ❤️ {item.likes}
                  </button>
                </div>
              </div>
              <div className="mt-5 flex gap-3 px-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-black text-slate-300 italic tracking-tighter"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 이미지 카드 상세 보기 모달 */}
      {selectedEpigram && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] p-6">
          <div className="relative w-full max-w-[480px] animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setSelectedEpigram(null)}
              className="absolute -top-14 right-0 text-white/70 hover:text-white text-lg font-bold flex items-center gap-2 transition-colors"
            >
              닫기 ✕
            </button>

            <div
              id="epigram-card"
              className="relative aspect-square w-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-[40px] p-12 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden"
            >
              <span className="absolute top-10 text-white/10 text-[120px] font-serif leading-none">
                “
              </span>
              <p className="relative z-10 text-white text-3xl font-bold leading-snug mb-10 break-keep tracking-tight italic">
                {selectedEpigram.content}
              </p>
              <div className="relative z-10 h-1 w-12 bg-white/30 mb-6 rounded-full" />
              <p className="relative z-10 text-white/80 text-xl font-medium">
                {selectedEpigram.author}
              </p>
              <p className="absolute bottom-10 text-white/20 text-sm font-black tracking-[0.2em] italic uppercase">
                Epigram.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 h-18 bg-white rounded-[24px] font-black text-[#0F172A] text-lg shadow-xl active:scale-95 transition-all">
                📥 이미지로 저장하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
