import axios, { InternalAxiosRequestConfig } from "axios"; // 1. axios 설치 및 타입 임포트

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. config 파라미터에 InternalAxiosRequestConfig 타입을 지정하여 any 에러 해결
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
