import React from "react"

import styles from "./tile.module.css"

const Tile = ({ thumbnailUrl, originUrl }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {/* <div className={styles.overlay}>Animated Loading Spinner</div> */}
        <a href={originUrl}>
          <img src={thumbnailUrl}></img>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Tile
