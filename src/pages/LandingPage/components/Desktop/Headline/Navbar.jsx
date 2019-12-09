import React, { Component } from "react"

import "./Navbar.css"

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
        <div style={{ textAlign: "center", width: "200px", fontSize: "20px" }}>
          <img
            alt="Logo for Jeremy Yip"
            className="noHighlight"
            style={{ maxWidth: "30%" }}
            src={require("../../../../../Assets/logoWhite.svg")}
          />
        </div>
        <ul className="navbar">
          <li className="navbar__item noHighlight">Home</li>
          <li
            className="navbar__item noHighlight"
            onClick={() => this.handleScrollTo("workViewContainer")}
          >
            Work
          </li>
          <li
            className="navbar__item noHighlight"
            onClick={() => this.handleScrollTo("aboutMeView")}
          >
            About
          </li>
          <li className="navbar__item noHighlight">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar
