import React from "react";
import "./index.css";
import Package1 from "../../assets/1.png";
import Package2 from "../../assets/2.png";
import Package3 from "../../assets/3.png";
import Footer from "../footer";
import Header from "../header";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();
  return (
    <div className="packages-container">
      <Header />
      <div className="packages-box">
        <div className="package-1">
          <div className="package">
            <h5 className="package-heading">Basic</h5>
            <h5 className="percent-per-month">8% to 14% per month</h5>
            <img src={Package1} alt="Package 1" className="package-image" />
            <h5 className="price">$200 to $999</h5>
            <div className="des">
              <div>
                <div className="text">Total Return 200% (Including Capital)</div>
                <div className="text">Direct Bonus 8%</div>
                <div className="text">Binary - 6%</div>
                <div className="text">Binary Cap - $500/Week</div>
                <div className="text">Payment Method - USDT In/Out</div>
              </div>
            </div>
            <button className="button1" onClick={()=> navigate("/signup")}>Buy Now</button>
          </div>
        </div>

        <div className="package-1">
          <div className="package">
            <h5 className="package-heading">Professional</h5>
            <h5 className="percent-per-month">8% to 14% per month</h5>

            <img src={Package2} alt="Package 1" className="package-image" />
            <h5 className="price">$1000 to $4999</h5>
            <div className="des">
              <div>
                <div className="text">Total Return 250% (Including Capital)</div>
                <div className="text">Direct Bonus 8%</div>
                <div className="text">Binary - 7%</div>
                <div className="text">Binary Cap - $2500/Week</div>
                <div className="text">Payment Method - USDT In/Out</div>
              </div>
            </div>
            <button className="button2" onClick={()=> navigate("/signup")}>Buy Now</button>
          </div>
        </div>

        <div className="package-1">
          <div className="package">
            <h5 className="package-heading">Premium</h5>
            <h5 className="percent-per-month">8% to 14% per month</h5>
            <img src={Package3} alt="Package 1" className="package-image" />
            <h5 className="price">$5000 to $25000</h5>
            <div className="des">
              <div>
                <div className="text">Total Return 300% (Including Capital)</div>
                <div className="text">Direct Bonus 8%</div>
                <div className="text">Binary - 8%</div>
                <div className="text">Binary Cap - $7500/Week</div>
                <div className="text">Payment Method - USDT In/Out</div>
              </div>
            </div>
            <button className="button3" onClick={()=> navigate("/signup")}>Buy Now</button>
          </div>
        </div>

        {/* <div className="package-2">
          <div className="package">
            <div className="package-image">
              <img src={Package2} alt="Package 1" className="package-image" />
            </div>
            <p>Basic</p>
            <p>200$ to 999$ </p>
            <p> 8% to 14% per month</p>
            <p>total return 200% ( including capital )</p>
          </div>
          <div className="package-button">
            <img src={Package2Button} alt="Package 1 Button" />
            <p>Buy Now</p>
          </div>
        </div>

        <div className="package-3">
          <div className="package">
            <div className="package-image">
              <img src={Package3} alt="Package 1" className="package-image" />
            </div>
            <div className="des">
            <p>Basic</p>
            <p>200$ to 999$ </p>
            <p> 8% to 14% per month</p>
            <p>total return 200% ( including capital )</p>
            </div>
           
          </div>
          <div className="package-button">
            <img src={Package3Button} alt="Package 1 Button" />
            <p>Buy Now</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Packages;
