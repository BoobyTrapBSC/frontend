import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import client from "../client";
import { initInstance } from './../Web3_connection/web3_methods'
import { addReview, getProfile } from "./../Web3_connection/ContractMethods"
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";

export default function InfluencerDetails() {
  // console.log("id", location.state.id)

  const [singleInfluencer, setSingleInfluencer] = useState([]);
  const { slug, id } = useParams();
  const location = useLocation();
  // console.log("id", location.state.id)
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
            avgPrice,
            experience,
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
      .then((data) => setSingleInfluencer(data[0]));
    const init = async () => {
      await initInstance();
      await getProfile(id);
    };
    init();
  }, [slug]);

  return (
    <div className="row justify-content-center">
      <div className="container-fluid text-start fs-6">
        <ul id="skills">
          <li><b>Return on Investment:</b> {singleInfluencer.roi}</li>
          <li><b>Engagement Rating:</b> {singleInfluencer.engagementRating}</li>
          <li><b>Experience:</b> {singleInfluencer.experience}+ Months</li>
          <li><b>Average Cost:</b> ${singleInfluencer.avgPrice}</li>
        </ul>
      </div>
      
    </div>
  );
}
