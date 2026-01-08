import axios from "axios";

const axiosInstance = axios.create({
  // 환경변수에 저장된 API 기본 주소를 사용합니다.
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 시마다 로컬 스토리지에서 토큰을 꺼내 헤더에 넣어주는 로직
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
