import React, { useState } from "react";
import "./Login.css";

function Login({ role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "Admin") {
      if (email === "admin@gmail.com" && password === "1234") {
        alert("Admin Login Successful");
      } else {
        alert("Invalid Admin Credentials");
      }
    } else {
      if (email === "user@gmail.com" && password === "1234") {
        alert("User Login Successful");
      } else {
        alert("Invalid User Credentials");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="header">
        <h1>{role} Login</h1>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder={`Enter ${role} email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;