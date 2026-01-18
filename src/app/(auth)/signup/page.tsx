"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      {/* 카드: 그림자를 더 부드럽게(soft shadow) 수정 */}
      <div className="w-full max-w-[440px] rounded-[2.5rem] bg-white p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        {/* 헤더: 텍스트 크기와 굵기 강조 */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            회원가입
          </h1>
          <p className="mt-3 text-slate-400 font-medium">
            새로운 일상을 기록해보세요
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {[
            {
              label: "이메일",
              type: "email",
              placeholder: "example@email.com",
            },
            { label: "닉네임", type: "text", placeholder: "사용하실 닉네임" },
            { label: "비밀번호", type: "password", placeholder: "8자 이상" },
            {
              label: "비밀번호 확인",
              type: "password",
              placeholder: "다시 입력",
            },
          ].map((field) => (
            <div key={field.label} className="space-y-2">
              <label className="ml-1 text-[13px] font-bold text-slate-700 uppercase tracking-wider">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-14 rounded-2xl border-2 border-slate-50 bg-slate-50 px-5 text-slate-900 placeholder:text-slate-300 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50/50"
              />
            </div>
          ))}

          {/* 버튼: 높이를 키우고 색감을 더 선명하게 */}
          <button className="mt-6 w-full h-15 rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white shadow-xl shadow-blue-100 transition-all hover:bg-blue-700 hover:-translate-y-0.5 active:scale-95">
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <span className="text-sm text-slate-400 font-medium">
            이미 계정이 있나요?{" "}
          </span>
          <Link
            href="/login"
            className="text-sm font-bold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
