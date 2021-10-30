import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom"
import styled from 'styled-components'

import SideNavBar from "./components/sidenavbar"

import Discover from "./pages/discover"

import './css/app.css'


const App = () => {
  return (
    <Router>
      <PageContainer>
        {/* <SideNavBar {...this.props} /> */}
        <SideNavBar />
        <ContentWrapper>
          <Switch>
            {/* <Route path="/discover" component={Discover} {...this.props}/>      Original code */}
            <Discover />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  )
}

export default App


const ContentWrapper = styled.main`
  padding-left: 280px;
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
