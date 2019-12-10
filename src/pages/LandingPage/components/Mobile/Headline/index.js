import React, { Component } from "react"

import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import "./headline.css"

const imgStyle = {
  maxHeight: "230px",
  minHeight: "230px",
  borderRadius: "50%",
  position: "absolute",
  bottom: "-125px",
  left: "50%",
  marginLeft: "-115px",
}

const introText = `After the Peace Corps, I cultivated a passion for computer science.
I'm now a front-end software engineer aiming to combine my passions
of international development, human-centered design, and software engineering.`

class Headline extends Component {
  render() {
    const { styles } = this.props

    return (
      <div className="headline__container">
        <div className="headline__header">
          <img
            alt="Profile of Jeremy Yip"
            className="noHighlight headline__profileImage"
            style={imgStyle}
            src={require("@/Assets/webProfile.jpg")}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            height: "70vh",
            marginTop: "40px",
          }}
        >
          <h1 className="headline__title" style={styles.title}>
            HI THERE,
          </h1>
          <Header
            className="headline__secondaryTitle"
            fontWeight={"300"}
            text="I'm Jeremy."
            style={styles.paragraphHeader}
          />
          <Paragraph
            className="headline__paragraph"
            style={styles.paragraph}
            text={introText}
          />
        </div>
      </div>
    )
  }
}

Headline.defaultProps = {
  styles: {
    paragraph: {
      width: "25%",
      minWidth: "275px",
      textAlign: "left",
      marginTop: "15px",
      fontSize: "16px",
      wordSpacing: "1px",
    },
    paragraphHeader: {
      letterSpacing: "1px",
      fontFamily: "Open Sans",
      fontWeight: "300",
      fontSize: "16px",
      marginTop: "0px",
      marginBottom: "15px",
    },
    title: {
      letterSpacing: "5px",
      marginBottom: "0px",
      fontSize: "26px",
    },
  },
}

export default Headline
