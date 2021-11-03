/* eslint-disable no-unused-vars */
import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import styled from 'styled-components'

import SideNavBar from "./components/sidenavbar"

import Discover from "./pages/discover"

import './css/app.css'

const App = () => {

  return (
    <Router>
      <PageContainer>
        <SideNavBar />
        <ContentWrapper>
          <Switch>            
            <Discover path="/discover" />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>

  )
}

export default App

// Originally only "padding-left: 280px". I added "padding-left: 0" for media query as the content was pushed to the right when on smaller screen / mobile.
const ContentWrapper = styled.main`
  padding-left: 280px;

  @media (max-width: 990px) {
    padding-left: 0;
  }
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
