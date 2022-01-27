import React from "react";
import home from '../images/home-alt.svg'
import buybbt from '../images/square-vice-versa-alt.svg'
import trapsheet from '../images/sim.svg'
import safedefi from '../images/database.svg'
import trapsheetpdf from '../whitepaper/trapSheet-v2.pdf'
import {Link} from 'react-router-dom'

export default function Bottomnav() {
  return (
    <div className="d-lg-none bottomNav container-fluid">
      <nav>
        <div className="bottomBtn">
          <button className="btn">
            <Link id="mob-link" to="/"><img src={home} alt=""/><br/>Home</Link>
          </button>
          <button className="btn">
          <Link id="mob-link" to="/safedefi/safuprojects"><img src={safedefi} alt=""/><br/>Safe DeFi</Link>
          </button>
          <button className="btn">
            <Link to = {trapsheetpdf} id="mob-link" target = "_blank" rel="noreferrer"><img src={trapsheet} alt=""/><br/>Trapsheet</Link>
          </button>
          <button className="btn">
            <img src={buybbt} alt=""/><br/>Buy $BBT
          </button>
        </div>
      </nav>
    </div>
  );
}
