"use client";

import React, { useState } from "react";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl border border-gray-100">
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">
          회원가입
        </h2>

        <form className="space-y-6">
          {/* 이메일 입력창 */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              이메일
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* 닉네임 입력창 (필요하다면 복사해서 추가) */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              닉네임
            </label>
            <input
              type="text"
              placeholder="닉네임을 입력하세요"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* 비밀번호 입력창 */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 p-4 text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button className="mt-8 w-full rounded-xl bg-blue-600 p-4 font-bold text-white transition hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-100">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
