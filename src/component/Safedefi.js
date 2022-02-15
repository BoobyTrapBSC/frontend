import React from 'react'
import pattern from '../images/pattern_graphic.png'
import trapsheet from '../whitepaper/trapSheet-v2.pdf'
export default function safehaven() {

    return (
        <div id='safehaven-cont'>
            <div className="safe-defi container pt-5">
                <h2>Let's start with how things work and make DeFi a safer place together.</h2>
                <p className='text-muted w-75 mx-auto'>Find legit Devs, their successful and upcoming projects, influencers and service providers in one platform. $BBT investors will be able to provide feedback through a blockchain-based rating system, thus being immutable and transparent.</p>
                <a href='https://privatesale.boobytrap.live/' className="btn btn-outline-dark m-1">Buy Pvt Sale</a>
                <a href = {trapsheet} target = "_blank" rel="noreferrer" className="btn button-blue m-1">Read Trapsheet</a>
            </div>
            <img className='patternImg mt-5' src={pattern} alt=""/>
        </div>
    )
}