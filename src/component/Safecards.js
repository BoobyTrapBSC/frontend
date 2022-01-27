import React from 'react'
import {
    FaTelegramPlane,
    FaTwitter,
    FaGlobe,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Safecards() {
    const projectArray = [
        { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png", name: "Bitcoin", tracker:"BTC", trapPoints: "0", twitter: "#", tg: "#", website:"https://bitcoin.org/en/", discord:"#", insta:"#", desc:"Bitcoin is a cryptocurrency. It is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central..." },
        { image: "https://cryptologos.cc/logos/ethereum-eth-logo.png", name: "Ethereum", tracker:"ETH", trapPoints: "5", twitter: "https://twitter.com/ethdotorg", tg: "#", website:"https://ethereum.org/en/", discord:"https://discord.gg/CetY6Y4", insta:"#", desc:"Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that..." },
        { image: "https://cdn-icons-png.flaticon.com/512/825/825508.png", name: "Tether", tracker:"USDT", trapPoints: "4", twitter: "https://twitter.com/Tether_to/", tg: "https://t.me/OfficialTether", website:"https://tether.to/en/", discord:"#", insta:"#", desc:"Tether is a stablecoin pegged to the US Dollar. A stablecoin is a type of cryptocurrency whose value is pegged to another fiat currency like the US Dollar or to a commodity..." },
        { image: "https://www.iconpacks.net/icons/2/free-binance-coin-icon-2211-thumb.png", name: "Binance", tracker:"BNB", trapPoints: "8", twitter: "https://twitter.com/binance", tg: "https://t.me/BinanceExchange", website:"https://www.binance.com/", discord:"https://discord.gg/vKNp6qxw7a", insta:"https://www.instagram.com/binance/", desc:"Binance Coin (BNB) is an exchange-based token created and issued by the cryptocurrency exchange Binance..." },
        { image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=018", name: "USD Coin", tracker:"USDC", trapPoints: "3", twitter: "https://twitter.com/circlepay", tg: "#", website:"https://www.circle.com/en/usdc", discord:"https://discord.com/invite/Q7bKN5y", insta:"#", desc:"USDC is a fully collateralized US dollar stablecoin. USDC is the bridge between dollars and trading on cryptocurrency exchanges..." },
        { image: "https://cryptologos.cc/logos/cardano-ada-logo.png", name: "Cardano", tracker:"ADA", trapPoints: "2", twitter: "https://twitter.com/Cardano", tg: "https://t.me/CardanoAnnouncements", website:"https://cardano.org/", discord:"#", insta:"#", desc:"Cardano is a blockchain platform for changemakers, innovators, and visionaries, with the tools and technologies required to..." },
    ]

    const renderProjects = (projectArray, index) =>{
        return(
            <div className="projectCard mx-2 my-4 col-md-3 px-3 py-2 shadow" key={index}>
          <div id="projectHead" className="d-flex">
            <img
              className="shadow"
              src={projectArray.image}
              alt=""
            />
            <div className="m-auto">
              <h3 className="fs-6">
                {projectArray.name} <span>({projectArray.tracker})</span>
              </h3>
              <Link to="/" style={projectArray.tg.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaTelegramPlane /></Link>
              <Link to="/" style={projectArray.twitter.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaTwitter /></Link>
              <Link to="/" style={projectArray.website.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaGlobe /></Link>
              <Link to="/" style={projectArray.discord.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaDiscord /></Link>
              <Link to="/" style={projectArray.insta.length > 2 ? {display:"inline-block"} : {display:"none"}} id="project-social"><FaInstagram /></Link>
            </div>
          </div>
          <div id="projectDesc">
              <br />
              <p>{projectArray.desc}</p>
          </div>
          <Link className="btn shadow-sm" to="/">Details</Link>
        </div>
            // <div className="ownerCard mb-5 col-md-3 shadow" key={index}>
            //     <img src={projectArray.image} alt="" />
            //     <div id="trap-points">{projectArray.trapPoints} Trap Points</div>
            //     <div id="dev-name">{projectArray.name}</div>
            //     <div className="star"><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
            //     <div id="social-dev"><Link to="/"><FaTelegramPlane size={25} fill={"#fff"}/></Link> &nbsp;<Link to="/"><FaTwitter size={25} fill={"#fff"}/></Link></div>
            //     <Link className="btn shadow-sm" to="/safedefi/projectowner/ownerprofile">Projects</Link>
            // </div>
        )
    }

    return <div className='row justify-content-center safuCards'>
        {projectArray.map(renderProjects)}
    </div>;
}
