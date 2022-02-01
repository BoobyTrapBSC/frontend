import React, { useState, useEffect } from 'react'
import client from '../client'
import { useParams } from "react-router-dom";

export default function Projectdetails() {

    const [singleProject, setSingleProject] = useState([]);
    const { slug } = useParams()

    useEffect(() => {
        client.fetch(
            `*[_type=="lprojects"] {
                name,
                email,
                tracker,
                slug,
                contract,
                audit,
                kyc,
                marketingWallet,
                budget,
                tradingStartDate,
                initialMC,
                launchPrice,
                athMC,
                owner,
                marketingStatus,
                telegram,
                twitter,
                website,
                facebook,
                discord,
                instagram,
                reditt,
                youtube,
                other,
                tgOwner,
                image{
                    asset -> {
                        _id,
                        url
                    },
                    alt
                },
                devwallet,
                newlyLaunched,
                comStrength,
                devStatus,
                description,
            }`
        ).then((data) => setSingleProject(data[0]))
    }, [slug])

    return (
        <div className="row justify-content-center">
            <div className="container-fluid text-start overflow-hidden position-relative marquee" style={{backgroundColor:"#EAEDF3", color:"#2D4E85", height:"24px",}}><p><b>Disclaimer</b>: Due to unavailability of detailed information on upcoming projects, BoobyTrap Team is unable to provide Trap Points (Expert Opinion) at the moment. Trap points will be updated in due course after launch. DYOR and exercise caution while investing in any Private/Presale in such projects.</p></div>
            <div className="container-fluid text-start fs-6">
                <ul id="skills">
                    <li><b>Trap Points:</b> {singleProject.trappoints}</li>
                    <li><b>Project Status:</b> {singleProject.newlyLaunched == true? "Recently Launched": singleProject.devStatus}</li>
                    <li><b>Community Ratings:</b>  </li>
                    <li><b>Community Strength:</b> {singleProject.comStrength}k+</li>
                    <li><b>Marketing Budget:</b> ${singleProject.budget}</li>
                    <li><b>Dev Wallet:</b> {singleProject.devwallet}</li>
                </ul>
            </div>
        </div>
    );
}
