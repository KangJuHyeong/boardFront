import GoogleLoginButton from "../components/GoogleLoginButton";
import KakaoLoginButton from "../components/KakaoLoginButton";
import LogoutButton from "../components/LogoutButton";

function SocialLogins() {
  return (
    <div>
        <KakaoLoginButton></KakaoLoginButton>
        <GoogleLoginButton></GoogleLoginButton>
        <LogoutButton></LogoutButton>
    </div>
  );
}

export default SocialLogins;