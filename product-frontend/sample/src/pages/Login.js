import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
  const res = await axios.post("http://localhost:5000/api/auth/login", {
  email,
  password,
});


    if (res.data.success) {
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } else {
      alert("Login failed: " + res.data.message);
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
};

  return (
    <div className="login-container">
      <h2>Login Your Account</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p className="switch-text">
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
