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
      <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
        Wesley
        {/* <NavIcon arrow></NavIcon> */}
        <NavIcon>
          <img src={Arrow} alt="Arrow down" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavMainLink className="menu_nav_link" to="/discover" activeClassName="activated_background">
        Discover
        {/* <NavIcon search></NavIcon> */}
        <NavIcon>
          <img src={SearchWhite} alt="Search icon" />
        </NavIcon>
      </SideNavMainLink>
      <SideNavHeader><HeaderText>Watched</HeaderText></SideNavHeader>
      <NavLink className="menu_nav_link" to="/watched/movies" activeClassName="activated_background">Movies</NavLink>
      <NavLink className="menu_nav_link" to="/watched/tv-shows" activeClassName="activated_background">Tv Shows</NavLink>
      <SideNavHeader><HeaderText>Saved</HeaderText></SideNavHeader>
      <NavLink className="menu_nav_link" to="/saved/movies" activeClassName="activated_background">Movies</NavLink>
      <NavLink className="menu_nav_link" to="/saved/tv-shows" activeClassName="activated_background">Tv Shows</NavLink>
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

const SideNavHeader = styled.div`

`

const HeaderText = styled.div`

`

const NavLink = styled(Link)`
  display: block;
`