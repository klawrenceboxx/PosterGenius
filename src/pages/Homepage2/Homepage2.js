import React from "react";
import "./Homepage2.css";
import Miles from "../../DesignAssets/images/Miles_Morales.png";
import Tony from "../../DesignAssets/images/Tony_Stark.png";
import Kang from "../../DesignAssets/images/Kang.png";

function Homepage2() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <div className="container__left">
            <h1>Featured AI-Generated Posters</h1>
            <p>
              Dive into the amazing Marvel Cinematic Unviers with art work
              generated throughout the mutliverse
            </p>
            <a href="" className="btn">
              Browse our favorites
            </a>
          </div>
          <div className="container__right">
            <img src={Miles} alt="" />
            <img src={Tony} alt="" />
            <img src={Kang} alt="" />
            <div></div>
            <div></div>
          </div>
        </div>
        {/* <div className="hero__background hero__circle1"></div>
        <div className="hero__background hero__circle2"></div>
        <div className="hero__background hero__circle3"></div>
        <div className="hero__background hero__circle4"></div>
        <div className="hero__background hero__circle5"></div>
        <div className="hero__background hero__circle6"></div>
        <div className="hero__background hero__circle7"></div> */}
      </section>

      <section className="popular">
        <div className="container">
          <div className="container__left">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <div></div>
            <div></div>
          </div>
          <div className="container__right">
            <h1>Popular Categories</h1>
            <p>
              Step into the action by following Goky and the Z Fighters as they
              journey through the Tournament of Power
            </p>
            <a href="" className="btn">
              Shop Anime Now
            </a>
          </div>
        </div>
      </section>

      <section className="promotion">
        <div className="container">
          <div className="container__left">
            <h1>Featured Poster of the Month</h1>
            <p>
              Conquer the day or be scatter to ashes amongst the many who dare
              to stand in the way of the conqueror
            </p>
            <a href="" className="btn">
              Browse our favorites
            </a>
          </div>
          <div className="container__right">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage2;
