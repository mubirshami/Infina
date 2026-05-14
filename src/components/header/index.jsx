import React, { useState } from "react";
import "./index.css";
import LogoImage from "../../assets/nenja-logo.png";
import Button from "../button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-styles">
      <div className="header-img">
        <img src={LogoImage} alt="Nenja Logo" className="nenja-img" onClick={()=>navigate("/")}/>
      </div>
      <div className="header-hamburger" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      <div className={`header-buttons ${isMenuOpen ? "open" : ""}`}>
        <Button text="Log In" onClick={() => navigate("/login")} />
        <Button text="Sign Up" onClick={() => navigate("/signup")} />
        <Button text="Packages" onClick={() => navigate("/packages")} />
      </div>
    </header>
  );
};

export default Header;
