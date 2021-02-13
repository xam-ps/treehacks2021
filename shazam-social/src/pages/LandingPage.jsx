import React from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import logoPng from "../assets/img/logo.png";
import styles from "./LandingPage.module.scss";

const LandingPage = () => (
  <CenteredContentWrapper>
    <div className={styles.LandingPage}>
      <h1> DiMuTo </h1>
      <img className={styles.logo} src={logoPng} alt="" />
    </div>
  </CenteredContentWrapper>
);

export default LandingPage;
