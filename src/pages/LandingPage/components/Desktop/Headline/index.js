import React, { Component } from "react"

import Navbar from "./Navbar"
import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import "./headline.css"

const imgStyle = {
  maxHeight: "375px",
  minHeight: "375px",
  alignSelf: "center",
  borderRadius: "50%",
  position: "relative",
}

const introText = `After the Peace Corps, I cultivated a passion for computer science. 
I'm now a front-end software engineer aiming to combine my passions 
of international development, human-centered design, and software engineering.`

class Headline extends Component {
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
    const { styles } = this.props

    return (
      <div className="headline__container">
        <div className="headline__header">
          <Navbar />
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
            height: "60vh",
            paddingTop: "12%",
          }}
        >
          <h1
            className="headline__title"
            style={{ letterSpacing: "5px", marginBottom: "0px" }}
          >
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
          <div
            className="headline__workChevronWrapper"
            onClick={() => this.handleScrollTo("workViewContainer")}
            onMouseEnter={this.handleAnimation}
            ref={ref => (this.chevronWrapper = ref)}
            style={styles.chevronContainer}
          >
            <Header style={styles.chevronHeader} text="WORK" />
            <div>
              <img
                alt=""
                style={styles.chevron}
                src={require("@/Assets/chevron.png")}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Headline.defaultProps = {
  styles: {
    paragraph: {
      width: "25%",
      minWidth: "570px",
      textAlign: "left",
      marginTop: "15px",
    },
    paragraphHeader: {
      letterSpacing: "1px",
      fontWeight: "300",
      fontSize: "16px",
      marginTop: "0px",
    },
    chevron: {
      height: "20px",
      width: "auto",
    },
    chevronContainer: {
      cursor: "pointer",
      marginTop: "50px",
      textAlign: "center",
    },
    chevronHeader: {
      letterSpacing: "2px",
      fontSize: "14px",
      marginBottom: "5px",
    },
  },
}

export default Headline
