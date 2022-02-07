import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Devcards() {

    const [dev, setDev] = useState([]);
    const id = [1,0,2]

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
                <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <Link className="btn shadow-sm" to={{pathname:`/safedefi/developers/${dev.slug.current}/${dev.id}`, state:{id:dev.id}}}>Details</Link>
            </div>
        )
    }
    return (
        <div className='row' id='owner-card-cont'>
            {dev.map(renderDev)}
        </div>
    )
}
