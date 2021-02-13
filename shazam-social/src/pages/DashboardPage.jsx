import { Button, DatePicker } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";
import recordSvg from "../assets/img/audio.svg";

class DashboardPage extends Component {
  render() {
    const {history} = this.props;
    return (
      <div className={styles.DashboardPage}>
        <CenteredContentWrapper fullscreen={true}>
          <h1> Discover </h1>
          <div className={styles.recognizeMusicButton}>
            <img src={recordSvg} alt="" />
          </div>
          <Button
            className={styles.playlistButton}
            onClick={() => {
              if(history){history.push("/playlist")};
            }}
          >
            PL
          </Button>
        </CenteredContentWrapper>
      </div>
    );
  }
};

export default DashboardPage;
