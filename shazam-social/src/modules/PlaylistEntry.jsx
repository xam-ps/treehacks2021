import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
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
        <p className={styles.discoveredText}>First discovered:</p>
        <p className={styles.discoveredDate}>{props.data.firstDate}</p>
        <Avatar
          className={styles.avatar}
          size={36}
          icon={<UserOutlined />}
          src={props.data.avatar}
        />
      </div>
    </div>
  );
};

export default PlaylistEntry;
