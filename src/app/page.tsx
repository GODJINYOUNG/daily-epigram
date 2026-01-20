"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Image 컴포넌트 사용을 위해 임포트

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      {/* 0. 상단 네비게이션 */}
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

      {/* 1. 메인 히어로 섹션 (시안 상단 "나만 알고싶기엔 아까운 글이 있지 않나요?") */}
      <section className="pt-24 pb-40 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-bold text-slate-400 mb-6">
          나만 알고 싶기엔
        </h2>
        <h1 className="text-[48px] md:text-[64px] font-[1000] leading-tight tracking-tight mb-8">
          아까운 글이 있지 않나요?
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-[600px] mx-auto mb-16 leading-relaxed">
          인문학 콘텐츠처럼 스크롤할수록 재미있는 표현이나 나만의 개성 있는 글을
          작성해보세요.
        </p>

        {/* '에피그램 시작하기' 버튼 */}
        <Link
          href="/signup"
          className="inline-flex items-center justify-center h-18 px-12 rounded-[24px] bg-blue-600 text-white text-xl font-black shadow-xl hover:-translate-y-1 hover:bg-blue-700 transition-all duration-300"
        >
          에피그램 시작하기
        </Link>
      </section>

      {/* 2. 첫 번째 특징 섹션 (시안 좌측 이미지, 우측 텍스트) */}
      <section className="bg-white py-40 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:flex-1 w-full relative h-[300px] md:h-[400px] bg-slate-50 rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
            {/* 시안 이미지 1 대체 (실제 이미지 경로로 변경 필요) */}
            <Image
              src="/placeholder-image-1.png" // 실제 이미지 경로로 변경
              alt="글 공유 미리보기"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="md:flex-1 text-left md:ml-12">
            <h3 className="text-4xl font-black mb-6 leading-tight">
              타인이나 내가 쓴<br />
              소중한 글을 공유해요.
            </h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              인생을 살면서 느낀 감정이나 생각들을
              <br />
              글로 작성하여 공유해보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 두 번째 특징 섹션 (시안 좌측 텍스트, 우측 이미지) */}
      <section className="bg-white py-40 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
          <div className="md:flex-1 w-full relative h-[300px] md:h-[400px] bg-slate-50 rounded-3xl shadow-lg border border-slate-100 flex items-center justify-center overflow-hidden">
            {/* 시안 이미지 2 대체 (실제 이미지 경로로 변경 필요) */}
            <Image
              src="/placeholder-image-2.png" // 실제 이미지 경로로 변경
              alt="감정 분석 통계"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="md:flex-1 text-left md:mr-12">
            <h3 className="text-4xl font-black mb-6 leading-tight">
              나만의 통계로
              <br />
              감정을 한눈에 볼 수 있어요.
            </h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              지난 한 달간 작성한 글들을 토대로
              <br />
              나의 감정 변화를 그래프로 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 마지막 푸터 문구 섹션 */}
      <section className="bg-[#F8FAFC] py-40 text-center">
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
