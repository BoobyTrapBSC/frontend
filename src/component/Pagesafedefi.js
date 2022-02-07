import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  AiFillLeftCircle,
  AiFillSafetyCertificate,
  AiFillRightCircle,
} from "react-icons/ai";
import { FaBusinessTime, FaLaptopCode, FaCode } from "react-icons/fa";
import {
  GiChart,
  GiChessKing,
  GiSandsOfTime,
  GiProgression,
} from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";

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

  return (
    <div id="pagesafe-cont">
      <div className="safe-head py-3 position-relative container-fluid">
        <div className="head-content">
          <Breadcrumb>
            <AiFillLeftCircle size={25} color="#fff" />
            <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Safe DeFi</Breadcrumb.Item>
          </Breadcrumb>
          <h1>SAFE HAVEN</h1>
          <h2>Best Rated in DeFi</h2>
          <b>(Platform Preview)</b>
          <p>
            0 Trap Points means the safest! lower trap points means safer! Read
            more about{" "}
            <Link
              to="/"
              style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
            >
              trap points
            </Link>
          </p>
        </div>
      </div>
      <div className="safe-content row w-100 mt-3">
        <div className={`sidebar col-lg-3`}>
          <div className="side-categories p-3 rounded">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className={sidebar === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(1)}
                  to="/safedefi/safuprojects"
                >
                  <AiFillSafetyCertificate /> Safu Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 8 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(8)}
                  to="/safedefi/upcomingprojects"
                >
                  <GiProgression /> Upcoming Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 7 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(7)}
                  to="/safedefi/safuprojects"
                >
                  <GiSandsOfTime /> Ongoing Projects
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
                  <GiChart /> AMA/Call Channels
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={sidebar === 6 ? "nav-link active" : "nav-link"}
                  onClick={() => activeSidebar(6)}
                  to="/safedefi/promoters"
                >
                  <FaCode /> Other Services
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
        <div className="content col position-relative">
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
          <button
            className="btn button-blue dropdown-toggle safepage-listing"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Request Listing
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/34hqxDY"
              >
                Service Providers
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3g6UY2b"
              >
                Upcoming Projects
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/3HgUhiJ"
              >
                Ongoing Projects
              </a>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
