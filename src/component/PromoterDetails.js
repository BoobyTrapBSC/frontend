import React, { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import client from "../client";
import { initInstance } from './../Web3_connection/web3_methods'
import {getProfile } from "./../Web3_connection/ContractMethods"
import {useParams, useLocation } from "react-router-dom";

export default function PromoterDetails() {
  // console.log("id", location.state.id)

  const [singlePromoter, setSinglePromoter] = useState([]);
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
          email,
          alias,
          id,
          slug,
          telegram,
          instagram,
          avgCost,
          twitter,
          engagementRating,
          groupowner,
          experience,
          tgOwner,
          admin,
          tgAdmin,
          about,
          roi,
          wallet,
          numProjects,
          groupCreated,
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
      await getProfile(id);
    };
    init();
  }, [slug]);

  return (
    <div className="row justify-content-center">
      <div className="container-fluid text-start fs-6">
        <ul id="skills">
          <li><b>Email:</b> <a href={`mailto:${singlePromoter.email}`}>{singlePromoter.email}</a></li>
          <li><b>Owner:</b> <a href={singlePromoter.tgOwner}>{singlePromoter.groupowner}</a></li>
          <li><b>Group Created on:</b> {singlePromoter.groupCreated}</li>
          <li><b>Admin:</b> <a href={singlePromoter.tgAdmin}>{singlePromoter.admin}</a></li>
          <li><b>Return on Investment:</b> {singlePromoter.roi}</li>
          <li><b>Engagement Rating:</b> {singlePromoter.engagementRating}</li>
          <li><b>Experience:</b> {singlePromoter.experience}+ Months</li>
          <li><b>Average Cost:</b> ${singlePromoter.avgCost}</li>
          <li><b>About:</b> {singlePromoter.about}</li>
        </ul>
      </div>
      
    </div>
  );
}
