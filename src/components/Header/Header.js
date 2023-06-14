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
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">
              <a href="#" className="nav__link">
                {/* img */}
                <img className="logo__img" src={Logo} alt="PosterGenius" />
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/">
              <a href="#" className="nav__link logo__name">
                PosterGenius
              </a>
            </Link>
          </li>

          <li className="nav__item">
            <Link to="/posters">
              <a href="#" className="nav__link">
                Posters
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/posterInfo">
              <a href="#" className="nav__link">
                PosterInfo
              </a>
            </Link>
          </li>
        </ul>

        <form className="search">
          <input type="text" className="search__input" placeholder="Search" />
        </form>

        <div className="nav__list">
          <div className="login">
            <a href="">Sign in</a>
          </div>
          <div className="cart" className="nav__item">
            <Link to="/checkout" className="cart__link">
              <img src={Cart} alt="PosterGenius" />
              <p>{(basket && basket.length) || 0}</p>
              {/* if basket is true, then return basket.length, else return 0, this is a ternary operator */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
