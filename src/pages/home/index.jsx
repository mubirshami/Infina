import React, { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import HomeImage from "../../assets/home-nenja.png";
import Footer from "../../components/layout/footer";

const texts = [
  "Boost Your Portfolio with Infiina's AI-Backed Forex Expertise!",
  "Consistent Profits, Reliable Growth – Experience the Infiina Advantage!",
  "Secure, AI-Powered Trading for Returns You Can Count On!",
  "Join Infiina – Where Cutting-Edge Technology Meets Lucrative Returns!",
  "AI Precision, Expert Strategy – Infiina Ensures Your Path to 300% Return!",
  "Secure, Expert-Guided Investments for Consistent Monthly Returns of 8%-14%",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const text = texts[index];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center overflow-auto px-4 py-10 md:py-14">
        <div className="flex w-full max-w-7xl flex-col items-center gap-10 pb-14 md:flex-row md:items-start md:justify-between">
          <div className="w-full md:w-1/2 md:p-4">
            <div className="font-customFont text-[30px] font-bold leading-tight text-customBlue md:text-[36px]">
              {text}
            </div>
          </div>
          <div className="flex w-full justify-center md:w-1/2 md:justify-end md:pl-20">
            <img src={HomeImage} alt="Home" className="w-[250px] md:w-3/4" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
