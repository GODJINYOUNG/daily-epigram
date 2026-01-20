"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();

  // 상태 관리
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 에러 메시지 상태
  const [errors, setErrors] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사 로직
    let newErrors = {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    };
    let isValid = true;

    if (!email.includes("@")) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
      isValid = false;
    }
    if (nickname.length < 2) {
      newErrors.nickname = "닉네임은 2자 이상이어야 합니다.";
      isValid = false;
    }
    if (password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      // 모든 규정에 맞을 때만 진행
      router.push("/login");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
      <div className="w-full max-w-[460px] rounded-[48px] bg-white p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white">
        <div className="mb-12 text-center">
          <h1 className="text-[36px] font-[1000] text-[#0F172A] tracking-tighter">
            시작하기
          </h1>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* 이메일 */}
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className={`w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 outline-none transition-all ${
                errors.email
                  ? "border-red-400"
                  : "border-transparent focus:border-blue-500 focus:bg-white"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="ml-2 text-sm font-medium text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* 닉네임 */}
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              닉네임
            </label>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className={`w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 outline-none transition-all ${
                errors.nickname
                  ? "border-red-400"
                  : "border-transparent focus:border-blue-500 focus:bg-white"
              }`}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            {errors.nickname && (
              <p className="ml-2 text-sm font-medium text-red-500">
                {errors.nickname}
              </p>
            )}
          </div>

          {/* 비밀번호 */}
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="8자 이상 입력해주세요"
              className={`w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 outline-none transition-all ${
                errors.password
                  ? "border-red-400"
                  : "border-transparent focus:border-blue-500 focus:bg-white"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="ml-2 text-sm font-medium text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* 비밀번호 확인 */}
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-[14px] font-bold text-slate-700">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              className={`w-full h-15 rounded-2xl bg-[#F8FAFC] px-6 border-2 outline-none transition-all ${
                errors.confirmPassword
                  ? "border-red-400"
                  : "border-transparent focus:border-blue-500 focus:bg-white"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="ml-2 text-sm font-medium text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-16 rounded-2xl bg-[#3B82F6] text-lg font-black text-white shadow-xl shadow-blue-100 hover:bg-[#2563EB] active:scale-95 transition-all"
          >
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-slate-400 font-medium italic">
            이미 계정이 있나요?{" "}
            <Link
              href="/login"
              className="font-bold text-[#3B82F6] ml-1 not-italic"
            >
              로그인하기
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
