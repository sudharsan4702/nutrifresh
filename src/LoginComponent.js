// LoginPage.js
import React, { useState } from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
  const [role, setRole] = useState("Admin");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Mock backend login logic
    if (credentials.username === "admin" && credentials.password === "1234" && role === "Admin") {
      alert("Welcome, Admin!");
    } else if (credentials.username === "staff" && credentials.password === "1234" && role === "Staff") {
      alert("Welcome, Staff!");
    } else {
      setError("Invalid username, password, or role.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </div>
        <div className="input-group">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginComponent;
