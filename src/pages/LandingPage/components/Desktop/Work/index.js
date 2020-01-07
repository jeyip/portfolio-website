import React, { Component } from "react"
import cx from "classnames"
import { addDesktopLayout } from "@/utils/addLayout"
import Header from "../../../shared/SectionHeader"
import Tile from "./Tile"

import styles from "./work.module.css"

const workSamples = [
  {
    imageUrl:
      "https://res.cloudinary.com/jjcodepen/image/upload/v1578381710/Portfolio1_tt52te.gif",
    originUrl: "https://codepen.io/jeyip/pen/yLyPRpa",
    id: 1,
  },
]

class WorkView extends Component {
  render() {
    return (
      <div className={cx(styles.workViewContainer, "workViewContainer")}>
        <div style={{ marginBottom: "30px" }}>
          <Header text="WORK" />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {workSamples.map(workSample => (
            <Tile workSample={workSample} key={workSample.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default addDesktopLayout(WorkView)
