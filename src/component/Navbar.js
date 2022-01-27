import React from 'react'
import logo from "../images/logo.png"
import trapsheetpdf from '../whitepaper/trapSheet-v2.pdf'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div id='navbar-container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/safedefi/safuprojects">Safe DeFi</Link>
                            </li>
                            <li className="nav-item">
                                <a href = {trapsheetpdf} target = "_blank" rel="noreferrer" className="nav-link">Trapsheet</a>
                            </li>
                        </ul>
                        <a href="https://t.me/boobytrapbsc" className="btn btn-outline-dark m-1">911</a>
                        <a type="button" href='https://fomobaby.app/launchpad' className="btn btn-outline-dark m-1">Buy Pvt Sale</a>
                        <button type="button" className="btn button-blue m-1">Connect Wallet</button>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    <div className="mob-nav">
                        <a href="https://t.me/boobytrapbsc" className="btn btn-sm btn-outline-dark m-1">911</a>
                        <button type="button" className="btn btn-sm button-blue m-1">Connect Wallet</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
