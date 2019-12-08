import React, { Component } from "react"
import Flexbox from "flexbox-react"

import Header from "../../Shared/SectionHeader"
import Navbar from "./Navbar"
import Paragraph from "../../Shared/Paragraph"
import throttle from "lodash.throttle"
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
    // this.handleAnimation = this.handleAnimation.bind(this);
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
        className="mobileHomeView__container"
        flexDirection="column"
      >
        <Flexbox
          className="mobileHomeView__header"
          flexDirection="column"
          justifyContent="flex-start"
        >
          &nbsp;
        </Flexbox>
        <Flexbox
          alignItems="center"
          flexDirection="column"
          style={{ position: "relative", bottom: "125px" }}
        >
          <img
            alt="Profile of Jeremy Yip"
            className="noHighlight mobileHomeView__profileImage"
            style={imgStyle}
            src={require("../../../Assets/webProfile.jpg")}
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
        </Flexbox>
        {/* TODO: Re-evaluate the need for a navbar */}
        {/* <Navbar /> */}
      </Flexbox>
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
