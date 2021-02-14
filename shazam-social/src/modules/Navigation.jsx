import React from "react";
import styles from "./Navigation.module.scss";
import { useHistory } from "react-router";
import { Button } from "antd";
import notificationSvg from "../assets/img/notification.svg";
import playlistSvg from "../assets/img/playlist.svg";
import discoverySvg from "../assets/img/discovery.svg";
import leaderboardSvg from "../assets/img/leaderboard.svg";

const Navigation = () => {
  const history = useHistory();
  return (
    <div className={styles.navigation}>
      <div>
        <Button
          type="link"
          onClick={() => {
            history.push("/notifications");
          }}
        >
          <img src={notificationSvg} alt="Notification bell" />
          <p>Notifications</p>
        </Button>
        <Button
          type="link"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          <img src={discoverySvg} alt="Compas" />
          <p>Discover</p>
        </Button>
        <Button
          type="link"
          onClick={() => {
            history.push("/leaderboard");
          }}
        >
          <img src={leaderboardSvg} alt="Leaderboard" />
          <p>Leaderboard</p>
        </Button>
        <Button
          type="link"
          onClick={() => {
            history.push("/playlist");
          }}
        >
          <img src={playlistSvg} alt="Playlist icon" />
          <p>Playlist</p>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
