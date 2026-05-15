import React, { useState } from "react";
import LoginImage from "../../assets/nenja-logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/ui/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4 py-10">
      <div className="w-full max-w-[560px] rounded-lg border border-[#092a5e] bg-white px-8 py-8 shadow-sm">
        <form action="" className="space-y-6">
          <div>
            <img src={LoginImage} alt="Nenja Logo" className="mx-auto w-28" />
            <h2 className="mt-3 text-center text-xl font-semibold text-[#333]">
              Log in
            </h2>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092a5e] focus:ring-2 focus:ring-[#092a5e]/10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092a5e] focus:ring-2 focus:ring-[#092a5e]/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-4 text-sm">
            <label className="flex items-center gap-2 text-[#333]">
              <input type="checkbox" className="h-4 w-4 accent-[#092a5e]" />
              <span>Remember me</span>
            </label>
            <div>
              <Link to="/forgot-password" className="text-[#092a5e] underline">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              text="Log in"
              disabled={!isFormValid}
              className="w-1/2 rounded-md py-3 text-base"
            />
          </div>

          <div className="text-center text-xs font-bold text-[#092a5e]">
            <Link to="/terms" className="underline">
              Terms and Conditions
            </Link>
            <span className="mx-2 text-[#ccc]">|</span>
            <Link to="/privacy" className="underline">
              Privacy Policy
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
