import React from "react"

import Header from "@/components/LandingPage/shared/SectionHeader"
import Paragraph from "@/components/LandingPage/shared/Paragraph"

import styles from "./skills.module.css"

const SKILLS_TEXT = `I believe deeply in the value of user-centric design.
Technology is a tool, and delight is important, but the first priority of any
website or web app should be creating the most intuitive experience possible.`

const skillData = [
  {
    title: "Coding",
    imageUrl: "@/images/codeIcon.svg",
  },
  {
    title: "Story-Mapping",
    imageUrl: "@/images/javascriptIcon.svg",
  },
  {
    title: "UI/UX",
    imageUrl: "@/images/javascriptIcon.svg",
  },
]

const SkillBox = ({ data }) => (
  <div className={styles.skillBoxContainer}>
    <img
      alt="javascriptIcon"
      clssName={styles.skillBoxImage}
      src={require("@/images/codeIcon.svg")}
    />
    <h3>{data.title}</h3>
  </div>
)

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.headerContainer}>
        <Header text="MY SKILLS" />
      </div>
      <div style={styles.skillBoxesContainer}>
        {skillData.map(data => (
          <SkillBox data={data} key={`${data.title}-${data.imageUrl}`} />
        ))}
      </div>
      <Paragraph text={SKILLS_TEXT} />
    </div>
  )
}

export default Skills
