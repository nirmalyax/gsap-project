import React from "react";
import "./Homestyle.css"

export default function () {
  return (
    <>
      <video
        id="back_video"
        src="src/assets/37b070b4.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        className="video"
        style={{
          position: "relative",
          width: "100%",
          height: "90%",
          zIndex: "0",
        }}
      />
      <div className="body" style={{
      }}>
       <div className="left">
        <h1>aNythiNg</h1>
        <h1>wOrth hAving</h1>
        <h1>TakEs &nbsp; thiS</h1>
       </div>
      </div>
    </>
  );
}
