import React from "react"

import styles from "./footer.module.css"

const IconWithHover = ({ children, link }) => (
  <a href={link} style={{ margin: "0px 15px" }}>
    <div className={styles.iconWrapper}>{children}</div>
  </a>
)

export default IconWithHover
