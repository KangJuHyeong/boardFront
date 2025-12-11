import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";

import KakaoCallBack from "./socialLogin/oauthCallbacks/KakaoCallback";

import './styles/App.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", backgroundColor: "#f2f2f2" }}>
        <Link to="/" style={{ marginRight: "10px" }}>로그인</Link>
        <Link to="/posts" style={{ marginRight: "10px" }}>게시글 목록</Link>
        <Link to="/write">글쓰기</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/write" element={<PostWritePage />} />
        <Route path="/oauth/callback" element={<KakaoCallBack />} />
      </Routes>
    </Router>
  );
}

export default App;
