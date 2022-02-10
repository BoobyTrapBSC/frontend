import React, { useState, useEffect } from "react";
import client from "../client";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link, useParams, useLocation } from "react-router-dom";
import { getTotoalProfile } from "./../Web3_connection/ContractMethods";
import { initInstance } from "./../Web3_connection/web3_methods";
import BlockContent from "@sanity/block-content-to-react";

export default function Ownerdetails(props) {
  // OWNER FETCH
  const [singleOwner, setSingleOwner] = useState([]);
  const { slug } = useParams();
  const location = useLocation();
  // console.log("id", location.state.id)

  /* THIS IS TO FETCH THE OWNERS SLUG FROM URL */
  var fetchedOwner = window.location.pathname
    .replace(/[0-9]/g, "")
    .slice(23, -1);
  // var currentOwner = fetchedOwner.replace(/^./, str => str.toUpperCase())
  // console.log(fetchedOwner);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        name,
              alias,
              trappoints,
              numProjects,
              experience,
              slug,
              avgLife,
              "uprojects":*[_type == "uprojects" && owner._ref in *[_type == "owners" && slug.current == "${fetchedOwner}"]._id]{
                name,
                tracker,
                slug,
                telegram,
                twitter,
                website,
                discord,
                instagram,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                newlyLaunched,
                description,
              },
              "lprojects":*[_type == "lprojects" && owner._ref in *[_type == "owners" && slug.current == "${fetchedOwner}"]._id]{
                name,
                tracker,
                slug,
                telegram,
                twitter,
                website,
                discord,
                instagram,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                newlyLaunched,
                description,
              },
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
      }`
      )
      .then((data) => setSingleOwner(data[0]));
  }, [slug]);

  return (
    <div className="row justify-content-center">
      <div className="container-fluid text-start fs-6">
        <ul id="skills">
          <li>Experience in DeFi: {singleOwner.experience} Months</li>
          <li>Skills: Project owner and excellent project manager</li>
          <li>Number of Projects till date: {singleOwner.numProjects}</li>
          <li>Community Strength: 35k+</li>
          <li>Avg. Life of Projects: {singleOwner.avgLife} Months</li>
        </ul>
      </div>
      <hr className="mb-5" />

      {/* UPCOMING PROJECTS */}
      <h3
        style={{
          backgroundColor: "#EDF0F4",
          textAlign: "start",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        Upcoming Projects
      </h3>
              {/* <h2 style={singleOwner.uprojects.length == undefined ? { display: "block" } : { display: "none" }}>No Data Available</h2> */}
      <div className="row justify-content-evenly mb-4">
        {singleOwner.uprojects &&
          singleOwner.uprojects.map((upcoming, index) => {
            return (
              <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow" key={index}>
                <div id="projectHead" className="d-flex">
                  <div className="m-auto">
                    <h3 className="fs-6">
                      {upcoming.name} <span>({upcoming.tracker})</span>
                    </h3>
                    <a
                      href={upcoming.telegram}
                      style={
                        upcoming.telegram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href={upcoming.twitter}
                      style={
                        upcoming.twitter !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={upcoming.website}
                      style={
                        upcoming.website !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={upcoming.discord}
                      style={
                        upcoming.discord !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaDiscord />
                    </a>
                    <a
                      href={upcoming.instagram}
                      style={
                        upcoming.instagram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  <img
                    className="shadow bg-light"
                    src={upcoming.image.asset.url}
                    alt={upcoming.name}
                  />
                </div>
                <div id="projectDesc">
                  <br />
          <BlockContent
            blocks={upcoming.description}
            projectId="lfyw4jna"
            dataset="production"
          />
                </div>
                <Link className="btn shadow-sm" to="/">
                  Details
                </Link>
              </div>
            );
          })}
      </div>

      {/* PREVIOUS PROJECTS */}
      <h3
        style={{
          backgroundColor: "#EDF0F4",
          textAlign: "start",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        Previous Projects
      </h3>
              {/* <h2 style={singleOwner.lprojects.length == 0 ? console.log() : console.log("1 or more")}>No Data Available</h2> */}
      <div className="row justify-content-evenly">
        {singleOwner.lprojects &&
          singleOwner.lprojects.map((launched, index) => {
            return (
              <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow" key={index}>
                <div id="projectHead" className="d-flex">
                  <div className="m-auto">
                    <h3 className="fs-6">
                      {launched.name} <span>({launched.tracker})</span>
                    </h3>
                    <a
                      href={launched.telegram}
                      style={
                        launched.telegram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTelegramPlane />
                    </a>
                    <a
                      href={launched.twitter}
                      style={
                        launched.twitter !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={launched.website}
                      style={
                        launched.website !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={launched.discord}
                      style={
                        launched.discord !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaDiscord />
                    </a>
                    <a
                      href={launched.instagram}
                      style={
                        launched.instagram !== null
                          ? { display: "inline-block" }
                          : { display: "none" }
                      }
                      id="project-social"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                  {/* RIBBON CONTAINER FOR NEWLY LAUNCHED PROJECTS */}
                  <div
                    id="ribbon-container"
                    style={
                      launched.newlyLaunched === true
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <span id="ribbon">New</span>
                  </div>
                  <img
                    className="shadow bg-light"
                    src={launched.image.asset.url}
                    alt=""
                  />
                </div>
                <div id="projectDesc">
                  <br />
          <BlockContent
            blocks={launched.description}
            projectId="lfyw4jna"
            dataset="production"
          />
                </div>
                <Link className="btn shadow-sm" to={{ pathname: `/safedefi/safuprojects/${launched.slug.current}`}}>
                  Details
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
