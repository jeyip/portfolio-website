import React from "react"
import cx from "classnames"

import { handleScrollTo } from "./utils"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoTypeWrapper}>
        <img
          alt="Logo for Jeremy Yip"
          className={cx(styles.logoType, "noHighlight")}
          src={require("@/images/logo-icon-white.svg")}
        />
      </div>
      <ul className={styles.navbar}>
        <li className={cx(styles.navbarItem, "noHighlight")}>Home</li>
        <li
          className={cx(styles.navbarItem, "noHighlight")}
          onClick={() => handleScrollTo("workViewContainer")}
        >
          Work
        </li>
        <li
          className={cx(styles.navbarItem, "noHighlight")}
          onClick={() => handleScrollTo("footer")}
        >
          Contact
        </li>
      </ul>
    </div>
  )
}

export default Navbar
