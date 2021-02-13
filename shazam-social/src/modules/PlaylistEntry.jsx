import React from "react";
import styles from "./PlaylistEntry.module.scss";

const PlaylistEntry = (props) => {
  return (
    <div className={styles.playlistEntry}>
      <div className={styles.coverWrapper}>
        <img src={props.data.imgSrc} alt="Song cover" />
      </div>
      <div className={styles.songData}>
        <h3>{props.data.title}</h3>
        <p className={styles.artist}>{props.data.artist}</p>
      </div>
    </div>
  );
};

export default PlaylistEntry;
