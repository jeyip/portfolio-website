import React, { useState } from "react"
import Loader from "react-loader-spinner"
import MediaQuery from "react-responsive"

import Footer from "../components/LandingPage/Desktop/Footer"
import Headline from "../components/LandingPage/Desktop/Headline"
import WorkSamples from "../components/LandingPage/Desktop/WorkSamples"
import MobileFooter from "../components/LandingPage/Mobile/Footer"
import MobileHeadline from "../components/LandingPage/Mobile/Headline"
import MobileWorkSamples from "../components/LandingPage/Mobile/WorkSamples"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const DesktopView = ({ isLoading, setLoading }) => (
  <div>
    <Headline isLoading={isLoading} setLoading={setLoading} />
    <WorkSamples />
    <Footer />
  </div>
)

const MobileView = ({ isLoading, setLoading }) => (
  <div>
    <MobileHeadline isLoading={isLoading} setLoading={setLoading} />
    <MobileWorkSamples />
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
