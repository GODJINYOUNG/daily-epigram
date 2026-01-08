"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axiosInstance";
import Input from "@/components/common/Input";

export default function CreateEpigramPage() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");

  // 1. 접근 권한 체크
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요한 서비스입니다.");
      router.push("/login");
    }
  }, [router]);

  // 2. 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/epigrams", {
        content,
        author: author || "익명",
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t !== ""),
      });
      alert("에피그램이 등록되었습니다!");
      router.push("/"); // 메인 피드로 이동
    } catch (error) {
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-8">오늘의 문장 등록</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">문장 내용</label>
            <textarea
              className="w-full p-3 border rounded-xl h-32 resize-none focus:ring-2 focus:ring-black outline-none"
              placeholder="마음에 남는 문장을 적어주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">저자</label>
            <Input
              placeholder="예: 알베르 카뮈 (비워두면 익명)"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              태그 (쉼표로 구분)
            </label>
            <Input
              placeholder="예: 동기부여, 사랑, 철학"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <button className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition">
            등록하기
          </button>
        </form>

        {/* 실시간 미리보기 카드 */}
        <div className="hidden md:block">
          <label className="block text-sm font-medium mb-2 text-gray-400 text-center">
            미리보기
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 bg-gray-50 flex flex-col justify-center min-h-[250px] text-center shadow-sm">
            <p className="text-xl font-serif italic mb-4 leading-relaxed">
              {content || "여기에 작성하신 문장이 표시됩니다."}
            </p>
            <p className="text-sm font-bold text-gray-500">
              - {author || "작가 미상"} -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
