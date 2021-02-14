import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./LeaderboardEntry.module.scss";

const LeaderboardEntry = (props) => {
  return (
    <div className={styles.playlistEntry}>
      <div className={styles.coverWrapper}>
        <Avatar
          className={styles.avatar}
          size={80}
          icon={<UserOutlined />}
          src={props.data.avatar}
        />
      </div>
      <div className={styles.person}>
        <h3>{props.data.name}</h3>
        <div className={styles.score}>{`${props.data.score} p`}</div>
      </div>
    </div>
  );
};

export default LeaderboardEntry;
