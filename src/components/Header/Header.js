import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import "./Header.css";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png"; //the ../ is to go back one folder
import Heart from "../../DesignAssets/images/Heart.png";
import Cart from "../../DesignAssets/images/Cart.png";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";

//rfce, BEM convention

function Header() {
  const [{basket}, dispatch] = useStateValue(); //useState is a hook, the [] is the initial value

  return (
    <header>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/">
              <a href="#" class="nav__link">
                {/* img */}
                <img className="logo__img" src={Logo} alt="PosterGenius" />
              </a>
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/">
              <a href="#" class="nav__link" className="logo__name">
                PosterGenius
              </a>
            </Link>
          </li>

          <li class="nav__item">
            <Link to="/posters">
              <a href="#" class="nav__link">
                Posters
              </a>
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/posterInfo">
              <a href="#" class="nav__link">
                PosterInfo
              </a>
            </Link>
          </li>
        </ul>

        <form className="search">
          <input type="text" className="search__input" placeholder="Search" />
        </form>

        <Link to="/checkout">
          <div className="cart">
            <img src={Cart} alt="PosterGenius" />
            <p>{(basket && basket.length) || 0}</p>
            {/* if basket is true, then return basket.length, else return 0, this is a ternary operator */}
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
