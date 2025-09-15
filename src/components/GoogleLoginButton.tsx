const GOOGLE_CLIENT_ID = "1072849870050-rfqaupkf41bppf8f5endjnt2k4hgereh.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

const GoogleLoginButton = () => {
  const googleLogin = () => {
    const baseUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const scope = "email profile openid";
    const responseType = "code";

    const url = `${baseUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${responseType}&scope=${scope}&access_type=offline`;

    window.location.href = url;
  };

  return (
    <div>
      <button onClick={googleLogin}>구글 로그인</button>
    </div>
  );
};

export default GoogleLoginButton;
