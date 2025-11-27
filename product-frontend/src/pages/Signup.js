import { useState } from "react";
import axios from "axios";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Send trimmed and lowercase email to backend
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password,
      });

      if (res.data.success) {
        // store user info immediately
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Account created successfully. Please login.");
        navigate("/"); 
      } else {
        alert("Signup failed: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        alert("Signup failed: " + err.response.data.message);
      } else {
        alert("Server error: " + err.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
