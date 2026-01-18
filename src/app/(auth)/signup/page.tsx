"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      {/* 카드: 패딩을 조절하고 최대 너비를 최적화하여 꼬임 방지 */}
      <div className="w-full max-w-[420px] rounded-[40px] bg-white p-8 md:p-12 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.04)] border border-slate-100">
        {/* 헤더: 간결하고 임팩트 있게 */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-[1000] text-[#0F172A] tracking-tight">
            시작하기
          </h1>
          <p className="mt-3 text-slate-400 font-medium text-base">
            나만의 에피그램을 기록해보세요
          </p>
        </div>

        {/* 폼 간격(space-y-5)을 조정하여 가독성 확보 */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {[
            {
              label: "이메일",
              type: "email",
              placeholder: "example@email.com",
            },
            {
              label: "닉네임",
              type: "text",
              placeholder: "닉네임을 입력해주세요",
            },
            {
              label: "비밀번호",
              type: "password",
              placeholder: "8자 이상 입력",
            },
            {
              label: "비밀번호 확인",
              type: "password",
              placeholder: "비밀번호 다시 입력",
            },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-2">
              <label className="ml-1 text-[13px] font-bold text-slate-500 uppercase tracking-wider">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-14 rounded-2xl border-2 border-[#F8FAFC] bg-[#F8FAFC] px-5 text-slate-900 placeholder:text-slate-300 outline-none transition-all focus:border-blue-500 focus:bg-white text-base"
              />
            </div>
          ))}

          {/* 버튼: 텍스트 크기와 높이 밸런스 조정 */}
          <button className="mt-6 w-full h-14 rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-95 transition-all">
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <span className="text-sm text-slate-400 font-medium">
            이미 계정이 있나요?{" "}
          </span>
          <Link
            href="/login"
            className="text-sm font-bold text-blue-600 hover:underline underline-offset-4"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
