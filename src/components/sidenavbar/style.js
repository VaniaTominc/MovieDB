import styled from "styled-components"
import * as colors from "../../colors"
import { NavLink as Link } from "react-router-dom"

export const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  margin-top: -12%;
`

export const SideNavHeader = styled.div`
  margin: 0 0 10px 35px;
  border-bottom: 1px solid #404e5f;
  padding: 25px 0 5px;
  font-size: 1.6em;
  color: white;
`

export const HeaderText = styled.div`
  font-size: 1.6rem;
  padding: 10px 0;
`

export const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};

  @media (max-width: 990px) {
    left: ${({ isOpen }) => isOpen ? "0" : "-100%"};
    transition: all 0.5s linear;
  }
`

export const SideNavMainLink = styled(Link)`
display: block;
padding: 25px 35px;
font-size: 1.6em;
font-weight: 700;
color: white;
`

export const NavLink = styled(Link)`
  display: block;
  margin-left: 35px;
  padding: 5px 0;
  font-size: 1.2rem;
  font-weight: 200;
`

export const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 990px) {
    position: fixed;
    display: block;
    left: ${({ isOpen }) => isOpen ? "230px" : "28px"};
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

    background: ${({ isOpen }) => isOpen ? `${colors.sideNavBar}` : "transparent"};
    padding: .2rem 0 .2rem .4rem;
    margin-left: ${({ isOpen }) => isOpen ? "3.1rem" : "0"}; 
    transition: all 0.5s linear;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ isOpen }) => isOpen ? "white" : `${colors.sideNavBar}`};
      border-radius: 10px;
      transition: all 0.7s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ isOpen }) => isOpen ? "rotate(45deg)" : "rotate(0)"};
      }

      :nth-child(2) {
        opacity: ${({ isOpen }) => isOpen ? "0" : "1"};
        transform: ${({ isOpen }) => isOpen ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ isOpen }) => isOpen ? "rotate(-45deg)" : "rotate(0)"};
      }
    }
  }

  @media (max-width: 428px) {
    left: ${({ isOpen }) => isOpen ? "230px" : "15px"};
  }
`