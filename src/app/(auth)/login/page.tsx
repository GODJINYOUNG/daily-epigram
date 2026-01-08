"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/common/Input";
import axiosInstance from "@/lib/axiosInstance";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 1. 실시간 유효성 검사
  useEffect(() => {
    const newErrors = { email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
    }

    setErrors(newErrors);

    // 버튼 활성화 조건 (이메일 형식 맞고, 비밀번호 8자 이상)
    setIsFormValid(
      emailRegex.test(formData.email) && formData.password.length >= 8
    );
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. 로그인 제출 로직
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // 서버로부터 받은 토큰 저장 (accessToken, refreshToken 등)
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      // 성공 메시지 후 메인 페이지 이동
      alert("로그인에 성공했습니다!");
      router.push("/");
      router.refresh(); // 페이지 전체를 새로고침하여 로그인 상태 반영
    } catch (error: any) {
      // 로그인 실패 시 포괄적인 에러 메시지
      const message =
        error.response?.data?.message || "아이디 또는 비밀번호를 확인해주세요.";
      setErrors((prev) => ({ ...prev, email: message }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8">로그인</h2>
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
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700">
            비밀번호
          </label>
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className={`w-full py-3.5 rounded-xl font-bold transition-all ${
            isFormValid && !isLoading
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}
