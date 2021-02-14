import { List } from "antd";
import React, { useEffect, useState } from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import PlaylistEntry from "../modules/PlaylistEntry";
import styles from "./PlaylistPage.module.scss";
import albumCoverJpg from "../assets/img/cover.jpg";
import avatarJpg from "../assets/img/avatar.jpg";
import Navigation from "../modules/Navigation";
import firebase from "firebase";

// const data = [
//   {
//     title: "Jungle",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title: "Ant Design Title 2",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title: "Ant Design Title 3",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title:
//       "Ant Design Title 4 Ant Design Title 4 Ant Design Title 4 Ant Design Title 4",
//     artist: "Tash Sultana Tash Sultana Tash Sultana Tash Sultana Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: null,
//     imgSrc: albumCoverJpg,
//   },{
//     title: "Jungle",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title: "Ant Design Title 2",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title: "Ant Design Title 3",
//     artist: "Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: avatarJpg,
//     imgSrc: albumCoverJpg,
//   },
//   {
//     title:
//       "Ant Design Title 4 Ant Design Title 4 Ant Design Title 4 Ant Design Title 4",
//     artist: "Tash Sultana Tash Sultana Tash Sultana Tash Sultana Tash Sultana",
//     firstDate: "01/12/2021",
//     avatar: null,
//     imgSrc: albumCoverJpg,
//   },
// ];

const PlaylistPage = () => {
  
  const [data, setData] = useState([]);

  useEffect(async ()=> {
    const baseDomain = "http://localhost:8080";
    let email =  firebase.auth().currentUser.email;
    const response = await fetch(`${baseDomain}/getUserSongs/${email}`, {
      method: "GET"
    });
    const data = await response.json();
    setData(data);
  },
  [] )

  

  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> Shared Playlist </h1>
        <div className={styles.scrollContainer}>
          <List
            itemLayout="horizontal"
            size="large"
            dataSource={data}
            renderItem={(item) => <PlaylistEntry data={item} />}
          />
        </div>
      </CenteredContentWrapper>
      <Navigation />
    </div>
  );
};

export default PlaylistPage;
