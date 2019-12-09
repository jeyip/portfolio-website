import React, { Component } from "react"

import { addDesktopLayout } from "../../../utils/addLayout"
import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import SkillsSection from "./SkillsSection"

import "./AboutMe.css"

const aboutMeText = `I'm an American front-end software engineer based in the beautiful beachside Ventura, CA. When not at work, you'll find me staying out way, way too late salsa dancing,
working towards competitive numbers in powerlifting, and zipping around on my cruiser.`

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header text="ABOUT ME" />
          <Paragraph text={aboutMeText} style={{ width: "50%" }} />
          <SkillsSection />
        </div>
      </div>
    )
  }
}

export default addDesktopLayout(AboutMe)
