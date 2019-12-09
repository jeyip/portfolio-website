import React, { Component } from "react"
import { FaGithubAlt, FaLinkedinIn, FaAngellist } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import SectionHeader from "@/pages/LandingPage/shared/SectionHeader"

import "./footer.css"
import IconWithHover from "./Icon"

class Footer extends Component {
  render() {
    const { styles } = this.props

    return (
      <div style={styles.footer}>
        <div style={{ paddingTop: "35px", paddingBottom: "30px" }}>
          <SectionHeader text="CONTACT ME" style={{ color: "#FFF" }} />
        </div>
        <div style={{ display: "flex", paddingBottom: "35px" }}>
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
}

Footer.defaultProps = {
  styles: {
    footer: {
      backgroundColor: "#48BDBE",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
}

export default Footer
