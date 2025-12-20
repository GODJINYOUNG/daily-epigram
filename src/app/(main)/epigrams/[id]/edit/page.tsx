"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useEpigramDetail,
  useUpdateEpigram,
} from "@/hooks/queries/useEpigrams";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function EditEpigramPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const { data: epigram, isLoading } = useEpigramDetail(id);
  const { mutate: updateEpigram, isPending } = useUpdateEpigram();

  const [formData, setFormData] = useState({
    content: "",
    author: "",
    tags: "",
  });

  // 기존 데이터를 불러와 폼에 채워줌
  useEffect(() => {
    if (epigram) {
      setFormData({
        content: epigram.content,
        author: epigram.author,
        tags: epigram.tags?.join(", ") || "",
      });
    }
  }, [epigram]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t !== "");

    updateEpigram({
      id,
      data: { ...formData, tags: tagArray },
    });
  };

  if (isLoading)
    return <div className="p-20 text-center">데이터를 불러오는 중...</div>;

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-8">에피그램 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">내용</label>
          <textarea
            className="w-full border p-4 h-40 rounded-xl resize-none"
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          />
        </div>
        <Input
          label="저자"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
        <Input
          label="태그 (쉼표로 구분)"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />
        <div className="flex gap-4">
          <Button type="submit" className="flex-1" disabled={isPending}>
            {isPending ? "수정 중..." : "수정 완료"}
          </Button>
          <Button variant="outline" type="button" onClick={() => router.back()}>
            취소
          </Button>
        </div>
      </form>
    </div>
  );
}
