"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      {/* 카드: 그림자를 더 은은하게, 모서리는 더 둥글게 */}
      <div className="w-full max-w-[460px] rounded-[48px] bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-50">
        {/* 헤더 섹션: 텍스트 간격 조정 */}
        <div className="mb-14 text-center">
          <h1 className="text-[34px] font-[900] text-[#1E293B] tracking-tight">
            시작하기
          </h1>
          <p className="mt-4 text-[#94A3B8] font-medium text-lg">
            나만의 에피그램을 기록해보세요
          </p>
        </div>

        <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
          {[
            {
              label: "이메일",
              type: "email",
              placeholder: "이메일을 입력해주세요",
            },
            {
              label: "닉네임",
              type: "text",
              placeholder: "닉네임을 입력해주세요",
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
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-2.5">
              <label className="ml-1 text-[15px] font-bold text-[#475569]">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-15 rounded-2xl border-2 border-[#F1F5F9] bg-[#F8FAFC] px-6 text-[#1E293B] placeholder:text-[#CBD5E1] outline-none transition-all focus:border-[#3B82F6] focus:bg-white focus:ring-4 focus:ring-[#3B82F60D]"
              />
            </div>
          ))}

          {/* 버튼: 더 묵직하고 선명한 블루 */}
          <button className="mt-8 w-full h-16 rounded-2xl bg-[#3B82F6] text-xl font-extrabold text-white shadow-xl shadow-[#3B82F633] transition-all hover:bg-[#2563EB] active:scale-[0.98]">
            가입하기
          </button>
        </form>

        <div className="mt-12 text-center">
          <span className="text-[#94A3B8] font-medium">
            이미 계정이 있나요?{" "}
          </span>
          <Link
            href="/login"
            className="font-bold text-[#3B82F6] hover:underline underline-offset-4 ml-1"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
