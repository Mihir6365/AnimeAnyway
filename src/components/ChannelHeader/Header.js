import React from "react";
import './HeaderStyle.css';

export default function Header() {


  return (
    <>
      <a href="https://animeanyway.me"
        className="channelHeader"
        style={{
          backgroundSize: "cover"
        }}
      >
        <div className="channelName">
          <h1>
            Classroom Of The Elite Fan Translations
          </h1>
        </div>
        <div className="homebtn">
          {/* <KeyboardBackspaceIcon className="backBtn"/> Back to home */}
          <img src="./icons8-home.svg" alt="homebtn" />
        </div>
      </a>
      <br />
      <br />
      <br />
    </>
  );
} 