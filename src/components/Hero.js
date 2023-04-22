import React from "react";
import Miles from "../images/Miles_Morales.png";
import Tony from "../images/Tony_Stark.png";
import Kang from "../images/Kang.png";
import "./Hero.css";
import "../fonts/Poppins-Regular.ttf";

function Hero() {
  return (
    <div className="Hero_area">
      <div className="Hero_Featured">
        <span className="Hero_FeaturedHeader">
          Featured AI-generated Posters
        </span>
        <span className="Hero_FeaturedText">
          Dive into the amazing Marvel & DC cinemtatic universe with art work
          generated throughout the mutliverse
        </span>
        <button className="Hero_FeaturedButton">
          <span className="Hero_FeaturedButton-text">Browse our favorites</span>
        </button>
      </div>
      <div className="Hero_featuredGallery">
        <img className="Hero_featuredPoster1" src={Miles} alt="Miles Morales" />
        <img className="Hero_featuredPoster2" src={Tony} alt="Iron Man" />
        <img className="Hero_featuredPoster3" src={Kang} alt="Kang" />
        <div className="Hero_featuredRectangle1"></div>
        <div className="Hero_featuredRectangle2"></div>
      </div>
      <div>
        <div className="Hero_Background Hero_Circle1"></div>
        <div className="Hero_Background Hero_Circle2"></div>
        <div className="Hero_Background Hero_Circle3"></div>
        <div className="Hero_Background Hero_Circle4"></div>
        <div className="Hero_Background Hero_Circle5"></div>
        <div className="Hero_Background Hero_Circle6"></div>
        <div className="Hero_Background Hero_Circle7"></div>
      </div>
    </div>
  );
}

export default Hero;
