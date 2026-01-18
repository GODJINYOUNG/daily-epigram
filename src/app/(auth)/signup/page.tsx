"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC]">
      <div className="w-[450px] rounded-[40px] bg-white p-12 shadow-sm border border-slate-100">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            회원가입
          </h1>
          <p className="mt-3 text-slate-400 font-medium">
            나만의 에피그램을 시작해보세요
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              이메일
            </label>
            <input
              className="h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 placeholder:text-slate-300 border border-transparent focus:border-blue-500 focus:bg-white transition-all"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              비밀번호
            </label>
            <input
              type="password"
              className="h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 placeholder:text-slate-300 border border-transparent focus:border-blue-500 focus:bg-white transition-all"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 placeholder:text-slate-300 border border-transparent focus:border-blue-500 focus:bg-white transition-all"
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="ml-1 text-sm font-bold text-slate-700">
              닉네임
            </label>
            <input
              className="h-14 rounded-2xl bg-slate-50 px-5 text-slate-900 placeholder:text-slate-300 border border-transparent focus:border-blue-500 focus:bg-white transition-all"
              placeholder="닉네임을 입력해주세요"
            />
          </div>

          <button className="mt-4 h-15 rounded-2xl bg-[#3B82F6] text-lg font-bold text-white shadow-lg shadow-blue-100 transition-all hover:bg-blue-600 active:scale-95">
            가입하기
          </button>
        </form>

        <div className="mt-10 text-center">
          <span className="text-sm text-slate-400">이미 회원분이신가요? </span>
          <Link
            href="/login"
            className="text-sm font-bold text-blue-500 hover:underline"
          >
            로그인하기
          </Link>
        </div>
      </div>
    </div>
  );
}
