import React from "react";
import Package1 from "../../assets/1.png";
import Package2 from "../../assets/2.png";
import Package3 from "../../assets/3.png";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";

const Packages = () => {
  const navigate = useNavigate();

  const cardDetails = [
    {
      title: "Basic",
      image: Package1,
      price: "$200 to $999",
      returnText: "Total Return 200% (Including Capital)",
      binary: "Binary - 6%",
      cap: "Binary Cap - $500/Week",
      buttonClassName:
        "absolute bottom-[43px] left-[78px] right-[78px] rounded-lg bg-gradient-to-b from-[#f79f23] to-[#f5db2f] px-0 py-0 text-sm text-white",
    },
    {
      title: "Professional",
      image: Package2,
      price: "$1000 to $4999",
      returnText: "Total Return 250% (Including Capital)",
      binary: "Binary - 7%",
      cap: "Binary Cap - $2500/Week",
      buttonClassName:
        "absolute bottom-[43px] left-[78px] right-[78px] rounded-lg bg-gradient-to-b from-[#ba65a7] to-[#e64f8e] px-0 py-0 text-sm text-white",
    },
    {
      title: "Premium",
      image: Package3,
      price: "$5000 to $25000",
      returnText: "Total Return 300% (Including Capital)",
      binary: "Binary - 8%",
      cap: "Binary Cap - $7500/Week",
      buttonClassName:
        "absolute bottom-[43px] left-[78px] right-[78px] rounded-lg bg-gradient-to-b from-[#874c9e] to-[#557dbf] px-0 py-0 text-sm text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-[55px] px-4 py-20">
        {cardDetails.map((card) => (
          <div key={card.title} className="relative h-[450px] w-[261px]">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-[450px] w-[261px]"
            />
            <h5 className="absolute -top-[23px] z-10 h-[450px] w-[261px] text-center text-2xl text-white">
              {card.title}
            </h5>
            <h5 className="absolute top-[50px] z-10 h-[450px] w-[261px] text-center text-sm font-extrabold text-white">
              8% to 14% per month
            </h5>
            <h5 className="absolute top-[134px] z-10 h-[450px] w-[261px] text-center text-2xl font-extrabold text-white">
              {card.price}
            </h5>
            <div className="absolute left-[29px] right-[28px] top-[230px]">
              <div className="space-y-3 text-center text-[10px] font-bold text-black">
                <div>{card.returnText}</div>
                <div>Direct Bonus 8%</div>
                <div>{card.binary}</div>
                <div>{card.cap}</div>
                <div>Payment Method - USDT In/Out</div>
              </div>
            </div>
            <Button
              type="button"
              text="Buy Now"
              onClick={() => navigate("/signup")}
              className={card.buttonClassName}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
