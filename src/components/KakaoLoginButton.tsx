const REST_API_KEY = 'c9955cbc19a13e758b676a6d42c5b70a';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback'; // 리다이렉트 받을 내 페이지 URL

const KakaoLoginButton = () => {
  const loginWithKakaoAuthCode = () => {
    const kakaoAuthUrl =
      `https://kauth.kakao.com/oauth/authorize?response_type=code` +
      `&client_id=${REST_API_KEY}` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=profile_nickname,account_email`;

    // 카카오 인증 페이지로 이동
    window.location.href = kakaoAuthUrl;
  };

  return <button onClick={loginWithKakaoAuthCode}>카카오 로그인 (인가코드 받기)</button>;
};

export default KakaoLoginButton;
