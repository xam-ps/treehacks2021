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
import RecognizedSong from "../modules/RecognizedSong";
import SongHistory from "../modules/SongHistory";

const baseDomain = "https://us-central1-treehacks2021.cloudfunctions.net/song";
const recorder = new MicRecorder({
  bitRate: 128,
});

class DashboardPage extends Component {
  state = {
    isRecording: false,
    isModalOpen: false,
    isHistoryOpen: false,
  };

  constructor(props) {
    super(props);
    this.song = null;
  }

  render() {
    const { history } = this.props;
    let photoURL = null;
    let displayName = null;
    try {
      photoURL = firebase.auth().currentUser.photoURL;
      displayName = firebase.auth().currentUser.displayName;
    } catch (e) {
      console.log(e);
    }
    return (
      <div className={styles.DashboardPage}>
        <CenteredContentWrapper fullscreen={true}>
          <h1> Discover </h1>
          {this.state.isModalOpen ? (
            <RecognizedSong
              data={this.song}
              close={() => {
                this.setState({ isModalOpen: false });
              }}
            />
          ) : (
            <p></p>
          )}
          {this.state.isHistoryOpen ? (
            <SongHistory
              close={() => {
                this.setState({ isHistoryOpen: false });
              }}
            />
          ) : (
            <p></p>
          )}
          <div className={styles.verticalCenter}>
            <div className={styles.userAndGroups}>
              <Avatar
                className={styles.avatar}
                size={50}
                icon={<UserOutlined />}
                src={photoURL}
                title={displayName}
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
              {this.state.isRecording ? (
                <img src={recordSvg} alt="recording animation" />
              ) : (
                <img src={startRecordingSvg} alt="audio waveform" />
              )}
            </div>
            <div className={styles.myHistory}>
              <div
                onClick={() => {
                  this.setState({ isHistoryOpen: true });
                }}
              >
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
        setTimeout(() => {
          this.stopRecording();
        }, 12000);
      })
      .catch((e) => {
        console.error(e);
      });
    this.setState({ isRecording: true });
  }

  async stopRecording() {
    if (this.state.isRecording) {
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
          const response = await fetch(`${baseDomain}/search-sound/`, {
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
          this.song = resJson;
          this.setState({ isModalOpen: true });
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
          var resJson = {
            title: "I don't know",
            artist: "not found - sorry 😢",
          };
          this.song = resJson;
          this.setState({ isModalOpen: true });
        });
      this.setState({ isRecording: false });
    }
  }
}

export default DashboardPage;
