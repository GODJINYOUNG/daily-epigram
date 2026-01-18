"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 백엔드 연동 전 임시 기능
    alert(
      `🎉 ${formData.nickname}님, 회원가입이 완료되었습니다!\n로그인 페이지로 이동합니다.`
    );
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[480px] rounded-[50px] bg-white p-10 md:p-16 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-16 text-center">
          <h1 className="text-[40px] font-[1000] text-[#0F172A] tracking-tighter">
            시작하기
          </h1>
        </div>

        <form onSubmit={handleSignUp} className="space-y-8">
          <div className="flex flex-col gap-3">
            <label className="ml-1 text-[15px] font-bold text-slate-700">
              이메일
            </label>
            <input
              required
              type="email"
              placeholder="이메일을 입력해주세요"
              className="w-full h-16 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="ml-1 text-[15px] font-bold text-slate-700">
              닉네임
            </label>
            <input
              required
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="w-full h-16 rounded-2xl bg-[#F8FAFC] px-6 border-2 border-transparent focus:border-blue-500 focus:bg-white outline-none transition-all"
              onChange={(e) =>
                setFormData({ ...formData, nickname: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="mt-14 w-full h-20 rounded-2xl bg-[#3B82F6] text-xl font-black text-white shadow-2xl shadow-blue-100 hover:bg-[#2563EB] transition-all"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
