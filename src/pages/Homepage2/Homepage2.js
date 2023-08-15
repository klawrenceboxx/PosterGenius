import React from "react";
import {Link} from "react-router-dom";
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
            <h1>Photorealistic AI-Generated Wall Art</h1>
            <p>
              How to Impress Your Guests with Unique Decor in As Little As 48
              Hours... even if you have zero design skills!
            </p>
            <Link to="Posters/">
              <h6 className="btn">Browse our favorites</h6>
            </Link>
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
            <img className="homepage__img" src={Fox} alt="" />
            <img className="homepage__img" src={Sunflower} alt="" />
            <img className="homepage__img" src={doves} alt="" />
            <img className="homepage__img" src={Dog} alt="" />
            <img className="homepage__img" src={BlueButterfly} alt="" />
            <img className="homepage__img" src={Cat} alt="" />
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
            <h1>Bring Nature to Your Living Room</h1>
            <p>
              Discover art that perfectly blends high-quality materials and
              artistic brilliance to tell your story
            </p>
            <Link to="Posters/">
              <h6 href="" className="btn">
                Shop Posters Now
              </h6>
            </Link>
          </div>
        </div>
      </section>

      <section className="promotion">
        <div className="container">
          <div className="container__left">
            <h1>Featured Poster of the Month</h1>
            <p>
              Leave your friends and family in awe... with this limited edition
              poster only available for a limited time! Get it before it's gone!
            </p>
            <Link to="Posters/">
              <h6 className="btn">See What's New!</h6>
            </Link>
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
