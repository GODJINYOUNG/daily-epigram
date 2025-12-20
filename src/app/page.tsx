"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function LandingPage() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="bg-white text-black">
      {/* 1. 히어로 섹션: 첫 인상 */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden">
        {/* 배경 장식 요소 (선택사항) */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <h1 className="text-5xl md:text-7xl font-serif italic mb-6 animate-fade-in-up">
          Daily Epigram
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg leading-relaxed animate-fade-in-up delay-200">
          "오늘 당신의 마음을 스쳐 지나간 문장이 누군가에게는 내일의 용기가 될
          수 있습니다."
        </p>

        <div className="flex gap-4 animate-fade-in-up delay-500">
          <Link
            href="/feed"
            className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            피드 둘러보기
          </Link>
          {!isLoggedIn && (
            <Link
              href="/signup"
              className="px-8 py-4 border border-black rounded-full font-bold hover:bg-gray-50 transition-all"
            >
              지금 시작하기
            </Link>
          )}
        </div>
      </section>

      {/* 2. 핵심 기능 소개 섹션 */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-xl font-bold mb-2">간편한 기록</h3>
            <p className="text-gray-500">
              잊고 싶지 않은 문장을 단 몇 초 만에 기록하세요.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2">영감의 공유</h3>
            <p className="text-gray-500">
              다양한 사람들의 생각을 읽으며 새로운 영감을 얻으세요.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">따뜻한 소통</h3>
            <p className="text-gray-500">
              댓글을 통해 문장에 담긴 깊은 의미를 함께 나눠보세요.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 푸터 직전 CTA 섹션 */}
      <section className="py-24 px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-6">
          오늘의 생각을 남길 준비가 되셨나요?
        </h2>
        <Link
          href={isLoggedIn ? "/epigrams/add" : "/login"}
          className="inline-block text-black border-b-2 border-black pb-1 font-bold text-lg hover:text-gray-600 hover:border-gray-600 transition-all"
        >
          에피그램 등록하러 가기 &rarr;
        </Link>
      </section>
    </div>
  );
}
