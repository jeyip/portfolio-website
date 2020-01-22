import React from "react"
import cx from "classnames"

import Navbar from "./Navbar"
import SectionHeader from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import { handleScrollTo } from "./utils.js"
import styles from "./headline.module.css"

const INTRO = `After the Peace Corps, I cultivated a passion for computer science.
I'm now a front-end software engineer aiming to combine my passions
of international development, human-centered design, and software engineering.`
const HI_THERE = "HI THERE,"
const IM_JEREMY = "I'm Jeremy."
const WORK = "WORK"

const Headline = ({ isLoading, setLoading }) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.header, { [styles.fadeIn3]: !isLoading })}>
        <Navbar />
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
        <h1 className={cx(styles.title, { [styles.fadeIn9]: !isLoading })}>
          {HI_THERE}
        </h1>
        <SectionHeader
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
        <div
          className={cx(styles.chevronContainer, {
            [styles.fadeIn13]: !isLoading,
          })}
          onClick={() => handleScrollTo("workViewContainer")}
        >
          <div className={styles.chevronText}>{WORK}</div>
          <img
            alt="chevron"
            className={styles.chevron}
            src={require("@/images/chevron.png")}
          />
        </div>
      </div>
    </div>
  )
}

export default Headline
