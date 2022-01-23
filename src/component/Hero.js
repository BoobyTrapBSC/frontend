import React, {useState} from 'react'
import { BiSortAlt2, BiSearchAlt2 } from "react-icons/bi";

export default function Hero() {

    const [headTxt, setheadTxt] = useState("Safe Haven")
    const [btnText, setBtnText] = useState("Safe DeFi")
    const [headDesc, setheadDesc] = useState("For Investors")

    const toggleText = () => {
        if (btnText === 'Safe DeFi') {
            setBtnText('Booby Trap')
            setheadTxt('Booby-Trap')
            setheadDesc('For Scammers')
        } else {
            setBtnText('Safe DeFi')
            setheadTxt('Safe Haven')
            setheadDesc('For Investors')
        }
    } 
    return (
        <div id='hero-container'>
            <div className="container-fluid">
                <div className="hero-text">
                    <h1>{headTxt}<br /><span style={{color:"#C1C8E4"}}>{headDesc}</span></h1>
                    <p style={{color:"#C1C8E4"}}>$BBT brings legit projects audited by a team of experienced Devs.<br />All in one platform to find the most legit projects out there on BSC. </p>
                </div>
                <div className="hero-search mx-auto">
                <form className="d-flex justify-content-center form-control">
                            <BiSearchAlt2 size={"35px"} style={{margin:"auto"}} fill='#c4c4c4'/>
                            <input className="search border-0" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn buttonToggle" onClick={toggleText} type="button"><span><BiSortAlt2 size={20} fill='#c4c4c4' /></span>{btnText}</button>
                            <button type="button" className="btn button-blue mx-1">Search</button>
                        </form>
                        <button type="button" className=" btn button-blue m-2 d-lg-none">Search</button>
                </div>
            </div>
        </div>
    )
}