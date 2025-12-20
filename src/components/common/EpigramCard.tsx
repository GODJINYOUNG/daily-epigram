"use client";

import Link from "next/link";

interface EpigramCardProps {
  epigram: {
    id: string;
    content: string;
    author: string;
    tags: string[];
  };
}

export default function EpigramCard({ epigram }: EpigramCardProps) {
  return (
    <Link href={`/epigrams/${epigram.id}`}>
      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <p className="text-xl font-serif italic mb-4 text-gray-800 line-clamp-3">
          "{epigram.content}"
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            - {epigram.author || "익명"}
          </span>
          <div className="flex gap-2">
            {epigram.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="text-xs text-gray-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
