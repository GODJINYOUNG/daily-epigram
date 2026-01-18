"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[440px] rounded-[50px] bg-white p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-14 text-center">
          <h1 className="text-[36px] font-[1000] text-[#0F172A] tracking-tight">
            시작하기
          </h1>
          <p className="mt-4 text-slate-400 font-medium text-lg">
            나만의 에피그램을 시작해보세요
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
            <div key={field.label} className="flex flex-col gap-3">
              <label className="ml-1 text-[15px] font-bold text-slate-600">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
              />
            </div>
          ))}

          {/* 버튼 상단 여백(pt-6)을 추가하여 비밀번호 확인창과의 간격을 확보 */}
          <div className="pt-6">
            <button className="w-full h-16 rounded-2xl bg-[#3B82F6] text-xl font-extrabold text-white shadow-xl shadow-blue-100 hover:bg-[#2563EB] active:scale-95 transition-all">
              가입하기
            </button>
          </div>
        </form>

        <div className="mt-12 text-center">
          <span className="text-slate-400 font-medium">
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
