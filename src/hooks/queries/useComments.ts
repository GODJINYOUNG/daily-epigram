import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/services/api/axiosInstance";

// 댓글 목록 조회
export const useComments = (epigramId: string) => {
  return useQuery({
    queryKey: ["comments", epigramId],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/epigrams/${epigramId}/comments`
      );
      return response.data; // [{ id, content, writer, ... }]
    },
    enabled: !!epigramId,
  });
};

// 댓글 작성
export const useCreateComment = (epigramId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (content: string) => {
      const response = await axiosInstance.post(
        `/epigrams/${epigramId}/comments`,
        { content }
      );
      return response.data;
    },
    onSuccess: () => {
      // 댓글 목록만 새로고침하여 즉시 반영
      queryClient.invalidateQueries({ queryKey: ["comments", epigramId] });
    },
  });
};
