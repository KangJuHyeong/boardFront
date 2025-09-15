import { useNavigate } from 'react-router-dom';
import React from 'react';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('jwtToken'); // 저장된 JWT 가져오기

      if (token) {
        // ✅ 서버로 로그아웃 요청
        const res = await fetch('http://localhost:8080/api/oauth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // JWT 전달
          },
        });

        if (!res.ok) {
          throw new Error('서버 로그아웃 실패');
        }

        console.log('서버 로그아웃 완료');
      }

      // ✅ 로컬/세션 스토리지 정리
      localStorage.removeItem('jwtToken');
      sessionStorage.clear();

      // ✅ 필요한 경우 쿠키 삭제 로직 (HttpOnly 쿠키는 불가)
      console.log('클라이언트 로그아웃 처리 완료');

      navigate('/'); // 홈으로 이동
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      로그아웃
    </button>
  );
};

export default LogoutButton;
