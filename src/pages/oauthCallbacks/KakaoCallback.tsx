import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      console.log('카카오 인가 코드:', code);

      // ✅ 백엔드 API에 인가 코드 전달
      fetch('http://localhost:8080/api/oauth/kakao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then(res => res.json())
        .then(data => {
          console.log('백엔드 응답:', data);

          if (data.token) {
            // ✅ JWT 저장
            localStorage.setItem('jwtToken', data.token);

            // 필요하다면 별도로 카카오 전용 토큰 저장도 가능
            // localStorage.setItem('kakaoAccessToken', data.kakaoToken);
          }

          // ✅ 로그인 성공 후 홈으로 이동
          navigate('/');
        })
        .catch(err => {
          console.error('토큰 요청 실패:', err);
        });

    } else {
      console.error('카카오 인가 코드 없음');
    }
  }, [location.search, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
