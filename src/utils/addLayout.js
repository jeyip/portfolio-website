import React from "react"

export const addDesktopLayout = (Component, style = {}) => {
  const Layout = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        ...style,
      }}
    >
      <div style={{ display: "flex", width: "85%" }}>
        <Component />
      </div>
    </div>
  )

  return Layout
}

export const addMobileLayout = (Component, style = {}) => {
  const Layout = () => (
    <div style={{ padding: "0px 25px", ...style }}>
      <Component />
    </div>
  )

  return Layout
}
