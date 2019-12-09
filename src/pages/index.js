import React, { Component } from "react"
import MediaQuery from "react-responsive"

import AboutMeView from "../components/AboutMeView/AboutMeView"
import MobileAboutMeView from "../components/Mobile/AboutMeView/AboutMeView"
import Footer from "../components/Footer/Footer"
import MobileFooter from "../components/Mobile/Footer/Footer"
import Headline from "./LandingPage/components/Headline"
import MobileHomeView from "../components/Mobile/HomeView/HomeView"
import WorkView from "../components/WorkView/WorkView"
import MobileWorkView from "../components/Mobile/WorkView/WorkView"

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={481}>
          <div>
            <Headline />
            <WorkView />
            <AboutMeView />
            <Footer />
          </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
          <div>
            <MobileHomeView />
            <MobileWorkView />
            {/* <MobileAboutMeView /> */}
            <MobileFooter />
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default App
