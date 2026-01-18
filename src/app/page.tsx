"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 네비게이션 간격 확대 */}
      <nav className="flex items-center justify-between px-10 py-10 max-w-7xl mx-auto">
        <span className="text-3xl font-[1000] text-[#0F172A] tracking-tighter italic">
          Epigram.
        </span>
        <Link
          href="/login"
          className="text-lg font-bold text-[#475569] hover:text-blue-600 transition-colors"
        >
          로그인
        </Link>
      </nav>

      {/* 메인 섹션 여백(pt-32) 대폭 추가 */}
      <main className="flex flex-col items-center justify-center pt-32 pb-40 px-6 text-center">
        <div className="inline-block px-6 py-2 mb-10 rounded-full bg-white shadow-sm border border-slate-100 text-[#3B82F6] text-sm font-extrabold tracking-widest uppercase">
          Daily Insight
        </div>

        <h1 className="text-[64px] md:text-[90px] font-[1000] text-[#0F172A] leading-[1.05] tracking-tight mb-12">
          평범한 일상을
          <br />
          <span className="text-[#3B82F6]">특별한 문장으로</span>
        </h1>

        <p className="text-[#64748B] text-xl md:text-2xl font-medium max-w-[700px] mb-16 leading-relaxed">
          어제보다 나은 오늘을 기록하는 가장 세련된 방법.
          <br className="hidden md:block" />
          당신만의 에피그램을 지금 바로 시작해보세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-[460px]">
          <Link
            href="/signup"
            className="flex-1 h-20 flex items-center justify-center rounded-[24px] bg-[#0F172A] text-white text-xl font-black shadow-2xl hover:bg-slate-800 hover:-translate-y-1.5 transition-all"
          >
            시작하기
          </Link>
          <Link
            href="/login"
            className="flex-1 h-20 flex items-center justify-center rounded-[24px] bg-white text-[#0F172A] text-xl font-black border-2 border-slate-100 hover:bg-slate-50 hover:-translate-y-1.5 transition-all"
          >
            로그인
          </Link>
        </div>

        {/* 하단 데코레이션 요소와 간격 확대 */}
        <div className="mt-40 w-full max-w-[900px] opacity-40">
          <hr className="border-slate-200" />
        </div>
      </main>
    </div>
  );
}
