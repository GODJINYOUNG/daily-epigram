"use client";

import { useState } from "react";
import { Epigram } from "@/types/epigram";

export default function EpigramCard({ data }: { data: Epigram }) {
  const [isLiked, setIsLiked] = useState(data.isLiked || false);
  const [likes, setLikes] = useState(data.likeCount || 0);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="group flex flex-col justify-between min-h-[180px] rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-50 transition-all hover:translate-y-[-4px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)]">
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
          <span className="text-[11px] font-bold tracking-widest text-blue-500 uppercase">
            Daily Epigram
          </span>
        </div>
        <p className="text-lg font-semibold leading-relaxed text-gray-800 break-keep">
          "{data.content}"
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
        <span className="text-sm font-medium text-gray-400">
          — {data.author}
        </span>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {data.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[12px] text-gray-400">
                #{tag}
              </span>
            ))}
          </div>
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-all ${
              isLiked
                ? "bg-red-50 text-red-500"
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
            }`}
          >
            <span className="text-sm">{isLiked ? "❤️" : "🤍"}</span>
            <span className="text-xs font-bold">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
