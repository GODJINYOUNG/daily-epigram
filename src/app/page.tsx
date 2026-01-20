"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <nav className="flex items-center justify-between px-10 py-8 max-w-7xl mx-auto">
        <span className="text-3xl font-[1000] italic tracking-tighter">
          Epigram.
        </span>
        <Link
          href="/login"
          className="text-lg font-bold text-slate-600 hover:text-black transition-colors"
        >
          로그인
        </Link>
      </nav>

      <section className="pt-32 pb-48 px-6 text-center">
        <h2 className="text-[24px] md:text-[28px] font-bold text-slate-300 mb-6">
          나만 알고 싶기엔
        </h2>
        <h1 className="text-[48px] md:text-[64px] font-[1000] leading-tight tracking-tight mb-16">
          아까운 글이 있지 않나요?
        </h1>

        {/* 버튼 크기 조정: h-18 (72px) 정도로 최적화 */}
        <Link
          href="/signup"
          className="inline-flex items-center justify-center h-18 px-12 rounded-[24px] bg-[#0F172A] text-white text-xl font-black shadow-xl hover:-translate-y-1 hover:bg-slate-800 transition-all duration-300"
        >
          에피그램 시작하기
        </Link>
      </section>

      {/* 특징 섹션들 (기존 유지) */}
    </div>
  );
}
