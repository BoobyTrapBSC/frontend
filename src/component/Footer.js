import React from "react";
import { FaTelegramPlane, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import fGraphic from "../images/footer_graphic.png";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="d-flex footer-main mx-auto position-relative">
        <div className="f-content container pt-5">
          <h2>
            Let's make DeFi a safer place together.
          </h2>
          <p className="text-muted">
            Our Safe Haven and Booby Trap dashboards help you make smart choices and achieve your dream of financial freedom.
          </p>
          <div className="social">
            <a href="https://t.me/boobytrapbsc">
              <FaTelegramPlane size={25} className="text-light mx-3" />
            </a>
            <a href="http://tiktok.com/@boobytrapbsc">
              <FaTiktok size={25} className="text-light mx-3" />
            </a>
            <a href="https://instagram.com/boobytrap_bsc">
              <FaInstagram size={25} className="text-light mx-3" />
            </a>
            <a href="https://twitter.com/BoobyTrapBsc">
              <FaTwitter size={25} className="text-light mx-3" />
            </a>
          </div>
            <p className="mt-3 mb-0">Email: <a className="text-decoration-none" style={{color:"#fff", fontWeight:"500"}} href="mailto:info@boobytrap.live">info@boobytrap.live</a></p>
        </div>
        <div className="f-graphic">
          <img src={fGraphic} alt="" />
        </div>
      </div>
      <div className="copyright pt-5 pb-2 ps-2">
        <p>© 2021 Booby Trap. All rights reserved.</p>
      </div>
    </div>
  );
}