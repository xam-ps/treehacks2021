import React from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import logoPng from "../assets/img/logo.png";
import styles from "./LandingPage.module.scss";

const LandingPage = () => (
  <div className={styles.LandingPage}>
    <CenteredContentWrapper>
      <h1> DiMuTo </h1>
      <img className={styles.logo} src={logoPng} alt="" />
    </CenteredContentWrapper>
  </div>
);

export default LandingPage;
