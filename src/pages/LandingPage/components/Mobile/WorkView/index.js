import React, { Component } from "react"

import { addMobileLayout } from "../../../utils/addLayout"
import Header from "../../../shared/SectionHeader"
import WorkTile from "./WorkTile.jsx"

import "./workView.css"

const workData = [
  {
    title: "Placeholder",
    imageUrl: "",
    id: 1,
  },
  {
    title: "Placeholder",
    imageUrl: "",
    id: 2,
  },
  {
    title: "Placeholder",
    imageUrl: "",
    id: 3,
  },
]

class WorkView extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
        className="mobileWorkViewContainer"
      >
        <Header text="WORK" style={{ paddingTop: "15px" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          {workData.map(data => (
            <WorkTile data={data} key={data.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default addMobileLayout(WorkView)
