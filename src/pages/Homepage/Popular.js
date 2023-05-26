import React from "react";
import Goku from "../../DesignAssets/images/Goku.png";
import Landscape from "../../DesignAssets/images/Landscape.png";
import "./Popular.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import "../../DesignAssets/fonts/RobotoFlex-Regular.ttf";

function Popular() {
  return (
    <div className="popular__area">
      {/* Popular section ONE */}
      <div className="popular__categories-gallery">
        <img className="popular__categories-poster1" src={Landscape} alt="" />
        <img className="popular__categories-poster2" src={Goku} alt="" />
        <div className="popular__categories-rectangle1"></div>
        <div className="popular__categories-rectangle2"></div>
      </div>

      {/* Popular section TWO */}
      <div className="popular__categories">
        <span className="popular__categories-header">Popular Categories</span>
        <span className="popular__categories-text">
          Step into the action by following Goku and the Z fighters in their
          journey through the tournament of power
        </span>
        <button className="popular__categories-button">
          <span className="popular__categories-button-text">
            Shop Anime Now
          </span>
        </button>
      </div>
    </div>
  );
}

export default Popular;
