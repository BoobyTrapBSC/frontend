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
import { toast } from 'react-toastify';
import { addReview, getProfile, BNBBalance } from "./../Web3_connection/ContractMethods"
import { initInstance } from './../Web3_connection/web3_methods'
import Sidebar from './Sidebar';

export default function Projectpage() {

    const [singleProject, setSingleProject] = useState([]);
    const [rating, setRating] = useState('SAFU (5 Start)');
    const [bnbBal,setBNBBal] = useState(0)
    const [tokenBal, setTokenBal] = useState(0)
    const { slug, id } = useParams();
    const notify = () => toast("Transaction Successful",{
        position: "top-right",
        pauseOnHover: false,
      });

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
            await getProfile(id);
        }
        setInterval(()=>{
            init();
        },4000)

        const getBNB = async()=> {
            const bnbbal = await BNBBalance();
            setBNBBal(bnbbal)
        } 
        getBNB();
    }, [slug])

    const [avgRating, setavgRating] = useState();
    const [modal, setModal] = useState(false);
    const [countreview, setCountReview] = useState(0)
    const [trappoint, setTrapPoint] = useState(0)
    const [name,setName] = useState("")

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const giveRating = async (rate) => {
        toggleModal();
        try {
            if (rate.includes("Safu")) {
                const got = await addReview(id, 5);
                if(got.status === true){
                    
                    notify();
                    await getProfile();
                }
            }
            else if (rate.includes("Excellent")) {
               const got = await addReview(id, 4)
               if(got.status === true){
                notify();
                await getProfile();
            }
            }
            else if (rate.includes("DYOR")) {
               const got = await addReview(id, 3)
               if(got.status === true){
                notify();
                await getProfile();
            }
            }
            else if (rate.includes("Avoidable")) {
                const got = await addReview(id, 2)
                if(got.status === true){
                    notify();
                    await getProfile();
                }
            }
            else if (rate.includes("Scammer")) {
               const got = await addReview(id, 1)
               if(got.status === true){
                notify();
                await getProfile();
            }
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const getProfile = async(id) =>{
        const data = await getProfile(id)
        setName(data.name)
        setTrapPoint(data.trapPoints)
        setCountReview(data.reviewsCount)
        setavgRating(data.avgRating/10) 
    }
  
    const start =(avgRating)=> {
        // console.log("Rating",Number(avgRating).toFixed(0))
       if(Number(avgRating).toFixed(0) === "5"){
            return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />]
       }
       else if(Number(avgRating).toFixed(0) === "4"){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "3"){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "2"){
        return [<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === "1"){
        return [<BsStarFill />] 
       }
       else{
       
       }
      
    }

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
                            <div className="fs-6"><span className="review-star fs-5"> {start(avgRating)} </span> ({countreview} Reviews)</div>
                            <p className="my-1">{trappoint} Trap Points</p>
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
                            <button className={`btn btn-outline-dark ${bnbBal ? "disabled" : ""} `} onClick={() => toggleModal()}>{bnbBal ? "Insufficient BNB Balance" : "Give Rating"}</button>
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

            {modal && (
                <div style={{zIndex:"5"}}>
                    <div onClick={() => toggleModal()} className="overlay-popup"></div>
                    <div className="modal-content py-3">

                        <label for="category" className="form-label fw-bold mb-3">
                            Give Rating
                        </label>
                        <span style={{fontSize:"10px",marginTop:"-20px",marginBottom:"10px"}}>(A fee of 0.001 BNBs is applicable to keep this utility spam free!)</span>
                        <div className='px-4 mb-2'>
                            <select className="form-select text-center" id="sel1" value={rating} onChange={(e) => setRating(e.target.value)} aria-label="Default select example">
                                <option selected>Select Star Rating</option>
                                <option>Safu &nbsp; &#9733; &#9733; &#9733; &#9733; &#9733;</option>
                                <option>Excellent &nbsp; &#9733; &#9733; &#9733; &#9733;</option>
                                <option>DYOR &nbsp; &#9733; &#9733; &#9733;</option>
                                <option>Avoidable &nbsp; &#9733; &#9733;</option>
                                <option>Scammer &nbsp; &#9733;</option>
                            </select></div>
                        <button className="btn w-50 mx-auto fw-bold my-2 btn-outline-dark" onClick={() => giveRating(rating)}>Submit</button>
                    </div>
                </div>
            )}
            
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