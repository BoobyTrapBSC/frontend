import React, { useState, useEffect } from 'react'
import client from '../client'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {
    AiFillLeftCircle,
    AiFillSafetyCertificate,
} from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBusinessTime, FaLaptopCode, FaCode } from "react-icons/fa";
import { BsStarFill} from 'react-icons/bs'
import {
    GiChart,
    GiChessKing,
    GiHamburgerMenu,
    GiTireIronCross,
    GiSandsOfTime,
    GiProgression
} from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import Ownerdetails from "./Ownerdetails";
import { addReview, getProfile, getTokenBalance, BNBBalance } from "./../Web3_connection/ContractMethods"
import { initInstance } from './../Web3_connection/web3_methods'
import { TokenABI } from '../ABI/TokenABI';

export default function Ownerprofile() {

    const [singleOwner, setSingleOwner] = useState([]);
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
              alias,
              trapPoints,
              numProjects,
              experience,
              slug,
              avgLife,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
      }`
        ).then((data) => setSingleOwner(data[0]))
        const init = async () => {
            await initInstance();
            await getprofile(id);
            const bnbbal = await BNBBalance();
          
            setBNBBal(bnbbal/10**18)
        }
        init();
        
    }, [slug])
   
    const [sidebar, setSidebar] = useState(2);

    const activeSidebar = (index) => {
        setSidebar(index);
        console.log(index);
    };

    const [menuCollapse, setMenuCollapse] = useState(true)
    const [hamburgerDisplay, setHamburgerDisplay] = useState("d-block");
    const [crossDisplay, setCrossDisplay] = useState("d-none");
    const [sideDisplay, setSideDisplay] = useState("d-block");
    const [avgRating, setavgRating] = useState();
    const [modal, setModal] = useState(false);
    const [countreview, setCountReview] = useState(0)

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
                    console.log("Done")
                    notify();
                    await getprofile();
                }
            }
            else if (rate.includes("Excellent")) {
               const got = await addReview(id, 4)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
            else if (rate.includes("DYOR")) {
               const got = await addReview(id, 3)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
            else if (rate.includes("Avoidable")) {
                const got = await addReview(id, 2)
                if(got.status === true){
                    notify();
                    await getprofile();
                }
            }
            else if (rate.includes("Scammer")) {
               const got = await addReview(id, 1)
               if(got.status === true){
                notify();
                await getprofile();
            }
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const getprofile = async(id) =>{
        const data = await getProfile(id)
        setCountReview(data.reviewsCount)
        setavgRating(data.avgRating/10) 
    }
    console.log("Data",countreview,avgRating,id)
    const start =()=> {
        console.log("review", Number(avgRating).toFixed(0))
       if(Number(avgRating).toFixed(0) === 5){
            return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />]
       }
       else if(Number(avgRating).toFixed(0) === 4){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === 3){
        return [<BsStarFill />,<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === 2){
        return [<BsStarFill />,<BsStarFill />] 
       }
       else if(Number(avgRating).toFixed(0) === 1){
        return [<BsStarFill />] 
       }
      
    }
    
    return (
        <div id="pagesafe-cont" className="owner-prof-cont">
            <ToastContainer />
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
                            <h1>{singleOwner.name}</h1>
                            <div className="fs-6"><span className="review-star fs-5"> {start()} </span> ({countreview} Reviews)</div>
                            <p className="my-1">{singleOwner.trapPoints} Trap Points</p>
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
                            <button className={`btn btn-outline-dark ${bnbBal < 0.005 ? "disabled" : ""} `} onClick={() => toggleModal()}>{bnbBal < 0.005 ? "Insufficient BNB Balance" : "Give Rating"}</button>
                            
                        </div>
                    </div>

                    <div className="col-lg-2">
                        {singleOwner.image && singleOwner.image.asset && (
                            <img className="profileImg" src={singleOwner.image.asset.url} alt={singleOwner.title} />
                        )}
                    </div>
                </div>
            </div>

            <div className="safe-collapse" onClick={() => toggleCollapse(menuCollapse === true ? false : true)}>
                Menu <GiHamburgerMenu id="menu-icon" className={hamburgerDisplay} /><GiTireIronCross id="menu-icon" className={crossDisplay} />
            </div>
            {modal && (
                <div style={{zIndex:"5"}}>
                    <div onClick={() => toggleModal()} className="overlay-popup"></div>
                    <div className="modal-content py-3">

                        <label for="category" className="form-label fw-bold mb-3">
                            Give Rating
                        </label>
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