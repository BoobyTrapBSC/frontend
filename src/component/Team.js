import React from "react";
import gaurav from '../images/Gaurav_Badge.png'
import bravo from '../images/Bravo Badge.png'
import arrnaya from '../images/Arrnaya Badge.png'

export default function Team() {
  return (
    <div id="team-cont" className="w-100">
      <div className="row">
          <h2>TEAM</h2>
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
