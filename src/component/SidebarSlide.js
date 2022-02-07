import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'

export default function SidebarSlide() {
  return <div>
      <Menu right outerContainerId={"App"}>
        <Link id="home" className="menu-item" to="/safedefi/safuprojects">Safu Projects</Link>
        <Link id="about" className="menu-item" to="/safedefi/upcomingprojects">Upcoming Projects</Link>
        <Link id="contact" className="menu-item" to="/safedefi/safuprojects">Ongoing Projects</Link>
        <Link className="menu-item" to="/safedefi/projectowner">Project Owners</Link>
        <Link className="menu-item" to="/safedefi/developers">Developers</Link>
        <Link className="menu-item" to="/safedefi/influencers">Influencers</Link>
        <Link className="menu-item" to="/safedefi/promoters">AMA/Call Channels</Link>
        <Link className="menu-item" to="/safedefi/promoters">Other Services</Link>
        <hr />
        <Link className="menu-item" to="/">0 Trap Points</Link>
        <Link className="menu-item" to="/">0-2 Trap Points</Link>
        <Link className="menu-item" to="/">3-5 Trap Points</Link>
        <Link className="menu-item" to="/">6-8 Trap Points</Link>
        <Link className="menu-item" to="/">10 Trap Points</Link>
      </Menu>
  </div>;
}
