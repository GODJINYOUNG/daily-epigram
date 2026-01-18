"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[480px] rounded-[50px] bg-white p-10 md:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-16 text-center">
          <h1 className="text-[40px] font-[1000] text-[#0F172A] tracking-tighter">
            시작하기
          </h1>
          <p className="mt-4 text-slate-400 font-medium text-lg">
            나만의 에피그램을 시작해보세요
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-8">
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
                <label className="ml-1 text-[15px] font-bold text-slate-700">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full h-16 rounded-2xl bg-[#F8FAFC] px-6 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all text-lg"
                />
              </div>
            ))}
          </div>

          <button className="mt-14 w-full h-18 py-5 rounded-2xl bg-[#3B82F6] text-xl font-black text-white shadow-2xl shadow-blue-100 hover:bg-[#2563EB] hover:-translate-y-1 transition-all">
            가입하기
          </button>
        </form>

        <div className="mt-12 text-center">
          <span className="text-slate-400 font-medium text-lg">
            이미 계정이 있나요?{" "}
          </span>
          <Link
            href="/login"
            className="font-bold text-[#3B82F6] hover:underline underline-offset-4 ml-1 text-lg"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
