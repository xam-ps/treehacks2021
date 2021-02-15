import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router";
import logoSvg from "../assets/img/logo.svg";
import SoMuDiSvg from "../assets/img/SocialMusicDiscovery.svg";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className={styles.LandingPage}>
      <CenteredContentWrapper fullscreen={true}>
        <img className={styles.logo} src={logoSvg} alt="Logo in waveform" />
        <div className={styles.slogan}>
          <img src={SoMuDiSvg} alt="" />
        </div>
        <br />
        <div className={styles.loginButton}>
          <Button
            type="primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
        </div>
      </CenteredContentWrapper>
    </div>
  );
};

export default LandingPage;
