import React from "react"
import cx from "classnames"
import { FaGithubAlt, FaLinkedinIn, FaAngellist } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import SectionHeader from "@/pages/LandingPage/shared/SectionHeader"

import styles from "./footer.module.css"
import IconWithHover from "./IconWithHover"

const Footer = () => {
  return (
    <div className={cx("footer", styles.footer)}>
      <div className={styles.sectionHeaderWrapper}>
        <SectionHeader text="CONTACT ME" className={styles.sectionHeader} />
      </div>
      <div className={styles.iconsWrapper}>
        <IconWithHover link="https://www.github.com/jeyip">
          <FaGithubAlt size="1.5em" />
        </IconWithHover>
        <IconWithHover link="https://www.linkedin.com/in/jeremy-yip">
          <FaLinkedinIn size="1.5em" />
        </IconWithHover>
        <IconWithHover link="mailto:jeremy.yip7@gmail.com">
          <MdEmail size="1.5em" />
        </IconWithHover>
        <IconWithHover link="https://angel.co/jeremy-yip">
          <FaAngellist size="1.5em" />
        </IconWithHover>
      </div>
    </div>
  )
}

export default Footer
