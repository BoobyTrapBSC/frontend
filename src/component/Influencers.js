import React from 'react'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Influencers() {
    const ownerInfo = [
        {image:"https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"4.5"},
        {image:"https://images.unsplash.com/photo-1585807515950-bc46d934c28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"4"},
        {image:"https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"5"},
        {image:"https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"1"},
        {image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1474031317822-f51f48735ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"XYZ Influencer", twitter:"#", tg:"#", stars:"3"}
    ]

    const renderOwner = (ownerInfo, index) =>{
        return(
            <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
                <img src={ownerInfo.image} alt="" />
                <div id="dev-name">{ownerInfo.name}</div>
                <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
                <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
                <button className="btn shadow-sm">Details</button>
            </div>
        )
    }
    return (
        <div className='row' id='owner-card-cont'>
            {ownerInfo.map(renderOwner)}
        </div>
    )
}
