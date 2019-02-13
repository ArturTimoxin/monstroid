import React from "react";
const laptop = "http://localhost:3001/laptop.png";
export const Technologes = () => {
  return (
    <div className="technologes">
      <div className="wrapper-info-text">
        <div className="info-text">
          <div className="info">
            <div className="wrap-text">
              <h3>SEO Friendly</h3>
              <p>Valid code and performance optimized framework make SEO easy and hassle-free.</p>
            </div>
            <i className="material-icons">zoom_in</i>
          </div>
          <div className="info">
            <div className="wrap-text">
              <h3>Advanced UI Kit</h3>
              <p>Monstroid² comes with a powerful and flexible extended toolkit in addition to basic Bootstrap.</p>
            </div>
            <i className="material-icons">zoom_in</i>
          </div>
        </div>
        <img alt="" src={laptop} />
        <div className="info-text-2">
          <div className="info-2">
            <i className="material-icons">zoom_in</i>
            <div className="wrap-text">
              <h3>Powerful flexbox grid system</h3>
              <p>Monstroid² includes a powerful mobile-first flexbox grid system for building layouts.</p>
            </div>
          </div>
          <div className="info-2">
            <i className="material-icons">zoom_in</i>
            <div className="wrap-text">
              <h3>Flexible and Multipurpose</h3>
              <p>Monstroid² allows to create various websites for complex and scalable projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
