"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  // 상태 관리 (필요 시 API 연결을 위해 설정)
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // 단순 유효성 검사 (비밀번호 확인)
    if (formData.password !== formData.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // API 호출 로직이 들어갈 자리입니다.
      // const response = await signupApi(formData);

      alert("회원가입이 완료되었습니다! 로그인해 주세요.");
      router.push("/login"); // 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error(error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* 상단 로고 (기존 Join 텍스트 제거) */}
      <div className="mb-12 scale-110">
        <Logo />
      </div>

      <div className="w-full max-w-[420px]">
        <form onSubmit={handleSignup} className="space-y-5">
          {/* 이메일 입력 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              이메일
            </label>
            <input
              name="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B] focus:border-slate-300 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* 닉네임 입력 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              닉네임
            </label>
            <input
              name="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B] focus:border-slate-300 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              비밀번호
            </label>
            <input
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B] focus:border-slate-300 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          {/* 비밀번호 확인 입력 (다시 추가됨) */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              비밀번호 확인
            </label>
            <input
              name="passwordCheck"
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B] focus:border-slate-300 transition-all"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#2B2B2B] text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl shadow-slate-200 mt-6 active:scale-[0.98]"
          >
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center text-slate-400 font-medium">
          이미 계정이 있으신가요?
          <Link
            href="/login"
            className="text-blue-600 font-bold ml-2 hover:underline"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
