import React from "react"
import { FaGithubAlt, FaLinkedinIn, FaAngellist } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

import styles from "./footer.module.css"
import HoverableIcon from "./HoverableIcon"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
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
