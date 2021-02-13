import React from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";

const DashboardPage = () => (
  <div className={styles.DashboardPage}>
    <CenteredContentWrapper>
      <h1> Discover </h1>
      <div className={styles.recognizeMusicButton}>Recognize Music</div>
    </CenteredContentWrapper>
  </div>
);

export default DashboardPage;
