"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // 타입을 명확히 지정하여 'any' 제거
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const mockToken = "sample-token-12345";
      document.cookie = `accessToken=${mockToken}; path=/; max-age=3600; SameSite=Strict`;

      // 로그인 성공 후 피드 페이지로 이동
      router.push("/feed");
      router.refresh(); // 미들웨어 상태 업데이트를 위해 리프레시
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 정보가 올바르지 않습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-8 text-2xl font-bold">로그인</h1>

      <form
        onSubmit={handleLogin}
        className="flex w-full max-w-sm flex-col gap-4"
      >
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="rounded border p-2 text-black"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="rounded border p-2 text-black"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>
      </form>
    </div>
  );
}
