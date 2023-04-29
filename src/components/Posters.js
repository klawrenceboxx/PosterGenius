import React from "react";
import frozen from "../images/frozen_forest.png";
import "./Posters.css";
import "../fonts/Poppins-Regular.ttf";
import "../fonts/RobotoFlex-Regular.ttf";
import Product from "./Product";
import Gears from "../images_posters/london.png";
import eagle from "../images_posters/eagle.png";
import car from "../images_posters/car.png";
import flours from "../images_posters/flours.png";
import city from "../images_posters/city.png";
import pond from "../images_posters/pond.png";
import bubblegum from "../images_posters/bubblegum.png";
import graffiti from "../images_posters/graffiti.png";
import samurai from "../images_posters/samurai.png";
import sports from "../images_posters/sports.png";
import dog from "../images_posters/dog.png";
import watch from "../images_posters/watch.png";

function Posters() {
  return (
    <div>
      <div className="posters__quote">
        <div className="posters__hero">
          <span className="posters__hero-header">All Posters & Wall Art</span>
          <span className="posters__hero-text">
            Browse our full collection of posters and art prints, ranging from
            elaborate infographics to breathtaking scenery
          </span>
          <p className="posters__hero-texttwo">
            Take the world with you wherever you go. Give your friend the worl
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
        <Product title="Mind of Gears" price={36.7} image={Gears} />
        <Product title="Eagle" price={36.7} image={eagle} />
        <Product title="car" price={36.7} image={car} />
        <Product title="flours" price={36.7} image={flours} />
        <Product title="city" price={36.7} image={city} />
        <Product title="pond" price={36.7} image={pond} />
        <Product title="bubblegum" price={36.7} image={bubblegum} />
        <Product title="graffiti" price={36.7} image={graffiti} />
        <Product title="samurai" price={36.7} image={samurai} />
        <Product title="sports" price={36.7} image={sports} />
        <Product title="dog" price={36.7} image={dog} />
        <Product title="watch" price={36.7} image={watch} />
      </div>
    </div>
  );
}

export default Posters;
