import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import RF from "./images/rf.png";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Rafeh Qazi",
      username: "Clever program",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/34/ustv-prison-break-s01-e01-e02-2.jpg?resize=480:*",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={RF} />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Optional : Enter image URL"
          className="tweetBox__imageInput"
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
