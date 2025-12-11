// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  setLoggedIn: (val: boolean) => void; 
  setUser: (user: User | null) => void;
  logout: () => void;
}
interface User {
  id: number;
  nickname: string;
  profileImage?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // 로그인 상태 체크 + 사용자 정보 로드
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("http://localhost:8080/auth/me", {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setLoggedIn(true);
          setUser(data); // nickname/profile 저장
        } else {
          setLoggedIn(false);
          setUser(null);
        }
      } catch {
        setLoggedIn(false);
        setUser(null);
      }
    };

    load();
  }, []);

  const logout = async () => {
    await fetch("http://localhost:8080/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user,setLoggedIn, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
