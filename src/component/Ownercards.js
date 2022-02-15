import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom'


export default function Ownercards() {

    const [owner, setOwner] = useState([]);

    useEffect(() => {
      client.fetch(
          `*[_type=="owners"] | order(trapPoints asc) {
              name,
              alias,
              trapPoints,
              numProjects,
              experience,
              slug,
              id,
              avgLife,
              image{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              }
          }`
      ).then((data) => setOwner(data)).catch(console.error)
    }, []);

    const renderOwner = (owner, index) =>{
        return(
            <div className="ownerCard mt-3 mb-5 col-md-3 shadow" key={index}>
                <img src={owner.image.asset.url} alt="" />
                <div id="trap-points" className='mt-1'>{owner.trapPoints} Trap Points</div>
                <div id="dev-name" className='mb-0 lh-sm'>{owner.name}</div>
                <div id="alias" className='lh-sm'>{owner.alias}</div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <Link className="btn shadow-sm" to={{pathname:`/safehaven/projectowner/${owner.slug.current}/${owner.id}`, state:{id:owner.id[index]}}}>Projects</Link>
                {/* <Link className="btn shadow-sm" to={`/safehaven/projectowner/${owner.slug.current}`} >Projects</Link> */}
            </div>
        )
    }
    return (
        <div className='row' id='owner-card-cont'>
            {owner.map(renderOwner)}
            {console.log(owner)}
        </div>
    )
}