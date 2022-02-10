import React, { useState } from "react";
import { FaBusinessTime, FaLaptopCode, FaCode } from "react-icons/fa";
import {AiFillSafetyCertificate, AiFillRightCircle} from "react-icons/ai";
import {
  GiChart,
  GiChessKing,
  GiSandsOfTime,
  GiProgression,
} from "react-icons/gi";
import {Link} from 'react-router-dom'

export default function Sidebar() {

  /*Set Active Sidebar*/
    const [sidebar, setSidebar] = useState(1);

  const activeSidebar = (index) => {
    setSidebar(index);
    // console.log(index);
  };
  
  const [activeRange, setActiveRange] = useState(1);

  
  /* Filter Trap Points */
  const arr = [1,2,3,4,5,6,7,8,9,10]
  const activePoints = (index) => {
    return setActiveRange(index)
  };

  return <div>
      <div className="side-categories p-3 rounded">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("safuprojects") === true || sidebar === 0 ? "nav-link active" : "nav-link"} to="/safedefi/safuprojects" onClick={() => activeSidebar(0)}
                >
                  <AiFillSafetyCertificate /> Safu Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("upcomingprojects") === true ? "nav-link active" : "nav-link"} to="/safedefi/upcomingprojects" onClick={() => activeSidebar(1)}
                >
                  <GiProgression /> Upcoming Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("ongoingprojects") === true || sidebar === 2 ? "nav-link active" : "nav-link"} to="/safedefi/ongoingprojects" onClick={() => activeSidebar(2)}
                >
                  <GiSandsOfTime /> Ongoing Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("projectowner") === true ? "nav-link active" : "nav-link"} to="/safedefi/projectowner" onClick={() => activeSidebar(3)}
                >
                  <FaBusinessTime /> Project Owners
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("developers") === true ? "nav-link active" : "nav-link"} to="/safedefi/developers" onClick={() => activeSidebar(4)}
                >
                  <FaLaptopCode /> Developers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("influencers") === true ? "nav-link active" : "nav-link"} to="/safedefi/influencers" onClick={() => activeSidebar(5)}
                >
                  <GiChessKing /> Influencers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("promoters") === true ? "nav-link active" : "nav-link"} to="/safedefi/promoters" onClick={() => activeSidebar(6)}
                >
                  <GiChart /> AMA/Call Channels
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={window.location.pathname.includes("influencers") === true ? "nav-link active" : "nav-link"} to="/safedefi/promoters" onClick={() => activeSidebar(7)}
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
                  to={`/${window.location.pathname}`}
                >
                  <AiFillRightCircle /> 0 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(2)}
                  to={`/${window.location.pathname}`}
                >
                  <AiFillRightCircle /> 1-2 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(3)}
                  to={`/${window.location.pathname}`}
                >
                  <AiFillRightCircle /> 3-5 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(4)}
                  to={`/${window.location.pathname}`}
                >
                  <AiFillRightCircle /> 6-8 Trap Points
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={activeRange === 5 ? "nav-link active" : "nav-link"}
                  onClick={() => activePoints(5)}
                  to={`/${window.location.pathname}`}
                >
                  <AiFillRightCircle /> 10 Trap Points
                </Link>
              </li>
            </ul>
          </div>
  </div>;
}
