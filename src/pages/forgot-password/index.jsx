import React from "react";
import LoginImage from "../../assets/nenja-logo.png";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4 py-10">
      <div className="w-full max-w-[560px] rounded-lg border border-[#092a5e] bg-white px-8 py-8 shadow-sm">
        <form action="" className="space-y-6">
          <div>
            <img src={LoginImage} alt="Nenja Logo" className="mx-auto w-28" />
            <h2 className="mt-4 text-center text-2xl font-semibold text-[#333]">
              Forgot Password
            </h2>
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092a5e] focus:ring-2 focus:ring-[#092a5e]/10"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              text="FORGOT PASSWORD"
              disabled
              className="w-1/2"
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-[#333]">Do you know the password already?</p>
            <Button
              type="button"
              text="SIGN IN"
              onClick={() => navigate("/login")}
              className="w-1/2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
