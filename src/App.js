import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>

        <div className="bio">Welcome to our community</div>

        <button className="waveButton" onClick={wave}>
          Wave at Us
        </button>
      </div>
    </div>
  );
}
