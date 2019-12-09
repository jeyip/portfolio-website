import React from "react"

const Paragraph = ({ className, text, style }) => {
  const defaultStyles = {
    fontFamily: "Open Sans",
    fontSize: "16px",
  }

  return (
    <div className={className} style={{ ...defaultStyles, ...style }}>
      <p style={{ margin: "0px" }}>{text}</p>
    </div>
  )
}

Paragraph.defaultProps = {
  className: "",
}

export default Paragraph
