import React from "react"
import MediaQuery from "react-responsive"

import AboutMe from "./LandingPage/components/Desktop/AboutMe"
import Footer from "./LandingPage/components/Desktop/Footer"
import Headline from "./LandingPage/components/Desktop/Headline"
import Work from "./LandingPage/components/Desktop/Work"
import MobileAboutMeView from "./LandingPage/components/Mobile/AboutMeView"
import MobileFooter from "./LandingPage/components/Mobile/Footer"
import MobileHeadline from "./LandingPage/components/Mobile/Headline"
import MobileWorkView from "./LandingPage/components/Mobile/WorkView"

const DesktopView = () => (
  <div>
    <Headline />
    <Work />
    {/* <AboutMe /> */}
    <Footer />
  </div>
)

const MobileView = () => (
  <div>
    <MobileHeadline />
    <MobileWorkView />
    {/* <MobileAboutMeView /> */}
    <MobileFooter />
  </div>
)

const App = () => {
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

export default App
