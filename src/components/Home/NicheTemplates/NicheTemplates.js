import React from "react";
import "../../../style/style.css";
export const NicheTemplates = props => {
  const { wrapperTemplatesImages } = props;
  return (
    <div className="nicheTemplates">
      <h1>Niche Templates</h1>
      <p>Monstroid² offers you lots of customizable niche layouts, with which you can build your website.</p>
      <div className="wrapper-templates">
        {wrapperTemplatesImages.map((img, i) => {
          return (
            <div className="template" key={i}>
              <img className="templateImage" src={img} alt="" />
              <div className="templateText">
                <div className="templateTitle">Lorem Ipsum</div>
                <p>Dolor Sit Ammet</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
