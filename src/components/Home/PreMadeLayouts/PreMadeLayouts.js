import React from "react";
import "../../../style/style.css";
export const PreMadeLayouts = props => {
  const { preMadeLayouts } = props;
  return (
    <div className="preMadeLayouts">
      <h1>Pre-made layouts</h1>
      <p>Use these pre-made layouts with any page of Monstroid².</p>
      <div className="wrapper-pre-made-layouts">
        {preMadeLayouts.map((arr, i) => {
          return (
            <div className="pre-made-layout" key={i}>
              <img src={arr[0]} alt="" />
              <div>{arr[1]}</div>
            </div>
          );
        })}
      </div>
      <button className="view-more">VIEW MORE</button>
    </div>
  );
};
