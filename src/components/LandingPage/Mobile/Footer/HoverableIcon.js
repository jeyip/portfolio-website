import React from "react"

import styles from "./hoverableIcon.module.css"

const HoverableIcon = ({ children, link }) => (
  <a href={link} className={styles.hoverableIconLink}>
    <div className={styles.hoverableIconContainer}>{children}</div>
  </a>
)

export default HoverableIcon
