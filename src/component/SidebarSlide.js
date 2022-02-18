import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'

export default function SidebarSlide() {

  var isMenuOpen = function(state) {
    return console.log(state.isOpen)
  };
  return <div>
      <Menu onStateChange={ isMenuOpen } right outerContainerId={"App"}>
        <Link id="home" className="menu-item" to="/safehaven/safuprojects">Safu Projects</Link>
        <Link id="about" className="menu-item" to="/safehaven/upcomingprojects">Upcoming Projects</Link>
        <Link id="contact" className="menu-item" to="/safehaven/ongoingprojects">Ongoing Projects</Link>
        <Link className="menu-item" to="/safehaven/projectowner">Project Owners</Link>
        <Link className="menu-item" to="/safehaven/developers">Developers</Link>
        <Link className="menu-item" to="/safehaven/influencers">Influencers</Link>
        <Link className="menu-item" to="/safehaven/promoters">AMA/Call Channels</Link>
        <Link className="menu-item" to="/safehaven/promoters">Other Services</Link>
        <hr />
        <a className="menu-item" href="https://yachtpad.club/launchpad/BoobyTrap">Buy Presale</a>
        <a className="menu-item" href="https://privatesale.boobytrap.live/">Claim Tokens</a>
      </Menu>
  </div>;
}