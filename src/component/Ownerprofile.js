import React, { useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {
    AiFillLeftCircle,
    AiFillSafetyCertificate,
} from "react-icons/ai";
import { FaBusinessTime, FaLaptopCode, FaCode } from "react-icons/fa";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import {
    GiChart,
    GiChessKing,
    GiHamburgerMenu,
    GiTireIronCross,
    GiSandsOfTime,
    GiProgression
} from "react-icons/gi";
import { Link } from 'react-router-dom'
import Ownerdetails from "./Ownerdetails";

export default function Ownerprofile() {
    const [sidebar, setSidebar] = useState(2);

    const activeSidebar = (index) => {
        setSidebar(index);
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
        <div id="pagesafe-cont" className="owner-prof-cont">
            <div className="safe-head py-3 position-relative container-fluid">
                <div className="head-content row">
                    <Breadcrumb><AiFillLeftCircle size={25} color="#fff" />
                        <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/safedefi/projectowner">
                            Safe DeFi
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-lg-8">
                        <div className="dev-main">
                            <h1>ABC DEV</h1>
                            <div className="fs-6"><span className="review-star fs-5"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> </span> (177 Reviews)</div>
                            <p className="my-1">2 Trap Points</p>
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
                    <div className="col-lg-2">
                        <img className="profileImg" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                </div>
            </div>
            <div className="safe-collapse" onClick={() => toggleCollapse(menuCollapse === true ? false : true)}>
                Menu <GiHamburgerMenu id="menu-icon" className={hamburgerDisplay} /><GiTireIronCross id="menu-icon" className={crossDisplay} />
            </div>
            <div className="safe-content row mt-3">
                <div className={`sidebar col-lg-3 ${sideDisplay}`}>
                    <div className="side-categories p-3 rounded">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link
                                    //   className={sidebar === 1 ? "nav-link active" : "nav-link"}
                                    className={sidebar === 1 ? "nav-link active" : "nav-link"}
                                    onClick={() => activeSidebar(1)}
                                    to="/safedefi/safuprojects"
                                >
                                    <AiFillSafetyCertificate /> Safu Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    //   className={sidebar === 1 ? "nav-link active" : "nav-link"}
                                    className={sidebar === 8 ? "nav-link active" : "nav-link"}
                                    onClick={() => activeSidebar(8)}
                                    to="/safedefi/safuprojects"
                                >
                                    <GiProgression /> Upcoming Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    //   className={sidebar === 1 ? "nav-link active" : "nav-link"}
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
                                <Link className="nav-link disabled" to="/">
                                    <FaCode /> Coming Soon!
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content col">
                    <Ownerdetails />
                </div>
            </div>
        </div>
    );
}