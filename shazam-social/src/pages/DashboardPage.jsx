import React, { Component } from "react";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import styles from "./DashboardPage.module.scss";
import recordSvg from "../assets/img/audio.svg";
import startRecordingSvg from "../assets/img/soundwave.svg";
import Navigation from "../modules/Navigation";
import MicRecorder from "mic-recorder-to-mp3";

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

  stopRecording() {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // do what ever you want with buffer and blob
        // Example: Create a mp3 file and play
        const file = new File(buffer, "recognize.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        });

        const player = new Audio(URL.createObjectURL(file));
        player.play();
      })
      .catch((e) => {
        alert("We could not retrieve your message");
        console.log(e);
      });
      this.setState({ isRecording: false });
  }
}

export default DashboardPage;
