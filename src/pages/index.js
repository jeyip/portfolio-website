import React, { Component } from "react"
import MediaQuery from "react-responsive"

import AboutMe from "./LandingPage/components/Desktop/AboutMe"
import Footer from "./LandingPage/components/Desktop/Footer"
import Headline from "./LandingPage/components/Desktop/Headline"
import Work from "./LandingPage/components/Desktop/Work"
import MobileAboutMeView from "./LandingPage/components/Mobile/AboutMeView/AboutMeView"
import MobileFooter from "./LandingPage/components/Mobile/Footer"
import MobileHomeView from "./LandingPage/components/Mobile/HomeView"
import MobileWorkView from "./LandingPage/components/Mobile/WorkView"

const DesktopView = () => (
  <div>
    <Headline />
    <Work />
    <AboutMe />
    <Footer />
  </div>
)

const MobileView = () => (
  <div>
    <MobileHomeView />
    <MobileWorkView />
    {/* <MobileAboutMeView /> */}
    <MobileFooter />
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={481}>
          <DesktopView />
        </MediaQuery>
        <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
          <MobileView />
        </MediaQuery>
      </div>
    )
  }
}

export default App
