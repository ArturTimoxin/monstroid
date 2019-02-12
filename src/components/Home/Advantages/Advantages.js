import React from "react";
const icon = "http://localhost:3001/home/img/icon.png";

export const Advantages = () => {
  return (
    <div className="advantages">
      <h1>Monstroid² Advantages</h1>
      <div className="wrapper-monstroid-advantages">
        <div className="monstroid-advantage">
          <img alt="" src={icon} />
          <h3>Accelerate your development</h3>
          <p>Speedup your project development in 2 or even 3 times using this template.</p>
        </div>
        <div className="monstroid-advantage">
          <img alt="" src={icon} />
          <h3>Reduce your QA</h3>
          <p>Thanks to this template, your project fixes will be made in a blink of the eye.</p>
        </div>
        <div className="monstroid-advantage">
          <img alt="" src={icon} />
          <h3>Save your money</h3>
          <p>An accelered development lets you to save a thousands of dollars on creating your projects.</p>
        </div>
        <div className="monstroid-advantage">
          <img alt="" src={icon} />
          <h3>Suggest and get satisfied</h3>
          <p>The main idea is to create a product by people for the people.</p>
        </div>
      </div>
    </div>
  );
};
