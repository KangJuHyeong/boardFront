import Button from "../components/Button/Button";

const REST_API_KEY = 'c9955cbc19a13e758b676a6d42c5b70a';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback';

const KakaoLoginButton = () => {
  const loginWithKakaoAuthCode = () => {
    const kakaoAuthUrl =
      `https://kauth.kakao.com/oauth/authorize?response_type=code` +
      `&client_id=${REST_API_KEY}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=profile_nickname,account_email`+
      `&approval_type=force`;
    window.location.href = kakaoAuthUrl;
  };

  return <Button onClick={loginWithKakaoAuthCode}>카카오 로그인</Button>;
};

export default KakaoLoginButton;


