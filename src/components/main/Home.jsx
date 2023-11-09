import React, { useRef, useEffect } from "react";
import "./Homestyle.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function () {
  const info = useRef();
  useEffect(() => {
    const el = info.current;
    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          scrub:"true",
          trigger: el,
          markers: false,
        },
      }
    );
  }, []);

  const info1 = useRef();
  useEffect(() => {
    const el = info1.current;
    gsap.fromTo(
      el,
      { scale: 0 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          scrub:"true",
          trigger: el,
          markers: false,
        },
      }
    );
  }, []);

  const blur = useRef();
  useEffect(() => {
    gsap.to([blur.current], {
      //opacity: "100%",
      filter: "blur(15px)",
      ease: "power3.out",
      duration:9,
      scrollTrigger: {
        trigger: blur.current,
        start: "490px center", 
        filter: "blur(25px)",
        scrub: 2,
        // start: "top 150px",
         end: "top 50px",
        markers: true,
      },
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
          <h1>
            TakEs{" "}
            <img
              src="src/assets/om.png"
              alt=""
              style={{
                width: "120px",
                height: "120px",
              }}
            />{" "}
            thiS.
          </h1>
        </div>
      </div>
      <div className="motion">
        <div className="border"></div>
        <p>
          neither too long nor overly complicated. &nbsp; neither too long nor
          overly complicated. &nbsp;
        </p>
        <p>
          neither too long nor overly complicated. &nbsp; neither too long nor
          overly complicated. &nbsp;
        </p>
        <div className="border"></div>
      </div>
      <div className="info" ref={info1}>
        <h1>
          “Karmanye Vadhikaraste, Ma Phaleshu Kadachana” (Chapter 2, Verse 47){" "}
          <br />
          This Shloka means “You have the right to perform your actions, but you
          are not entitled to the fruits of your actions.” This indicates that
          we should concentrate on doing our jobs without thinking about the
          outcome. This can help us discover inner peace by detaching ourselves
          from the outcomes and focusing on what has to be done.
        </h1>
      </div>
      <div className="info" ref={info}>
        <h1>
          “Karmanye Vadhikaraste, Ma Phaleshu Kadachana” (Chapter 2, Verse 47){" "}
          <br />
          This Shloka means “You have the right to perform your actions, but you
          are not entitled to the fruits of your actions.” This indicates that
          we should concentrate on doing our jobs without thinking about the
          outcome. This can help us discover inner peace by detaching ourselves
          from the outcomes and focusing on what has to be done.
        </h1>
      </div>
    </>
  );
}
