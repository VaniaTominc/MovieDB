import React from "react"
// import styled, { css } from 'styled-components'
import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom"

import * as colors from "../../colors"
import Arrow from "../../images/arrow-icon.png"
import SearchWhite from "../../images/search-icon-white.png"

const SideNavBar = () => {

  // const { isOpen } = this.state           Original code, please change it to hooks

  /* Write the necessary functions to show and hide the side bar on small devices */

  return (
    // <SideNavBarCont className={isOpen ? 'visible' : ''}>     Original code
    <SideNavBarCont>
      {/* Implement a hamburger icon slide in effect for small devices */}
      <HamburgerIcon>🏠</HamburgerIcon>
      <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
        Wesley
        {/* <NavIcon arrow></NavIcon> */}
        <NavIcon>
          <img src={Arrow} alt="Arrow down" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavMainLink className="menu_nav_link discover" to="/discover" activeClassName="activated_background">
        Discover
        {/* <NavIcon search></NavIcon> */}
        <NavIcon>
          <img src={SearchWhite} alt="Search icon" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
      <NavLink className="menu_nav_link" to="/watched/movies" activeClassName="activated_background_links">Movies</NavLink>
      <NavLink className="menu_nav_link" to="/watched/tv-shows" activeClassName="activated_background_links">Tv Shows</NavLink>
      <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
      <NavLink className="menu_nav_link" to="/saved/movies" activeClassName="activated_background_links">Movies</NavLink>
      <NavLink className="menu_nav_link" to="/saved/tv-shows" activeClassName="activated_background_links">Tv Shows</NavLink>
    </SideNavBarCont>
  )
}

export default SideNavBar 

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};

  @media (max-width: 768px) {
  right: -100%;
  }
`


const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 30%;
`

// Originally empty, I added styles.
const SideNavHeader = styled.div`
  margin: 0 0 10px 35px;
  border-bottom: 1px solid #404e5f;
  padding: 25px 0 5px;
  font-size: 1.6em;
  color: white;
`

// Originally empty, I added styles.
const HeaderText = styled.div`
  font-size: 1.6rem;
  padding: 10px 0;
`
// Originally there was only "display:block". I added the rest
const NavLink = styled(Link)`
  display: block;
  margin-left: 35px;
  padding: 5px 0;
  font-size: 1.2rem;
`

// I created this styled component.
const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    display: block;
    left: 20px;
    top: 15px;
    font-size: 2rem;
  }
`