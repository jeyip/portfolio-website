import React, { Component } from "react"
import cx from "classnames"

import styles from "./navbar.module.css"

class Navbar extends Component {
  constructor(props) {
    super()
    this.handleScrollTo = this.handleScrollTo.bind(this)
  }

  handleScrollTo(className) {
    document
      .getElementsByClassName(className)[0]
      .scrollIntoView({ behavior: "smooth", block: "start" })
  }

  render() {
    return (
      <div
        style={{
          color: "#FFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.logoTypeWrapper}>
          <img
            alt="Logo for Jeremy Yip"
            className={cx(styles.logoType, "noHighlight")}
            src={require("@/images/logo-icon-white.svg")}
          />
        </div>
        <ul className={styles.navbar}>
          <li className={cx(styles.navbar__item, "noHighlight")}>Home</li>
          <li
            className={cx(styles.navbar__item, "noHighlight")}
            onClick={() => this.handleScrollTo("workViewContainer")}
          >
            Work
          </li>
          {/* <li
            className={cx(styles.navbar__item, "noHighlight")}
            onClick={() => this.handleScrollTo("aboutMeView")}
          >
            About
          </li> */}
          <li
            className={cx(styles.navbar__item, "noHighlight")}
            onClick={() => this.handleScrollTo("footer")}
          >
            Contact
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
