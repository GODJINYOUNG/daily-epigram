"use client";

import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useCreateEpigram } from "@/hooks/queries/useEpigrams";

export default function AddEpigramPage() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const { mutate, isPending } = useCreateEpigram();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ content, author, tags: ["기본"], emotion: "happy" });
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-8">새로운 에피그램 등록</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="내용"
          placeholder="나만 알고 싶은 글귀를 적어보세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Input
          label="저자"
          placeholder="이 글은 누가 썼나요?"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "등록 중..." : "에피그램 등록하기"}
        </Button>
      </form>
    </div>
  );
}
