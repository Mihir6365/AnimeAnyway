import React from "react";
import { Link } from "react-router-dom";
import './HeaderStyle.css';

export default function Header() {


  return (
    <>
      <Link to="/"
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
      </Link>
      <br />
      <br />
      <br />
    </>
  );
} 