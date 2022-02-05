import React, { useState, useEffect } from 'react'
import client from '../client'
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

  // Projects FETCH
  const [project, setProject] = useState([]);
  const [CountProfile, setProfileCount] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type=="lprojects"] {
                name,
                tracker,
                slug,
                owner,
                marketingStatus,
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
        className="projectCard mx-2 my-4 col-md-3 px-1 py-2 shadow"
        key={index}
      >
        <div id="projectHead" className="d-flex justify-content-between">
          <div className="w-100" style={{ paddingLeft: "30px" }}>
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
          <p className="mb-0">Trap Points</p>
          <p className="mb-0">{project.comStrength}k+ Community Strength</p>
          <BlockContent
            blocks={project.description}
            projectId="lfyw4jna"
            dataset="production"
          />
        </div>
        <Link
          className="btn shadow-sm"
          to={{ pathname: `/safedefi/safuprojects/${project.slug.current}` }}
        >
          Details
        </Link>
      </div>
    );
  };

  // OWNER FETCH
  const [singleOwner, setSingleOwner] = useState([]);
  const { slug } = useParams()
  const location = useLocation();
  // console.log("id", location.state.id)

  useEffect(() => {
    client.fetch(
      `*[slug.current == "${slug}"] {
        name,
              alias,
              trappoints,
              numProjects,
              experience,
              slug,
              avgLife,
              "uprojects":*[_type == "uprojects" && owner._ref in *[_type == "owners" && name == "Gaurav Monga"]._id]{
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
    ).then((data) => setSingleOwner(data[0]))
  }, [slug])

  return (
    <div className="row justify-content-center">
      <div className="container-fluid text-start fs-6">
        <ul id="skills">
          <li>Experience in DeFi: {singleOwner.experience} Months</li>
          <li>Skills: Project owner and excellent project manager</li>
          <li>Number of Projects till date: {singleOwner.numProjects}</li>
          <li>Community Strength: 35k+</li>
          <li>Avg. Life of Projects: {singleOwner.avgLife} Months</li>
          {singleOwner.uprojects &&
            singleOwner.uprojects.map((p) => {console.log(p.name)
            })
          }
        </ul>
      </div>
      <hr className="mb-5" />

      {/* UPCOMING PROJECTS */}

      <h3 style={{
        backgroundColor: "#EDF0F4",
        textAlign: "start",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}>Upcoming Projects</h3>
      <div className="row justify-content-evenly mb-4">
        {/* <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
        <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
        <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div> */}
        {project.map(renderProjects)}

      </div>

      {/* PREVIOUS PROJECTS */}
      <h3 style={{
        backgroundColor: "#EDF0F4",
        textAlign: "start",
        paddingTop: "5px",
        paddingBottom: "5px",
      }}>Previous Projects</h3>
      <div className="row justify-content-evenly">
        <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
        <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
        <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow">
          <div id="projectHead" className="d-flex">
            <div className="m-auto">
              <h3 className="fs-6">
                Project Name <span>(Tracker)</span>
              </h3>
              <Link to="/" id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" id="project-social"><FaTwitter /></Link>
              <Link to="/" id="project-social"><FaGlobe /></Link>
              <Link to="/" id="project-social"><FaDiscord /></Link>
              <Link to="/" id="project-social"><FaInstagram /></Link>
            </div>
            <img
              className="shadow bg-light"
              src="https://cryptologos.cc/logos/cardano-ada-logo.png"
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti itaque vero tenetur asperiores at assumenda molestias aliquid omnis molestiae quae temporibus nemo!</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
      </div>
    </div>
  );
}
