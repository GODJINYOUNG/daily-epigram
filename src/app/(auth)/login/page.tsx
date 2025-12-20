"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import axiosInstance from "@/services/api/axiosInstance";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth(); // Context에서 login 함수 가져오기
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // 1. 로그인 API 호출 (실제 API 엔드포인트에 맞게 조정하세요)
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      const { accessToken } = response.data;

      // 2. AuthContext의 login 함수 호출 (로컬스토리지 저장 및 상태 업데이트)
      login(accessToken);

      // 3. 로그인 성공 후 피드 페이지로 이동
      router.push("/feed");
      router.refresh(); // 페이지 상태를 최신화하기 위해 새로고침 유도
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
          "로그인에 실패했습니다. 다시 시도해주세요."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
        로그인
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="이메일"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button
          type="submit"
          className="w-full h-12 text-lg"
          disabled={isLoading}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-500 text-sm">
        계정이 없으신가요?{" "}
        <button
          onClick={() => router.push("/signup")}
          className="text-black font-semibold underline"
        >
          회원가입 하기
        </button>
      </p>
    </div>
  );
}
