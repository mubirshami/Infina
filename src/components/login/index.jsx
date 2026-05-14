import React, { useState } from "react";
import "./index.css";
import LoginImage from "../../assets/nenja-logo.png"; // Make sure to replace with your actual image path
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-container">
      <div className="login-box">
        <form action="" className="form-styling">
          <div className="login-header">
            <img src={LoginImage} alt="Nenja Logo" className="login-logo" />
            <h2 className="login-title">Log in</h2>
          </div>
          <div className="login-fields">
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-options">
            <div className="remember-me">
              <input type="checkbox" className="remember-checkbox" />
              <label>Remember me</label>
            </div>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
          <div className="login-button">
            <button
              type="submit"
              className={`login-btn ${isFormValid ? "active" : ""}`}
              disabled={!isFormValid}
            >
              Log in
            </button>
          </div>
          <div className="login-footer">
            <Link to="/terms" className="footer-link">Terms and Conditions</Link>
            <span className="separator">|</span>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
