import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="fixed bottom-0 z-[999] flex w-full justify-center bg-customBlue p-2 text-center text-white">
      <div>
        <div className="flex items-center justify-center text-2xl font-bold">
          <p className="mx-4 my-0 cursor-pointer" onClick={() => navigate("/terms")}>Terms of use</p>
          <p className="mx-4 my-0 cursor-pointer" onClick={() => navigate("/privacy")}>Privacy Policy</p>
        </div>
        <div>
          <p className="mx-0 mb-1 mt-2 text-sm">© 2024 Infiina. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
