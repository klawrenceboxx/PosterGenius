import React from "react";
import "./Header.css";
import Logo from "../images/PosterGeniusV2.png"; //the ../ is to go back one folder
import Heart from "../images/Heart.png";
import Cart from "../images/Cart.png";
import "../fonts/Poppins-Regular.ttf";

//rfce

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_nav header_navOne">
          <div className="header_logo">
            <img className="header_logoImage" src={Logo} alt="PosterGenius" />
            <span className="header_logoText">PosterGenius</span>
          </div>
          <div className="header_option">
            <span className="header_optionOne">Posters</span>
            <span className="header_optionTwo">Collections</span>
            <span className="header_optionThree">Deals</span>
          </div>
        </div>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
        </div>
        <div className="header_nav header_navTwo">
          <button className="header_optionButton">
            <span class="header_optionButton-text">Sign In</span>
          </button>
          <img className="header_logoCart" src={Cart} alt="PosterGenius" />
          <img className="header_logoHeart" src={Heart} alt="PosterGenius" />
        </div>
      </div>
      <hr className="header_divider" />
    </>
  );
}

export default Header;
