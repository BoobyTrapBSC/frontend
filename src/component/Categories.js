import React from "react";
import { FaBusinessTime, FaLaptopCode } from "react-icons/fa";
import { GiChart, GiChessKing } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="categories-cont mt-5">
      <h3 className="text-start">Explore Categories</h3>
      <div className="row">
        <div className="col-md-6 mt-3 d-flex justify-content-around">
          <div className="cat-card">
            <Link
              to="/safedefi/projectowner"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#212529",
              }}
            >
              <FaBusinessTime size={25} /> Project Owners
            </Link>
          </div>
          <div className="cat-card">
            <Link
              to="/safedefi/developers"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#212529",
              }}
            >
              <FaLaptopCode size={25} /> Developers
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex mt-3 justify-content-around">
          <div className="cat-card">
            <Link
              to="/safedefi/influencers"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#212529",
              }}
            >
              <GiChessKing size={25} /> Influencers
            </Link>
          </div>
          <div className="cat-card">
            <Link
              to="/safedefi/promoters"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#212529",
              }}
            >
              <GiChart size={25} /> Promoters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
