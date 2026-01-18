"use client";

import { useState } from "react";
import { Epigram } from "@/types/epigram";

interface EpigramCardProps {
  data: Epigram;
}

export default function EpigramCard({ data }: EpigramCardProps) {
  // 좋아요 수와 상태를 로컬에서 관리 (UI 반응성을 위해)
  const [likes, setLikes] = useState<number>(data.likeCount);
  const [isLiked, setIsLiked] = useState<boolean>(data.isLiked || false);

  const handleLikeToggle = async () => {
    // 1. UI 먼저 업데이트 (사용자 경험 향상)
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikes((prev) => (newIsLiked ? prev + 1 : prev - 1));

    try {
      // 2. 실제 서버 API 호출
      // await fetch(`/api/epigrams/${data.id}/like`, { method: 'POST' });
      console.log(`${data.id}번 글 좋아요 상태 변경: ${newIsLiked}`);
    } catch (error) {
      // 3. 에러 발생 시 이전 상태로 복구
      setIsLiked(!newIsLiked);
      setLikes((prev) => (newIsLiked ? prev - 1 : prev + 1));
      alert("좋아요 처리에 실패했습니다.");
    }
  };

  return (
    <div className="group relative rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all">
      <p className="mb-4 text-lg font-medium text-gray-800 leading-relaxed">
        "{data.content}"
      </p>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-500">- {data.author}</span>
          <div className="flex gap-2">
            {data.tags.map((tag) => (
              <span key={tag} className="text-xs text-blue-500 font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 좋아요 버튼 */}
        <button
          onClick={handleLikeToggle}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition-colors ${
            isLiked
              ? "bg-red-50 text-red-500 border border-red-100"
              : "bg-gray-50 text-gray-400 border border-gray-100 hover:bg-gray-100"
          }`}
        >
          <span className={isLiked ? "scale-110 transition-transform" : ""}>
            {isLiked ? "❤️" : "🤍"}
          </span>
          <span className="font-semibold">{likes}</span>
        </button>
      </div>
    </div>
  );
}
