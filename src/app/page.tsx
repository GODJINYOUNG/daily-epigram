"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <nav> 태그가 layout.tsx로 이동했으므로 여기서는 삭제되었습니다. */}

      <main className="flex flex-col items-center justify-center pt-32 px-6">
        {/* 기존 히어로 섹션 내용 유지 */}
        <h1 className="text-5xl md:text-6xl font-black text-[#2B2B2B] text-center leading-tight tracking-tighter italic">
          오늘의 문장이
          <br />
          당신의 하루를 바꿉니다.
        </h1>

        <p className="mt-8 text-slate-400 text-lg md:text-xl font-medium text-center max-w-xl break-keep">
          나만의 소중한 글귀를 기록하고 감성적인 카드로 만들어 공유해보세요.
        </p>

        <div className="mt-12">
          <Link href="/signup">
            <button className="px-10 py-5 bg-[#2B2B2B] text-white text-lg font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all">
              지금 시작하기
            </button>
          </Link>
        </div>

        {/* 하단 카드 미리보기 영역 */}
        <div className="mt-24 w-full max-w-4xl px-4 pb-20">
          <div className="aspect-video bg-slate-50 rounded-[40px] border border-slate-100 flex items-center justify-center p-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-50 max-w-md w-full">
              <p className="text-xl font-bold text-slate-700 italic">
                "결국 중요한 것은 꺾이지 않는 마음이다."
              </p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-slate-300 text-sm font-bold">
                  #motivation
                </span>
                <span className="text-slate-300 font-black">- 데프트 -</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
