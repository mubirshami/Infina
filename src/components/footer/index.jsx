import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="fixed w-full flex justify-center items-center p-2 bg-customBlue text-center z-999 bottom-0 text-white">
      <div className="">
        <div className="flex justify-center items-center font-bold text-2xl">
        <p className="my-0 mx-4 cursor-pointer" onClick={()=>navigate("/terms")}>Terms of use</p>
          <p className="my-0 mx-4 cursor-pointer" onClick={()=>navigate("/privacy")}>Privacy Policy</p>
        </div>
        <div className="">
          <p className="mx-0 mt-2 mb-1 text-sm">© 2024 Infiina. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
