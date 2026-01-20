"use client";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="mb-12 scale-110">
        <Logo />
      </div>

      <div className="w-full max-w-[420px] p-2">
        {/* Join 텍스트 제거됨 */}
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              이메일
            </label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              닉네임
            </label>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B]"
            />
          </div>

          {/* 비밀번호 확인 칸 추가 */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-800 ml-1">
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 outline-none text-[#2B2B2B]"
            />
          </div>

          <button className="w-full h-16 bg-[#2B2B2B] text-white font-black rounded-2xl hover:bg-black transition-all shadow-xl shadow-slate-200 mt-6">
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
