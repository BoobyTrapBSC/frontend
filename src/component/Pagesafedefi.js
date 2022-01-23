import React from "react";
import {
  AiFillLeftCircle,
  AiFillSafetyCertificate,
  AiFillRightCircle,
} from "react-icons/ai";
import { FaBusinessTime, FaLaptopCode, FaCode } from "react-icons/fa";
import {
  GiChart,
  GiChessKing,
  GiHamburgerMenu,
  GiTireIronCross,
} from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function Pagesafedefi() {
  const [sidebar, setSidebar] = useState(1);

  const activeSidebar = (index) => {
    setSidebar(index);
    console.log(index);
  };

  const [activeRange, setActiveRange] = useState(1);

  const activePoints = (index) => {
    setActiveRange(index);
    console.log(index);
  };

  const [menuCollapse, setMenuCollapse] = useState(true)
  const [hamburgerDisplay, setHamburgerDisplay] = useState("d-block");
  const [crossDisplay, setCrossDisplay] = useState("d-none");
  const [sideDisplay, setSideDisplay] = useState("d-block");

  const toggleCollapse = (bool) => {
      if (menuCollapse === true) {
          console.log("Open");
          setMenuCollapse(false)
          setHamburgerDisplay("d-none")
          setCrossDisplay("d-block")
          setSideDisplay("d-block")
      } else {
          console.log("Close");
          setMenuCollapse(true)
          setHamburgerDisplay("d-block")
          setCrossDisplay("d-none")
          setSideDisplay("d-none")
      }
  }

  return (
    <div id="pagesafe-cont">
      <div className="safe-head py-3 position-relative container-fluid">
        <div className="head-content">
          <AiFillLeftCircle size={20} />
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
              marginLeft: "5px",
            }}
            to="/"
          >
            Home
          </Link>
          <h1>SAFE HEAVEN</h1>
          <h2>Best Rated in DeFi</h2>
          <b>(This Platform Preview is still under development)</b>
          <p>
            0 Trap Points means the Safest! Lower Trap Points means safer! Read
            more about{" "}
            <Link
              to="/"
              style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
            >
              Trap Points
            </Link>
          </p>
        </div>
      </div>
      <div className="safe-collapse" onClick={() => toggleCollapse(menuCollapse === true ? false: true)}>
        Menu <GiHamburgerMenu id="menu-icon" className={hamburgerDisplay}/><GiTireIronCross id="menu-icon" className={crossDisplay}/>
      </div>
      <div className="safe-content row mt-3">
        <div className={`sidebar col-lg-2 ${sideDisplay}`}>
          <div className="side-categories p-3 rounded">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                //   className={sidebar === 1 ? "nav-link active" : "nav-link"}
                  className="nav-link disabled"
                  onClick={() => activeSidebar(1)}
                  to="/safedefi"
                >
                  <AiFillSafetyCertificate /> Safu Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(2)}
                  to="/safedefi/projectowner"
                >
                  <FaBusinessTime /> Project Owners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(3)}
                  to="/safedefi/developers"
                >
                  <FaLaptopCode /> Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(4)}
                  to="/safedefi/influencers"
                >
                  <GiChessKing /> Influencers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 5 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(5)}
                  to="/safedefi/promoters"
                >
                  <GiChart /> Promoters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/">
                  <FaCode /> Coming Soon!
                </Link>
              </li>
            </ul>
          </div>
          <div className="filter-points p-3 mt-4 rounded">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className={activeRange === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(1)}
                  to="/safedefi"
                >
                  <AiFillRightCircle /> 0 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(2)}
                  to="/safedefi"
                >
                  <AiFillRightCircle /> 0-2 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(3)}
                  to="/safedefi"
                >
                  <AiFillRightCircle /> 3-5 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(4)}
                  to="/safedefi"
                >
                  <AiFillRightCircle /> 6-8 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 5 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(5)}
                  to="/safedefi"
                >
                  <AiFillRightCircle /> 10 Trap Points
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content col">
          <div className="sort mb-3 d-flex text-start">
            <p>Sort by:</p>
            <div className="form-check mx-2 form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Newest First
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />{" "}
              |
            </div>
            <div className="form-check mx-2 form-switch">
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Trap Points
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          {/* <Ownercards /> */}
          {/* <Devcards/> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}