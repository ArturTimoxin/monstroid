import React from "react";
const icon2 = "http://localhost:3001/home/img/icon2.png";
export const KeyFeatures = props => {
  const { features } = props;
  return (
    <div className="keyFeatures">
      <h1>Key Features</h1>
      <div className="wrapper-key-features">
        {features.map((text, i) => {
          return (
            <div className="feature" key={i}>
              <img src={icon2} alt="" />
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
