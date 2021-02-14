import React, { Component } from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";
import recordSvg from "../assets/img/audio.svg";
import startRecordingSvg from "../assets/img/soundwave.svg";
import Navigation from "../modules/Navigation";
import MicRecorder from "mic-recorder-to-mp3";
import firebase from "firebase";

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
        let jsonStructure = songData.metadata.music[0];
        var resJson = {
          id: jsonStructure.acrid,
          title: jsonStructure.title,
          artist: jsonStructure.artists[0].name,
          album: jsonStructure.album.name,
          email: firebase.auth().currentUser.email,
        };
        console.log(resJson);
        const responseStoreSong = await fetch(`${baseDomain}/songs`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: resJson,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    this.setState({ isRecording: false });
  }
}

export default DashboardPage;
