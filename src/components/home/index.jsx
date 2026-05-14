import React, { useState, useEffect, useMemo } from "react";
import Header from "../header";
import HomeImage from "../../assets/home-nenja.png";
import Footer from "../footer";

const Home = () => {
  const texts = useMemo(() => [
    "Boost Your Portfolio with Infiina's AI-Backed Forex Expertise!",
    "Consistent Profits, Reliable Growth – Experience the Infiina Advantage!",
    "Secure, AI-Powered Trading for Returns You Can Count On!",
    "Join Infiina – Where Cutting-Edge Technology Meets Lucrative Returns!",
    "AI Precision, Expert Strategy – Infiina Ensures Your Path to 300% Return!",
    "Secure, Expert-Guided Investments for Consistent Monthly Returns of 8%-14%",
  ], []);

  const [text, setText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval); 
  }, [texts.length]);

  useEffect(() => {
    setText(texts[index]);
  }, [index, texts]);

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-full w-full overflow-auto">
        <div className="flex content-between items-start pb-14">
          <div className="w-1/2 p-4 text-customBlue text-customFontSize font-bold font-customFont">
            <div className="home-heading">{text}</div>
          </div>
          <div className="w-1/2 pl-20">
            <img src={HomeImage} alt="Home" className="w-3/4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
