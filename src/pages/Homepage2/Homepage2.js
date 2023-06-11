import React from "react";
import Miles from "../../images/Miles_Morales.png";
import Tony from "../../images/Tony_Stark.png";
import Kang from "../../images/Kang.png";
import "./Hoempage2.css";
function Homepage2() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="hero__left">
              <h1>Featured AI-Generated Posters</h1>
              <p>
                Dive into the amazing Marvel Cinematic Unviers with art work
                generated throughout the mutliverse
              </p>
              <a href="">Browse our favorites</a>
            </div>
            <div className="hero__right">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div></div>
              <div></div>
            </div>
            <div className="hero__background hero__circle1"></div>
            <div className="hero__background hero__circle2"></div>
            <div className="hero__background hero__circle3"></div>
            <div className="hero__background hero__circle4"></div>
            <div className="hero__background hero__circle5"></div>
            <div className="hero__background hero__circle6"></div>
            <div className="hero__background hero__circle7"></div>
          </div>
        </div>
      </section>

      <section className="popular">
        <div className="container"></div>
      </section>

      <section className="promotion">
        <div className="container"></div>
      </section>
    </div>
  );
}

export default Homepage2;
