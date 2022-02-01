import React, { useState, useEffect } from 'react'
import client from '../client'
import {
  FaTelegramPlane,
  FaTwitter,
  FaGlobe,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export default function Ownerdetails() {

  const [singleOwner, setSingleOwner] = useState([]);
  const { slug } = useParams()

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
