import React from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import logoPng from "../assets/img/logo.png";
import styles from "./LandingPage.module.scss";
import { Button } from "antd";
import { useHistory } from "react-router";

const LandingPage = () => {
  const history = useHistory();
  return (
    <div className={styles.LandingPage}>
      <CenteredContentWrapper>
        <h1> DiMuTo </h1>
        <img className={styles.logo} src={logoPng} alt="" />
        <br />
        <Button
          type="primary"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </Button>
      </CenteredContentWrapper>
    </div>
  );
};

export default LandingPage;
