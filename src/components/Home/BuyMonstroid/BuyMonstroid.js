import React from "react";
const mac = "http://localhost:3001/mac.png";
export const BuyMonstroid = () => {
  return (
    <div className="buyMonstroid">
      <img alt="" src={mac} />
      <div className="wrapper-text-buy">
        <h3>Buy Monstroid² Once and Get Free Updates</h3>
        <p>Enjoy a range of new layouts and child themes with regular free updates.</p>
      </div>
    </div>
  );
};
