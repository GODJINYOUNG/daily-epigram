"use client";

import { useState } from "react";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await (login as any)({ email, password });
      // push 대신 href를 사용해 전체 상태를 새로고침하며 이동 (상단바 갱신용)
      window.location.href = "/main";
    } catch (error) {
      console.error("Login failed:", error);
      alert("로그인 정보가 올바르지 않습니다.");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center py-20 px-6">
      <div className="w-full max-w-[420px] bg-white rounded-[32px] p-10 md:p-14 shadow-sm border border-slate-100">
        <div className="mb-10 flex justify-center scale-110">
          <Logo />
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 outline-none text-[#2B2B2B]"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 outline-none text-[#2B2B2B]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#2B2B2B] text-white font-black rounded-2xl hover:bg-black shadow-xl mt-4 transition-all active:scale-[0.98]"
          >
            로그인
          </button>
        </form>

        <div className="mt-10 text-center text-slate-400 font-medium">
          회원이 아니신가요?
          <Link
            href="/signup"
            className="text-blue-600 font-bold ml-2 hover:underline"
          >
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}
