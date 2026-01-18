"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-5">
      {/* 카드: 더 부드러운 그림자와 테두리 대비 */}
      <div className="w-full max-w-[440px] rounded-[50px] bg-white p-10 md:p-14 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.05)] border border-slate-50">
        {/* 헤더: 타이틀 폰트 크기 및 자간(Tracking) 조정 */}
        <div className="mb-12 text-center">
          <h1 className="text-[36px] font-[1000] text-[#0F172A] tracking-tight leading-tight">
            시작하기
          </h1>
          <p className="mt-4 text-[#94A3B8] font-medium text-[17px]">
            나만의 일상을 특별하게 기록하세요
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "이메일", type: "email", placeholder: "example@mail.com" },
            {
              label: "닉네임",
              type: "text",
              placeholder: "멋진 이름을 정해주세요",
            },
            {
              label: "비밀번호",
              type: "password",
              placeholder: "8자 이상 입력",
            },
            {
              label: "비밀번호 확인",
              type: "password",
              placeholder: "한 번 더 입력",
            },
          ].map((field) => (
            <div key={field.label} className="group flex flex-col gap-2.5">
              <label className="ml-1 text-[14px] font-bold text-[#64748B] transition-colors group-focus-within:text-[#3B82F6]">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-[62px] rounded-[20px] border-2 border-[#F1F5F9] bg-[#F8FAFC] px-6 text-[#1E293B] placeholder:text-[#CBD5E1] outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:ring-[6px] focus:ring-[#3B82F60A] text-base"
              />
            </div>
          ))}

          {/* 버튼: 그라데이션 대신 단색의 깊이감 사용 */}
          <button className="mt-8 w-full h-[66px] rounded-[22px] bg-[#3B82F6] text-[19px] font-black text-white shadow-[0_12px_24px_-8px_rgba(59,130,246,0.5)] transition-all duration-300 hover:bg-[#2563EB] hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:scale-95">
            가입하기
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-[#94A3B8] font-medium text-[15px]">
            이미 계정이 있나요?
            <Link
              href="/login"
              className="ml-2 font-bold text-[#3B82F6] hover:text-[#2563EB] transition-colors decoration-2 underline-offset-4 hover:underline"
            >
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
