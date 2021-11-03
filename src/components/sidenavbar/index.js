import React, { useState } from "react"
// import styled, { css } from 'styled-components'
import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom"

import * as colors from "../../colors"
import Arrow from "../../images/arrow-icon.png"
import SearchWhite from "../../images/search-icon-white.png"

const SideNavBar = () => {

  /* Write the necessary functions to show and hide the side bar on small devices */

  const [isOpen, setIsOpen] = useState(false)

  return (
    // <SideNavBarCont className={isOpen ? 'visible' : ''}>     Original code
    <SideNavBarCont isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {/* Implement a hamburger icon slide in effect for small devices */}
      <HamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>
      <SideNavMainLink className="menu_nav_link main_nav_link" to="/" exact>
        Vania
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

  @media (max-width: 990px) {
    left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    transition: all 0.5s linear;
  }
`

// Deleted original "position: relative"
const SideNavMainLink = styled(Link)`
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  margin-top: -12%;
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
  font-weight: 200;
`

// I created this styled component.
const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 990px) {
    position: fixed;
    display: block;
    left: ${({ isOpen }) => isOpen ? '230px' : '28px'};
    top: 24px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    background: ${({ isOpen }) => isOpen ? `${colors.sideNavBar}` : 'transparent'};
    padding: .2rem 0 .2rem .4rem;
    margin-left: ${({ isOpen }) => isOpen ? '3.1rem' : '0'}; 
    transition: all 0.5s linear;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ isOpen }) => isOpen ? 'white' : `${colors.sideNavBar}`};
      border-radius: 10px;
      transition: all 0.7s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
      :nth-child(2) {
        opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
        transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
      }
  
      :nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  }

  @media (max-width: 428px) {
    left: ${({ isOpen }) => isOpen ? '230px' : '15px'};
  }
`