import { Button, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import firebase from "firebase";
import React, { useState } from "react";
import closeSvg from "../assets/img/close-dark.svg";
import styles from "./CreateGroup.module.scss";

const baseDomainDB = "https://shazamsocial12.wl.r.appspot.com";

const CreateGroup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState([]);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const resJson = {
      groupName: name,
      admin: firebase.auth().currentUser.email,
      userEmail: email,
    };
    console.log(resJson);
    const responseStoreSong = await fetch(`${baseDomainDB}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resJson),
    });
  };
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
      <Input placeholder="Groupname" onChange={handleNameChange} />
      <TextArea
        placeholder="Email Addresses (use comma separation please ;))"
        rows={4}
        onChange={handleEmailChange}
      />
      <Button type="primary" size={"large"} onClick={handleSubmit}>
        Create Group
      </Button>
    </div>
  );
};

export default CreateGroup;
