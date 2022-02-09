import React, { useState, useEffect } from 'react'
import client from '../client'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'


export default function Ownercards() {

    const [owner, setOwner] = useState([]);

    useEffect(() => {
      client.fetch(
          `*[_type=="owners"] {
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

    const start =()=> {
    //    if(Number(avgRating).toFixed(0) == 5){
    //         return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />]
    //    }
    //    else if(Number(avgRating).toFixed(0) == 4){
    //     return [<BsStarFill />,<BsStarFill />,<BsStarFill />,<BsStarFill />] 
    //    }
    //    else if(Number(avgRating).toFixed(0) == 3){
    //     return [<BsStarFill />,<BsStarFill />,<BsStarFill />] 
    //    }
    //    else if(Number(avgRating).toFixed(0) == 2){
    //     return [<BsStarFill />,<BsStarFill />] 
    //    }
    //    else if(Number(avgRating).toFixed(0) == 1){
    //     return [<BsStarFill />] 
    //    }
      
    }

    const renderOwner = (owner, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <img src={owner.image.asset.url} alt="" />
                <div id="trap-points" className='mt-1'>{owner.trapPoints} Trap Points</div>
                <div id="dev-name" className='mb-0 lh-sm'>{owner.name}</div>
                <div id="alias" className='lh-sm'>{owner.alias}</div>
                {/* <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div> */}
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <Link className="btn shadow-sm" to={{pathname:`/safedefi/projectowner/${owner.slug.current}/${owner.id}`, state:{id:owner.id[index]}}}>Projects</Link>
                {/* <Link className="btn shadow-sm" to={`/safedefi/projectowner/${owner.slug.current}`} >Projects</Link> */}
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