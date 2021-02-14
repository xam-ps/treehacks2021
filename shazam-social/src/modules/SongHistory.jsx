import React from "react";
import styles from "./SongHistory.module.scss";
import closeSvg from "../assets/img/close.svg";
import albumCoverJpg from "../assets/img/cover.jpg";
import avatarJpg from "../assets/img/avatar.jpg";
import { List } from "antd";
import firebase from "firebase";
import  { useEffect, useState } from "react";

const data = [
  {
    title: "Jungle",
    artist: "Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg,
  },
  {
    title: "Test",
    artist: "Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg,
  },
];

const SongHistory = (props) => {
  const [data, setData] = useState([]);

  useEffect(async ()=> {
    const baseDomain = "https://us-central1-treehacks2021.cloudfunctions.net";
    let email =  firebase.auth().currentUser.email;
    const response = await fetch(`${baseDomain}/getUserSongs/${email}`, {
      method: "GET"
    });
    const data = await response.json();
    setData(data);
  },
  [] )


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
      <h2>Song History</h2>
      <List
        itemLayout="horizontal"
        size="large"
        dataSource={data}
        renderItem={(item) => <div><h2>{item.title}</h2></div>}
      />
    </div>
  );
};

export default SongHistory;
