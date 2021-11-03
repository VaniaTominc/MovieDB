import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import SideNavBar from "./components/sidenavbar"
import Discover from "./pages/discover"
import "./css/app.css"
import { 
  ContentWrapper, 
  PageContainer
} from "./style.js"

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

