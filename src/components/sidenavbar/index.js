import React, { useState } from "react"
import { HamburgerIcon, 
  NavLink, 
  SideNavBarCont, 
  NavIcon, 
  SideNavHeader, 
  HeaderText,
  SideNavMainLink } from "./style.js"

import Arrow from "../../images/arrow-icon.png"
import SearchWhite from "../../images/search-icon-white.png"

const SideNavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <SideNavBarCont isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <SideNavMainLink to="/" exact>
        Vania
        <NavIcon>
          <img src={Arrow} alt="Arrow down" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavMainLink className="discover" to="/discover" activeClassName="activated_background">
        Discover
        {/* <NavIcon search></NavIcon> */}
        <NavIcon>
          <img src={SearchWhite} alt="Search icon" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
      <NavLink to="/watched/movies" activeClassName="activated_background_links">Movies</NavLink>
      <NavLink to="/watched/tv-shows" activeClassName="activated_background_links">Tv Shows</NavLink>
      <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
      <NavLink to="/saved/movies" activeClassName="activated_background_links">Movies</NavLink>
      <NavLink to="/saved/tv-shows" activeClassName="activated_background_links">Tv Shows</NavLink>
    </SideNavBarCont>
  )
}

export default SideNavBar 
