import React from "react";
import "../../../style/style.css";
export const Features = () => {
  return (
    <div className="features">
      <h2>
        Features are <p className="change-font"> ...ready to use </p>
      </h2>
      <div className="featuresAdvantages">
        <div className="advantage">
          <i className="material-icons">file_copy</i>
          <h3>400+</h3>
          <p>HTML Pages</p>
        </div>
        <div className="advantage">
          <i className="material-icons">flip_to_front</i>
          <h3>∞</h3>
          <p>Unlimited Layouts</p>
        </div>
        <div className="advantage">
          <i className="material-icons">brush</i>
          <h3>700+</h3>
          <p>Visual Editor Presets</p>
        </div>
        <div className="advantage">
          <i className="material-icons">favorite_border</i>
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};
