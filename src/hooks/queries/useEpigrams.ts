import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getEpigrams,
  createEpigram,
  getEpigramById,
} from "@/services/api/epigramService";
import { Epigram, EpigramListResponse } from "@/types/epigram";
import { useRouter } from "next/navigation";

// 목록/검색 훅
export const useEpigrams = (page: number, keyword: string = "") => {
  return useQuery<EpigramListResponse>({
    queryKey: ["epigrams", page, keyword],
    queryFn: () => getEpigrams(page, 10, keyword),
  });
};

// 상세 조회 훅
export const useEpigramDetail = (id: string) => {
  return useQuery<Epigram>({
    queryKey: ["epigram", id],
    queryFn: () => getEpigramById(id),
    enabled: !!id,
  });
};

// 등록 훅
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
