import React from "react";
import "./Homepage2.css";
import Lion from "../../DesignAssets/images/Lion.png";
import FlowerBird from "../../DesignAssets/images/FlowerBird.png";
import Butterfly from "../../DesignAssets/images/Butterfly.png";
import BlackHorse from "../../DesignAssets/images/BlackHorse.png";
import Roses from "../../DesignAssets/images/Roses.png";
import Peacock from "../../DesignAssets/images/Peacock.png";
import Fox from "../../DesignAssets/images/Fox.png";
import Sunflower from "../../DesignAssets/images/Sunflower.png";
import doves from "../../DesignAssets/images/doves.png";
import Dog from "../../DesignAssets/images/Dog.png";
import BlueButterfly from "../../DesignAssets/images/BlueButterfly.png";
import Cat from "../../DesignAssets/images/Cat.png";

function Homepage2() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <div className="container__left">
            <h1>Featured AI-Generated and boogers Posters</h1>
            <p>
              Dive into the amazing Marvel Cinematic Unviers with art work
              generated throughout the mutliverse
            </p>
            <a href="" className="btn">
              Browse our favorites
            </a>
          </div>
          <div className="container__right">
            <img src={Butterfly} alt="" />
            <img src={Lion} alt="" />
            <img src={FlowerBird} alt="" />
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

      <section className="preview">
        <div className="preview__container">
          <h1>A FEW OF OUR FAVOURITES</h1>
          <div className="poster__gallery preview__gallery">
            <img src={Fox} alt="" />
            <img src={Sunflower} alt="" />
            <img src={doves} alt="" />
            <img src={Dog} alt="" />
            <img src={BlueButterfly} alt="" />
            <img src={Cat} alt="" />
          </div>
        </div>
      </section>

      <section className="popular">
        <div className="container">
          <div className="container__left">
            <img src={Roses} alt="" />
            <img src={BlackHorse} alt="" />
            {/* <img src="" alt="" /> */}
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
            <img src={Peacock} alt="" />
            {/* <img src="" alt="" />
            <img src="" alt="" /> */}
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage2;
