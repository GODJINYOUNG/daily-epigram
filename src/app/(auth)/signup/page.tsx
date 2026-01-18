"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2F5F8] p-6">
      {/* 카드 컨테이너: 배경과 확실히 분리되도록 그림자와 테두리 적용 */}
      <div className="w-full max-w-[460px] rounded-[40px] bg-white p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
        {/* 상단 로고 및 타이틀 */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <span className="text-2xl font-black text-[#2D3748] tracking-tighter italic">
              Epigram
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#1A202C] tracking-tight">
            회원가입
          </h1>
          <p className="mt-3 text-[#718096] font-medium">
            나만의 에피그램을 시작해보세요
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {[
            {
              label: "이메일",
              type: "email",
              placeholder: "이메일을 입력해주세요",
            },
            {
              label: "비밀번호",
              type: "password",
              placeholder: "비밀번호를 입력해주세요",
            },
            {
              label: "비밀번호 확인",
              type: "password",
              placeholder: "비밀번호를 다시 입력해주세요",
            },
            {
              label: "닉네임",
              type: "text",
              placeholder: "닉네임을 입력해주세요",
            },
          ].map((field) => (
            <div key={field.label} className="space-y-2">
              <label className="ml-1 text-[14px] font-bold text-[#4A5568]">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-15 rounded-2xl border border-[#E2E8F0] bg-[#F7FAFC] px-6 text-[#1A202C] placeholder:text-[#A0AEC0] outline-none transition-all focus:border-[#3182CE] focus:bg-white focus:ring-4 focus:ring-[#3182ce1a]"
              />
            </div>
          ))}

          {/* 가입하기 버튼: 이미지의 시그니처 블루 컬러 적용 */}
          <button className="mt-6 w-full h-16 rounded-2xl bg-[#3182CE] text-lg font-bold text-white shadow-lg shadow-[#3182ce33] transition-all hover:bg-[#2B6CB0] hover:-translate-y-0.5 active:scale-95">
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <span className="text-sm text-[#718096] font-medium">
            이미 회원이신가요?{" "}
          </span>
          <Link
            href="/login"
            className="text-sm font-bold text-[#3182CE] hover:underline underline-offset-4"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
