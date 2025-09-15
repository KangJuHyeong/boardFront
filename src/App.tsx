import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoLoginButton from './components/KakaoLoginButton';
import KakaoCallback from './pages/oauthCallbacks/KakaoCallback';
import GoogleCallback from './pages/oauthCallbacks/GoogleCallback';
import SocialLogins from './pages/SocialLogin';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<SocialLogins />} />
            <Route path="/oauth/callback" element={<KakaoCallback />} />
            <Route path="/oauth2/redirect" element={<GoogleCallback />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
