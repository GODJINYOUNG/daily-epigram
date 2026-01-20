"use client";
import { Logo } from "@/components/common/Logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen bg-[#F1F5F9] flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center w-full max-w-[420px]">
        <div className="mb-10 scale-110">
          <Logo />
        </div>

        <div className="w-full bg-white rounded-[32px] p-10 md:p-14 shadow-sm border border-slate-100">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 ml-1">
                이메일
              </label>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 outline-none text-[#2B2B2B]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-800 ml-1">
                비밀번호
              </label>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="w-full h-14 px-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 outline-none text-[#2B2B2B]"
              />
            </div>

            <button className="w-full h-16 bg-[#2B2B2B] text-white font-black rounded-2xl hover:bg-black shadow-xl mt-4">
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
    </div>
  );
}
