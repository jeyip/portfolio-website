import React, { Component } from "react"

import { addMobileLayout } from "../../../../../utils/addLayout"
import Header from "../../../shared/SectionHeader"
import Tile from "./Tile.js"

import "./workView.css"

const workSamples = [
  {
    thumbnailUrl:
      "https://res.cloudinary.com/jjcodepen/image/upload/v1578381710/Portfolio1_tt52te.gif",
    originUrl: "https://codepen.io/jeyip/pen/yLyPRpa",
    id: 1,
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
            alignItems: "center",
            height: "70vh",
          }}
        >
          {workSamples.map(({ originUrl, thumbnailUrl, id }) => (
            <Tile originUrl={originUrl} thumbnailUrl={thumbnailUrl} key={id} />
          ))}
        </div>
      </div>
    )
  }
}

export default addMobileLayout(WorkView)
