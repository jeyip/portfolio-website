import React, { useState } from "react"
import Loader from "react-loader-spinner"
import MediaQuery from "react-responsive"

import AboutMe from "./LandingPage/components/Desktop/AboutMe"
import Footer from "./LandingPage/components/Desktop/Footer"
import Headline from "./LandingPage/components/Desktop/Headline"
import Work from "./LandingPage/components/Desktop/Work"
import MobileAboutMeView from "./LandingPage/components/Mobile/AboutMeView"
import MobileFooter from "./LandingPage/components/Mobile/Footer"
import MobileHeadline from "./LandingPage/components/Mobile/Headline"
import MobileWorkView from "./LandingPage/components/Mobile/WorkView"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const DesktopView = ({ isLoading, setLoading }) => (
  <div>
    <Headline isLoading={isLoading} setLoading={setLoading} />
    <Work />
    {/* <AboutMe /> */}
    <Footer />
  </div>
)

const MobileView = ({ isLoading, setLoading }) => (
  <div>
    <MobileHeadline isLoading={isLoading} setLoading={setLoading} />
    <MobileWorkView />
    {/* <MobileAboutMeView /> */}
    <MobileFooter />
  </div>
)

const App = () => {
  const [isLoading, setLoading] = useState(true)
  return (
    <div>
      {isLoading && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader
            type="CradleLoader"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      )}
      <MediaQuery minDeviceWidth={481}>
        <DesktopView isLoading={isLoading} setLoading={setLoading} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={480}>
        <MobileView isLoading={isLoading} setLoading={setLoading} />
      </MediaQuery>
    </div>
  )
}

export default App
