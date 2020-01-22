import React from "react"

import styles from "./hoverableIcon.module.css"

const IconWithHover = ({ children, link }) => (
  <a href={link} className={styles.hoverableIconLink}>
    <div className={styles.hoverableIconContainer}>{children}</div>
  </a>
)

export default IconWithHover
