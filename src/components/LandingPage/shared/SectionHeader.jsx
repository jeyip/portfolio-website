import React from "react"
import cx from "classnames"

import styles from "./sectionHeader.module.css"

const Header = ({ className = "", fontWeight, text, style }) => {
  return (
    <div className={cx(styles.headerWrapper, className)} style={style}>
      <h2
        style={{ fontFamily: "Dosis, sans-serif", fontWeight, margin: "0px" }}
      >
        {text}
      </h2>
    </div>
  )
}

export default Header
