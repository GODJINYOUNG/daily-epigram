"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import axiosInstance from "@/lib/axiosInstance"; // axios 인스턴스 경로 확인 필요

export default function SignUpPage() {
  const router = useRouter();

  // 1. 입력값 상태 관리
  const [formData, setFormData] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });

  // 2. 에러 메시지 상태 관리
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // 3. 버튼 활성화 상태
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 4. 실시간 유효성 검사 (useEffect)
  useEffect(() => {
    const newErrors = { email: "", password: "", passwordConfirm: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    }
    if (
      formData.passwordConfirm &&
      formData.password !== formData.passwordConfirm
    ) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);

    // 가입 버튼 활성화 조건
    const isValid =
      emailRegex.test(formData.email) &&
      formData.nickname.trim().length > 0 &&
      formData.password.length >= 8 &&
      formData.password === formData.passwordConfirm;

    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 5. 서버 제출 로직
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);
    try {
      await axiosInstance.post("/auth/signup", {
        email: formData.email,
        nickname: formData.nickname,
        password: formData.password,
      });

      alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.");
      router.push("/login");
    } catch (error: any) {
      // 서버에서 보낸 에러 메시지 처리 (예: 이미 존재하는 이메일)
      const message =
        error.response?.data?.message || "회원가입 중 오류가 발생했습니다.";
      setErrors((prev) => ({ ...prev, email: message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8">회원가입</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            이메일
          </label>
          <Input
            name="email"
            type="email"
            placeholder="example@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-red-500 focus:ring-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            닉네임
          </label>
          <Input
            name="nickname"
            placeholder="닉네임을 입력하세요"
            value={formData.nickname}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            비밀번호
          </label>
          <Input
            name="password"
            type="password"
            placeholder="8자 이상 입력"
            value={formData.password}
            onChange={handleChange}
            className={
              errors.password ? "border-red-500 focus:ring-red-500" : ""
            }
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            비밀번호 확인
          </label>
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호 다시 입력"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className={
              errors.passwordConfirm ? "border-red-500 focus:ring-red-500" : ""
            }
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-xs mt-1.5">
              {errors.passwordConfirm}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-3.5 rounded-xl font-bold transition-all duration-200 ${
            isFormValid && !isLoading
              ? "bg-black text-white hover:bg-gray-800 shadow-md"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? "가입 요청 중..." : "가입하기"}
        </button>
      </form>
    </div>
  );
}
