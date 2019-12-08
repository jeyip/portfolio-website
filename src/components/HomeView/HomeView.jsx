import React, { Component } from "react"
import Flexbox from "flexbox-react"

import Header from "../Shared/SectionHeader"
import Navbar from "./Navbar"
import Paragraph from "../Shared/Paragraph"
// import throttle from 'lodash.throttle';
import "./homeView.css"

const imgStyle = {
  maxHeight: "400px",
  minHeight: "400px",
  alignSelf: "center",
  borderRadius: "50%",
}

const introText = `After the Peace Corps, I cultivated a passion for computer science. 
I'm now a front-end software engineer aiming to combine my passions 
of international development, human-centered design, and software engineering.`

class HomeView extends Component {
  constructor(props) {
    super()
    this.handleScrollTo = this.handleScrollTo.bind(this)
    // this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleScrollTo(className) {
    document
      .getElementsByClassName(className)[0]
      .scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // handleAnimation() {
  //   const wrapperDimensions = this.chevronWrapper.getBoundingClientRect();
  //   const { width, height, left, top } = wrapperDimensions;

  //   throttle(burst.tune({ x: (width / 2) + left, y: (height / 2) + top }).replay(), 2000, { leading: true });
  // }

  render() {
    const { styles } = this.props

    return (
      <Flexbox
        alignItems="center"
        className="homeView__container"
        flexDirection="column"
      >
        <Flexbox
          className="homeView__header"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Navbar />
        </Flexbox>
        <Flexbox
          alignItems="center"
          flexDirection="column"
          style={{ position: "relative", bottom: "220px" }}
        >
          <img
            alt="Profile of Jeremy Yip"
            className="noHighlight homeView__profileImage"
            style={imgStyle}
            src={require("../../Assets/webProfile.jpg")}
          />
          <h1
            className="homeView__title"
            style={{ letterSpacing: "5px", marginBottom: "0px" }}
          >
            HI THERE,
          </h1>
          <Header
            className="homeView__secondaryTitle"
            fontWeight={"300"}
            text="I'm Jeremy."
            style={styles.paragraphHeader}
          />
          <Paragraph
            className="homeView__paragraph"
            style={styles.paragraph}
            text={introText}
          />
          <div
            className="homeView__workChevronWrapper"
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
                src={require("../../Assets/chevron.png")}
              />
            </div>
          </div>
        </Flexbox>
      </Flexbox>
    )
  }
}

HomeView.defaultProps = {
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

export default HomeView
