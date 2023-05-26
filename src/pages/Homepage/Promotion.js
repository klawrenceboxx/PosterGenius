import React from "react";
import Kang2 from "../../DesignAssets/images/Kang2.png";
import "./Promotion.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import "../../DesignAssets/fonts/RobotoFlex-Regular.ttf";

function Promotion() {
  return (
    <div className="promotion__area">
      {/* Promotion section ONE */}
      <div className="promotion__featured">
        <span className="promotion__featured-header">
          Featured Poster of the Month
        </span>
        <span className="promotion__featured-text">
          Conquer the day or be scattered to ashes amongst the many who dare
          stand in the way of the conqueror
        </span>
        <button className="promotion__featured-button">
          <span className="promotion__featured-button-text">
            Shop Marvel Cinematic Universe
          </span>
        </button>
      </div>

      {/* Featured section TWO */}
      <div className="promotion__featured-gallery">
        <img
          className="promotion__featured-poster1"
          src={Kang2}
          alt="Kang the Conqueror"
        />
        <div className="promotion__featured-rectangle1"></div>
        <div className="promotion__featured-rectangle2"></div>
      </div>
    </div>
  );
}

export default Promotion;
