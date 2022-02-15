import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Promoters() {

    const [promoter, setPromoters] = useState([]);

    useEffect(() => {
      client.fetch(
          `*[_type=="amagroups"] {
              name,
              alias,
              id,
              slug,
              telegram,
              instagram,
              avgCost,
              twitter,
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
      ).then((data) => setPromoters(data)).catch(console.error)
    }, []);

    const renderDev = (promoter, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <img src={promoter.image.asset.url} alt="" />
                <div id="dev-name">{promoter.name}</div>
                <div className="rate">Avg Price: ${promoter.avgCost}</div>
                <div id="social-dev"><a href={promoter.telegram}><FaTelegramPlane size={25} fill={"#fff"}/></a> &nbsp;<a href={promoter.twitter}><FaTwitter size={25} fill={"#fff"}/></a>&nbsp;<a href={promoter.instagram}><FaInstagram size={25} fill={"#fff"}/></a></div>
                <br />
                <Link className="btn shadow-sm" to={{pathname:`/safehaven/promoters/${promoter.slug.current}/${promoter.id}`, state:{id:promoter.id}}}>Details</Link>
            </div>
        )
    }
    return (
        <div className='row' id='owner-card-cont'>
            {promoter.map(renderDev)}
        </div>
    )
}
