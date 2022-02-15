import React, { useState, useEffect } from 'react'
import client from '../client'
import { Link, useParams } from "react-router-dom";
import {
    FaTelegramPlane,
    FaTwitter,
    FaGlobe,
    FaDiscord,
    FaInstagram,
    FaFacebookSquare,
} from "react-icons/fa";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {
    AiFillLeftCircle
} from "react-icons/ai";
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Projectdetails from "./Projectdetails";
import { initInstance } from './../Web3_connection/web3_methods'
import Sidebar from './Sidebar';

export default function Ongoingpage() {

    const [singleProject, setSingleProject] = useState([]);
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                name,
                email,
                tracker,
                slug,
                contract,
                audit,
                kyc,
                marketingWallet,
                budget,
                tradingStartDate,
                initialMC,
                launchPrice,
                athMC,
                owner,
                marketingStatus,
                telegram,
                twitter,
                website,
                facebook,
                discord,
                instagram,
                reditt,
                youtube,
                other,
                tgOwner,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                devwallet,
                devStatus,
                description,
            }`
        ).then((data) => setSingleProject(data[0]))
        const init = async () => {
            await initInstance();
        }
        init();
    }, [slug])

    return (
        <div id="pagesafe-cont" className="owner-prof-cont projectpage-cont">
            <div className="safe-head py-3 position-relative container-fluid">
                <div className="head-content row">
                    <Breadcrumb><AiFillLeftCircle size={25} color="#fff" />
                        <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/safehaven/safuprojects">
                            Safe DeFi
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{singleProject.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-lg-8">
                        <div className="dev-main">
                            <h1>{singleProject.name}</h1>
                            <div className="fs-6"><span className="review-star fs-5"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> </span> (177 Reviews)</div>
                            <p className="my-1">{singleProject.trapPoints} Trap Points</p>
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
                            <a href="/" className="btn btn-outline-dark">Give Rating</a>
                        </div>
                    </div>
                    <div className="col-lg-2 position-relative">
                        {singleProject.image && singleProject.image.asset && (
                            <img className="projectImg" src={singleProject.image.asset.url} alt={singleProject.name} />
                        )}
                        <div className="circleSocial">
                            {console.log(singleProject.owner)}
                            <a href={singleProject.telegram} id="circleIco" className="circle1"><FaTelegramPlane /></a>
                            <a href={singleProject.twitter} id="circleIco" className="circle2"><FaTwitter /></a>
                            <a href={singleProject.website} id="circleIco" className="circle3"><FaGlobe /></a>
                            <a href={singleProject.discord} id="circleIco" className="circle4"><FaDiscord /></a>
                            <a href={singleProject.instagram} id="circleIco" className="circle5"><FaInstagram /></a>
                            <a href={singleProject.facebook} id="circleIco" className="circle6"><FaFacebookSquare /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="safe-content row w-100 mt-3">
                <div className={`sidebar col-lg-3`}>
                    <Sidebar/>
                </div>
                <div className="content col">
                    <Projectdetails />
                </div>
            </div>
        </div>
    );
}