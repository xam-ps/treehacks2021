import { List } from "antd";
import firebase from "firebase";
import React, { useEffect, useState } from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import Navigation from "../modules/Navigation";
import PlaylistEntry from "../modules/PlaylistEntry";
import styles from "./PlaylistPage.module.scss";

const PlaylistPage = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const baseDomainDB = "https://shazamsocial12.wl.r.appspot.com";
    let email = firebase.auth().currentUser.email;
    const response = await fetch(
      `${baseDomainDB}/userGroupPlaylists/${email}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setData(data);
  }, []);

  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> SHARED PLAYLIST </h1>
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
