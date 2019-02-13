import React from "react";
const MobileImage = "http://localhost:3001/mobile.png";
export const OptimizedMobile = () => {
  return (
    <div className="optimizedMobile">
      <div className="wrapper-optimized">
        <img src={MobileImage} alt="" />
        <div className="wrapper-infomation">
          <h1>Optimized for Mobile Devices</h1>
          <div className="wrapper-info-wrapper">
            <div className="info">
              <i className="material-icons">important_devices</i>
              <div className="wrapper-info-text">
                <h2>100% Responsive</h2>
                <p>Monstroid² is fully responsive and will adapt itself to any mobile or tablet device.</p>
              </div>
            </div>
            <div className="info">
              <i className="material-icons">remove_red_eye</i>
              <div className="wrapper-info-text">
                <h2>Retina Ready</h2>
                <p>
                  Monstroid² is Retina Ready and it guarantees that your website will always look perfect on any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
