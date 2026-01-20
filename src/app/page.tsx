"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/common/Logo"; // 로고 임포트

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. 네비게이션 바: 로고 적용 및 정렬 */}
      <nav className="h-20 px-6 md:px-10 flex items-center justify-between border-b border-slate-50 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="scale-90 md:scale-100 origin-left">
          {/* 텍스트 대신 공식 SVG 로고 컴포넌트 적용 */}
          <Logo />
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <Link
            href="/login"
            className="text-sm md:text-base font-bold text-slate-600 px-4 py-2 hover:text-slate-900 transition-colors"
          >
            로그인
          </Link>
          <Link
            href="/signup"
            className="text-sm md:text-base font-black bg-[#2B2B2B] text-white px-6 py-3 rounded-2xl hover:bg-black transition-all shadow-lg shadow-slate-200"
          >
            시작하기
          </Link>
        </div>
      </nav>

      {/* 2. 메인 히어로 섹션 (기존 내용 유지/강화) */}
      <main className="max-w-7xl mx-auto pt-20 pb-32 px-6 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-100 text-slate-400 text-sm font-bold tracking-tight italic">
          #Daily_Inspiration #Epigram
        </div>

        <h1 className="text-5xl md:text-7xl font-[1000] text-[#2B2B2B] leading-[1.1] mb-8 tracking-tighter italic">
          오늘의 문장이
          <br />
          당신의 하루를 바꿉니다.
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed break-keep">
          나만의 소중한 글귀를 기록하고, 감성적인 카드로 제작하여 공유해보세요.
          에피그램은 당신의 영감을 가장 아름답게 보관합니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/signup"
            className="w-full md:w-auto px-10 py-5 bg-[#2B2B2B] text-white text-lg font-black rounded-[24px] shadow-2xl hover:-translate-y-1 transition-all"
          >
            지금 무료로 시작하기
          </Link>
          <Link
            href="/main"
            className="w-full md:w-auto px-10 py-5 bg-white text-slate-400 text-lg font-black rounded-[24px] border border-slate-100 hover:bg-slate-50 transition-all"
          >
            피드 둘러보기
          </Link>
        </div>

        {/* 하단 미리보기 카드 디자인 (선택 사항) */}
        <div className="mt-24 relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 to-slate-100 rounded-[40px] border border-slate-100 shadow-inner flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-xl border border-slate-50 max-w-md">
              <p className="text-xl md:text-2xl font-bold text-slate-700 italic mb-6">
                "시작하는 모든 존재는 늘 아프고 불안하다. 하지만 기억하라,
                당신은 눈부시게 아름답다."
              </p>
              <p className="text-right text-slate-300 font-black">
                - 에피그램 -
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
