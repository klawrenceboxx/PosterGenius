import React from "react";
import Miles from "../../images/Miles_Morales.png";
import Tony from "../../images/Tony_Stark.png";
import Kang from "../../images/Kang.png";
import "./Hero.css";
import "../../fonts/Poppins-Regular.ttf";
import "../../fonts/RobotoFlex-Regular.ttf";

function Hero() {
  return (
    <div className="hero__area">
      {/* Hero section ONE */}
      <div className="hero__featured">
        <span className="hero__featured-header">
          Featured AI-generated Posters
        </span>
        <span className="hero__featured-text">
          Dive into the amazing Marvel & DC cinemtatic universe with art work
          generated throughout the mutliverse
        </span>
        <button className="hero__featured-button">
          <span className="hero__featured-button-text">
            Browse our favorites
          </span>
        </button>
      </div>

      {/* Hero section TWO */}
      <div className="hero__featured-gallery">
        <img
          className="hero__featured-poster1"
          src={Miles}
          alt="Miles Morales"
        />
        <img className="hero__featured-poster2" src={Tony} alt="Iron Man" />
        <img className="hero__featured-poster3" src={Kang} alt="Kang" />
        <div className="hero__featured-rectangle1"></div>
        <div className="hero__featured-rectangle2"></div>
      </div>

      {/* Background */}
      <div>
        <div className="hero__background hero__circle1"></div>
        <div className="hero__background hero__circle2"></div>
        <div className="hero__background hero__circle3"></div>
        <div className="hero__background hero__circle4"></div>
        <div className="hero__background hero__circle5"></div>
        <div className="hero__background hero__circle6"></div>
        <div className="hero__background hero__circle7"></div>
      </div>
    </div>
  );
}

export default Hero;
