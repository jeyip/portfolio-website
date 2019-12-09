import React from "react"

import "./footer.css"

const iconToClassMap = {
  github: "fa fa-github-alt footer__githubIcon",
  linkedIn: "fa fa-linkedin footer__linkedinIcon",
  medium: "fa fa-medium footer__mediumIcon",
}

const Icon = ({ icon, link }) => (
  <a href={link} style={{ margin: "0px 15px" }}>
    <div
      className="footer__iconContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <i className={iconToClassMap[icon]} aria-hidden="true" />
    </div>
  </a>
)

export default Icon
