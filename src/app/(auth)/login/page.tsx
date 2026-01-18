"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 임시 로그인 처리
    alert("로그인에 성공했습니다! 메인 화면으로 이동합니다.");
    router.push("/"); // 가입 후 이동할 메인 페이지 경로
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[480px] rounded-[50px] bg-white p-10 md:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-16 text-center">
          <h1 className="text-[40px] font-[1000] text-[#0F172A] tracking-tighter">
            로그인
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="flex flex-col gap-3">
            <label className="ml-1 text-[15px] font-bold text-slate-700">
              이메일
            </label>
            <input
              required
              type="email"
              placeholder="이메일을 입력해주세요"
              className="w-full h-16 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="ml-1 text-[15px] font-bold text-slate-700">
              비밀번호
            </label>
            <input
              required
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-16 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-14 w-full h-20 rounded-2xl bg-[#3B82F6] text-xl font-black text-white shadow-2xl shadow-blue-100 hover:bg-[#2563EB] transition-all"
          >
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
}
