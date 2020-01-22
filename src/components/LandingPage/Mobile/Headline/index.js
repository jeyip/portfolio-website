import React from "react"
import cx from "classnames"

import Header from "@/components/LandingPage/shared/SectionHeader"
import Paragraph from "@/components/LandingPage/shared/Paragraph"
import styles from "./headline.module.css"

const INTRO = `After the Peace Corps, I cultivated a passion for computer science.
I'm now a front-end software engineer aiming to combine my passions
of international development, human-centered design, and software engineering.`
const HI_THERE = "HI THERE,"
const IM_JEREMY = "I'm Jeremy."

const Headline = ({ isLoading, setLoading }) => {
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.header, { [styles.fadeIn3]: !isLoading })}>
        <img
          alt="Profile of Jeremy Yip"
          className={cx("noHighlight", styles.profileImage, {
            [styles.fadeIn3]: !isLoading,
          })}
          src={require("@/images/webProfile.jpg")}
          onLoad={() => {
            setTimeout(() => {
              setLoading(false)
            }, 1000)
          }}
        />
      </div>
      <div className={styles.content}>
        <h1
          className={cx(styles.title, {
            [styles.fadeIn9]: !isLoading,
          })}
        >
          {HI_THERE}
        </h1>
        <Header
          className={cx(styles.secondaryTitle, {
            [styles.fadeIn9]: !isLoading,
          })}
          fontWeight={"300"}
          text={IM_JEREMY}
        />
        <Paragraph
          className={cx(styles.paragraph, {
            [styles.fadeIn13]: !isLoading,
          })}
          text={INTRO}
        />
      </div>
    </div>
  )
}

export default Headline
