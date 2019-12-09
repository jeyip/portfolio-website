import React from "react"

const Header = ({ className, fontWeight, text, style }) => {
  const defaultStyles = {
    fontFamily: "Dosis, sans-serif",
    letterSpacing: "5px",
    marginBottom: "30px",
  }

  return (
    <div className={className} style={{ ...defaultStyles, ...style }}>
      <h2 style={{ fontWeight, margin: "0px" }}>{text}</h2>
    </div>
  )
}

Header.defaultProps = {
  className: "",
}

export default Header
