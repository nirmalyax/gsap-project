import React, { useRef, useEffect } from "react";
import "./Homestyle.css"
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function () {

  const blur = useRef();
  useEffect(() => {
    gsap.to([blur.current], {
      opacity: "100%",
      ease: "power3.out",
      duration: 5,
    });
  });

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
      <div className="body">
       <div className="left" ref={blur}>
        <h1>aNythiNg</h1>
        <h1>wOrth hAving</h1>
        <h1>TakEs <img src="src/assets/om.png" alt="" style={{
          width:"120px",
          height:"120px",
        }} /> thiS.</h1>
       </div>
      </div>
      <div className="motion">
          <div className="border"></div>
          <p>
            neither too long nor overly complicated. &nbsp; neither too long nor overly complicated. &nbsp;
          </p>
          <p>
            neither too long nor overly complicated. &nbsp; neither too long nor overly complicated. &nbsp;
          </p>
          <div className="border"></div>
       </div>
    </>
  );
}
