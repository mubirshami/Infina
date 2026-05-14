import React, { useState } from "react";
import "./index.css";
import LoginImage from "../../assets/nenja-logo.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [sponsorId, setSponsorId] = useState("");

  const isFormValid =
    sponsorId.trim() !== "" &&
    username.trim() !== "" &&
    password.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    country.trim() !== "" &&
    address.trim() !== "" &&
    name.trim() !== "";
  return (
    <div className="signup-container">
      <div className="signup-box">
        <form action="" className="form-styling">
          <div className="signup-header">
            <img src={LoginImage} alt="Nenja Logo" className="signup-logo" />
            <h2 className="signup-title">Sign Up</h2>
          </div>
          <div className="signup-fields">
            <input
              type="number"
              placeholder="sponsor ID"
              className="signup-input"
              value={sponsorId}
              onChange={(e) => setSponsorId(e.target.value)}
            />
            <input
              type="text"
              placeholder="name"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              className="signup-input"
              value={email}
              onVolumeChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="phone number"
              className="signup-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="country"
              placeholder="country"
              className="signup-input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="address"
              className="signup-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="username"
              className="signup-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signup-button">
            <button
              type="submit"
              className={`signup-btn ${isFormValid ? "active" : ""}`}
              disabled={!isFormValid}
            >
              Sing Up
            </button>
          </div>
          <div className="signup-footer">
            <a href="infina/#/terms" className="footer-link">
              Terms and Conditions
            </a>
            <span className="separator">|</span>
            <a href="infina/#/privacy" className="footer-link">
              Privacy Policy
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
