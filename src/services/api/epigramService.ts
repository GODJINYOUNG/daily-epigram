import axiosInstance from "./axiosInstance";
import { Epigram, EpigramListResponse } from "@/types/epigram";

// 1. 목록 조회 및 검색
export const getEpigrams = async (
  page: number = 1,
  limit: number = 10,
  keyword: string = ""
) => {
  const response = await axiosInstance.get<EpigramListResponse>(`/epigrams`, {
    params: { page, limit, keyword: keyword.trim() },
  });
  return response.data;
};

// 2. 상세 조회 (이게 없어서 오류가 났을 확률이 높습니다)
export const getEpigramById = async (id: string) => {
  const response = await axiosInstance.get<Epigram>(`/epigrams/${id}`);
  return response.data;
};

// 3. 에피그램 등록
export const createEpigram = async (epigramData: {
  content: string;
  author: string;
  tags: string[];
  emotion: string;
}) => {
  const response = await axiosInstance.post("/epigrams", epigramData);
  return response.data;
};
