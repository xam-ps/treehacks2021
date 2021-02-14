import React, { Component } from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";
import recordSvg from "../assets/img/audio.svg";
import startRecordingSvg from "../assets/img/soundwave.svg";
import groupSvg from "../assets/img/group.svg";
import historySvg from "../assets/img/history.svg";
import Navigation from "../modules/Navigation";
import MicRecorder from "mic-recorder-to-mp3";
import firebase from "firebase";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";

const baseDomain = "http://localhost:5000";
const recorder = new MicRecorder({
  bitRate: 128,
});

class DashboardPage extends Component {
  state = {
    isRecording: false,
  };

  render() {
    const { history } = this.props;
    return (
      <div className={styles.DashboardPage}>
        <CenteredContentWrapper fullscreen={true}>
          <h1> Discover </h1>
          <div className={styles.verticalCenter}>
            <div className={styles.userAndGroups}>
              <Avatar
                className={styles.avatar}
                size={50}
                icon={<UserOutlined />}
                src={firebase.auth().currentUser.photoURL}
                title={firebase.auth().currentUser.displayName}
              />
              <div className={styles.createGroup}>
                <img src={groupSvg} alt="Group icon" />
              </div>
            </div>
            <div
              className={styles.recognizeMusicButton}
              onClick={() => {
                this.state.isRecording
                  ? this.stopRecording()
                  : this.startRecording();
              }}
            >
              <img src={startRecordingSvg} alt="" />
            </div>
            <div className={styles.myHistory}>
              <div>
                <img src={historySvg} alt="History icon" />
              </div>
            </div>
          </div>
        </CenteredContentWrapper>
        <Navigation />
      </div>
    );
  }

  startRecording() {
    recorder
      .start()
      .then(() => {
        // something else
      })
      .catch((e) => {
        console.error(e);
      });
    this.setState({ isRecording: true });
  }

  async stopRecording() {
    recorder
      .stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, "recognize.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        const formData = new FormData();
        formData.append("audioFile", file);
        const response = await fetch(`${baseDomain}/search-sound`, {
          method: "POST",
          body: formData,
        });
        const songData = await response.json();
        let jsonStructure = songData.metadata.music;
        var resJson = {
          id: jsonStructure[0].acrid,
          title: jsonStructure[0].title,
          artist: jsonStructure[0].artists[0].name,
          album: jsonStructure[0].album.name,
          email: firebase.auth().currentUser.email,
        };
        console.log(resJson);
        const responseStoreSong = await fetch(`${baseDomain}/songs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resJson),
        });
      })
      .catch((e) => {
        console.log(e);
      });
    this.setState({ isRecording: false });
  }
}

export default DashboardPage;
