import React from "react";
import {Link} from "react-router-dom";

import "./Footer.css";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";
import Logo from "../../DesignAssets/images/PosterGeniusV2.png";

function Footer() {
  return (
    // <footer>

    <footer>
      <nav className="footer">
        <div className="footer__container">
          <Link to="/" style={{textDecoration: "none"}}>
            <div className="logo__container">
              <img className="logo__img" src={Logo} alt="PosterGenius" />
              <h4>PosterGenius</h4>
            </div>
          </Link>

          <div className="nav__list">
            <div className="nav__list--left">
              <ul>
                <li>Customer Service</li>
                <li>Shipping & Returns</li>
                <li>Contact US</li>
                <li>GIft Card</li>
                <li>FAQ</li>
              </ul>

              <ul>
                <li>Information</li>
                <li>About</li>
                <li>Press Inquiries</li>
                <li>Terms & Conditons</li>
                <li>Privacy Settings & Policy</li>
              </ul>

              <ul>
                <li>Worth With us</li>
                <li>Porfessionals</li>
                <li>Artisist Submissions</li>
                <li>TPC Apartment</li>
                <li>Career</li>
              </ul>

              <ul>
                <li>Follow US</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Pinterest</li>
              </ul>
            </div>
            <div className="nav__list--right">
              <h4>NewsLetter</h4>
              <input type="text" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Footer Terms */}
          <div>
            <p className="terms">2010 - 2023 Privacy - Terms</p>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
