import React, { Component } from "react"

import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import "./homeView.css"

const imgStyle = {
  maxHeight: "230px",
  minHeight: "230px",
  alignSelf: "center",
  borderRadius: "50%",
}

const introText = `After the Peace Corps, I cultivated a passion for computer science.
I'm now a front-end software engineer aiming to combine my passions
of international development, human-centered design, and software engineering.`

class HomeView extends Component {
  constructor(props) {
    super()
  }

  render() {
    const { styles } = this.props

    return (
      <div
        className="mobileHomeView__container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="mobileHomeView__header"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          &nbsp;
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            position: "relative",
            bottom: "125px",
          }}
        >
          <img
            alt="Profile of Jeremy Yip"
            className="noHighlight mobileHomeView__profileImage"
            style={imgStyle}
            src={require("../../../../../Assets/webProfile.jpg")}
          />
          <h1 className="mobileHomeView__title" style={styles.title}>
            HI THERE,
          </h1>
          <Header
            className="mobileHomeView__secondaryTitle"
            fontWeight={"300"}
            text="I'm Jeremy."
            style={styles.paragraphHeader}
          />
          <Paragraph
            className="mobileHomeView__paragraph"
            style={styles.paragraph}
            text={introText}
          />
        </div>
      </div>
    )
  }
}

HomeView.defaultProps = {
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

export default HomeView
