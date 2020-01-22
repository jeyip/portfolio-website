import React from "react"
import cx from "classnames"
import { FaGithubAlt, FaLinkedinIn, FaAngellist } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Header from "@/components/LandingPage/shared/SectionHeader"

import styles from "./footer.module.css"
import HoverableIcon from "./HoverableIcon"

const Footer = () => {
  return (
    <div className={cx("footer", styles.footer)}>
      <div className={styles.headerWrapper}>
        <Header text="CONTACT ME" className={styles.sectionHeader} />
      </div>
      <div className={styles.iconsWrapper}>
        <HoverableIcon link="https://www.github.com/jeyip">
          <FaGithubAlt size="1.5em" />
        </HoverableIcon>
        <HoverableIcon link="https://www.linkedin.com/in/jeremy-yip">
          <FaLinkedinIn size="1.5em" />
        </HoverableIcon>
        <HoverableIcon link="mailto:jeremy.yip7@gmail.com">
          <MdEmail size="1.5em" />
        </HoverableIcon>
        <HoverableIcon link="https://angel.co/jeremy-yip">
          <FaAngellist size="1.5em" />
        </HoverableIcon>
      </div>
    </div>
  )
}

export default Footer
