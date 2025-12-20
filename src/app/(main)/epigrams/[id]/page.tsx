"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useComments, useCreateComment } from "@/hooks/queries/useComments";
import Button from "@/components/common/Button";

export default function EpigramDetailPage() {
  const { id } = useParams() as { id: string };
  const [commentContent, setCommentContent] = useState("");

  const { data: comments, isLoading } = useComments(id);
  const { mutate: createComment, isPending } = useCreateComment(id);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    createComment(commentContent, {
      onSuccess: () => setCommentContent(""), // 성공 시 입력창 비우기
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      {/* 에피그램 본문 영역 (기존 코드) */}

      <hr className="my-12 border-gray-100" />

      {/* 댓글 섹션 */}
      <section>
        <h3 className="text-xl font-bold mb-6">댓글 {comments?.length || 0}</h3>

        {/* 댓글 입력창 */}
        <form onSubmit={handleCommentSubmit} className="mb-10">
          <textarea
            className="w-full border border-gray-200 rounded-xl p-4 h-24 focus:ring-1 focus:ring-black outline-none transition-all resize-none"
            placeholder="따뜻한 한마디를 남겨주세요."
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button disabled={isPending || !commentContent.trim()}>
              {isPending ? "게시 중..." : "댓글 등록"}
            </Button>
          </div>
        </form>

        {/* 댓글 목록 */}
        <div className="space-y-6">
          {isLoading ? (
            <p className="text-center text-gray-400">댓글 로딩 중...</p>
          ) : comments?.length > 0 ? (
            comments.map((comment: any) => (
              <div key={comment.id} className="border-b border-gray-50 pb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-sm">
                    {comment.writer?.nickname}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center py-10 text-gray-400">
              첫 번째 댓글을 남겨보세요! ✍️
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
