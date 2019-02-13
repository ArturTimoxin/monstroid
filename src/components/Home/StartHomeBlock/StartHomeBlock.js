import React from "react";
import "../../../style/style.css";
const logo = "http://localhost:3001/logo.png";

export const StartHomeBlock = props => {
  const { colorHeader, scrollToElement } = props;
  return (
    <div className="startHomeBlock">
      <header>
        <div className={`header-inner ${colorHeader ? "color" : ""}`}>
          <img alt="" className="logo" src={logo} />
          <ul className="menu">
            <li onClick={scrollToElement}>HOME</li>
            <li>FEATURES</li>
            <li>NICHE LAYOUTS</li>
            <li>LAYOUTS</li>
            <li>UPDATES</li>
          </ul>
          <button className="buy-template-button">BUY TEMPLATE</button>
        </div>
      </header>
      <div className="wrapper-info">
        <h1>Create Customise Your Own Website</h1>
        <h3>It has never been easier!</h3>
        <button className="demo">LIVE DEMO</button>
      </div>
    </div>
  );
};
