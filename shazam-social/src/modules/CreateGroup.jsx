import React from "react";
import styles from "./CreateGroup.module.scss";
import closeSvg from "../assets/img/close-dark.svg";
import { Button, Input, List } from "antd";
import TextArea from "antd/lib/input/TextArea";

const CreateGroup = (props) => {
  return (
    <div className={styles.createGroup}>
      <div className={styles.closeButton}>
        <img
          src={closeSvg}
          alt="close button"
          onClick={() => {
            props.close();
          }}
        />
      </div>
      <h2>Create Group</h2>
      <Input placeholder="Groupname" />
      <TextArea
        placeholder="Email Addresses (use comma separation please ;))"
        rows={4}
      />
      <Button type="primary" size={'large'}>Primary</Button>
    </div>
  );
};

export default CreateGroup;
