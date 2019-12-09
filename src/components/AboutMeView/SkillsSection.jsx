import React, { Component } from "react"

import Header from "../Shared/SectionHeader"
import Paragraph from "../Shared/Paragraph"

const skillsText = `I believe deeply in the value of user-centric design.
Technology is a tool, and delight is important, but the first priority of any
website or web app should be creating the most intuitive experience possible.`

const skillData = [
  {
    title: "Coding",
    imageUrl: "../../Assets/codeIcon.svg",
  },
  {
    title: "Story-Mapping",
    imageUrl: "../../Assets/javascriptIcon.svg",
  },
  {
    title: "UI/UX",
    imageUrl: "../../Assets/javascriptIcon.svg",
  },
]

const SkillBox = ({ data }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <img
      alt="javascriptIcon"
      style={{ height: "200px", width: "auto" }}
      src={require("../../Assets/codeIcon.svg")}
    />
    <h3>{data.title}</h3>
  </div>
)

class SkillsSection extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "120px",
          width: "50%",
        }}
      >
        <Header text="MY SKILLS" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {skillData.map(data => (
            <SkillBox data={data} key={`${data.title}-${data.imageUrl}`} />
          ))}
        </div>
        <Paragraph text={skillsText} />
      </div>
    )
  }
}

export default SkillsSection
