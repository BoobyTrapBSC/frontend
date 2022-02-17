import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Devcards() {

    const [dev, setDev] = useState([]);

    useEffect(() => {
      client.fetch(
          `*[_type=="developers"] {
              name,
              alias,
              id,
              slug,
              telegram,
              twitter,
              github,
              numProjects,
              skills,
              avgPrice,
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
      ).then((data) => setDev(data)).catch(console.error)
    }, []);

    const renderDev = (dev, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <img src={dev.image.asset.url} alt="" />
                <div id="dev-name">{dev.name}</div>
                <div className="skills">Skills: {dev.skills}</div>
                <div className="rate">Avg Cost: ${dev.avgPrice}</div>
                <div id="social-dev"><a href={dev.telegram}><FaTelegramPlane size={25} fill={"#fff"}/></a> &nbsp;<a href={dev.github}><FaGithub size={25} fill={"#fff"}/></a></div>
                <Link className="btn shadow-sm" to={{pathname:`/safehaven/developers/${dev.slug.current}/${dev.id}`, state:{id:dev.id}}}>Details</Link>
            </div>
        )
    }
    return (
        <div className='row' id='owner-card-cont'>
            {dev.map(renderDev)}
        </div>
    )
}
