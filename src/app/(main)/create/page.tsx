"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateEpigramRequest } from "@/types/epigram";

export default function CreateEpigramPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. 입력 폼 상태 관리 (타입 안전성 확보)
  const [formData, setFormData] = useState<CreateEpigramRequest>({
    content: "",
    author: "",
    tags: [],
  });

  // 2. 태그 입력을 위한 임시 상태
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.content || !formData.author)
      return alert("내용과 작성자를 입력해주세요.");

    setIsLoading(true);
    try {
      // 실제 프로젝트의 API 주소와 연동하세요.
      // const res = await fetch('/api/epigrams', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      // });

      console.log("등록 데이터:", formData);
      alert("에피그램이 성공적으로 등록되었습니다!");

      // 등록 후 피드 페이지로 이동 및 데이터 갱신
      router.push("/feed");
      router.refresh();
    } catch (error) {
      console.error("등록 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-8 text-2xl font-bold">새 에피그램 작성</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* 내용 입력 */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">에피그램 내용</label>
          <textarea
            className="h-32 rounded-lg border p-3 text-black focus:ring-2 focus:ring-blue-500"
            placeholder="마음에 남는 문장을 적어주세요."
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
          />
        </div>

        {/* 작성자 입력 */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">작성자</label>
          <input
            type="text"
            className="rounded-lg border p-3 text-black"
            placeholder="이름이나 출처"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </div>

        {/* 태그 입력 */}
        <div className="flex flex-col gap-2">
          <label className="font-medium">태그</label>
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 rounded-lg border p-3 text-black"
              placeholder="태그 입력 후 추가 클릭"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTag())
              }
            />
            <button
              type="button"
              onClick={addTag}
              className="rounded-lg bg-gray-200 px-4"
            >
              추가
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 rounded-lg bg-blue-600 p-4 font-bold text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isLoading ? "등록 중..." : "에피그램 등록하기"}
        </button>
      </form>
    </main>
  );
}
