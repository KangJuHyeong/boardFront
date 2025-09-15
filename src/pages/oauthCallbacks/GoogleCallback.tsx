// src/pages/GoogleCallback.tsx
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {
      console.log('Google 인가 코드:', code);

      // 백엔드로 인가 코드 전달
      fetch('http://localhost:8080/api/oauth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('백엔드 응답:', data);

          if (data.token) {
            // ✅ JWT 저장
            localStorage.setItem('jwtToken', data.token);

            // 필요하다면 사용자 ID 같은 추가 정보도 저장 가능
            // localStorage.setItem('userId', data.userId);
          }

          // ✅ 로그인 처리 후 홈으로 이동
          navigate('/');
        })
        .catch((err) => {
          console.error('에러:', err);
        });
    }
  }, [location, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default GoogleCallback;
