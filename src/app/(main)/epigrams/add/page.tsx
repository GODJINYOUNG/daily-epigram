"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useCreateEpigram } from "@/hooks/queries/useEpigrams";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function AddEpigramPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const { mutate: createEpigram, isPending } = useCreateEpigram();

  const [formData, setFormData] = useState({
    content: "",
    author: "",
    tags: "",
    emotion: "HAPPY",
  });

  // 1. 보안 로직: 로그인하지 않은 사용자는 로그인 페이지로 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요한 서비스입니다.");
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 태그 문자열을 배열로 변환 (쉼표 구분)
    const tagArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    createEpigram({
      ...formData,
      tags: tagArray,
    });
  };

  // 로그인 체크 중일 때 화면 깜빡임을 방지하기 위해 null 반환
  if (
    !isLoggedIn &&
    typeof window !== "undefined" &&
    !localStorage.getItem("accessToken")
  ) {
    return null;
  }

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">에피그램 등록</h1>
        <p className="text-gray-500 mt-2">
          오늘 당신의 마음을 울린 한 줄은 무엇인가요?
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm font-semibold mb-3 text-gray-700">
            내용
          </label>
          <textarea
            className="w-full border border-gray-200 rounded-xl p-4 h-44 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all resize-none text-lg"
            placeholder="마음에 남는 글귀를 적어주세요."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          />
        </div>

        <Input
          label="저자 / 출처"
          placeholder="이름이나 책 제목 등"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />

        <Input
          label="태그"
          placeholder="쉼표(,)로 구분 (예: 행복, 일상, 응원)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-14 text-lg font-bold shadow-lg shadow-gray-200"
            disabled={isPending}
          >
            {isPending ? "기록하는 중..." : "에피그램 등록하기"}
          </Button>

          <button
            type="button"
            onClick={() => router.back()}
            className="w-full mt-4 text-gray-400 text-sm hover:text-gray-600 transition-colors"
          >
            취소하고 돌아가기
          </button>
        </div>
      </form>
    </div>
  );
}
