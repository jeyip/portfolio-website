import React from "react"
import cx from "classnames"

import styles from "./paragraph.module.css"

const Paragraph = ({ className, text, style }) => {
  return (
    <div
      className={cx(styles.paragraphWrapper, className)}
      style={{ ...style }}
    >
      <p style={{ fontFamily: "Open Sans", margin: "0px" }}>{text}</p>
    </div>
  )
}

export default Paragraph
