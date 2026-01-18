"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <span className="text-2xl font-[1000] text-[#0F172A] tracking-tighter italic">
          Epigram.
        </span>
        <Link
          href="/login"
          className="text-[15px] font-bold text-[#475569] hover:text-[#0F172A] transition-colors"
        >
          로그인
        </Link>
      </nav>

      {/* 히어로 섹션 */}
      <main className="flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 text-[#3B82F6] text-sm font-bold tracking-wide">
          ✨ 당신의 하루를 문장으로 기록하세요
        </div>
        <h1 className="text-[56px] md:text-[80px] font-[1000] text-[#0F172A] leading-[1.1] tracking-tight mb-8">
          매일의 기록,
          <br />
          <span className="text-[#3B82F6]">매일의 에피그램</span>
        </h1>
        <p className="text-[#64748B] text-lg md:text-xl font-medium max-w-[600px] mb-12 leading-relaxed">
          복잡한 일기 대신, 하루를 관통하는 단 한 줄의 문장을 남겨보세요. 당신의
          어제가 모여 빛나는 오늘을 만듭니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[400px]">
          <Link
            href="/signup"
            className="flex-1 h-16 flex items-center justify-center rounded-2xl bg-[#3B82F6] text-white text-lg font-black shadow-xl shadow-blue-100 hover:bg-[#2563EB] hover:-translate-y-1 transition-all"
          >
            지금 시작하기
          </Link>
          <Link
            href="/about"
            className="flex-1 h-16 flex items-center justify-center rounded-2xl bg-white text-[#475569] text-lg font-bold border-2 border-[#F1F5F9] hover:bg-slate-50 transition-all"
          >
            둘러보기
          </Link>
        </div>

        {/* 하단 미리보기 느낌의 카드 */}
        <div className="mt-24 w-full max-w-[800px] rounded-[40px] bg-white p-8 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div className="text-left">
              <div className="w-24 h-4 bg-slate-100 rounded-full mb-2" />
              <div className="w-16 h-3 bg-slate-50 rounded-full" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-300 text-left italic">
            "어제보다 나은 오늘을 기록하는 가장 쉬운 방법..."
          </p>
        </div>
      </main>
    </div>
  );
}
