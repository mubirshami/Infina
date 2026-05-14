import React from "react";
import "./index.css";
import LoginImage from "../../assets/nenja-logo.png"; // Make sure to replace with your actual image path
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="forget-pass-container">
      <div className="forget-pass-box">
        <form action="" className="form-styling">
          <div className="forget-pass-header">
            <img src={LoginImage} alt="Nenja Logo" className="forget-pass-logo" />
            <h2 className="forget-pass-title">Forgot Password</h2>
          </div>
          <div className="forget-pass-fields">
            <input
              type="text"
              placeholder="Username"
              className="forget-pass-input"
            />
          </div>
          <div className="forget-pass-button">
          <button type="submit" className="forget-pass-btn">FORGOT PASSWORD</button>
          </div>
          <div className="forgot-pass-signin-button">
            <p>Do you know the password already?</p>
            <button onClick={()=>navigate("/login")} className="forgot-pass-login">SIGN IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
