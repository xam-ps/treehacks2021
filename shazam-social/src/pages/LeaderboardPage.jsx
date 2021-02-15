import { List } from "antd";
import React from "react";
import avatarJpg from "../assets/img/avatar.jpg";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import LeaderboardEntry from "../modules/LeaderboardEntry";
import Navigation from "../modules/Navigation";
import styles from "./PlaylistPage.module.scss";

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
  },
];

const LeaderboardPage = () => {
  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> LEADERBOARD </h1>
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
