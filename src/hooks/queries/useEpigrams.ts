import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getEpigrams,
  createEpigram,
  getEpigramById,
} from "@/services/api/epigramService";
import { Epigram, EpigramListResponse } from "@/types/epigram";
import { useRouter } from "next/navigation";

export const useEpigrams = (page: number) => {
  return useQuery<EpigramListResponse>({
    queryKey: ["epigrams", page],
    queryFn: () => getEpigrams(page),
  });
};

// 상세 조회용 훅 추가
export const useEpigramDetail = (id: string) => {
  return useQuery<Epigram>({
    queryKey: ["epigram", id],
    queryFn: () => getEpigramById(id),
    enabled: !!id, // id가 존재할 때만 쿼리 실행
  });
};

export const useCreateEpigram = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createEpigram,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["epigrams"] });
      router.push("/feed");
    },
  });
};
