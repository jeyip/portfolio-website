import React from "react"

import { addDesktopLayout } from "../../../../../utils/addLayout"
import Header from "@/components/LandingPage/shared/SectionHeader"
import Paragraph from "@/components/LandingPage/shared/Paragraph"
import Skills from "./Skills"

import styles from "./aboutMe.module.css"

const ABOUT_ME_TEXT = `I'm an American front-end software engineer based in the beautiful beachside Ventura, CA. When not at work, you'll find me staying out way, way too late salsa dancing,
working towards competitive numbers in powerlifting, and zipping around on my cruiser.`

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.headerContainer}>
        <Header text="ABOUT ME" />
      </div>
      <Paragraph text={ABOUT_ME_TEXT} style={styles.paragraph} />
      <Skills />
    </div>
  )
}

export default addDesktopLayout(AboutMe)
