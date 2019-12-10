import React, { Component } from "react"

import Navbar from "./Navbar"
import Header from "../../../shared/SectionHeader"
import Paragraph from "../../../shared/Paragraph"
import styles from "./headline.module.css"

const imgStyle = {
  maxHeight: "325px",
  minHeight: "325px",
  alignSelf: "center",
  borderRadius: "50%",
  position: "absolute",
  bottom: "-150px",
  left: "50%",
  marginLeft: "-162.5px",
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
    const { stylesProps } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <Navbar />
          <img
            alt="Profile of Jeremy Yip"
            className={`noHighlight ${styles.profileImage}`}
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
            marginTop: "150px",
          }}
        >
          <h1
            className={styles.title}
            style={{ letterSpacing: "5px", marginBottom: "0px" }}
          >
            {"HI THERE,"}
          </h1>
          <Header
            className={styles.secondaryTitle}
            fontWeight={"300"}
            text="I'm Jeremy."
            style={stylesProps.paragraphHeader}
          />
          <Paragraph
            className={styles.paragraph}
            style={stylesProps.paragraph}
            text={introText}
          />
          <div
            className={styles.workChevronWrapper}
            onClick={() => this.handleScrollTo("workViewContainer")}
            onMouseEnter={this.handleAnimation}
            ref={ref => (this.chevronWrapper = ref)}
            style={stylesProps.chevronContainer}
          >
            <div
              style={{
                fontFamily: "Dosis, sans-serif",
                cursor: "pointer",
                marginBottom: "5px",
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
                letterSpacing: "5px",
              }}
            >
              {"WORK"}
            </div>
            <div>
              <img
                alt=""
                style={stylesProps.chevron}
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
  stylesProps: {
    paragraph: {
      width: "25%",
      minWidth: "570px",
      textAlign: "left",
      marginTop: "40px",
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
