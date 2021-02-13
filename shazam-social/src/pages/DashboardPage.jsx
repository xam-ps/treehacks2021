import { Button, DatePicker } from "antd";
import React from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";
import { useHistory } from "react-router";

const DashboardPage = () => {
  const history = useHistory();
  return (
    <div className={styles.DashboardPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> Discover </h1>
        <div className={styles.recognizeMusicButton}>Recognize Music</div>
        <Button
          className={styles.playlistButton}
          onClick={() => {
            history.push("/playlist");
          }}
        >
          PL
        </Button>
      </CenteredContentWrapper>
    </div>
  );
};

export default DashboardPage;
