import React, { Component } from "react"

import { addMobileLayout } from "../../../utils/addLayout"
import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import SkillsSection from "./SkillsSection"

import "./AboutMeView.css"

const aboutMeText = `I'm an American front-end software engineer based in the beautiful beachside Ventura, CA. When not at work, you'll find me staying out way, way too late salsa dancing,
working towards competitive numbers in powerlifting, and zipping around on my cruiser.`

class AboutMeView extends Component {
  render() {
    return (
      <div
        className="aboutMeView"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignSelf: "flex-start" }}>
          <Header text="ABOUT ME" />
        </div>
        <Paragraph text={aboutMeText} />
        {/* <SkillsSection /> */}
      </div>
    )
  }
}

export default addMobileLayout(AboutMeView)
