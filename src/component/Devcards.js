import React from 'react'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {BsStarFill, BsStarHalf} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Devcards() {
    const ownerInfo = [
        {image:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"4.5"},
        {image:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"4"},
        {image:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"5"},
        {image:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"1"},
        {image:"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"3"},
        {image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", name:"ABC Dev", twitter:"#", tg:"#", stars:"3"}
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
