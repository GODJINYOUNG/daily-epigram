"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 이메일/비밀번호 체크
    if (!email.includes("@")) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    console.log("로그인 시도 중...");

    // [중요] Next.js의 router.push를 사용하여 /main으로 이동
    // 만약 이동이 안 된다면 브라우저 강제 새로고침 이동을 시도합니다.
    try {
      router.push("/main");
    } catch (error) {
      console.error("이동 오류:", error);
      window.location.href = "/main"; // 최후의 수단
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[460px] rounded-[50px] bg-white p-10 md:p-14 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-12 text-center">
          <h1 className="text-[36px] font-[1000] text-[#0F172A] tracking-tighter italic">
            로그인
          </h1>
          <p className="mt-3 text-slate-400 font-medium text-lg">
            다시 일상을 기록해볼까요?
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              이메일
            </label>
            <input
              required
              type="email"
              placeholder="example@mail.com"
              className="w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              비밀번호
            </label>
            <input
              required
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-10 w-full h-16 rounded-2xl bg-[#3B82F6] text-lg font-black text-white shadow-xl shadow-blue-100 hover:bg-[#2563EB] active:scale-[0.97] transition-all"
          >
            로그인하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-slate-400 font-medium">
            아직 계정이 없으신가요?
            <Link
              href="/signup"
              className="font-bold text-[#3B82F6] ml-2 hover:underline"
            >
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
