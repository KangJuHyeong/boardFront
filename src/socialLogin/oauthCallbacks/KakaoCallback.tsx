// src/socialLogin/oauthCallbacks/KakaoCallback.tsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoggedIn } = useAuth();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code");

    if (code) {
      fetch("http://localhost:8080/auth/kakao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
        credentials: "include", // ✅ 쿠키 전송
      })
        .then(res => {
          if (!res.ok) throw new Error("카카오 로그인 실패");
          setLoggedIn(true);
          navigate("/");
        })
        .catch(err => console.error(err));
    }
  }, []);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
