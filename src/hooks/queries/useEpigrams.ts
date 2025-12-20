import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axiosInstance from "@/services/api/axiosInstance";

/**
 * 1. 에피그램 무한 스크롤 목록 조회
 */
export const useInfiniteEpigrams = (search: string = "") => {
  return useInfiniteQuery({
    queryKey: ["epigrams", "infinite", search],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await axiosInstance.get(`/epigrams`, {
        params: {
          search,
          cursor: pageParam,
          limit: 10,
        },
      });
      return response.data; // { list: [...], nextCursor: 10 } 구조 가정
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
  });
};

/**
 * 2. 에피그램 상세 조회
 */
export const useEpigramDetail = (id: string) => {
  return useQuery({
    queryKey: ["epigram", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/epigrams/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

/**
 * 3. 에피그램 등록
 */
export const useCreateEpigram = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (newEpigram: {
      content: string;
      author: string;
      tags: string[];
      emotion: string;
    }) => {
      const response = await axiosInstance.post("/epigrams", newEpigram);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigrams"] });
      alert("성공적으로 등록되었습니다.");
      router.push("/feed");
    },
  });
};

/**
 * 4. 에피그램 수정
 */
export const useUpdateEpigram = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await axiosInstance.patch(`/epigrams/${id}`, data);
      return response.data;
    },
    onSuccess: (data) => {
      // 수정된 데이터의 상세 정보와 목록을 모두 최신화
      queryClient.invalidateQueries({ queryKey: ["epigram", data.id] });
      queryClient.invalidateQueries({ queryKey: ["epigrams"] });
      alert("수정되었습니다.");
      router.push(`/epigrams/${data.id}`);
    },
  });
};

/**
 * 5. 에피그램 삭제
 */
export const useDeleteEpigram = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axiosInstance.delete(`/epigrams/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigrams"] });
      alert("삭제되었습니다.");
      router.push("/feed");
    },
  });
};
