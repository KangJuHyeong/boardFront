// src/components/LogoutButton.tsx
import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../components/Button/Button";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return <Button onClick={handleLogout}>로그아웃</Button>;
};

export default LogoutButton;
