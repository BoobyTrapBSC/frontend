import React, {useState} from 'react';
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'

export default function SidebarSlide() {

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return <div>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} right outerContainerId={"App"}>
        <Link id="home" onClick={closeSideBar} className="menu-item" to="/safehaven/safuprojects">Safu Projects</Link>
        <Link id="about" onClick={closeSideBar} className="menu-item" to="/safehaven/upcomingprojects">Upcoming Projects</Link>
        <Link id="contact" onClick={closeSideBar} className="menu-item" to="/safehaven/ongoingprojects">Ongoing Projects</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/projectowner">Project Owners</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/developers">Developers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/influencers">Influencers</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/promoters">AMA/Call Channels</Link>
        <Link className="menu-item" onClick={closeSideBar} to="/safehaven/promoters">Other Services</Link>
        <hr />
        <a className="menu-item" onClick={closeSideBar} href="https://yachtpad.club/launchpad/BoobyTrap">Buy Presale</a>
        <a className="menu-item" onClick={closeSideBar} href="https://privatesale.boobytrap.live/">Claim Tokens</a>
      </Menu>
  </div>;
}