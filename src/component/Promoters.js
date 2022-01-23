import React from 'react'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Promoters() {
    const ownerInfo = [
        {image:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"4.5"},
        {image:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"4"},
        {image:"https://images.unsplash.com/photo-1543965170-4c01a586684e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"5"},
        {image:"https://images.unsplash.com/photo-1541855492-581f618f69a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"1"},
        {image:"https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"}
    ]

    const renderOwner = (ownerInfo, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <img src={ownerInfo.image} alt="" />
                <div id="dev-name">{ownerInfo.name}</div>
                <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <button className="btn shadow-sm">Details</button>
            </div>
        )
    }
    return (
        <div className='row justify-content-center'>
            {ownerInfo.map(renderOwner)}
        </div>
    )
}
