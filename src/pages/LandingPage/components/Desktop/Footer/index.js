import React, { Component } from "react"

import "./footer.css"
import Icon from "./Icon"

const layoutStyles = {
  backgroundColor: "#48BDBE",
}

class Footer extends Component {
  render() {
    const { styles } = this.props

    return (
      <div style={styles.footer}>
        <div style={styles.contactInformation}>
          <div>CONTACT ME</div>
          <div>{"(909) 726-3158"}</div>
          <div>jeremy.yip7@gmail.com</div>
        </div>
        <Icon icon="github" link="https://www.github.com/jeyip" />
        <Icon icon="linkedIn" link="https://www.linkedin.com/in/jeremy-yip" />
        <Icon icon="medium" link="https://medium.com/@jeremy.yip7" />
      </div>
    )
  }
}

Footer.defaultProps = {
  styles: {
    contactInformation: {
      color: "#FFF",
      padding: "35px 0px",
    },
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
