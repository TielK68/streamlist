import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const user = {
      name: "Itiel King",
      email: "itielking@yahoo.com",
      provider: "Google OAuth",
    };

    localStorage.setItem("streamListUser", JSON.stringify(user));
    setIsAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>🎬 StreamList</h1>
        <h2>Secure Login</h2>

        <p>
          Sign in with Google OAuth to access the StreamList application,
          manage services, and continue to checkout.
        </p>

        <button onClick={handleGoogleLogin} className="google-login-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;