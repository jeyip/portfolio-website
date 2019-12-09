import React from "react"

import "./footer.css"

const IconWithHover = ({ children, link }) => (
  <a href={link} style={{ margin: "0px 15px" }}>
    <div
      className="footer__iconContainer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  </a>
)

export default IconWithHover
