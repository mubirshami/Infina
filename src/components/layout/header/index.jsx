import React, { useState } from "react";
import LogoImage from "../../../assets/nenja-logo.png";
import Button from "../../ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const navigateAndClose = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="relative flex items-center justify-between gap-4 px-4 py-4 md:px-6">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="shrink-0"
        aria-label="Go to home"
      >
        <img
          src={LogoImage}
          alt="Nenja Logo"
          className="w-full max-w-[200px] cursor-pointer md:max-w-[300px]"
        />
      </button>

      <button
        type="button"
        onClick={toggleMenu}
        className="rounded-lg border border-[#092a5e] px-3 py-2 text-2xl text-[#092a5e] md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="header-navigation"
      >
        &#9776;
      </button>

      <div
        id="header-navigation"
        className={`absolute left-0 top-full z-20 w-full border-t border-gray-200 bg-white px-4 py-4 md:static md:z-auto md:flex md:w-auto md:border-0 md:bg-transparent md:px-0 md:py-0 ${
          isMenuOpen ? "flex flex-col gap-3" : "hidden md:flex"
        }`}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Button text="Log In" onClick={() => navigateAndClose("/login")} className="w-full text-xs sm:text-sm md:w-auto" />
          <Button text="Sign Up" onClick={() => navigateAndClose("/signup")} className="w-full text-xs sm:text-sm md:w-auto" />
          <Button text="Packages" onClick={() => navigateAndClose("/packages")} className="w-full text-xs sm:text-sm md:w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
