import React from "react";

export const GetIt = props => {
  const { titleText, subtitleText } = props;
  return (
    <div className="wrapper-get-it">
      <div className="wrapper-text">
        <div>{titleText}</div>
        <p>{subtitleText}</p>
      </div>
      <button className="get-it">GET IT NOW</button>
    </div>
  );
};
