"use client";

import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* 네비게이션 */}
      <nav className="flex items-center justify-between px-10 py-8 max-w-7xl mx-auto">
        <span className="text-3xl font-[1000] italic tracking-tighter">
          Epigram.
        </span>
        <Link href="/login" className="text-lg font-bold text-slate-600">
          로그인
        </Link>
      </nav>

      {/* 메인 히어로 섹션 */}
      <section className="pt-32 pb-48 px-6 text-center">
        <h2 className="text-[28px] md:text-[32px] font-bold text-slate-400 mb-6">
          나만 알고 싶기엔
        </h2>
        <h1 className="text-[48px] md:text-[64px] font-[1000] leading-tight tracking-tight mb-20">
          아까운 글이 있지 않나요?
        </h1>
        <Link
          href="/signup"
          className="px-12 py-6 rounded-2xl bg-[#0F172A] text-white text-xl font-black shadow-2xl hover:-translate-y-2 transition-all inline-block"
        >
          에피그램 시작하기
        </Link>
      </section>

      {/* 서비스 특징 섹션 (시안 스타일 재현) */}
      <section className="bg-[#F8FAFC] py-40 px-6">
        <div className="max-w-6xl mx-auto space-y-40">
          {/* Feature 1: 왼쪽 텍스트, 오른쪽 카드 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="flex-1 rounded-[40px] bg-white p-12 shadow-xl border border-slate-100 aspect-video flex items-center justify-center text-slate-200 font-bold italic text-3xl">
              Preview Image 1
            </div>
            <div className="flex-1 text-right">
              <h3 className="text-4xl font-black mb-6 leading-tight">
                타인이나 내가
                <br />쓴 소중한 글을 공유해보세요.
              </h3>
              <p className="text-slate-400 text-xl font-medium">
                당신의 문장이 누군가에게는
                <br />큰 울림이 될 수 있습니다.
              </p>
            </div>
          </div>

          {/* Feature 2: 오른쪽 텍스트, 왼쪽 카드 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-20">
            <div className="flex-1 rounded-[40px] bg-white p-12 shadow-xl border border-slate-100 aspect-video flex items-center justify-center text-slate-200 font-bold italic text-3xl">
              Preview Image 2
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-4xl font-black mb-6 leading-tight">
                나만의 통계로
                <br />
                감정을 한눈에 볼 수 있어요.
              </h3>
              <p className="text-slate-400 text-xl font-medium">
                내가 기록한 글들의 흐름을 분석하고
                <br />
                자신을 더 깊이 이해해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 느낌의 마지막 문구 */}
      <section className="py-40 text-center">
        <h1 className="text-[60px] font-[1000] tracking-tighter mb-4">
          언제나
        </h1>
        <h1 className="text-[60px] font-[1000] tracking-tighter text-blue-600">
          에피그램
        </h1>
      </section>
    </div>
  );
}
