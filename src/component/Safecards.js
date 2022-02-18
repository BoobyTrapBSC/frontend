import React, { useState, useEffect } from "react";
import client from "../client";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getTotoalProfile } from "./../Web3_connection/ContractMethods";
import { initInstance } from "./../Web3_connection/web3_methods";

export default function Safecards() {
  const [project, setProject] = useState([]);
  const [CountProfile, setProfileCount] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type in ["lprojects", "uprojects"] && trappoints == 0] {
              name,
              tracker,
              slug,
              id,
              contract,
              owner,
              marketingStatus,
              telegram,
              twitter,
              website,
              facebook,
              discord,
              trappoints,
              instagram,
              other,
              tgOwner,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              },
              newlyLaunched,
              comStrength,
              devStatus,
              description,
          }`
      )
      .then((data) => setProject(data))
      .catch(console.error);
    const getData = async () => {
      await initInstance();
      const data = await getTotoalProfile();
      setProfileCount(data);
    };
    getData();
  }, []);
  

  // RENDER PROJECTS
  const renderProjects = (project, index) => {
    return (
      <div
        className="projectCard mx-2 my-4 col-md-3 px-1 py-2 pb-3 shadow"
        key={index}
      >
        <div id="projectHead" className="d-flex justify-content-between">
          <div className="w-100 text-start" style={{ paddingLeft: "30px" }}>
            <h3 className="fs-6 mt-2 text-start">
              {project.name} <span>({project.tracker})</span>
            </h3>
            <a
              href={project.telegram}
              style={
                project.telegram.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaTelegramPlane />
            </a>
            <a
              href={project.twitter}
              style={
                project.twitter.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaTwitter />
            </a>
            <a
              href={project.website}
              style={
                project.website.length > 2
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaGlobe />
            </a>
            <a
              href={project.discord}
              style={
                project.discord !== null
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaDiscord />
            </a>
            <a
              href={project.insta}
              style={
                project.instagram !== null
                  ? { display: "inline-block" }
                  : { display: "none" }
              }
              id="project-social"
            >
              <FaInstagram />
            </a>
          </div>
          {/* RIBBON CONTAINER FOR NEWLY LAUNCHED PROJECTS */}
          <div id="ribbon-container" style={project.newlyLaunched === true ? { display: "block" } : { display: "none" }}>
            <span id="ribbon">
              New
            </span>
          </div>
          <img
            className="shadow bg-light"
            src={project.image.asset.url}
            alt=""
          />
        </div>
        <div id="projectDesc">
          <br />
          <p className="mb-0 card-bold-points">{project.trappoints} Trap Points</p>
          <p className="mb-0">{project.comStrength}k+ Community Strength</p>
          <p>{project.description.length > 150 ? project.description.slice(0,150)+"..." : project.description}</p>
        </div>
        <Link
          className="btn shadow-sm"
          to={{ pathname: `/safehaven/safuprojects/${project.slug.current}/${project.id}`, state:{id:project.id}}}
        >
          Details
        </Link>
      </div>
    );
  };

  return (
    <div className="row safuCards">
      {project.map(renderProjects)}
    </div>
  );
}
