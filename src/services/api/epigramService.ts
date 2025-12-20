import axiosInstance from "./axiosInstance";
import { Epigram, EpigramListResponse } from "@/types/epigram";

// 목록 조회
export const getEpigrams = async (page: number = 1, limit: number = 10) => {
  const response = await axiosInstance.get<EpigramListResponse>(`/epigrams`, {
    params: { page, limit },
  });
  return response.data;
};

// 상세 조회 추가
export const getEpigramById = async (id: string) => {
  const response = await axiosInstance.get<Epigram>(`/epigrams/${id}`);
  return response.data;
};

// 등록
export const createEpigram = async (epigramData: {
  content: string;
  author: string;
  tags: string[];
  emotion: string;
}) => {
  const response = await axiosInstance.post("/epigrams", epigramData);
  return response.data;
};
