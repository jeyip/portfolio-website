import React from "react"

export const addDesktopLayout = (Component, style = {}) => {
  const defaultStyle = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }
  const Layout = () => (
    <div style={{ ...style, ...defaultStyle }}>
      <div style={{ display: "flex", width: "85%" }}>
        <Component />
      </div>
    </div>
  )

  return Layout
}

export const addMobileLayout = (Component, style = {}) => {
  const defaultStyle = { padding: "0px 25px" }
  const Layout = () => (
    <div style={{ ...style, ...defaultStyle }}>
      <Component />
    </div>
  )

  return Layout
}
