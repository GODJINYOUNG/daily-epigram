"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [email, setEmail] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${email}님, 회원가입 버튼이 정상 작동합니다!`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-[450px] rounded-[40px] bg-white p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-[900] text-slate-900 tracking-tight">
            시작하기
          </h1>
          <p className="mt-2 text-slate-400 font-medium">
            나만의 에피그램을 기록해보세요
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSignUp}>
          <div className="space-y-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              이메일
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
          </div>

          {/* 비밀번호 등 다른 필드들도 동일한 스타일 적용 */}
          <div className="space-y-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full h-14 rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-[0.98] transition-all"
          >
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <span className="text-sm text-slate-400">이미 계정이 있나요? </span>
          <Link
            href="/login"
            className="text-sm font-bold text-blue-600 hover:underline"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
