import React from "react";
import gaurav from '../images/Gaurav_Badge.png'
import bravo from '../images/Bravo Badge.png'
import arrnaya from '../images/Arrnaya Badge.png'
import audit from '../whitepaper/Booby-Audit.pdf'

export default function Team() {
  return (
    <div id="team-cont" className="w-100">
      <div className="row">
        <div className="container mb-4">
          <h2>Fully Doxxed &amp; KYC'ed team</h2>
          <p>$BBT believes in keeping DeFi transparent, hence our team members have been KYC'ed with Dessert Finance</p>
          <a href={audit} target="_blank" rel="noreferrer" className="btn button-blue" style={{maxWidth:"300px"}}>KYC Info</a></div>
        <div className="col-lg-3 my-2">
            <img src={gaurav} className="card-img-top" alt="Gaurav Monga, CEO" />
        </div>
        <div className="col-lg-3 my-2">
            <img src={bravo} className="card-img-top" alt="Bravo Sierra, CFO" />
        </div>
        <div className="col-lg-3 my-2">
            <img src={arrnaya} className="card-img-top" alt="Arrnaya, Developer" />
        </div>
      </div>
    </div>
  );
}
