import React from "react"

import { addMobileLayout } from "@/utils/addLayout"
import Header from "@/components/LandingPage/shared/SectionHeader"
import Tile from "./Tile.js"

import styles from "./workSamples.module.css"

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
    id: 1,
  },
]

const WorkSamples = () => {
  return (
    <div className={styles.workSamplesContainer}>
      <div className={styles.headerContainer}>
        <Header text="WORK" />
      </div>
      <div className={styles.tilesContainer}>
        {workSamples.map(({ originUrl, thumbnailUrl, id }) => (
          <div key={id} className={styles.tileContainer}>
            <Tile originUrl={originUrl} thumbnailUrl={thumbnailUrl} key={id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default addMobileLayout(WorkSamples)
