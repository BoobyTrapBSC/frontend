import React, { useState, useEffect } from "react";
import client from "../client";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { AiFillLeftCircle} from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import {
    FaTelegramPlane,
    FaTwitter,
    FaInstagram
  } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { addReview, getProfile } from "./../Web3_connection/ContractMethods";
import { initInstance } from "./../Web3_connection/web3_methods";
import Sidebar from "./Sidebar";
import PromoterDetails from "./PromoterDetails";

export default function PromoterProfile() {
  const [singlePromoter, setSinglePromoter] = useState([]);
  const [rating, setRating] = useState("SAFU (5 Start)");
  const { slug, id } = useParams();
  const notify = () =>
    toast("Transaction Successful", {
      position: "top-right",
      pauseOnHover: false,
    });

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
            name,
            alias,
            id,
            slug,
            telegram,
            instagram,
            twitter,
            engagementRating,
            roi,
            numProjects,
            image{
                asset -> {
                    _id,
                    url
                },
                alt
            }
      }`
      )
      .then((data) => setSinglePromoter(data[0]));
    const init = async () => {
      await initInstance();
      await getprofile(id);
    };
    init();
  }, [slug]);

  const [avgRating, setavgRating] = useState();
  const [modal, setModal] = useState(false);
  const [countreview, setCountReview] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const giveRating = async (rate) => {
    toggleModal();
    try {
      if (rate.includes("Safu")) {
        const got = await addReview(id, 5);
        if (got.status === true) {
          console.log("Done");
          notify();
          await getprofile();
        }
      } else if (rate.includes("Excellent")) {
        const got = await addReview(id, 4);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("DYOR")) {
        const got = await addReview(id, 3);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("Avoidable")) {
        const got = await addReview(id, 2);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      } else if (rate.includes("Scammer")) {
        const got = await addReview(id, 1);
        if (got.status === true) {
          notify();
          await getprofile();
        }
      }
    } catch (e) {}
  };

  const getprofile = async (id) => {
    const data = await getProfile(id);
    setCountReview(data.reviewsCount);
    setavgRating(data.avgRating / 10);
  };
  console.log("Data", countreview, avgRating, id);
  const start = () => {
    console.log("review", Number(avgRating).toFixed(0));
    if (Number(avgRating).toFixed(0) === "5") {
      return [
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
        <BsStarFill />,
      ];
    } else if (Number(avgRating).toFixed(0) === "4") {
      return [<BsStarFill />, <BsStarFill />, <BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "3") {
      return [<BsStarFill />, <BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "2") {
      return [<BsStarFill />, <BsStarFill />];
    } else if (Number(avgRating).toFixed(0) === "1") {
      return [<BsStarFill />];
    }
  };

  return (
    <div id="pagesafe-cont" className="owner-prof-cont">
      <ToastContainer />
      <div className="safe-head py-3 position-relative container-fluid">
        <div className="head-content row">
          <Breadcrumb>
            <AiFillLeftCircle size={25} color="#fff" />
            <Breadcrumb.Item href="/">&nbsp; Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/safehaven/promoters">
              Safe DeFi
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{singlePromoter.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="col-lg-8">
            <div className="dev-main">
              <h1>{singlePromoter.name}</h1>
              <div className="fs-6">
                <span className="review-star fs-5"> {start()} </span> (
                {countreview} Reviews)
              </div>
              <div>
                <a href={singlePromoter.telegram} target="_blank" rel="noreferrer" id="dev-social">
                  <FaTelegramPlane /> 
                </a>
                <a href={singlePromoter.twitter} target="_blank" rel="noreferrer" id="dev-social">
                   <FaTwitter /> 
                </a>
                <a href={singlePromoter.instagram} target="_blank" rel="noreferrer" id="dev-social">
                  <FaInstagram />
                </a>
              </div>
              <button
                className="btn btn-outline-dark mt-2"
                onClick={() => toggleModal()}
              >
                Give Rating
              </button>
            </div>
          </div>

          <div className="col-lg-2">
            {singlePromoter.image && singlePromoter.image.asset && (
              <img
                className="profileImg"
                src={singlePromoter.image.asset.url}
                alt={singlePromoter.name}
              />
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div style={{ zIndex: "5" }}>
          <div onClick={() => toggleModal()} className="overlay-popup"></div>
          <div className="modal-content py-3">
            <label for="category" className="form-label fw-bold mb-3">
              Give Rating
            </label>
            <div className="px-4 mb-2">
              <select
                className="form-select text-center"
                id="sel1"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                aria-label="Default select example"
              >
                <option selected>Select Star Rating</option>
                <option>
                  Safu &nbsp; &#9733; &#9733; &#9733; &#9733; &#9733;
                </option>
                <option>
                  Excellent &nbsp; &#9733; &#9733; &#9733; &#9733;
                </option>
                <option>DYOR &nbsp; &#9733; &#9733; &#9733;</option>
                <option>Avoidable &nbsp; &#9733; &#9733;</option>
                <option>Scammer &nbsp; &#9733;</option>
              </select>
            </div>
            <button
              className="btn w-50 mx-auto fw-bold my-2 btn-outline-dark"
              onClick={() => giveRating(rating)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <div className="safe-content row mt-3 w-100">
        <div className={`sidebar col-lg-3`}>
          <Sidebar/>
        </div>
        <div className="content col">
          <PromoterDetails />
        </div>
      </div>
    </div>
  );
}
