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

export default function Devdetails(props) {
  // console.log("id", location.state.id)

  const [singleDev, setSingleDev] = useState([]);
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
                twitter,
                github,
                numProjects,
                skills,
                otherSkills,
                experience,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
      }`
      )
      .then((data) => setSingleDev(data[0]));
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
          <li><b>Experience in DeFi:</b> {singleDev.experience}+ Months</li>
          <li><b>Skills:</b> {singleDev.skills}</li>
          <li><b>Other Skills:</b> {singleDev.otherSkills}</li>
          <li><b>Number of Projects till date:</b> {singleDev.numProjects}</li>
        </ul>
      </div>
      
    </div>
  );
}
