import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./PlaylistPage.module.scss";

const PlaylistPage = () => {
  const history = useHistory();
  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> Shared Playlist </h1>
        <Button
          className={styles.playlistButton}
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Dashboard
        </Button>
      </CenteredContentWrapper>
    </div>
  );
};

export default PlaylistPage;
