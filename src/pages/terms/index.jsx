import React from "react";
import TermsImage from "../../assets/nenja-logo.png";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col px-4 py-4">
      <div className="mb-4">
        <img
          src={TermsImage}
          alt="Infiina Logo"
          className="w-[275px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <h1 className="text-4xl font-bold text-[#1D3B6A]">Terms of Use</h1>
      <div className="mt-4 space-y-4 text-base text-black">
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Introduction</div>
        <div>
          Welcome to Infiina.ai ("Infiina", "we", "our", or "us"). By using our
          website / Mobile Application/APIs , services, and products
          ("Services"), you agree to comply with and be bound by the following
          terms and conditions ("Terms"). Please review them carefully as these
          terms form a contract between you and Infiina (Infiina.ai).
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Acceptance of Terms</div>
        <div>
          <p>
            <span className="font-bold">
              By accepting these Terms electronically (for example, clicking “I
              Agree”)
            </span>
            ”), accessing, using, or registering for our Services, you
            acknowledge that you have read, understood, and agree to be bound by
            these Terms and our Privacy Policy. If you do not agree to these
            Terms, you may not use our Services.
          </p>
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Description of Services </div>
        <div>
          Infiina provides various services, including access to our website,
          APIs, mobile applications, and other software services. These services
          may include, but are not limited to, content such as software, data,
          text, audio, video, images, photos, graphics, or other materials
          ("Content").
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Eligibility</div>
        <div>
          To use our Services, you must be at least 18 years old and have the
          legal capacity to enter into these Terms. By using our Services, you
          represent and warrant that you meet these requirements.
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Account Registration</div>
        <div>
          To access certain features of our Services, you may need to create an
          account. You agree to provide accurate and complete information during
          the registration process and to update such information to keep it
          accurate and complete. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Modifications to Terms</div>
        <div>
          We may modify these Terms at any time. Any changes will be effective
          immediately upon posting on our website or through other
          notifications. Your continued use of the Services after any such
          changes constitutes your acceptance of the new Terms.
        </div>
        <div className="pb-1 pt-1 text-[22px] font-semibold text-[#1D3B6A]">Risk Disclosure Statement</div>
        <div className="space-y-4">
          <p>
            This provides you with information about the risks associated with
            investment products, in which you may invest, through services
            provided to you by Infiina (Infiina.ai).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
