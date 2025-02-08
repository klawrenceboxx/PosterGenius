import React from "react";
import Miles from "../../images/Miles_Morales.png";
import Tony from "../../images/Tony_Stark.png";
import Kang from "../../images/Kang.png";
import "./Hero.css";
import "../../fonts/Poppins-Regular.ttf";
import "../../fonts/RobotoFlex-Regular.ttf";
function Homepage2() {
  return (
    <>
      <section>
        <div className="hero__left">
          <span className="hero__left__header">

          </span>
      </section>
      <section>
        <div className="hero__right">
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
      </section>

      <section>
        <div className="hero__background">
          <div id="circle1"></div>
          <div id="circle2"></div>
          <div id="circle3"></div>
          <div id="circle4"></div>
          <div id="circle5"></div>
          <div id="circle6"></div>
          <div id="circle7"></div>
        </div>
      </section>
    </>
  );
}

export default Homepage2;
