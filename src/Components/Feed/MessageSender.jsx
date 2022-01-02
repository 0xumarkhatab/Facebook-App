import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import { IconButton } from "@mui/material";
import { Videocam } from "@mui/icons-material";
import { PhotoLibrary } from "@mui/icons-material";
import { InsertEmoticon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { collection, addDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import db from "../../Firebase";

function MessageSender() {
  const user = useSelector((state) => state.user);

  const [Message, setMessage] = useState(null);
  const [Image, setImage] = useState(null);

  const messageSubmitter = (e) => {
    e.preventDefault();
    const docData = {
      profileSrc: user.photoURL,

      username: user.displayName,
      message: Message,
      image: Image,
      timestamp: Timestamp.now(),
    };

    console.log("the object is \n", docData);

    async function setDOCS() {
      await addDoc(collection(db, "posts"), docData);
    }

    setDOCS();
    setMessage(null);
    setImage(null);
  };
  return (
    <div className="messageSender">
      <form className="messageSender__top" onSubmit={messageSubmitter}>
        <IconButton>
          <Avatar src={user.photoURL} />
        </IconButton>

        <input
          className="messageSender__input messageSender__input__message "
          placeholder={Message ? Message : "What's on Your Mind?"}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          className="messageSender__input messageSender__input__image "
          placeholder={Image ? Image : "Image URL (optional)"}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="hidden">Submit Post</button>
      </form>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
