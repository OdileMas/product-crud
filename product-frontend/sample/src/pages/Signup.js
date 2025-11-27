import { useState } from "react";
import axios from "axios";
import  "./Signup.css";
import { useNavigate, Link } from "react-router-dom";

function Signup(){
    const[name, setName]  = useState("")
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate =useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();
  try {
  const res = await axios.post("http://localhost:5000/api/auth/register", {
  name,
  email,
  password,
});

    if (res.data.success) {
    alert("Account created. Please login");
    navigate("/");
  } else {
    alert("Signup failed: " + res.data.message);
  }
} catch (err) {
  if (err.response) {
    alert("Signup failed: " + err.response.data.message);
  } else {
    alert("Server error: " + err.message);
  }
}
  };

    return(
        <div className="signup-container">
            <h2>Create Acount Here</h2>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="enter your name"
                onChange ={(e)=> setName(e.target.value)} required/>< br />
                 <input type="email" placeholder="enter your email"
                onChange ={(e)=> setEmail(e.target.value)} required />< br />
                 <input type="password" placeholder="enter your password"
                onChange ={(e)=> setPassword(e.target.value)} required/>< br />
                <button type="submit">Signup</button>
                </form>
                <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    );
}
export default Signup;