"use client";

import React from "react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      {/* 카드 컨테이너: 배경색 흰색 강제 지정 및 그림자 강화 */}
      <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100">
        {/* 헤더 섹션 */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            시작하기
          </h1>
          <p className="mt-3 text-slate-500">당신의 매일을 기록해보세요</p>
        </div>

        {/* 입력 폼 */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {[
            {
              label: "이메일",
              type: "email",
              placeholder: "example@email.com",
            },
            {
              label: "닉네임",
              type: "text",
              placeholder: "멋진 이름을 정해주세요",
            },
            {
              label: "비밀번호",
              type: "password",
              placeholder: "8자 이상 입력",
            },
            {
              label: "비밀번호 확인",
              type: "password",
              placeholder: "한 번 더 입력",
            },
          ].map((field) => (
            <div key={field.label} className="group">
              <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 text-slate-900 placeholder:text-slate-300 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              />
            </div>
          ))}

          {/* 가입 버튼 */}
          <button className="mt-4 w-full rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]">
            회원가입 완료
          </button>
        </form>

        {/* 하단 링크 */}
        <p className="mt-8 text-center text-sm text-slate-500">
          이미 계정이 있으신가요?{" "}
          <Link
            href="/login"
            className="font-bold text-blue-600 hover:underline"
          >
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
}
