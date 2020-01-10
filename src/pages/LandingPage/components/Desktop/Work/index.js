import React from "react"
import cx from "classnames"
import { addDesktopLayout } from "@/utils/addLayout"
import Header from "../../../shared/SectionHeader"
import Tile from "./Tile"

import styles from "./work.module.css"

const workSamples = [
  {
    thumbnailUrl:
      "https://res.cloudinary.com/jjcodepen/image/upload/c_fit,h_400/v1578649238/Portfolio2_doixla.gif",
    originUrl: "https://codepen.io/jeyip/pen/povpoBK",
    id: 1,
  },
  {
    thumbnailUrl:
      "https://res.cloudinary.com/jjcodepen/image/upload/v1578381710/Portfolio1_tt52te.gif",
    originUrl: "https://codepen.io/jeyip/pen/yLyPRpa",
    id: 2,
  },
]

const WorkView = () => {
  return (
    <div className={cx(styles.workViewContainer, "workViewContainer")}>
      <div style={{ marginBottom: "30px" }}>
        <Header text="WORK" />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {workSamples.map(({ id, thumbnailUrl, originUrl }) => (
          <div key={id} style={{ marginBottom: "20px", marginRight: "30px" }}>
            <Tile originUrl={originUrl} thumbnailUrl={thumbnailUrl} key={id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default addDesktopLayout(WorkView)
