import React from "react";
import { useAuth } from "../contexts/AuthContext";
import GoogleLoginButton from "../socialLogin/GoogleLoginButton";
import KakaoLoginButton from "../socialLogin/KakaoLoginButton";
import LogoutButton from "../socialLogin/LogoutButton";

const LoginPage: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>홈페이지</h1>
      {isLoggedIn ? (
        <LogoutButton />
      ) : (
        <div>
          <GoogleLoginButton />
          <KakaoLoginButton />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
