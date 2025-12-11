import Button from "../components/Button/Button";

const GoogleLoginButton = () => {
  const loginWithGoogleAuthCode = () => {
    
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return <Button onClick={loginWithGoogleAuthCode}>구글 로그인</Button>;
};

export default GoogleLoginButton;
