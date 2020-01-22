import React from "react"

import styles from "./tile.module.css"

const Tile = ({ thumbnailUrl, originUrl }) => {
  return (
    <div className={styles.container}>
      <a href={originUrl}>
        <img src={thumbnailUrl}></img>
      </a>
    </div>
  )
}

export default Tile
