import { Button, List, Avatar } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import PlaylistEntry from "../modules/PlaylistEntry";
import styles from "./PlaylistPage.module.scss";
import albumCoverJpg from "../assets/img/cover.jpg";
import avatarJpg from "../assets/img/avatar.jpg";
import Navigation from "../modules/Navigation";
import LeaderboardEntry from "../modules/LeaderboardEntry";

const data = [
  {
    name: "Friend 1",
    score: 941,
    avatar: avatarJpg,
  },
  {
    name: "Friend 2",
    score: 745,
    avatar: avatarJpg,
  },
  {
    name: "Long Name - there is always one friend with a really long name",
    score: 569,
    avatar: avatarJpg,
  }
];

const LeaderboardPage = () => {
  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> Shared Playlist </h1>
        <div className={styles.scrollContainer}>
          <List
            itemLayout="horizontal"
            size="large"
            dataSource={data}
            renderItem={(item) => <LeaderboardEntry data={item} />}
          />
        </div>
      </CenteredContentWrapper>
      <Navigation />
    </div>
  );
};

export default LeaderboardPage;
