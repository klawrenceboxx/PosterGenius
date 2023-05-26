import React from "react";
import frozen from "../../DesignAssets/images/frozen_forest.png";
import "./Posters.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import "../../DesignAssets/fonts/RobotoFlex-Regular.ttf";
import Product from "../../components/Product/Product";
import Gears from "../../DesignAssets/images_posters/london.png";
import eagle from "../../DesignAssets/images_posters/eagle.png";
import car from "../../DesignAssets/images_posters/car.png";
import flours from "../../DesignAssets/images_posters/flours.png";
import city from "../../DesignAssets/images_posters/city.png";
import pond from "../../DesignAssets/images_posters/pond.png";
import bubblegum from "../../DesignAssets/images_posters/bubblegum.png";
import graffiti from "../../DesignAssets/images_posters/graffiti.png";
import samurai from "../../DesignAssets/images_posters/samurai.png";
import sports from "../../DesignAssets/images_posters/sports.png";
import dog from "../../DesignAssets/images_posters/dog.png";
import watch from "../../DesignAssets/images_posters/watch.png";

function Posters() {
  return (
    <div className="posters__page">
      <div className="posters__quote">
        <div className="posters__hero">
          <span className="posters__hero-header">All Posters & Wall Art</span>
          <span className="posters__hero-text">
            Browse our full collection of posters and art prints, ranging from
            elaborate infographics to breathtaking scenery
          </span>
          <p className="posters__hero-texttwo">
            Take the world with you wherever you go. Give your friend the worl+
            with out ner world feature poster
          </p>
        </div>
        <div>
          <img
            className="posters__frosty-forest"
            src={frozen}
            alt="frosty forest"
          />
        </div>
      </div>

      <div className="poster__gallery">
        <Product title="Mind of Gears" price={49.99} image={Gears} />
        <Product title="Eagle" price={49.99} image={eagle} />
        <Product title="car" price={49.99} image={car} />
        <Product title="flours" price={49.99} image={flours} />
        <Product title="city" price={49.99} image={city} />
        <Product title="pond" price={49.99} image={pond} />
        <Product title="bubblegum" price={49.99} image={bubblegum} />
        <Product title="graffiti" price={49.99} image={graffiti} />
        <Product title="samurai" price={49.99} image={samurai} />
        <Product title="sports" price={49.99} image={sports} />
        <Product title="dog" price={49.99} image={dog} />
        <Product title="watch" price={49.99} image={watch} />
      </div>
    </div>
  );
}

export default Posters;
