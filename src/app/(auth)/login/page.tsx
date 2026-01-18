"use client";

import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-5">
      <div className="w-full max-w-[440px] rounded-[50px] bg-white p-10 md:p-14 shadow-[0_20px_70px_-10px_rgba(0,0,0,0.05)] border border-slate-50">
        <div className="mb-12 text-center">
          <h1 className="text-[36px] font-[1000] text-[#0F172A] tracking-tight">
            반가워요!
          </h1>
          <p className="mt-4 text-[#94A3B8] font-medium text-[17px]">
            다시 일상을 기록해볼까요?
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="group flex flex-col gap-2.5">
            <label className="ml-1 text-[14px] font-bold text-[#64748B]">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full h-[62px] rounded-[20px] border-2 border-[#F1F5F9] bg-[#F8FAFC] px-6 outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:ring-[6px] focus:ring-[#3B82F60A]"
            />
          </div>
          <div className="group flex flex-col gap-2.5">
            <label className="ml-1 text-[14px] font-bold text-[#64748B]">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full h-[62px] rounded-[20px] border-2 border-[#F1F5F9] bg-[#F8FAFC] px-6 outline-none transition-all duration-300 focus:border-[#3B82F6] focus:bg-white focus:ring-[6px] focus:ring-[#3B82F60A]"
            />
          </div>

          <button className="mt-8 w-full h-[66px] rounded-[22px] bg-[#3B82F6] text-[19px] font-black text-white shadow-[0_12px_24px_-8px_rgba(59,130,246,0.5)] transition-all duration-300 hover:bg-[#2563EB] hover:-translate-y-0.5 active:scale-95">
            로그인하기
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-[#94A3B8] font-medium text-[15px]">
            아직 계정이 없으신가요?
            <Link
              href="/signup"
              className="ml-2 font-bold text-[#3B82F6] hover:underline underline-offset-4"
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
