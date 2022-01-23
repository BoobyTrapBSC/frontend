import React from "react";
import { FaTelegramPlane, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";
import fGraphic from "../images/footer_graphic.png";

export default function Footer() {
  return (
    <div id="footer-container">
      <div className="d-flex footer-main mx-auto position-relative">
        <div className="f-content container pt-5">
          <h2>
            Let's make DeFi a<br />
            safer place together.
          </h2>
          <p className="text-muted w-50">
            Our Safe Heavens and Booby Trap dashboards help you make smart
            choices and achieve your dream of financial freedom.
          </p>
          <div className="social">
            <a href="https://t.me/boobytrapbsc">
              <FaTelegramPlane size={25} className="text-light mx-3" />
            </a>
            <a href="http://tiktok.com/@boobytrapbsc">
              <FaTiktok size={25} className="text-light mx-3" />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=15vunbavmzna0&utm_content=n7k94ff">
              <FaInstagram size={25} className="text-light mx-3" />
            </a>
            <a href="https://twitter.com/BoobyTrapBsc">
              <FaTwitter size={25} className="text-light mx-3" />
            </a>
          </div>
        </div>
        <div className="f-graphic">
          <img src={fGraphic} alt="" />
        </div>
      </div>
      <div className="copyright pt-5 pb-2">
        <p>© 2021 Booby Trap. All rights reserved.</p>
      </div>
    </div>
  );
}