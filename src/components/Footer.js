import React from "react";
import "./Footer.css";
import "../fonts/Poppins-Regular.ttf";
import Logo from "../images/PosterGeniusV2.png";

function Footer() {
  return (
    <div className="footer">
      {/* Logo icon and Title */}
      <div className="footer_logo">
        <img className="footer__logo-image" src={Logo} alt="PosterGenius" />
        <span className="footer__logo-text">PosterGenius</span>
      </div>

      {/* Footer Navigation */}
      <div className="footer__nav">
        <div className="footer__nav-one">
          <span className="footer__nav-header">Customer Service</span>
          <br />
          <br />
          <span className="footer__nav-text">
            Shipping & Returns Contact US GIft Card FAQ
          </span>
        </div>
        <div className="footer__nav-two">
          <span className="footer__nav-header">Information</span>
          <br />
          <br />
          <span className="footer__nav-text">
            About Press Inquiries Terms & Conditions Privacy Setting & Policy
          </span>
        </div>
        <div className="footer__nav-three">
          <span className="footer__nav-header">Work With Us</span>
          <br />
          <br />
          <span className="footer__nav-text">
            Professionals Artist Submissions TPC Apartment Career
          </span>
        </div>
        <div className="footer__nav-four">
          <span className="footer__nav-header">Follow Us</span>
          <br />
          <br />
          <span className="footer__nav-text">Instagram Facebook Pinterest</span>
        </div>
      </div>

      {/* Footer Newsletter */}
      <div className="footer__newsletter">
        <span className="footer__newsletter-title">News Letter</span>
        <input className="footer__input" type="text" placeholder="Email" />
        <button className="footer__newslsetter-button">
          <span className="footer__newsletter-button-text">Subscribe</span>
        </button>
      </div>

      {/* Footer Terms */}
      <div className="footer__terms"></div>
    </div>
  );
}

export default Footer;
