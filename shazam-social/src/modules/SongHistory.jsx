import { List } from "antd";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import avatarJpg from "../assets/img/avatar.jpg";
import closeSvg from "../assets/img/close.svg";
import albumCoverJpg from "../assets/img/cover.jpg";
import styles from "./SongHistory.module.scss";

const SongHistory = (props) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const baseDomainDB = "https://shazamsocial12.wl.r.appspot.com";
    let email = firebase.auth().currentUser.email;
    const response = await fetch(`${baseDomainDB}/getUserSongs/${email}`, {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div className={styles.songList}>
      <div className={styles.closeButton}>
        <img
          src={closeSvg}
          alt="close button"
          onClick={() => {
            props.close();
          }}
        />
      </div>
      <h2>My History</h2>
      <div className={styles.songs}>
        <List
          itemLayout="horizontal"
          size="large"
          dataSource={data}
          renderItem={(item) => (
            <div>
              <h3>{item.title}</h3>
              <hr/>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default SongHistory;
