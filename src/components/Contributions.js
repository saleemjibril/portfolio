import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contributions = () => {
  // const titleRef = useRef(null);

  useLayoutEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contributions__title",
        invalidateOnRefresh: true,
        // markers: true
      },
    });

    tl.to(".contributions__title", {
      y: 2,
      opacity: 1,
      duration: 1,
    });
    tl.to(
      ".contributions__text",
      {
        y: 2,
        opacity: 1,
        duration: 1,
      },
      "-=0.8"
    );

    return () => tl.scrollTrigger.kill();
  }, []);

  return (
    <div className="contributions">
      <h3 className="contributions__title">CONTRIBUTIONS</h3>
      <h2 className="contributions__text">
        I have worked with clients on freelance and full-time basis. On projects
        ranging from{" "}
        <a href="https://closecarbon.com/" target="_blank" rel="noreferrer">
          <span className="link">an emission tracking application</span>
        </a>{" "}
        to <a href="https://surebanker.ai/" target="_blank" rel="noreferrer"><span className="link">a fintech banking solution</span></a>
      </h2>
    </div>
  );
};

export default Contributions;
