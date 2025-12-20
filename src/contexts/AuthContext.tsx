"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null; // 이 부분이 정의되어 있어 오류가 발생했습니다.
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 1. user 상태를 추가합니다.
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
    // 필요하다면 여기서 토큰으로 유저 정보를 가져오는 로직을 넣을 수 있습니다.
  }, []);

  const login = (token: string) => {
    localStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
    // 로그인 시 유저 정보를 업데이트하는 로직을 추가할 수 있습니다.
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    setUser(null); // 로그아웃 시 유저 정보 초기화
    window.location.href = "/";
  };

  return (
    // 2. value 객체에 user를 포함시켜 전달합니다.
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
