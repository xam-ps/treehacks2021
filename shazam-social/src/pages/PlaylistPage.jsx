import { Button, List, Avatar } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import CenteredContentWrapper from "../modules/CenteredContentWrapper";
import PlaylistEntry from "../modules/PlaylistEntry";
import styles from "./PlaylistPage.module.scss";
import albumCoverJpg from "../assets/img/cover.jpg"
import avatarJpg from "../assets/img/avatar.jpg"

const data = [
  {
    title: "Ant Design Title 1",
    artist: "Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg
  },
  {
    title: "Ant Design Title 2",
    artist: "Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg
  },
  {
    title: "Ant Design Title 3",
    artist: "Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg
  },
  {
    title: "Ant Design Title 4 Ant Design Title 4 Ant Design Title 4 Ant Design Title 4",
    artist: "Tash Sultana Tash Sultana Tash Sultana Tash Sultana Tash Sultana",
    firstDate: "01/12/2021",
    avatar: avatarJpg,
    imgSrc: albumCoverJpg
  },
];

const PlaylistPage = () => {
  const history = useHistory();
  return (
    <div className={styles.PlaylistPage}>
      <CenteredContentWrapper fullscreen={true}>
        <h1> Shared Playlist </h1>
        <List
          itemLayout="horizontal"
          size='large'
          dataSource={data}
          renderItem={(item) => (
              <PlaylistEntry data={item}/>
          )}
        />
        <Button
          className={styles.playlistButton}
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Dashboard
        </Button>
      </CenteredContentWrapper>
    </div>
  );
};

export default PlaylistPage;
