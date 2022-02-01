import React, { useState, useEffect } from 'react'
import client from '../client'
import BlockContent from "@sanity/block-content-to-react"
import {
    FaTelegramPlane,
    FaTwitter,
    FaGlobe,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa";
  import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Safecards() {

  const [project, setProject] = useState([]);

    useEffect(() => {
      client.fetch(
          `*[_type=="lprojects"] {
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
      ).then((data) => setProject(data)).catch(console.error)
    }, []);

    const renderProjects = (project, index) =>{
        return(
            <div className="projectCard mx-2 my-4 col-md-3 px-1 py-2 shadow" key={index}>
          <div id="projectHead" className="d-flex justify-content-between">
            <div className="w-100" style={{paddingLeft:"30px"}}>
              <h3 className="fs-6 mt-2 text-start">
                {project.name} <span>({project.tracker})</span>
              </h3>
              <a href={project.telegram} style={project.telegram.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaTelegramPlane /></a>
              <a href={project.twitter} style={project.twitter.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaTwitter /></a>
              <a href={project.website} style={project.website.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaGlobe /></a>
              <a href={project.discord} style={project.discord !== null ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaDiscord /></a>
              <a href={project.insta} style={project.instagram !== null ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaInstagram /></a>
            </div>
            <img
              className="shadow bg-light"
              src={project.image.asset.url}
              alt=""
            />
          </div>
          <div id="projectDesc">
            <br />
            {/* <ul className='my-0' style={{listStyle:"none", listStylePosition:"outside"}}> */}
              <p className='mb-0' >Trap Points</p>
              <p className='mb-0' >k+ Community Strength</p>
              <p className='mb-0' style={{color:"#FCB040", fontSize:"18px",}}><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></p>
            {/* </ul> */}
              <p><BlockContent blocks={project.description} projectId="lfyw4jna" dataset='production'/></p>
          </div>
          <Link className="btn shadow-sm" to="/safedefi/safuprojects/projectpage">Details</Link>
        </div>
        )
    }

    return <div className='row justify-content-center safuCards'>
        {project.map(renderProjects)}
    </div>;
}
