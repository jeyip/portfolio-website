import React, { Component } from "react"

import { addDesktopLayout } from "../../../utils/addLayout"
import Header from "../../../shared/SectionHeader"
import WorkTile from "./WorkTile"

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
  {
    title: "Placeholder",
    imageUrl: "",
    id: 4,
  },
  {
    title: "Placeholder",
    imageUrl: "",
    id: 5,
  },
  {
    title: "Placeholder",
    imageUrl: "",
    id: 6,
  },
]

class WorkView extends Component {
  render() {
    return (
      <div
        className="workViewContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Header text="WORK" />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
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

export default addDesktopLayout(WorkView)
