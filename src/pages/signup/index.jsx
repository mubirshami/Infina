import React, { useState } from "react";
import LoginImage from "../../assets/nenja-logo.png";
import Button from "../../components/ui/button";
import { Link } from "react-router-dom";

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
    <div className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4 py-10">
      <div className="w-full max-w-[560px] rounded-lg border border-[#092A5E] bg-white px-8 py-6 shadow-sm">
        <form action="" className="space-y-4">
          <div>
            <img src={LoginImage} alt="Nenja Logo" className="mx-auto w-28" />
            <h2 className="mt-3 text-center text-xl font-semibold text-[#333]">
              Sign Up
            </h2>
          </div>

          <div className="space-y-3">
            <input
              type="number"
              placeholder="sponsor ID"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={sponsorId}
              onChange={(e) => setSponsorId(e.target.value)}
            />
            <input
              type="text"
              placeholder="name"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="phone number"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="country"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="address"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="username"
              className="w-full rounded border border-[#ccc] bg-[#f7f8fa] px-3 py-2 text-sm text-[#333] outline-none transition focus:border-[#092A5E] focus:ring-2 focus:ring-[#092A5E]/10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              text="Sign Up"
              disabled={!isFormValid}
              className="w-1/2 rounded-md py-3 text-base"
            />
          </div>

          <div className="text-center text-xs font-bold text-[#092A5E]">
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

export default Signup;
