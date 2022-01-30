import React from 'react'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Ownercards() {
    const ownerInfo = [
        {image:"https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 1", trapPoints:"2", twitter:"#", tg:"#", stars:"4.5"},
        {image:"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 2", trapPoints:"2", twitter:"#", tg:"#", stars:"4"},
        {image:"https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 3", trapPoints:"7", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 4", trapPoints:"0", twitter:"#", tg:"#", stars:"5"},
        {image:"https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 5", trapPoints:"8", twitter:"#", tg:"#", stars:"1"},
        {image:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 6", trapPoints:"4", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 6", trapPoints:"4", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"Owner 6", trapPoints:"4", twitter:"#", tg:"#", stars:"3"},
    ]

    const renderOwner = (ownerInfo, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <div style={{overflow:"hidden", width:"fit-content", borderRadius:"25px",}}>
                <img src={ownerInfo.image} alt="" /></div>
                <div id="trap-points">{ownerInfo.trapPoints} Trap Points</div>
                <div id="dev-name">{ownerInfo.name}</div>
                <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <Link className="btn shadow-sm" to="/safedefi/projectowner/ownerprofile">Projects</Link>
            </div>
        )
    }
    return (
        <div className='row justify-content-center'>
            {ownerInfo.map(renderOwner)}
        </div>
    )
}