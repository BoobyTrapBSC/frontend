import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Ownercards() {

    const [owner, setOwner] = useState([]);
    const id = [0,1,2,3]

    useEffect(() => {
      client.fetch(
          `*[_type=="owners"] {
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
      ).then((data) => setOwner(data)).catch(console.error)
    }, []);

    const renderOwner = (owner, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <div style={{overflow:"hidden", width:"fit-content", borderRadius:"25px",}}>
                <img src={owner.image.asset.url} alt="" /></div>
                <div id="trap-points">{owner.trappoints} Trap Points</div>
                <div id="dev-name" className='mb-0 lh-sm'>{owner.name}</div>
                <div id="alias" className='lh-sm'>{owner.alias}</div>
                <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <Link className="btn shadow-sm" to={{pathname:`/safedefi/projectowner/${owner.slug.current}/${id[index]}`, state:{id:id[index]}}}>Projects</Link>
                {/* <Link className="btn shadow-sm" to={`/safedefi/projectowner/${owner.slug.current}`} >Projects</Link> */}
            </div>
        )
    }
    return (
        <div className='row justify-content-center'>
            {owner.map(renderOwner)};
            {console.log(owner)}
        </div>
    )
}