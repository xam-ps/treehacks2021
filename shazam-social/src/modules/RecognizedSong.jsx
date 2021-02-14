import React from "react";
import styles from "./RecognizedSong.module.scss";
import closeSvg from "../assets/img/close.svg";

const RecognizedSong = (props) => {
  return (
    <div className={styles.song}>
      <div className={styles.closeButton}>
        <img src={closeSvg} alt="close button" onClick={() => {props.close()}} />
      </div>
      <h2>{props.data.title}</h2>
      <p>by</p>
      <h2>{props.data.artist}</h2>
    </div>
  );
};

export default RecognizedSong;
